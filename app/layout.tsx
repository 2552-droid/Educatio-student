import type { Metadata } from "next";
import { Sansita_Swashed, Slabo_13px } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClientLayout from "@/component/ClientLayout";

const sansitaSwashed = Sansita_Swashed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const slabo = Slabo_13px({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Educatio - Your Ultimate Study Companion",
  description: "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en" className={`${slabo.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SessionProvider session={session}>
          <ClientLayout>
            {children}
          </ClientLayout>
          <SpeedInsights />
        </SessionProvider>
      </body>
    </html>
  );
}