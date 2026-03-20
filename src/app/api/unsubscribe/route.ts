// app/api/unsubscribe/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const unsubscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

// Use the same in-memory storage (in production, use database)
declare global {
  var subscribers: Set<string> | undefined;
}

const getSubscribers = () => {
  if (!global.subscribers) {
    global.subscribers = new Set<string>();
  }
  return global.subscribers;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = unsubscribeSchema.parse(body);

    const subscribers = getSubscribers();

    if (subscribers.has(email.toLowerCase())) {
      subscribers.delete(email.toLowerCase());
      console.log(`Unsubscribed: ${email} at ${new Date().toISOString()}`);

      return NextResponse.json({
        success: true,
        message: "Successfully unsubscribed. Sorry to see you go!",
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Email not found in our subscription list.",
        },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Unsubscribe error:", error);

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
