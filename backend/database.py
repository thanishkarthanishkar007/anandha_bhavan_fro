import logging
from pymongo import MongoClient
from pymongo.database import Database
from pymongo.collection import Collection
from config import settings

logger = logging.getLogger(__name__)

client: MongoClient | None = None
db: Database | None = None

def get_database() -> Database:
    global client, db
    if db is None:
        try:
            logger.info("Connecting to MongoDB Atlas...")
            client = MongoClient(settings.MONGODB_URI, serverSelectionTimeoutMS=8000)
            # Verify the connection
            client.admin.command("ping")
            db = client[settings.DATABASE_NAME]
            logger.info(f"Successfully connected to MongoDB Atlas database '{settings.DATABASE_NAME}'")
        except Exception as e:
            logger.error(f"Failed to connect to MongoDB Atlas: {e}")
            raise e
    return db

def get_contact_collection() -> Collection:
    database = get_database()
    return database["contact_submissions"]

def get_reservations_collection() -> Collection:
    database = get_database()
    return database["reservations"]

def get_menu_collection() -> Collection:
    database = get_database()
    return database["menu_items"]

def get_settings_collection() -> Collection:
    database = get_database()
    return database["restaurant_settings"]

def ping_db() -> bool:
    try:
        database = get_database()
        database.command("ping")
        return True
    except Exception as e:
        logger.error(f"MongoDB ping failed: {e}")
        return False
