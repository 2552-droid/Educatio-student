import type { Metadata } from "next";
import { Sansita_Swashed, Slabo_13px } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/footer";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/footer";

const sansitaSwashed = Sansita_Swashed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
})

const slabo = Slabo_13px({
  subsets: ["latin"],
  weight: ["400"]
})

export const metadata: Metadata = {
  title: "Educatio - Your Ultimate Study Companion",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${slabo.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Footer/> 
      </body>
    </html>
  );
}