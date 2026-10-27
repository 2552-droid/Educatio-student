import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { globalOtpStore } from "@/app/api/auth/send-otp/route";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google,
    GitHub,
    Credentials({
      id: "phone-number",
      name: "Phone Number",
      credentials: {
        phone: { label: "Phone Number", type: "text" },
        otp: { label: "OTP Code", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.phone || !credentials?.otp) {
          return null;
        }

        const phone = credentials.phone as string;
        const submittedOtp = credentials.otp as string;

        const validOtp = globalOtpStore.get(phone);

        if (!validOtp || validOtp !== submittedOtp) {
          throw new Error("Invalid or expired OTP code.");
        }

        globalOtpStore.delete(phone);

        let user = {
          id: phone,
          name: "Phone User",
          email: `${phone.replace(/[^0-9]/g, "")}@phone.auth`,
        };

        return user;
      },
    }),
  ],
});