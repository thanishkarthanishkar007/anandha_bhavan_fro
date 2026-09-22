import os
import logging
from datetime import datetime, timezone
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from config import settings
from database import ping_db, get_database
from routers import contact, reservations, menu

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
    else:
        logger.warning("MongoDB Atlas connection could not be established on startup.")
    yield
    logger.info("Shutting down Sre New Aananda Bavan Backend...")

app = FastAPI(
    title="Sre New Aananda Bavan - Restaurant API",
    description="Python FastAPI backend for Sre New Aananda Bavan restaurant with MongoDB Atlas and Resend Email Service.",
    version=settings.VERSION,
    lifespan=lifespan,
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS Middleware for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins for easy development and testing
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount Routers
app.include_router(contact.router)
app.include_router(reservations.router)
app.include_router(menu.router)

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
