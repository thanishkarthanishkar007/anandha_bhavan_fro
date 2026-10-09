"""
In-Memory Rate Limiting & Protection Service
Provides sliding-window rate limiting per client IP to protect against abuse and DDoS.
"""
import time
import threading
from typing import Dict, List, Tuple
from fastapi import Request, HTTPException, status
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import JSONResponse

class RateLimiter:
    def __init__(self):
        # Maps (ip, route_type) -> list of timestamp floats
        self._requests: Dict[Tuple[str, str], List[float]] = {}
        self._lock = threading.Lock()
        self._last_cleanup = time.time()

    def _cleanup_old_records(self, now: float):
        """Remove entries older than 120 seconds to prevent memory leaks."""
        if now - self._last_cleanup < 60:
            return
        self._last_cleanup = now
        cutoff = now - 120
        keys_to_remove = []
        for key, timestamps in self._requests.items():
            self._requests[key] = [ts for ts in timestamps if ts > cutoff]
            if not self._requests[key]:
                keys_to_remove.append(key)
        for key in keys_to_remove:
            del self._requests[key]

    def check_rate_limit(self, ip: str, bucket: str, max_requests: int, window_seconds: int = 60) -> Tuple[bool, int]:
        """
        Returns (is_allowed, remaining_requests).
        """
        now = time.time()
        with self._lock:
            self._cleanup_old_records(now)
            key = (ip, bucket)
            timestamps = self._requests.get(key, [])
            cutoff = now - window_seconds
            valid_timestamps = [ts for ts in timestamps if ts > cutoff]

            if len(valid_timestamps) >= max_requests:
                self._requests[key] = valid_timestamps
                return False, 0

            valid_timestamps.append(now)
            self._requests[key] = valid_timestamps
            remaining = max_requests - len(valid_timestamps)
            return True, remaining

limiter = RateLimiter()

def get_client_ip(request: Request) -> str:
    forwarded = request.headers.get("x-forwarded-for")
    if forwarded:
        return forwarded.split(",")[0].strip()
    return request.client.host if request.client else "127.0.0.1"

class RateLimitMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        # Skip rate limiting for static docs and health checks
        path = request.url.path
        if path in ["/api/health", "/", "/docs", "/redoc", "/openapi.json"] or path.startswith("/_next"):
            return await call_next(request)

        ip = get_client_ip(request)
        method = request.method.upper()

        # Route-specific rate limits
        if path == "/api/auth/login" and method == "POST":
            allowed, remaining = limiter.check_rate_limit(ip, "auth_login", max_requests=10, window_seconds=60)
            if not allowed:
                return JSONResponse(
                    status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                    content={"detail": "Too many login attempts. Please wait 1 minute before trying again."},
                    headers={"Retry-After": "60"}
                )
        elif path in ["/api/contact", "/api/reservations", "/api/privacy/request"] and method == "POST":
            allowed, remaining = limiter.check_rate_limit(ip, "form_submission", max_requests=12, window_seconds=60)
            if not allowed:
                return JSONResponse(
                    status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                    content={"detail": "Too many submissions received. Please wait a minute before submitting again."},
                    headers={"Retry-After": "60"}
                )
        else:
            # General API traffic limit: 120 requests per minute
            allowed, remaining = limiter.check_rate_limit(ip, "api_general", max_requests=120, window_seconds=60)
            if not allowed:
                return JSONResponse(
                    status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                    content={"detail": "API rate limit reached. Please reduce request frequency."},
                    headers={"Retry-After": "60"}
                )

        response = await call_next(request)
        return response
