"""
High-Performance In-Memory Cache Service for FastAPI
Thread-safe TTL caching with instant invalidation on mutations.
"""
import time
import threading
from typing import Any, Optional, Dict, Tuple

class SimpleMemoryCache:
    def __init__(self):
        self._cache: Dict[str, Tuple[float, Any]] = {}
        self._lock = threading.Lock()

    def get(self, key: str) -> Optional[Any]:
        with self._lock:
            entry = self._cache.get(key)
            if not entry:
                return None
            expires_at, value = entry
            if time.time() > expires_at:
                del self._cache[key]
                return None
            return value

    def set(self, key: str, value: Any, ttl_seconds: int = 60) -> None:
        with self._lock:
            expires_at = time.time() + ttl_seconds
            self._cache[key] = (expires_at, value)

    def invalidate(self, prefix_or_key: str) -> None:
        with self._lock:
            keys_to_delete = [
                k for k in self._cache.keys()
                if k == prefix_or_key or k.startswith(f"{prefix_or_key}:")
            ]
            for k in keys_to_delete:
                self._cache.pop(k, None)

    def clear(self) -> None:
        with self._lock:
            self._cache.clear()

# Global cache instance
cache = SimpleMemoryCache()
