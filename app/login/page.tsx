"use client";

import { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaLock, FaArrowLeft, FaShieldAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function AccountLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = () => {
    setLoading(true);
    // Redirects to Auth.js Google authentication route
    window.location.href = "/api/auth/signin/google";
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login redirect to dashboard
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans text-gray-900">
      <div className="max-w-md w-full bg-white rounded-3xl border border-gray-100 shadow-xl p-8 space-y-8 relative overflow-hidden">
        
        {/* TOP BAR & BRAND */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-[#2a6ee5] transition-colors"
          >
            <FaArrowLeft size={10} /> Back to Home
          </Link>
          <div className="text-xl font-extrabold text-[#2a6ee5] tracking-tight">
            Educatio
          </div>
        </div>

        {/* HEADER */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Account Portal
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            Sign in to access your course hubs, textbooks, and anonymous tutoring network.
          </p>
        </div>

        {/* GOOGLE AUTH BUTTON */}
        <div className="space-y-4">
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full bg-white hover:bg-gray-50 text-gray-800 font-bold py-3.5 px-4 border border-gray-200 rounded-2xl shadow-sm transition-all flex items-center justify-center gap-3 text-sm"
          >
            <FcGoogle className="text-xl" />
            <span>Continue with Google</span>
          </button>

          <div className="relative flex items-center justify-center my-6">
            <div className="border-t border-gray-200 w-full" />
            <span className="bg-white px-3 text-[11px] font-bold uppercase tracking-wider text-gray-400 absolute">
              or credentials
            </span>
          </div>
        </div>

        {/* EMAIL & PASSWORD FORM */}
        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
              Email Address
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-4 text-gray-400 text-xs" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@university.edu"
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3 pl-11 pr-4 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/40 text-gray-900"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                Password
              </label>
              <a href="#" className="text-[11px] font-semibold text-[#2a6ee5] hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <FaLock className="absolute left-4 top-4 text-gray-400 text-xs" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3 pl-11 pr-4 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/40 text-gray-900"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2a6ee5] hover:bg-blue-600 text-white font-bold py-3.5 rounded-2xl transition-all shadow-md text-sm flex items-center justify-center gap-2 mt-2"
          >
            {loading ? "Signing in..." : "Sign In to Account"}
          </button>
        </form>

        {/* SECURITY NOTE & SIGN UP OPTION */}
        <div className="pt-4 border-t border-gray-100 flex flex-col items-center gap-3 text-center">
          <p className="text-xs text-gray-500">
            Don't have an account?{" "}
            <span className="font-bold text-[#2a6ee5] hover:underline cursor-pointer">
              Register here
            </span>
          </p>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
            <FaShieldAlt className="text-emerald-600" /> Secure SSL Encrypted Session
          </div>
        </div>

      </div>
    </main>
  );
}