import base64
import json
import hmac
import hashlib
import time
from typing import Optional
from fastapi import APIRouter, HTTPException, Header, status
from pydantic import BaseModel, Field

from config import settings
from database import get_admin_collection

router = APIRouter(prefix="/api/auth", tags=["Admin Authentication"])

class LoginRequest(BaseModel):
    email: str = Field(..., description="Admin email address")
    password: str = Field(..., description="Admin password")

class UserInfo(BaseModel):
    email: str
    name: str
    role: str

class LoginResponse(BaseModel):
    success: bool
    token: str
    user: UserInfo

def b64url_encode(data: bytes) -> str:
    return base64.urlsafe_b64encode(data).rstrip(b"=").decode("ascii")

def b64url_decode(s: str) -> bytes:
    padding = 4 - (len(s) % 4)
    if padding != 4:
        s += "=" * padding
    return base64.urlsafe_b64decode(s.encode("ascii"))

def create_jwt_token(payload: dict, secret: str) -> str:
    header = {"alg": "HS256", "typ": "JWT"}
    header_b64 = b64url_encode(json.dumps(header, separators=(",", ":")).encode("utf-8"))
    payload_b64 = b64url_encode(json.dumps(payload, separators=(",", ":")).encode("utf-8"))
    message = f"{header_b64}.{payload_b64}".encode("utf-8")
    sig = hmac.new(secret.encode("utf-8"), message, hashlib.sha256).digest()
    sig_b64 = b64url_encode(sig)
    return f"{header_b64}.{payload_b64}.{sig_b64}"

def decode_jwt_token(token: str, secret: str) -> dict:
    parts = token.split(".")
    if len(parts) != 3:
        raise ValueError("Invalid token structure")
    header_b64, payload_b64, sig_b64 = parts
    message = f"{header_b64}.{payload_b64}".encode("utf-8")
    expected_sig = hmac.new(secret.encode("utf-8"), message, hashlib.sha256).digest()
    if not hmac.compare_digest(b64url_decode(sig_b64), expected_sig):
        raise ValueError("Invalid signature")
    payload = json.loads(b64url_decode(payload_b64).decode("utf-8"))
    if "exp" in payload and payload["exp"] < time.time():
        raise ValueError("Token expired")
    return payload

def verify_password(plain_password: str, salt: str, expected_hash: str) -> bool:
    try:
        calculated_hash = hashlib.pbkdf2_hmac(
            "sha256",
            plain_password.strip().encode("utf-8"),
            salt.encode("utf-8"),
            100000
        ).hex()
        return hmac.compare_digest(calculated_hash, expected_hash)
    except Exception:
        return False

@router.post("/login", response_model=LoginResponse)
def admin_login(payload: LoginRequest):
    clean_email = payload.email.strip().lower()
    clean_password = payload.password.strip()

    if not clean_email or not clean_password:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email and password are required."
        )

    try:
        admin_col = get_admin_collection()
        user_doc = admin_col.find_one({"email": clean_email})
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail=f"Database authentication error: {str(e)}"
        )

    if not user_doc or "password_hash" not in user_doc or "salt" not in user_doc:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password. Please verify credentials."
        )

    if not verify_password(clean_password, user_doc["salt"], user_doc["password_hash"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password. Please verify credentials."
        )

    # 7-day token expiration
    exp = int(time.time()) + (86400 * 7)
    token_claims = {
        "sub": user_doc["email"],
        "name": user_doc.get("name", "Administrator"),
        "role": user_doc.get("role", "Administrator"),
        "iat": int(time.time()),
        "exp": exp
    }

    token = create_jwt_token(token_claims, settings.JWT_SECRET)

    return LoginResponse(
        success=True,
        token=token,
        user=UserInfo(
            email=user_doc["email"],
            name=user_doc.get("name", "Sre New Aananda Bavan"),
            role=user_doc.get("role", "Administrator")
        )
    )

@router.get("/me")
def get_current_admin(authorization: Optional[str] = Header(None)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Missing or invalid authorization header."
        )

    token = authorization.split("Bearer ")[1].strip()
    try:
        claims = decode_jwt_token(token, settings.JWT_SECRET)
        return {
            "authenticated": True,
            "email": claims.get("sub"),
            "name": claims.get("name", "Administrator"),
            "role": claims.get("role", "Administrator")
        }
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Token validation failed: {str(e)}"
        )
