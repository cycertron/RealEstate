# Estatly Notification Service

This microservice handles all outbound communication for the Estatly platform, ensuring clients and agents stay informed in real-time.

## 📨 Capabilities

- **Email Notifications:** Powered by Resend (or similar providers), sending beautifully formatted HTML emails for:
  - Account verification and welcome emails.
  - Viewing appointment confirmations.
  - Offer submissions and counter-offers.
  - Password resets.
- **Push Notifications:** Sending alerts to the Estatly Mobile App.

## ⚙️ Configuration

Ensure you have the appropriate environment variables set in your `.env` file:

```env
PORT=5005
EMAIL_API_KEY=your_api_key_here
APP_LINK=https://estatly.app
```

## 🚀 Running Locally

```bash
npm install
npm run dev
```
