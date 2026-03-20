import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type QuoteData = {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  timeline?: string;
  details?: string;
};

const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// --- Transporter factory (safe & strict) ---
function createTransporter() {
  const isDevelopment = process.env.NODE_ENV !== "production";
  const emailService = (process.env.EMAIL_SERVICE || "").toLowerCase();

  // Dev: Ethereal (only if creds present), else JSON transport
  if (
    isDevelopment &&
    emailService !== "gmail" &&
    emailService !== "outlook" &&
    emailService !== "smtp"
  ) {
    if (process.env.ETHEREAL_USER && process.env.ETHEREAL_PASS) {
      return nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: process.env.ETHEREAL_USER,
          pass: process.env.ETHEREAL_PASS,
        },
      });
    }
    // Fallback: don’t actually send, just log
    return nodemailer.createTransport({ jsonTransport: true });
  }

  // Prod services
  if (emailService === "gmail") {
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      throw new Error(
        "GMAIL_USER / GMAIL_APP_PASSWORD are required for Gmail service"
      );
    }
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // App Password
      },
    });
  }

  if (emailService === "outlook") {
    // Works for Outlook/Office365
    if (!process.env.OUTLOOK_USER || !process.env.OUTLOOK_PASSWORD) {
      throw new Error(
        "OUTLOOK_USER / OUTLOOK_PASSWORD are required for Outlook service"
      );
    }
    return nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.OUTLOOK_USER,
        pass: process.env.OUTLOOK_PASSWORD,
      },
    });
  }

  if (emailService === "smtp") {
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASSWORD
    ) {
      throw new Error(
        "SMTP_HOST / SMTP_USER / SMTP_PASSWORD are required for SMTP service"
      );
    }
    const port = Number(process.env.SMTP_PORT || 587);
    const secure =
      String(process.env.SMTP_SECURE || "false").toLowerCase() === "true";
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure, // true only if port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  throw new Error(
    "EMAIL_SERVICE must be one of: gmail | outlook | smtp (or leave unset in development)"
  );
}

