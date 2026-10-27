'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { 
  FaGoogle, 
  FaGithub, 
  FaEnvelope, 
  FaLock, 
  FaPhoneAlt, 
  FaShieldAlt, 
  FaChevronDown, 
  FaChevronUp 
} from 'react-icons/fa';

export default function AccountPortalPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [showPhoneLogin, setShowPhoneLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle Google Login
  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: '/dashboard' });
  };

  // Handle GitHub Login
  const handleGithubSignIn = () => {
    signIn('github', { callbackUrl: '/dashboard' });
  };

  // Handle Credentials (Email / Password)
  const handleEmailSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await signIn('credentials', {
      email,
      password,
      callbackUrl: '/dashboard',
    });
    setLoading(false);
  };

  // Trigger Phone OTP request
  const handleSendOtp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!phone) return;
    setOtpSent(true);
    // In production, trigger your Twilio/Firebase SMS dispatch API here
  };

  // Verify Phone OTP via NextAuth
  const handleVerifyOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await signIn('phone-otp', {
      phone,
      otp,
      callbackUrl: '/dashboard',
    });
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans text-gray-900">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-10 space-y-6">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Account Portal
          </h1>
          <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
            Sign in to access your course hubs, textbooks, and anonymous tutoring network.
          </p>
        </div>

        {/* OAuth Social Logins */}
        <div className="space-y-3">
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-2xl text-xs sm:text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 transition-all shadow-sm cursor-pointer"
          >
            <FaGoogle className="text-red-500 text-base" />
            Continue with Google
          </button>

          <button
            onClick={handleGithubSignIn}
            type="button"
            className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-2xl text-xs sm:text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-all shadow-sm cursor-pointer"
          >
            <FaGithub className="text-base" />
            Continue with GitHub
          </button>
        </div>

        {/* Divider */}
        <div className="relative flex py-1 items-center">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink mx-4 text-[11px] font-extrabold tracking-wider text-gray-400 uppercase">
            Or credentials
          </span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Standard Email / Password Form */}
        <form onSubmit={handleEmailSignIn} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <FaEnvelope className="text-xs" />
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@university.edu"
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-2xl text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2a6ee5] focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                Password
              </label>
              <a href="#forgot" className="text-xs font-semibold text-[#2a6ee5] hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <FaLock className="text-xs" />
              </span>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-2xl text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2a6ee5] focus:bg-white transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 bg-[#2a6ee5] hover:bg-blue-600 text-white font-bold rounded-2xl text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all cursor-pointer disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In to Account"}
          </button>
        </form>

        {/* Phone OTP Collapsible Drawer */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden transition-all">
          <button
            type="button"
            onClick={() => setShowPhoneLogin(!showPhoneLogin)}
            className="w-full flex items-center justify-between p-3.5 bg-gray-50 hover:bg-gray-100 text-xs font-bold text-gray-700 uppercase tracking-wider transition-colors cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#2a6ee5]" />
              Continue with Phone Number (OTP)
            </span>
            {showPhoneLogin ? <FaChevronUp className="text-gray-400" /> : <FaChevronDown className="text-gray-400" />}
          </button>

          {showPhoneLogin && (
            <div className="p-4 bg-white border-t border-gray-200 space-y-3">
              {!otpSent ? (
                <form onSubmit={handleSendOtp} className="space-y-3">
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 800 000 0000"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
                  >
                    Send OTP Code
                  </button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-3">
                  <input
                    type="text"
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter 6-digit OTP (e.g., 123456)"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 bg-[#2a6ee5] hover:bg-blue-600 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
                  >
                    {loading ? "Verifying..." : "Verify & Sign In"}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Footer & Registration Redirection */}
        <div className="text-center space-y-3 pt-2">
          <p className="text-xs text-gray-500">
            Don't have an account?{' '}
            <Link href="/register" className="text-[#2a6ee5] font-bold hover:underline">
              Register here
            </Link>
          </p>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[11px] font-semibold border border-emerald-100">
            <FaShieldAlt className="text-xs" />
            Secure SSL Encrypted Session
          </div>
        </div>

      </div>
    </main>
  );
}