# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (100 emails/month)

## Step 2: Add Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the connection instructions
5. Copy your **Service ID** (e.g., `service_abc1234`)

## Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

**Template Name:** `contact_form`

**Subject:** `New Contact Form Submission from {{name}}`

**Content:**
```
You have a new message from your website contact form:

Name: {{name}}
Email: {{email}}
Phone: {{phone}}

Message:
{{message}}

---
This email was sent from your website contact form.
```

4. Save and copy your **Template ID** (e.g., `template_xyz5678`)

## Step 4: Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `abcdef123456789`)

## Step 5: Update Your Code
Open `src/app/contact/page.jsx` and replace these placeholders:

```javascript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',      // Replace with your Service ID
  'YOUR_TEMPLATE_ID',     // Replace with your Template ID
  formRef.current,
  'YOUR_PUBLIC_KEY'       // Replace with your Public Key
)
```

## Step 6: Test Your Form
1. Run your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email for the test message

## Troubleshooting

### Form not sending
- Check browser console for errors
- Verify all three IDs are correct
- Check EmailJS dashboard for failed attempts

### Not receiving emails
- Check spam folder
- Verify email template is set to send to your email
- Check EmailJS dashboard logs

### Rate limiting
- Free plan: 100 emails/month
- Failed attempts count toward limit
- Consider upgrading if needed

## Security Note
Your EmailJS public key is safe to use in client-side code. EmailJS restricts usage to your domain and has rate limiting built-in.

## Optional: Restrict to Your Domain
1. In EmailJS dashboard, go to **Account** → **Security**
2. Add your domain (e.g., `cottleconstruction.co.za`)
3. This prevents others from using your credentials
