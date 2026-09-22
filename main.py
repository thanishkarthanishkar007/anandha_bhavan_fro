import os
import sys
import subprocess
import importlib.util
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent
BACKEND_DIR = ROOT_DIR / "backend"

# 1. Ensure backend dependencies are available (Self-healing for Render deployment)
try:
    import fastapi
    import uvicorn
    import pymongo
except ImportError:
    print("[INFO] Dependencies not found. Installing backend/requirements.txt...")
    req_file = BACKEND_DIR / "requirements.txt"
    if req_file.exists():
        subprocess.check_call([sys.executable, "-m", "pip", "install", "-r", str(req_file)])
    import fastapi
    import uvicorn
    import pymongo

# 2. Add backend directory to Python path
if str(BACKEND_DIR) not in sys.path:
    sys.path.insert(0, str(BACKEND_DIR))

# 3. Load FastAPI app from backend/main.py cleanly
backend_main_path = BACKEND_DIR / "main.py"
spec = importlib.util.spec_from_file_location("backend_app", backend_main_path)
backend_app = importlib.util.module_from_spec(spec)
sys.modules["backend_app"] = backend_app
spec.loader.exec_module(backend_app)
app = backend_app.app

from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

# 4. Mount Next.js static build (out/ directory) if it exists
OUT_DIR = ROOT_DIR / "out"
if OUT_DIR.exists():
    print(f"[INFO] Next.js export directory detected at {OUT_DIR}. Mounting static frontend...")
    
    # 404 fallback for non-API routes
    @app.exception_handler(404)
    async def custom_404_handler(request, exc):
        if not request.url.path.startswith("/api/"):
            not_found_file = OUT_DIR / "404.html"
            if not_found_file.exists():
                return FileResponse(not_found_file, status_code=404)
        return {"detail": "Not Found"}

    # Mount static assets
    app.mount("/", StaticFiles(directory=str(OUT_DIR), html=True), name="frontend")
else:
    print("[INFO] 'out' directory not found. Running in API-only mode.")

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    print(f"[INFO] Starting Sre New Aananda Bavan Server on port {port}...")
    uvicorn.run(app, host="0.0.0.0", port=port)
