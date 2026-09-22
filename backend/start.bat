@echo off
echo ============================================================
echo Starting Sre New Aananda Bavan FastAPI Backend...
echo Server URL: http://localhost:8000
echo Swagger API Docs: http://localhost:8000/docs
echo ============================================================
python -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload
pause
