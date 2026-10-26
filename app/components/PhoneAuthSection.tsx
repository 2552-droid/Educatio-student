// components/PhoneAuthSection.tsx
"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { FaPhone } from "react-icons/fa6";

export function PhoneAuthSection() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"enter_phone" | "enter_otp">("enter_phone");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendOtp = async () => {
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      const data = await res.json();
      if (res.ok) {
        setStep("enter_otp");
        setMessage("OTP sent! Check your console/messages.");
      } else {
        setMessage(data.error || "Failed to send OTP.");
      }
    } catch (err) {
      setMessage("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 pt-4 border-t border-gray-100">
      <details className="group">
        <summary className="flex items-center justify-between text-xs font-bold text-gray-700 uppercase tracking-wider cursor-pointer list-none">
          <span className="flex items-center gap-2">
            <FaPhone className="text-[#2a6ee5]" /> Continue with Phone Number (OTP)
          </span>
          <span className="transition group-open:rotate-180">▼</span>
        </summary>

        <div className="space-y-3 mt-3">
          {message && <p className="text-xs text-[#2a6ee5] font-semibold">{message}</p>}
          
          {step === "enter_phone" ? (
            <div className="space-y-2">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:bg-white"
              />
              <button
                type="button"
                onClick={handleSendOtp}
                disabled={loading || !phone}
                className="w-full bg-gray-900 text-white font-semibold py-2.5 rounded-xl text-xs hover:bg-gray-800 disabled:opacity-50 cursor-pointer"
              >
                {loading ? "Sending..." : "Send Verification Code"}
              </button>
            </div>
          ) : (
            <form
              action={async () => {
                await signIn("phone-number", {
                  phone,
                  otp,
                  redirectTo: "/",
                });
              }}
              className="space-y-2"
            >
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter 6-digit code"
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:bg-white"
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setStep("enter_phone")}
                  className="w-1/3 bg-gray-200 text-gray-700 font-semibold py-2.5 rounded-xl text-xs hover:bg-gray-300 cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-2/3 bg-[#2a6ee5] text-white font-semibold py-2.5 rounded-xl text-xs hover:bg-[#184dd4] cursor-pointer"
                >
                  Verify & Sign In
                </button>
              </div>
            </form>
          )}
        </div>
      </details>
    </div>
  );
}