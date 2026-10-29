import { ReactNode } from "react";
import Link from "next/link";
import { FaHome, FaBook, FaEllipsisH } from "react-icons/fa";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#2a6ee5] text-white hidden md:flex flex-col p-6 space-y-8">
        <div className="text-2xl font-extrabold tracking-tight">
          Educatio
        </div>

        <nav className="space-y-2 flex-1">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/10 transition-colors font-medium text-sm"
          >
            <FaHome /> Overview
          </Link>
          <Link
            href="/dashboard/library"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/10 transition-colors font-medium text-sm"
          >
            <FaBook /> Resource Library
          </Link>
          <Link
            href="/dashboard/others"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/10 transition-colors font-medium text-sm"
          >
            <FaEllipsisH /> Others
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Header bar removed completely ("Student Portal" & duplicate icon gone) */}

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}