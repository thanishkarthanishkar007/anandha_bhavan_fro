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
    MONGODB_URI: str = os.getenv(
        "MONGODB_URI",
        "mongodb+srv://srenewaanandabavan_db_user:9597535555R@srenewaanandbavan.3cbwvyn.mongodb.net/?appName=srenewaanandbavan"
    )
    DATABASE_NAME: str = os.getenv("DATABASE_NAME", "srenewaanandbavan")
    
    # Resend Email Configuration (loaded from .env)
    RESEND_API_KEY: str = os.getenv("RESEND_API_KEY", "")
    ADMIN_EMAIL: str = os.getenv("ADMIN_EMAIL", "srenewaanandabavan@gmail.com")
    SENDER_EMAIL: str = os.getenv("SENDER_EMAIL", "Sre New Aananda Bavan <onboarding@resend.dev>")
    
    # Server & CORS
    PORT: int = int(os.getenv("PORT", "8000"))
    FRONTEND_URLS: list[str] = [
        url.strip() for url in os.getenv("FRONTEND_URL", "http://localhost:3000,http://localhost:3001").split(",") if url.strip()
    ]

settings = Settings()
