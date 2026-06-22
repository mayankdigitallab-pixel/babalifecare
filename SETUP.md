# Setup Guide

The website ships fully working without any of this setup. Each section below adds an optional feature. Configure them in any order.

## Quick map

| Feature                                | Status         | Setup time |
| -------------------------------------- | -------------- | ---------- |
| Google Sheets booking log              | Recommended    | 5 minutes  |
| Razorpay online payment (video consult)| Optional       | 10 minutes |
| Jitsi video meet links                 | Already on     | 0 minutes  |
| WhatsApp Business API (auto messages)  | Phase 3 future | 1-2 days   |

## A. Google Sheets booking log

Every form submission is appended to a Google Sheet. The clinic just opens the Sheet to see new bookings.

### A1. Create the Sheet

1. Open https://sheets.new (creates a blank Sheet on your account).
2. Rename it `Baba Life Care - Bookings`.
3. In **row 1**, paste these headers across A1 to M1:

   ```
   Submitted At | Name | Phone | Age | Type | Department | Preferred Date | Preferred Slot | Concern | Meet Link | Payment ID | Payment Amount | Status
   ```

### A2. Add the Apps Script

1. Sheet menu: **Extensions > Apps Script**.
2. Delete the boilerplate. Paste this:

   ```javascript
   function doPost(e) {
     try {
       var body = JSON.parse(e.postData.contents);
       var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
       sheet.appendRow([
         body.submitted_at || new Date().toISOString(),
         body.name || "",
         body.phone || "",
         body.age || "",
         body.consultation_type || "",
         body.department || "",
         body.preferred_date || "",
         body.preferred_slot || "",
         body.concern || "",
         body.meet_link || "",
         body.payment_id || "",
         body.payment_amount || "",
         "Pending"
       ]);
       return ContentService
         .createTextOutput(JSON.stringify({ ok: true }))
         .setMimeType(ContentService.MimeType.JSON);
     } catch (err) {
       return ContentService
         .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
         .setMimeType(ContentService.MimeType.JSON);
     }
   }
   ```

3. Ctrl+S to save. Name the project anything.

### A3. Deploy as Web App

1. Top right: **Deploy > New deployment**.
2. Gear icon > **Web app**.
3. Settings:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. **Deploy**. Authorize: pick your Google account > **Advanced** > **Go to (project name)** > **Allow**.
5. Copy the **Web app URL**:

   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

### A4. Add the URL to Vercel

1. Open https://vercel.com/mayankdigitallab-pixels-projects/babalifecare/settings/environment-variables
2. Add new variable:
   - **Key:** `GOOGLE_SHEETS_WEBHOOK_URL`
   - **Value:** the URL from A3
   - **Environments:** Production + Preview + Development
3. Save. Open **Deployments** tab, click three-dot menu on the latest, **Redeploy**.

### A5. Test

Submit a test booking at https://babalifecare.vercel.app/book-appointment. A row should appear in your Sheet within a few seconds.

## B. Razorpay payment (for video consultations)

Patients booking a video consultation pay ₹300 upfront via Razorpay before WhatsApp opens.

### B1. Get Razorpay keys

1. Sign up at https://dashboard.razorpay.com.
2. Complete KYC (PAN, GST, bank details). This is needed before you can accept live payments. Test keys work without KYC.
3. Go to **Settings > API Keys**. Click **Generate Test Key** (or **Generate Live Key** after KYC).
4. Copy the **Key ID** (looks like `rzp_test_XXXX...`) and **Key Secret**.

### B2. Add to Vercel

Add two environment variables (same path as A4):

| Key                   | Value                                 |
| --------------------- | ------------------------------------- |
| `RAZORPAY_KEY_ID`     | `rzp_test_XXXXXXXX` (or `rzp_live_…`) |
| `RAZORPAY_KEY_SECRET` | the secret string                     |

Redeploy.

### B3. Change the fee

The default is ₹300. To change it, edit `src/lib/consultation.ts`:

```typescript
export const VIDEO_CONSULTATION_FEE_INR = 300; // change this
```

Commit and push - Vercel redeploys automatically.

### B4. Test

In test mode, Razorpay provides cards that always succeed:

- Card: `4111 1111 1111 1111`
- CVV: any 3 digits, expiry: any future date
- UPI: `success@razorpay`

Real payments only work after you switch to live keys (post-KYC).

## C. Jitsi video meet link

Already on. No setup required.

When a patient books a video consultation, the website generates a unique Jitsi room URL like:

```
https://meet.jit.si/baba-life-care-mfdh4-9qx2a4
```

This link goes into the WhatsApp message and the Sheet row. The clinic doctor opens the link at appointment time, the patient opens the same link. No accounts, no app install, free.

If you prefer Google Meet or Zoom later, edit `src/lib/consultation.ts > generateJitsiLink()`.

## D. WhatsApp Business API (Phase 3, future)

Today the site uses `wa.me` links, which open the patient's WhatsApp app with a pre-filled message they send manually. This is reliable and free.

To send **automated** confirmation messages **from the clinic to the patient** (e.g. "Your appointment is confirmed for Saturday 5pm"), you need a WhatsApp Business API provider:

- **WATI** (https://www.wati.io) - popular in India, ~₹999/month + per-message cost
- **Gupshup** (https://www.gupshup.io) - bigger enterprise option
- **Twilio** (https://www.twilio.com) - global, slightly higher pricing

Steps once you pick one:

1. Sign up; get the clinic a **WhatsApp Business Account** (FB Business Manager + Meta verification, takes 1-2 days).
2. Provider gives you an **API key** and **endpoint**.
3. We add a server route `/api/whatsapp/notify` that POSTs to the provider when a booking is confirmed in the Sheet.
4. Optional: a "Confirmed" Apps Script trigger that fires the API call automatically when the clinic changes the Sheet row's Status column to `Confirmed`.

This is roughly half a day of additional work after the WhatsApp Business account is approved. Leave this for later.

## Local development

If you want to test these flows locally, create `.env.local` in the project root with the same keys as Vercel. Then `npm run dev`.

Local `.env.local` is gitignored - it never gets committed.
