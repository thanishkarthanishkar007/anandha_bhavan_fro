import logging
import requests
from config import settings

logger = logging.getLogger(__name__)

RESEND_API_URL = "https://api.resend.com/emails"

def send_contact_notification(
    name: str,
    phone: str,
    email: str,
    guests: str,
    date: str,
    time_slot: str = "",
    special_requests: str = "",
    submission_id: str = ""
) -> dict:
    """
    Sends a formatted notification email to the restaurant admin email (srenewaanandabavan@gmail.com)
    via Resend API whenever a user submits a contact/reservation form.
    """
    subject = f"🍽️ New Dining Enquiry from {name} ({guests}) - Sre New Aananda Bavan"
    
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Dining Enquiry</title>
      <style>
        body {{
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          background-color: #FBF9F4;
          margin: 0;
          padding: 24px;
          color: #1A3022;
        }}
        .container {{
          max-width: 600px;
          margin: 0 auto;
          background: #FFFFFF;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(26, 48, 34, 0.08);
          border: 1px solid rgba(26, 48, 34, 0.1);
        }}
        .header {{
          background: linear-gradient(135deg, #1A3022 0%, #2D5A3C 100%);
          color: #FFFFFF;
          padding: 32px 28px;
          text-align: center;
        }}
        .header h1 {{
          margin: 0;
          font-size: 22px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }}
        .header p {{
          margin: 6px 0 0;
          font-size: 13px;
          opacity: 0.85;
          letter-spacing: 1px;
          text-transform: uppercase;
        }}
        .badge {{
          display: inline-block;
          background: #78B82A;
          color: #FFFFFF;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: bold;
          margin-top: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }}
        .content {{
          padding: 28px;
        }}
        .alert-box {{
          background: #F4EEDF;
          border-left: 4px solid #78B82A;
          padding: 14px 18px;
          border-radius: 8px;
          margin-bottom: 24px;
          font-size: 13px;
          line-height: 1.5;
        }}
        .details-table {{
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 24px;
        }}
        .details-table td {{
          padding: 12px 14px;
          border-bottom: 1px solid #ECE7D9;
          font-size: 13.5px;
        }}
        .details-table td.label {{
          width: 38%;
          color: #556B5D;
          font-weight: 600;
          text-transform: uppercase;
          font-size: 11.5px;
          letter-spacing: 0.5px;
        }}
        .details-table td.value {{
          color: #1A3022;
          font-weight: 600;
        }}
        .action-btn {{
          display: inline-block;
          background: #2D5A3C;
          color: #FFFFFF !important;
          text-decoration: none;
          padding: 10px 18px;
          border-radius: 10px;
          font-weight: bold;
          font-size: 13px;
          margin-right: 8px;
        }}
        .footer {{
          background: #FBF9F4;
          padding: 20px 28px;
          text-align: center;
          font-size: 11.5px;
          color: #7A8E80;
          border-top: 1px solid #ECE7D9;
        }}
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <p>Sri New Aananda Bavan - Pure Veg Restaurant</p>
          <h1>New Customer Dining Enquiry</h1>
          <span class="badge">100% Pure Vegetarian</span>
        </div>
        <div class="content">
          <div class="alert-box">
            A customer has submitted a new dining / reservation enquiry via the website. Please review the details below and follow up promptly.
          </div>
          
          <table class="details-table">
            <tr>
              <td class="label">Customer Name</td>
              <td class="value">{name}</td>
            </tr>
            <tr>
              <td class="label">Phone Number</td>
              <td class="value"><a href="tel:{phone}" style="color: #2D5A3C; text-decoration: none; font-weight: bold;">{phone}</a></td>
            </tr>
            <tr>
              <td class="label">Email Address</td>
              <td class="value"><a href="mailto:{email}" style="color: #2D5A3C; text-decoration: none;">{email}</a></td>
            </tr>
            <tr>
              <td class="label">Party Size</td>
              <td class="value">{guests}</td>
            </tr>
            <tr>
              <td class="label">Preferred Date</td>
              <td class="value">{date}</td>
            </tr>
            <tr>
              <td class="label">Session / Time</td>
              <td class="value">{time_slot if time_slot else "Not specified"}</td>
            </tr>
            <tr>
              <td class="label">Special Requests</td>
              <td class="value">{special_requests if special_requests else "None"}</td>
            </tr>
            {f'<tr><td class="label">Inquiry ID</td><td class="value" style="font-family: monospace; font-size: 12px;">{submission_id}</td></tr>' if submission_id else ''}
          </table>

          <div style="margin-top: 24px; text-align: center;">
            <a href="tel:{phone}" class="action-btn">📞 Call Customer</a>
            <a href="https://wa.me/{phone.replace(' ', '').replace('+', '')}" class="action-btn" style="background: #25D366;">💬 WhatsApp</a>
          </div>
        </div>
        <div class="footer">
          Sent automatically from Sre New Aananda Bavan Website Backend Engine.<br>
          Delivered via Resend API to {settings.ADMIN_EMAIL}.
        </div>
      </div>
    </body>
    </html>
    """
    
    headers = {
        "Authorization": f"Bearer {settings.RESEND_API_KEY}",
        "Content-Type": "application/json",
        "User-Agent": "SreNewAanandaBavanBackend/1.0",
    }
    
    payload = {
        "from": settings.SENDER_EMAIL,
        "to": [settings.ADMIN_EMAIL],
        "subject": subject,
        "html": html_content,
        "reply_to": email if email else None,
    }
    
    try:
        logger.info(f"Dispatching Resend email to {settings.ADMIN_EMAIL} for enquiry from {name}...")
        resp = requests.post(RESEND_API_URL, json=payload, headers=headers, timeout=12)
        if resp.status_code in [200, 201]:
            data = resp.json()
            logger.info(f"Email successfully delivered via Resend: ID={data.get('id')}")
            return {"status": "sent", "resend_id": data.get("id"), "error": None}
        else:
            logger.error(f"Resend API error: HTTP {resp.status_code} - {resp.text}")
            return {"status": "failed", "resend_id": None, "error": resp.text}
    except Exception as e:
        logger.error(f"Exception while sending email via Resend: {e}")
        return {"status": "failed", "resend_id": None, "error": str(e)}
