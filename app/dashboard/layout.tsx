// app/dashboard/layout.tsx
import Link from "next/link";
import { FaBook, FaHome, FaUser, FaSignOutAlt, FaLaptopCode, FaBalanceScale, FaStethoscope, FaAlignLeft } from "react-icons/fa";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#2a6ee5] text-white hidden md:flex flex-col justify-between p-6">
        <div className="space-y-8">
          <div className="text-2xl font-bold tracking-wider text-[#FFDD9C]">
            Educatio
          </div>
          <nav className="space-y-2">
            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              <FaHome /> Overview
            </Link>
            <Link href="/dashboard/library" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              <FaBook /> Resource Library
            </Link>
              <Link href="/dashboard/courses/other" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              <FaAlignLeft/> Others
            </Link>
          </nav>
        </div>
        <div className="pt-6 border-t border-gray-800">
          <Link href="/login" className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-gray-800 transition-colors">
            <FaSignOutAlt /> Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-8">
          <h1 className="text-xl font-bold text-gray-800">Student Portal</h1>
          <Link href="/dashboard/profile" className="w-10 h-10 rounded-full bg-[#FFDD9C] flex items-center justify-center font-bold text-black">
            <FaUser />
          </Link>
        </header>
        <main className="p-8 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}