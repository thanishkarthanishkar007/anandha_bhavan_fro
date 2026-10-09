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
            logger.info("Connecting to MongoDB Atlas with optimized connection pooling...")
            client = MongoClient(
                settings.MONGODB_URI,
                maxPoolSize=50,
                minPoolSize=5,
                maxIdleTimeMS=45000,
                connectTimeoutMS=5000,
                socketTimeoutMS=10000,
                serverSelectionTimeoutMS=5000,
                retryWrites=True
            )
            # Verify the connection
            client.admin.command("ping")
            db = client[settings.DATABASE_NAME]
            logger.info(f"Successfully connected to MongoDB Atlas database '{settings.DATABASE_NAME}'")
            ensure_indexes(db)
        except Exception as e:
            logger.error(f"Failed to connect to MongoDB Atlas: {e}")
            raise e
    return db

def ensure_indexes(database: Database) -> None:
    """Ensures high-performance indexes exist across all critical collections."""
    try:
        # Menu items indexes
        database.menu_items.create_index([("id", 1)], unique=True, background=True, name="idx_menu_id_unique")
        database.menu_items.create_index([("category", 1)], background=True, name="idx_menu_category")
        database.menu_items.create_index([("inStock", 1)], background=True, name="idx_menu_instock")

        # Admin authentication index
        database.admin_users.create_index([("email", 1)], unique=True, background=True, name="idx_admin_email_unique")

        # Reservations indexes
        database.reservations.create_index([("created_at", -1)], background=True, name="idx_reservations_created_at")
        database.reservations.create_index([("status", 1)], background=True, name="idx_reservations_status")

        # Contact inquiries indexes
        database.contact_submissions.create_index([("created_at", -1)], background=True, name="idx_contact_created_at")
        database.contact_submissions.create_index([("email", 1)], background=True, name="idx_contact_email")

        # Privacy requests indexes
        database.privacy_requests.create_index([("reference_id", 1)], unique=True, background=True, name="idx_privacy_ref_unique")
        database.privacy_requests.create_index([("created_at", -1)], background=True, name="idx_privacy_created_at")
        logger.info("MongoDB Atlas indexes verified and up-to-date.")
    except Exception as err:
        logger.warning(f"Notice while verifying MongoDB Atlas indexes: {err}")

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

def get_admin_collection() -> Collection:
    database = get_database()
    return database["admin_users"]

def get_privacy_collection() -> Collection:
    database = get_database()
    return database["privacy_requests"]

def ping_db() -> bool:
    try:
        database = get_database()
        database.command("ping")
        return True
    except Exception as e:
        logger.error(f"MongoDB ping failed: {e}")
        return False
