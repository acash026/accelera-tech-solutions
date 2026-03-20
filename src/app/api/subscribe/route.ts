import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

// Validation schema
const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

// In-memory storage (replace with database in production)
const subscribers = new Set<string>();

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail", // or your preferred email service
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS, // Use app password for Gmail
    },
  });
};

// Send welcome email
const sendWelcomeEmail = async (email: string) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "🎉 Welcome! You're now subscribed",
    html: `
      <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Welcome Aboard!</h1>
        </div>
        <div style="padding: 40px 20px; background: #f8f9fa;">
          <h2 style="color: #333; margin-bottom: 20px;">Thanks for subscribing!</h2>
          <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
            You're now part of our exclusive community. We'll keep you updated with:
          </p>
          <ul style="color: #666; line-height: 1.8; margin-bottom: 30px;">
            <li>🚀 Latest product updates</li>
            <li>💡 Exclusive tips and tricks</li>
            <li>🎁 Special offers and early access</li>
            <li>📊 Industry insights</li>
          </ul>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}" 
               style="background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Visit Our Website
            </a>
          </div>
          <p style="color: #999; font-size: 14px; margin-top: 30px;">
            Don't want to receive these emails? 
            <a href="${
              process.env.NEXT_PUBLIC_SITE_URL
            }/unsubscribe?email=${encodeURIComponent(email)}" 
               style="color: #667eea;">Unsubscribe here</a>
          </p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const { email } = subscribeSchema.parse(body);

    // Check if already subscribed
    if (subscribers.has(email.toLowerCase())) {
      return NextResponse.json(
        { success: false, message: "This email is already subscribed!" },
        { status: 409 }
      );
    }

    // Add to subscribers (in production, save to database)
    subscribers.add(email.toLowerCase());

    // Send welcome email
    try {
      await sendWelcomeEmail(email);
    } catch (emailError) {
      console.error("Failed to send welcome email:", emailError);
      // Don't fail the subscription if email fails
    }

    // Log subscription (in production, save to database with timestamp)
    console.log(`New subscription: ${email} at ${new Date().toISOString()}`);

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed! Check your email for confirmation.",
      data: { email },
    });
  } catch (error) {
    console.error("Subscription error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: error.issues[0].message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error. Please try again later.",
      },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve subscribers (admin only)
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const adminKey = process.env.ADMIN_API_KEY;

  if (!authHeader || authHeader !== `Bearer ${adminKey}`) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  return NextResponse.json({
    success: true,
    data: {
      subscribers: Array.from(subscribers),
      total: subscribers.size,
    },
  });
}
