import Link from "next/link";
import Image from "next/image";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaPaperPlane,
  FaHeart
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 font-sans border-t border-gray-800">
      
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        
        {/* Brand Info */}
        <div className="lg:col-span-2 space-y-6">
          <Link href={"/"} className="flex items-center gap-3">
            <Image
              src={"/LOGO.jpeg"}
              alt="logo"
              width={40}
              height={40}
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="text-2xl font-bold text-white italic">Educatio</span>
          </Link>
          <p className="text-gray-400 text-base max-w-sm leading-relaxed">
            Empowering students across disciplines with curated, high-quality educational materials tailored for academic excellence.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-[#2a6ee5] hover:text-white transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-[#2a6ee5] hover:text-white transition-colors">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-[#2a6ee5] hover:text-white transition-colors">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-[#2a6ee5] hover:text-white transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-lg tracking-wide">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-[#FFDD9C] transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#FFDD9C] transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-[#FFDD9C] transition-colors">Contact</Link></li>
            <li><Link href="/faqs" className="hover:text-[#FFDD9C] transition-colors">FAQs & Support</Link></li>
          </ul>
        </div>

        {/* Disciplines */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-lg tracking-wide">Disciplines</h4>
          <ul className="space-y-3">
            <li><Link href="/law" className="hover:text-[#FFDD9C] transition-colors">Law Hub</Link></li>
            <li><Link href="/medicine" className="hover:text-[#FFDD9C] transition-colors">Medicine Hub</Link></li>
            <li><Link href="/cs" className="hover:text-[#FFDD9C] transition-colors">Computer Science</Link></li>
            <li><Link href="/all-courses" className="hover:text-[#FFDD9C] transition-colors">All Courses</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-lg tracking-wide">Newsletter</h4>
          <p className="text-sm text-gray-400">Subscribe to get updates on new course materials and exam guides.</p>
          <form className="space-y-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white text-sm focus:outline-none focus:border-[#2a6ee5]"
            />
            <button 
              type="button" 
              className="w-full bg-[#2a6ee5] text-white font-bold py-3 rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 text-sm"
            >
              Subscribe <FaPaperPlane />
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-900 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Educatio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
            <span className="flex items-center gap-1 text-gray-400">
              Built with <FaHeart className="text-[#E73F1E]" /> for students
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}