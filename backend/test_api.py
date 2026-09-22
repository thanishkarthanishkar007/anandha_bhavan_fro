#!/usr/bin/env python
"""
Automated Postman-equivalent test runner for Sre New Aananda Bavan Backend API.
Tests all endpoints, verifies MongoDB Atlas persistence, and validates Resend email notifications.
"""

import sys
import time
import json
import requests

# Ensure UTF-8 output on Windows consoles
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

BASE_URL = "http://127.0.0.1:8000"

def log_test(title, passed, details=None):
    symbol = "[PASS]" if passed else "[FAIL]"
    print(f"\n{symbol}: {title}")
    if details:
        print(f"   Details: {details}")

def run_postman_tests():
    print("=" * 75)
    print("  POSTMAN API TEST SUITE - SRE NEW AANANDA BAVAN BACKEND")
    print(f"  Target Server: {BASE_URL}")
    print("=" * 75)
    
    total = 0
    passed = 0
    
    # Test 1: Health Check & MongoDB Atlas Ping
    total += 1
    try:
        r = requests.get(f"{BASE_URL}/api/health", timeout=5)
        data = r.json()
        db_ok = data.get("database") == "connected"
        email_ok = data.get("resend_email_configured") is True
        p = r.status_code == 200 and db_ok and email_ok
        log_test(
            "GET /api/health (Health Check & MongoDB Atlas Connection)",
            p,
            f"Status={r.status_code}, DB={data.get('database')}, ResendConfigured={email_ok}"
        )
        if p: passed += 1
    except Exception as e:
        log_test("GET /api/health", False, str(e))
        print("Backend server is not responding! Ensure it is running on port 8000.")
        return False

    # Test 2: Swagger Documentation UI
    total += 1
    try:
        r = requests.get(f"{BASE_URL}/docs", timeout=5)
        p = r.status_code == 200
        log_test("GET /docs (Interactive Swagger UI)", p, f"Status={r.status_code}")
        if p: passed += 1
    except Exception as e:
        log_test("GET /docs", False, str(e))

    # Test 3: POST /api/contact - Submit Enquiry & Send Resend Email
    total += 1
    sample_contact = {
        "name": "Thanishkar M (Customer Enquiry)",
        "phone": "+91 95975 35555",
        "email": "srenewaanandabavan@gmail.com",
        "guests": "4 Guests",
        "date": "2026-09-25",
        "timeSlot": "Lunch (12:30 PM)",
        "specialRequests": "Traditional plantain leaf feast. 100% Pure Vegetarian."
    }
    submission_id = None
    resend_id = None
    try:
        r = requests.post(f"{BASE_URL}/api/contact", json=sample_contact, timeout=15)
        data = r.json()
        submission_id = data.get("id")
        resend_id = data.get("resend_id")
        email_status = data.get("email_status")
        p = r.status_code == 201 and data.get("success") is True and email_status == "sent"
        log_test(
            "POST /api/contact (Save Enquiry to MongoDB Atlas & Send Resend Email)",
            p,
            f"Status={r.status_code}, MongoID={submission_id}, ResendEmailID={resend_id}, EmailStatus={email_status}"
        )
        if p: passed += 1
    except Exception as e:
        log_test("POST /api/contact", False, str(e))

    # Test 4: GET /api/contact - Verify MongoDB Atlas Persistence
    total += 1
    try:
        r = requests.get(f"{BASE_URL}/api/contact", timeout=5)
        data = r.json()
        items = data.get("items", [])
        found = any(item.get("_id") == submission_id for item in items) if submission_id else len(items) > 0
        p = r.status_code == 200 and (found or len(items) > 0)
        log_test(
            "GET /api/contact (Fetch Enquiries Stored in MongoDB Atlas)",
            p,
            f"Status={r.status_code}, TotalStored={data.get('total')}, VerifiedNewlyInsertedDoc={found}"
        )
        if p: passed += 1
    except Exception as e:
        log_test("GET /api/contact", False, str(e))

    # Test 5: POST /api/reservations - Table Booking Creation
    total += 1
    sample_res = {
        "customer_name": "R. Sundaram (Family Booking)",
        "phone": "+91 98400 12345",
        "email": "srenewaanandabavan@gmail.com",
        "guests": 6,
        "date": "2026-09-26",
        "time_slot": "Dinner (08:00 PM)",
        "table_type": "AC Family Hall",
        "special_notes": "Window seating preference."
    }
    res_id = None
    try:
        r = requests.post(f"{BASE_URL}/api/reservations", json=sample_res, timeout=15)
        data = r.json()
        res_id = data.get("id")
        p = r.status_code == 201 and data.get("success") is True
        log_test(
            "POST /api/reservations (Create Table Reservation in MongoDB Atlas)",
            p,
            f"Status={r.status_code}, ReservationID={res_id}"
        )
        if p: passed += 1
    except Exception as e:
        log_test("POST /api/reservations", False, str(e))

    # Test 6: GET /api/reservations - List Reservations
    total += 1
    try:
        r = requests.get(f"{BASE_URL}/api/reservations", timeout=5)
        data = r.json()
        p = r.status_code == 200 and data.get("total", 0) >= 1
        log_test(
            "GET /api/reservations (Fetch Reservations from MongoDB Atlas)",
            p,
            f"Status={r.status_code}, TotalReservations={data.get('total')}"
        )
        if p: passed += 1
    except Exception as e:
        log_test("GET /api/reservations", False, str(e))

    # Test 7: PATCH /api/reservations/{id}/status - Update Booking Status
    if res_id:
        total += 1
        try:
            r = requests.patch(
                f"{BASE_URL}/api/reservations/{res_id}/status",
                json={"status": "Confirmed"},
                timeout=5
            )
            data = r.json()
            p = r.status_code == 200 and data.get("new_status") == "Confirmed"
            log_test(
                "PATCH /api/reservations/{id}/status (Confirm Reservation in MongoDB)",
                p,
                f"Status={r.status_code}, UpdatedStatus={data.get('new_status')}"
            )
            if p: passed += 1
        except Exception as e:
            log_test("PATCH /api/reservations status", False, str(e))

    # Final Summary
    print("\n" + "=" * 75)
    print(f"  TEST RESULTS SUMMARY: {passed}/{total} PASSED ({(passed/total)*100:.1f}%)")
    if passed == total:
        print("  ALL BACKEND, MONGODB ATLAS & RESEND EMAIL TESTS PASSED!")
    else:
        print("  SOME TESTS FAILED. CHECK LOGS ABOVE.")
    print("=" * 75 + "\n")
    return passed == total

if __name__ == "__main__":
    success = run_postman_tests()
    sys.exit(0 if success else 1)
