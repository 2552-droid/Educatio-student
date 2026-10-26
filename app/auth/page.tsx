import { PhoneAuthSection } from "@/app/components/PhoneAuthSection";
import { auth, signIn } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  FaArrowLeftLong,
  FaEnvelope,
  FaLock,
  FaUser,
  FaGithub,
  // FaApple removed
} from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default async function AuthPage({
  searchParams,
}: {
  searchParams?: Promise<{ mode?: string; callbackUrl?: string }>;
}) {
  const session = await auth();
  const params = await searchParams;

  if (session?.user) {
    redirect(params?.callbackUrl || "/");
  }

  const isSignUp = params?.mode === "signup";

  return (
    <main className="min-h-dvh bg-gray-50 flex items-center justify-center p-4 md:p-8 font-sans">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[650px]">

        {/* Visual / Brand Banner Side */}
        <div className="md:w-1/2 bg-[url('/bg2.jpeg')] bg-no-repeat bg-center bg-cover relative hidden md:flex flex-col justify-between p-12 text-white">
          <div className="absolute inset-0 bg-black/60 z-0"></div>
          <div className="relative z-10">
            <Link href="/" className="text-3xl font-bold tracking-wider">
              Educatio<span className="text-[#2a6ee5]">.</span>
            </Link>
          </div>
          <div className="relative z-10 space-y-4">
            <span className="bg-[#2a6ee5] text-white font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full">
              Join Our Academic Community
            </span>
            <h2 className="text-4xl font-bold leading-tight">
              Learn & Share Across <br />
              <span className="text-[#FFDD9C]">Every Discipline</span>
            </h2>
            <p className="text-gray-200 text-sm leading-relaxed max-w-sm">
              Unlock hundreds of comprehensive study guides, connect with passionate learners, and master the core foundations of your field.
            </p>
          </div>
          <div className="relative z-10 pt-6 border-t border-white/20 text-lg font-semibold text-[#FFDD9C]">
            "Elevate your learning journey..."
          </div>
        </div>

        {/* Auth Form Side */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between relative bg-white overflow-y-auto max-h-[90vh]">

          {/* Navigation Bar */}
          <div className="flex justify-between items-center mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#2a6ee5] transition-colors"
            >
              <FaArrowLeftLong /> Home
            </Link>

            <div className="text-sm">
              <span className="text-gray-500">
                {isSignUp ? "Already a member?" : "Don't have an account?"}
              </span>{" "}
              <Link
                href={isSignUp ? "?mode=signin" : "?mode=signup"}
                className="font-bold text-[#2a6ee5] hover:underline cursor-pointer ml-1"
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </Link>
            </div>
          </div>

          {/* Form Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              {isSignUp ? "Create your account" : "Welcome back"}
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              {isSignUp
                ? "Join Educatio to start bookmarking and sharing resources."
                : "Enter your details to access your saved materials and account."}
            </p>
          </div>

          {/* OAuth Providers Stack (Google & GitHub only) */}
          <div className="space-y-3">
            {/* Google Sign-In */}
            <form
              action={async () => {
                "use server";
                await signIn("google", { redirectTo: params?.callbackUrl || "/" });
              }}
            >
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-xl transition-all shadow-sm cursor-pointer text-sm"
              >
                <FcGoogle className="text-xl" />
                <span>{isSignUp ? "Sign up with Google" : "Sign in with Google"}</span>
              </button>
            </form>

            {/* GitHub Sign-In */}
            <form
              action={async () => {
                "use server";
                await signIn("github", { redirectTo: params?.callbackUrl || "/" });
              }}
            >
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-gray-900 border border-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-sm cursor-pointer text-sm"
              >
                <FaGithub className="text-xl" />
                <span>{isSignUp ? "Sign up with GitHub" : "Sign in with GitHub"}</span>
              </button>
            </form>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-4">
              <div className="border-t border-gray-200 w-full"></div>
              <span className="bg-white px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider absolute">
                Or continue with email / phone
              </span>
            </div>
          </div>

          {/* Email & Credentials Form Action */}
          <form
            action={async (formData: FormData) => {
              "use server";
              const email = formData.get("email") as string;
              const password = formData.get("password") as string;

              await signIn("credentials", {
                email,
                password,
                redirectTo: params?.callbackUrl || "/",
              });
            }}
            className="space-y-4"
          >
            {isSignUp && (
              <div className="space-y-1">
                <label htmlFor="name" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Alex Johnson"
                    required={isSignUp}
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#2a6ee5]/50 transition-all text-gray-900"
                  />
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-1">
              <label htmlFor="email" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="alex@example.com"
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#2a6ee5]/50 transition-all text-gray-900"
                />
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Password
                </label>
                {!isSignUp && (
                  <Link href="/forgot-password" className="text-xs font-semibold text-[#2a6ee5] hover:underline">
                    Forgot password?
                  </Link>
                )}
              </div>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#2a6ee5]/50 transition-all text-gray-900"
                />
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              </div>
            </div>

            {/* Action Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#2a6ee5] hover:bg-[#184dd4] text-white font-bold py-3 rounded-xl transition-all shadow-md shadow-[#2a6ee5]/20 mt-2 cursor-pointer text-sm"
            >
              {isSignUp ? "Create Account with Email" : "Sign In with Email"}
            </button>
          </form>

          {/* Alternative Phone Number Login Section */}
          <PhoneAuthSection />

        </div>
      </div>
    </main>
  );
}