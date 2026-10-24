"use client"
import Image from "next/image";
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import { Theme } from "./theme";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

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

  const [navOpen, setNavOpen] = useState(false)

  const closeNav = () => setNavOpen(false)

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

      {/* desktop view */}
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

      <div className="flex items-center gap-6 ml-6 max-lg:hidden">
        <Link href={"/login"} className="flex items-center border gap-1 px-6 py-1 rounded-full border-gray-700 text-lg">Account <FaRegCircleUser /></Link>
        <Link href={"/Profile"} style={{ backgroundColor: Theme.primaryColor, borderColor: Theme.primaryColor }} className="px-6 py-1 rounded-full text-white border text-lg">Profile</Link>
      </div>

      {/* mobile and tablet view */}
      <button
        type="button"
        onClick={() => setNavOpen(!navOpen)}
        aria-label={navOpen ? "Close menu" : "Open menu"}
        aria-expanded={navOpen}
        className="lg:hidden z-50 text-3xl mr-2"
      >
        {
          navOpen ? <IoMdClose /> : <IoIosMenu />
        }
      </button>

      {/* z-40 keeps the open menu above page content (the profile page uses z-10) */}
      <div className={`lg:hidden absolute top-0 right-0 z-40 w-full h-dvh space-y-6 bg-white ${navOpen ? "block" : "hidden"}`}>
        <nav className="flex pt-20 flex-col gap-10 items-center">
          {
            navLinks.map((item, i) => (
              <Link key={i} href={item.url} onClick={closeNav} className="text-lg">{item.label}</Link>
            ))
          }
        </nav>
        <div className="flex flex-col items-center gap-6">
          <Link href="/login"
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors"> Account <FaUserCircle />
          </Link>
          <Link href={"/Profile"} onClick={closeNav} style={{ backgroundColor: Theme.primaryColor, borderColor: Theme.primaryColor }} className="px-6 py-1 rounded-full text-white border text-lg">Profile</Link>
        </div>
      </div>
    </header>
  )
}
