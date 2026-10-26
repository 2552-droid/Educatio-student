import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft, FaUser, FaEnvelope, FaShieldAlt } from "react-icons/fa";

export default async function ProfilePage() {
  const session = await auth();

  // If user is not logged in, redirect them to the login page
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans text-gray-900">
      <div className="max-w-md w-full bg-white rounded-3xl border border-gray-100 shadow-xl p-8 space-y-6 relative overflow-hidden">

        {/* Top Bar / Back to Home */}
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

        {/* Profile Header */}
        <div className="text-center space-y-3 pt-2">
          <div className="w-20 h-20 bg-blue-50 text-[#2a6ee5] rounded-full flex items-center justify-center text-3xl font-bold mx-auto border-2 border-blue-100 shadow-inner">
            {session.user.image ? (
              <img
                src={session.user.image}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <FaUser />
            )}
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">
              {session.user.name || "Academic Member"}
            </h1>
            <p className="text-xs text-gray-500 mt-0.5">
              {session.user.email || "Phone Authenticated User"}
            </p>
          </div>
        </div>

        {/* User Details Card */}
        <div className="bg-gray-50 rounded-2xl p-5 space-y-3 border border-gray-100 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-semibold uppercase tracking-wider">Account ID</span>
            <span className="font-mono text-gray-700 truncate max-w-[200px]">{session.user.id || "N/A"}</span>
          </div>
          <div className="border-t border-gray-200/60 my-1"></div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-semibold uppercase tracking-wider">Email Address</span>
            <span className="text-gray-700 font-medium">{session.user.email || "Not linked"}</span>
          </div>
        </div>

        {/* Sign Out Form */}
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/login" });
          }}
        >
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-2xl transition-all shadow-md text-sm cursor-pointer"
          >
            Sign Out of Account
          </button>
        </form>

        {/* Security Badge */}
        <div className="pt-2 flex justify-center">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
            <FaShieldAlt className="text-emerald-600" /> Secure Active Session
          </div>
        </div>

      </div>
    </main>
  );
}