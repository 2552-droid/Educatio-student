// app/api/auth/send-otp/route.ts
import { NextResponse } from "next/server";

// Temporary in-memory store for demo (Use Redis or a Database in production)
export const globalOtpStore = new Map<string, string>();

export async function POST(req: Request) {
  try {
    const { phone } = await req.json();

    if (!phone) {
      return NextResponse.json({ error: "Phone number is required" }, { status: 400 });
    }

    // 1. Generate a random 6-digit OTP code
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // 2. Store the OTP temporarily (expires in 5 minutes in production)
    globalOtpStore.set(phone, otp);

    // 3. Send SMS via a provider like Twilio (Console log for local testing)
    console.log(`[SMS Gateway] Sending OTP code ${otp} to phone number ${phone}`);
    
    // Example with Twilio (uncomment when you have credentials):
    /*
    const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    await client.messages.create({
      body: `Your Educatio verification code is: ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone
    });
    */

    return NextResponse.json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
  }
}