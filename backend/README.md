# Sre New Aananda Bavan - Python FastAPI Backend

High-performance Python backend built with **FastAPI**, **MongoDB Atlas**, and **Resend Email Service**.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Run the Server
Using the provided batch script:
```bash
start.bat
```
Or directly with Python / Uvicorn:
```bash
python main.py
# or
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

- **API Base URL**: `http://localhost:8000`
- **Interactive Swagger Docs (Browser-based Postman)**: `http://localhost:8000/docs`
- **ReDoc Documentation**: `http://localhost:8000/redoc`

---

## 📬 Automated Postman Test Suite

To run the automated Postman test suite that validates every endpoint, MongoDB Atlas insertion, and Resend email delivery:
```bash
python test_api.py
```

### Postman GUI Collection
A ready-to-import Postman collection is located at [`postman_collection.json`](./postman_collection.json).
1. Open Postman.
2. Click **Import**.
3. Select `backend/postman_collection.json`.
4. Run individual requests or use the Postman Collection Runner.

---

## 🛠️ Key Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Health check, MongoDB Atlas ping, and Resend status |
| `POST` | `/api/contact` | Submits enquiry, saves to MongoDB Atlas, dispatches Resend email |
| `GET` | `/api/contact` | Retrieves all contact enquiries from MongoDB Atlas |
| `POST` | `/api/reservations` | Creates a table booking in MongoDB Atlas |
| `GET` | `/api/reservations` | Lists reservations with optional status filter |
| `PATCH` | `/api/reservations/{id}/status` | Updates reservation status (`Confirmed`, `Pending`, etc.) |
| `GET` | `/api/menu` | Lists menu items from MongoDB Atlas |
| `POST` | `/api/menu` | Adds new dish to MongoDB Atlas |

---

## 📧 Email Notification Workflow
Whenever a customer submits a dining inquiry on the website:
1. The inquiry is validated and saved into MongoDB Atlas collection `contact_submissions`.
2. A responsive, branded HTML email is dispatched via Resend API to `srenewaanandabavan@gmail.com`.
3. Delivery status and `resend_id` are permanently recorded on the MongoDB document.
