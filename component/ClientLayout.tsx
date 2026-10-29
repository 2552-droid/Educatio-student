'use client';

import { usePathname } from 'next/navigation';
import Navbar from "@/component/Navbar";
import Footer from "@/component/footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Hide navbar and footer on auth pages and dashboard
  const isAuthPage = 
    pathname.startsWith('/auth') || 
    pathname === '/login' || 
    pathname === '/register' || 
    pathname === '/signup';

  return (
    <>
      {!isAuthPage && <Navbar />}
      {children}
      {!isAuthPage && <Footer />}
    </>
  );
}