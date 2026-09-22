import os
import logging
from datetime import datetime, timezone
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from config import settings
from database import ping_db, get_database, get_admin_collection, get_settings_collection
from routers import contact, reservations, menu, auth, settings as settings_router

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s"
)
logger = logging.getLogger(__name__)

@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("Starting up Sre New Aananda Bavan Backend...")
    # Verify MongoDB connection on startup
    db_ok = ping_db()
    if db_ok:
        logger.info("MongoDB Atlas connection verified on startup!")
        try:
            # Ensure admin collection is initialized
            admin_col = get_admin_collection()
            if admin_col.count_documents({}) == 0:
                admin_pass = os.getenv("ADMIN_PASSWORD")
                if admin_pass:
                    import hashlib, secrets
                    salt = secrets.token_hex(16)
                    pw_hash = hashlib.pbkdf2_hmac("sha256", admin_pass.encode("utf-8"), salt.encode("utf-8"), 100000).hex()
                    admin_col.insert_one({
                        "email": settings.ADMIN_EMAIL,
                        "password_hash": pw_hash,
                        "salt": salt,
                        "name": "Sre New Aananda Bavan Admin",
                        "role": "Administrator",
                        "created_at": datetime.now(timezone.utc).isoformat()
                    })
                    logger.info("Initialized default administrator account in MongoDB Atlas.")

            # Ensure default restaurant settings exist
            settings_col = get_settings_collection()
            if not settings_col.find_one({"_id": "global_restaurant_settings"}):
                settings_col.insert_one({
                    "_id": "global_restaurant_settings",
                    "name": "Sre New Aananda Bavan",
                    "tagline": "Pure Veg A/C Restaurant",
                    "subTagline": "Pure Vegetarian Family Restaurant",
                    "logo": "/images/navbar-logo.png",
                    "brandImage": "/images/navbar-brand.png",
                    "address": "Bangalore to Salem Byepass, NH 44, opposite to Government Higher Secondary School, Poosaripatty, Omalur, Salem, Tamil Nadu 636305",
                    "landmark": "Opposite to Government Higher Secondary School, Poosaripatty",
                    "phone": "63833 12948",
                    "phoneRaw": "+916383312948",
                    "whatsapp": "86755 35555",
                    "whatsappRaw": "+918675535555",
                    "email": "srenewaanandabavan@gmail.com",
                    "operatingHours": "06:30 AM – 10:45 PM (All 7 Days)",
                    "mornTiffin": "06:30 AM – 11:30 AM",
                    "royalLunch": "12:00 PM – 03:30 PM",
                    "dinnerTiffin": "05:30 PM – 10:30 PM",
                    "mapsEmbedUrl": "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2017.8807760691552!2d78.0664093377075!3d11.845825643645435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1789711781336!5m2!1sen!2sin",
                    "instagramUrl": "https://www.instagram.com/srenewaanandabavan?stkn=N29pdGxkcnAxdjc3",
                    "facebookUrl": "https://www.facebook.com/profile.php?id=61594584594104",
                    "youtubeUrl": "http://www.youtube.com/@SreNewAanandaBavan",
                    "updated_at": datetime.now(timezone.utc).isoformat()
                })
                logger.info("Initialized default restaurant settings in MongoDB Atlas.")
        except Exception as e:
            logger.warning(f"Database initialization check warning: {e}")
    else:
        logger.warning("MongoDB Atlas connection could not be established on startup.")
    yield
    logger.info("Shutting down Sre New Aananda Bavan Backend...")

app = FastAPI(
    title="Sre New Aananda Bavan - Restaurant API",
    description="Python FastAPI backend for Sre New Aananda Bavan restaurant with MongoDB Atlas, secure admin auth, and Resend email service.",
    version=settings.VERSION,
    lifespan=lifespan,
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS Configuration for Live Website, Vercel Previews, and Admin Panel
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.FRONTEND_URLS,
    allow_origin_regex=r"^https://([a-zA-Z0-9_-]+\.)?vercel\.app$",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount Routers
app.include_router(auth.router)
app.include_router(contact.router)
app.include_router(reservations.router)
app.include_router(menu.router)
app.include_router(settings_router.router)

@app.get("/", tags=["Health"])
def root():
    return {
        "restaurant": "Sre New Aananda Bavan",
        "service": "Python FastAPI Backend",
        "version": settings.VERSION,
        "docs_url": "/docs",
        "status": "online"
    }

@app.get("/api/health", tags=["Health"])
def health_check():
    db_status = ping_db()
    return {
        "status": "healthy" if db_status else "degraded",
        "database": "connected" if db_status else "disconnected",
        "database_name": settings.DATABASE_NAME,
        "resend_email_configured": bool(settings.RESEND_API_KEY and settings.ADMIN_EMAIL),
        "admin_email": settings.ADMIN_EMAIL,
        "timestamp": datetime.now(timezone.utc).isoformat()
    }

if __name__ == "__main__":
    port = int(os.environ.get("PORT", settings.PORT))
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=port
    )
