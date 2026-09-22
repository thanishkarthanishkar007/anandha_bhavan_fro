import os
from pathlib import Path
from dotenv import load_dotenv

# Load .env file from the backend directory
BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / ".env")

class Settings:
    PROJECT_NAME: str = "Sre New Aananda Bavan Backend API"
    VERSION: str = "1.0.0"
    
    # MongoDB Configuration
    MONGODB_URI: str = os.getenv("MONGODB_URI", "")
    DATABASE_NAME: str = os.getenv("DATABASE_NAME", "srenewaanandbavan")
    
    # JWT Authentication
    JWT_SECRET: str = os.getenv("JWT_SECRET", "sre_new_aananda_bavan_jwt_secret_2026")
    
    # Resend Email Configuration
    RESEND_API_KEY: str = os.getenv("RESEND_API_KEY", "")
    ADMIN_EMAIL: str = os.getenv("ADMIN_EMAIL", "srenewaanandabavan@gmail.com")
    SENDER_EMAIL: str = os.getenv("SENDER_EMAIL", "Sre New Aananda Bavan <onboarding@resend.dev>")
    
    # Server & CORS
    PORT: int = int(os.getenv("PORT", "8000"))
    FRONTEND_URLS: list[str] = [
        url.strip() for url in os.getenv(
            "FRONTEND_URL",
            "https://srenewaanandabavan.com,https://www.srenewaanandabavan.com,https://anandha-bhavan-fro.vercel.app,http://localhost:3000,http://localhost:3001"
        ).split(",") if url.strip()
    ]

settings = Settings()
