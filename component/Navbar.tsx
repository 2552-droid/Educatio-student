"use client";
import Image from "next/image";
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import { Theme } from "./theme";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";

type NavLink = {
  label: string;
  url: string;
};

const navLinks: NavLink[] = [
  {
    label: "Home",
    url: "/"
  },
  {
    label: "Dashboard",
    url: "/dashboard"
  },
  {
    label: "FAQs",
    url: "/faqs"
  },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeNav = () => setNavOpen(false);

  // Get current active session on client side
  const { data: session } = useSession();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center bg-white justify-between px-4 lg:px-20 text-black py-2 shadow-md relative">
      <Link href={"/"} className="flex items-center z-50">
        <Image
          src={"/LOGO.jpeg"}
          alt="logo"
          width={800}
          height={800}
          className="w-15 h-15"
        />
        <p className="text-lg italic text-black">Educatio</p>
      </Link>

      {/* Desktop Navigation Links */}
      <div className="ml-auto flex items-center gap-6 max-lg:hidden">
        {
          navLinks.map((item, i) => (
            <article key={i} className="group">
              <Link href={item.url} className="text-lg">{item.label}</Link>
              <div className="h-1 w-full bg-white group-hover:bg-[#184dd4] transition-all duration-500"></div>
            </article>
          ))
        }
      </div>

      {/* Desktop Auth / Profile Avatar Dropdown */}
      <div className="flex items-center gap-6 ml-6 max-lg:hidden relative">
        {session?.user ? (
          <div className="relative" ref={dropdownRef}>
            {/* Circular Avatar Trigger */}
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden border-2 border-[#2a6ee5] hover:opacity-90 transition-all focus:outline-none cursor-pointer shadow-sm"
              aria-label="User Menu"
            >
              {session.user.image ? (
                <img
                  src={session.user.image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-blue-50 text-[#2a6ee5] flex items-center justify-center font-bold text-sm">
                  {session.user.name?.[0] || <FaUser />}
                </div>
              )}
            </button>

            {/* Mini Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-50">
                {/* User Info Header */}
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-xs font-bold text-gray-900 truncate">
                    {session.user.name || "Academic Member"}
                  </p>
                  <p className="text-[11px] text-gray-500 truncate mt-0.5">
                    {session.user.email || "Phone Authenticated User"}
                  </p>
                </div>

                {/* Profile Link Option */}
                <div className="py-1">
                  <Link
                    href="/Profile"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    View Full Profile
                  </Link>
                </div>

                {/* Sign Out Option */}
                <div className="border-t border-gray-100 pt-1">
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      signOut({ callbackUrl: "/login" });
                    }}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <FaSignOutAlt /> Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            href={"/login"}
            className="flex items-center border gap-1 px-6 py-1 rounded-full border-gray-700 text-lg hover:border-[#2a6ee5] hover:text-[#2a6ee5] transition-colors"
          >
            Account <FaRegCircleUser />
          </Link>
        )}
      </div>

      {/* Mobile & Tablet View Trigger */}
      <button
        type="button"
        onClick={() => setNavOpen(!navOpen)}
        aria-label={navOpen ? "Close menu" : "Open menu"}
        aria-expanded={navOpen}
        className="lg:hidden z-50 text-3xl mr-2"
      >
        {navOpen ? <IoMdClose /> : <IoIosMenu />}
      </button>

      {/* Mobile & Tablet Dropdown Menu */}
      <div className={`lg:hidden absolute top-0 right-0 z-40 w-full h-dvh space-y-6 bg-white ${navOpen ? "block" : "hidden"}`}>
        <nav className="flex pt-20 flex-col gap-10 items-center">
          {
            navLinks.map((item, i) => (
              <Link key={i} href={item.url} onClick={closeNav} className="text-lg">{item.label}</Link>
            ))
          }
        </nav>
        <div className="flex flex-col items-center gap-6 px-6">
          {session?.user ? (
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl w-full max-w-xs border border-gray-100">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
                  {session.user.image ? (
                    <img src={session.user.image} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-blue-50 text-[#2a6ee5] flex items-center justify-center font-bold">
                      {session.user.name?.[0] || <FaUser />}
                    </div>
                  )}
                </div>
                <div className="overflow-hidden text-left">
                  <p className="text-xs font-bold text-gray-900 truncate">{session.user.name || "Member"}</p>
                  <p className="text-[11px] text-gray-500 truncate">{session.user.email || "Phone User"}</p>
                </div>
              </div>
              
              <Link
                href="/Profile"
                onClick={closeNav}
                style={{ backgroundColor: Theme.primaryColor, borderColor: Theme.primaryColor }}
                className="w-full max-w-xs text-center py-2.5 rounded-xl text-white font-semibold text-sm shadow-sm"
              >
                View Full Profile
              </Link>

              <button
                onClick={() => {
                  closeNav();
                  signOut({ callbackUrl: "/login" });
                }}
                className="w-full max-w-xs text-center py-2.5 rounded-xl bg-red-50 text-red-600 font-semibold text-sm hover:bg-red-100 transition-colors flex items-center justify-center gap-2"
              >
                <FaSignOutAlt /> Sign Out
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              onClick={closeNav}
              className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-full text-base font-semibold hover:bg-gray-50 transition-colors"
            >
              Account <FaRegCircleUser />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}