// Helper to add CORS headers consistently
function withCors(body: any, init?: ResponseInit) {
  const res = NextResponse.json(body, init);
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return res;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, timeline, details }: QuoteData =
      body;

    if (!name?.trim())
      return withCors(
        { success: false, error: "Name is required" },
        { status: 400 }
      );
    if (!email?.trim() || !isValidEmail(email))
      return withCors(
        { success: false, error: "Valid email is required" },
        { status: 400 }
      );
    if (!projectType?.trim())
      return withCors(
        { success: false, error: "Project type is required" },
        { status: 400 }
      );

    const transporter = createTransporter();

    // Optional: fail fast if SMTP creds are wrong
    try {
      await transporter.verify();
    } catch (verifyErr) {
      console.error("SMTP verify failed:", verifyErr);
      return withCors(
        {
          success: false,
          error: "Email service is not ready. Please try again later.",
        },
        { status: 500 }
      );
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html><head><meta charSet="utf-8" />
      <style>
        body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;line-height:1.6;color:#333}
        .container{max-width:600px;margin:0 auto;padding:20px}
        .header{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#fff;padding:30px;border-radius:10px 10px 0 0}
        .content{background:#f8f9fa;padding:30px;border-radius:0 0 10px 10px}
        .field{margin-bottom:20px}
        .label{font-weight:700;color:#495057;text-transform:uppercase;font-size:12px;letter-spacing:1px}
        .value{margin-top:5px;font-size:16px}
        .highlight{background:#fff;padding:15px;border-radius:8px;border-left:4px solid #667eea}
      </style></head>
      <body><div class="container">
        <div class="header">
          <h1 style="margin:0;font-size:28px">New Quote Request 🚀</h1>
          <p style="margin:10px 0 0;opacity:.9">You have received a new project inquiry</p>
        </div>
        <div class="content">
          <div class="field"><div class="label">Client Name</div><div class="value highlight">${name}</div></div>
          <div class="field"><div class="label">Email Address</div><div class="value"><a href="mailto:${email}" style="color:#667eea;text-decoration:none">${email}</a></div></div>
          ${
            phone
              ? `<div class="field"><div class="label">Phone</div><div class="value"><a href="tel:${phone}" style="color:#667eea;text-decoration:none">${phone}</a></div></div>`
              : ""
          }
          <div class="field"><div class="label">Project Type</div><div class="value highlight">${projectType}</div></div>
          ${
            timeline
              ? `<div class="field"><div class="label">Timeline</div><div class="value">${timeline}</div></div>`
              : ""
          }
          ${
            details
              ? `<div class="field"><div class="label">Details</div><div class="value highlight" style="white-space:pre-wrap">${details}</div></div>`
              : ""
          }
          <div class="field" style="margin-top:30px;padding-top:20px;border-top:2px solid #e9ecef">
            <div class="label">Submitted At</div>
            <div class="value">${new Date().toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
              dateStyle: "full",
              timeStyle: "short",
            })}</div>
          </div>
        </div>
      </div></body></html>
    `;

    const clientReplyHtml = `
      <!DOCTYPE html>
      <html><head><meta charSet="utf-8" />
      <style>
        body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;line-height:1.6;color:#333}
        .container{max-width:600px;margin:0 auto;padding:20px}
        .header{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#fff;padding:30px;border-radius:10px 10px 0 0}
        .content{background:#f8f9fa;padding:30px;border-radius:0 0 10px 10px}
        .highlight{background:#fff;padding:20px;border-radius:8px;border-left:4px solid #667eea;margin:20px 0}
      </style></head>
      <body><div class="container">
        <div class="header">
          <h1 style="margin:0;font-size:28px">Thank you, ${name}! ✨</h1>
          <p style="margin:10px 0 0;opacity:.9">We've received your quote request</p>
        </div>
        <div class="content">
          <div class="highlight">
            <h3 style="margin-top:0;color:#667eea">What happens next?</h3>
            <ul style="margin-bottom:0">
              <li><strong>Review:</strong> We'll review within 24 hours</li>
              <li><strong>Analysis:</strong> Prepare a tailored proposal</li>
              <li><strong>Response:</strong> Quote in 1–2 business days</li>
              <li><strong>Discussion:</strong> Schedule a call if needed</li>
            </ul>
          </div>
          <p><strong>Summary</strong></p>
          <p>
            <strong>Type:</strong> ${projectType}<br/>
            ${timeline ? `<strong>Timeline:</strong> ${timeline}<br/>` : ""}
            <strong>Email:</strong> ${email}<br/>
            ${phone ? `<strong>Phone:</strong> ${phone}<br/>` : ""}
          </p>
          <p>If anything changes, just reply to this email.</p>
          <p style="margin-top:30px">Best,<br/><strong>Accelera Tech Solutions</strong></p>
        </div>
      </div></body></html>
    `;

    const from = process.env.FROM_EMAIL;
    const toAdmin = process.env.ADMIN_EMAIL || process.env.FROM_EMAIL;

    if (!from) {
      return withCors(
        { success: false, error: "FROM_EMAIL is not configured" },
        { status: 500 }
      );
    }

    // Send to admin
    const adminEmail = await transporter.sendMail({
      from,
      to: toAdmin,
      subject: `New Quote Request: ${projectType} - ${name}`,
      html: htmlContent,
      replyTo: email,
    });

    // Auto-reply to client (skip if using jsonTransport)
    const clientEmail = await transporter.sendMail({
      from,
      to: email,
      subject: `Quote Request Received — Accelera Tech Solutions`,
      html: clientReplyHtml,
    });

    console.log("Emails sent:", {
      adminMessageId: adminEmail.messageId,
      clientMessageId: clientEmail.messageId,
      dev: process.env.NODE_ENV !== "production",
    });

    return withCors({
      success: true,
      message: "Quote request sent successfully",
    });
  } catch (err) {
    console.error("API route error:", err);
    return withCors(
      { success: false, error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
