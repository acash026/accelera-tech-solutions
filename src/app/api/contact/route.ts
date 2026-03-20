// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // nodemailer requires Node runtime (not edge)

type ContactData = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
  // optional honeypot for spam (put a hidden input named "website" in the form)
  website?: string;
};

const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// --- Transporter factory (same pattern as your Quote API) ---
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
    // Fallback: don't actually send, just log payloads to console
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
    const body = (await request.json()) as ContactData;

    // Simple honeypot (hidden field "website" should stay blank)
    if (body.website && body.website.trim().length > 0) {
      return withCors({ success: true, message: "Thanks!" }, { status: 200 });
    }

    const { name, email, company, phone, service, message } = body;

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

    if (!message?.trim())
      return withCors(
        { success: false, error: "Message is required" },
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

    const adminHtml = `
      <!DOCTYPE html>
      <html><head><meta charSet="utf-8" />
      <style>
        body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;line-height:1.6;color:#333}
        .container{max-width:600px;margin:0 auto;padding:20px}
        .header{background:linear-gradient(135deg,#2563eb 0%,#7c3aed 100%);color:#fff;padding:30px;border-radius:10px 10px 0 0}
        .content{background:#f8f9fa;padding:30px;border-radius:0 0 10px 10px}
        .field{margin-bottom:16px}
        .label{font-weight:700;color:#495057;text-transform:uppercase;font-size:12px;letter-spacing:1px}
        .value{margin-top:6px;font-size:16px}
        .highlight{background:#fff;padding:14px;border-radius:8px;border-left:4px solid #2563eb}
      </style></head>
      <body><div class="container">
        <div class="header">
          <h1 style="margin:0;font-size:24px">New Contact Message ✉️</h1>
          <p style="margin:10px 0 0;opacity:.9">Someone reached out via your Contact form</p>
        </div>
        <div class="content">
          <div class="field"><div class="label">Name</div><div class="value highlight">${name}</div></div>
          <div class="field"><div class="label">Email</div>
            <div class="value"><a href="mailto:${email}" style="color:#2563eb;text-decoration:none">${email}</a></div></div>
          ${
            company
              ? `<div class="field"><div class="label">Company</div><div class="value">${company}</div></div>`
              : ""
          }
          ${
            phone
              ? `<div class="field"><div class="label">Phone</div><div class="value"><a href="tel:${phone}" style="color:#2563eb;text-decoration:none">${phone}</a></div></div>`
              : ""
          }
          ${
            service
              ? `<div class="field"><div class="label">Service</div><div class="value highlight">${service}</div></div>`
              : ""
          }
          <div class="field"><div class="label">Message</div><div class="value highlight" style="white-space:pre-wrap">${message}</div></div>
          <div class="field" style="margin-top:24px;padding-top:16px;border-top:2px solid #e9ecef">
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

    const clientHtml = `
      <!DOCTYPE html>
      <html><head><meta charSet="utf-8" />
      <style>
        body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;line-height:1.6;color:#333}
        .container{max-width:600px;margin:0 auto;padding:20px}
        .header{background:linear-gradient(135deg,#2563eb 0%,#7c3aed 100%);color:#fff;padding:30px;border-radius:10px 10px 0 0}
        .content{background:#f8f9fa;padding:30px;border-radius:0 0 10px 10px}
        .highlight{background:#fff;padding:16px;border-radius:8px;border-left:4px solid #2563eb;margin:16px 0}
      </style></head>
      <body><div class="container">
        <div class="header">
          <h1 style="margin:0;font-size:24px">Thanks for contacting us, ${name}! 🙌</h1>
          <p style="margin:10px 0 0;opacity:.9">We’ve received your message.</p>
        </div>
        <div class="content">
          <p>Our team will get back to you within <strong>24 hours</strong>.</p>
          <div class="highlight">
            <p style="margin:0 0 6px 0"><strong>Summary</strong></p>
            <p style="margin:0">
              ${service ? `<strong>Service:</strong> ${service}<br/>` : ""}
              ${company ? `<strong>Company:</strong> ${company}<br/>` : ""}
              ${phone ? `<strong>Phone:</strong> ${phone}<br/>` : ""}
              <strong>Your message:</strong><br/>${message
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")}
            </p>
          </div>
          <p>If you need to add anything, just reply to this email.</p>
          <p style="margin-top:24px">Best,<br/><strong>Accelera Tech Solutions</strong></p>
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
      subject: `New Contact Message — ${name}`,
      html: adminHtml,
      replyTo: email,
    });

    // Auto-reply to client (skip if using jsonTransport)
    const clientEmail = await transporter.sendMail({
      from,
      to: email,
      subject: `We received your message — Accelera Tech Solutions`,
      html: clientHtml,
    });

    console.log("Contact emails sent:", {
      adminMessageId: adminEmail.messageId,
      clientMessageId: clientEmail.messageId,
      dev: process.env.NODE_ENV !== "production",
    });

    return withCors({ success: true, message: "Message sent successfully" });
  } catch (err) {
    console.error("Contact API error:", err);
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
