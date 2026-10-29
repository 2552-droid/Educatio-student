import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { 
  FaArrowLeft, 
  FaUser, 
  FaShieldAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaIdBadge, 
  FaGraduationCap,
  FaSignOutAlt,
  FaGlobeAmericas
} from "react-icons/fa";

// Define an extended interface for the session user to include custom fields
interface ExtendedUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  id?: string;
  phone?: string | null;
  country?: string | null;
}

export default async function FullProfilePage() {
  const session = await auth();

  // If user is not signed in, redirect them to login
  if (!session?.user) {
    redirect("/login");
  }

  // Cast session.user to ExtendedUser to resolve TypeScript property errors
  const user = session.user as ExtendedUser;

  // Split name into first and last name if available
  const fullName = user.name || "Academic Member";
  const nameParts = fullName.split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-900 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white rounded-3xl border border-gray-100 shadow-xl p-8 sm:p-10 space-y-8 relative overflow-hidden">

        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-[#2a6ee5] transition-colors"
          >
            <FaArrowLeft size={10} /> Back to Home
          </Link>
          <div className="text-xl font-extrabold text-[#2a6ee5] tracking-tight">
            Educatio Profile
          </div>
        </div>

        {/* Profile Header & Avatar */}
        <div className="text-center space-y-3">
          <div className="w-24 h-24 bg-blue-50 text-[#2a6ee5] rounded-full flex items-center justify-center text-3xl font-bold mx-auto border-4 border-blue-100 shadow-inner overflow-hidden">
            {user.image ? (
              <img
                src={user.image}
                alt="Profile Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <FaUser />
            )}
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">
              {fullName}
            </h1>
            <p className="text-xs text-gray-500 mt-1 flex items-center justify-center gap-1.5">
              <FaEnvelope className="text-gray-400" /> {user.email || "Phone Authenticated User"}
            </p>
          </div>
        </div>

        {/* Comprehensive Account Details Grid */}
        <div className="bg-gray-50 rounded-3xl p-6 space-y-4 border border-gray-100 text-xs sm:text-sm">
          
          {/* First Name */}
          <div className="flex items-center justify-between py-2 border-b border-gray-200/60">
            <span className="text-gray-400 font-semibold flex items-center gap-2">
              <FaUser className="text-xs" /> First Name
            </span>
            <span className="font-semibold text-gray-800">{firstName}</span>
          </div>

          {/* Last Name */}
          <div className="flex items-center justify-between py-2 border-b border-gray-200/60">
            <span className="text-gray-400 font-semibold flex items-center gap-2">
              <FaUser className="text-xs" /> Last Name
            </span>
            <span className="font-semibold text-gray-800">{lastName || "Not Provided"}</span>
          </div>

          {/* Phone Contact */}
          <div className="flex items-center justify-between py-2 border-b border-gray-200/60">
            <span className="text-gray-400 font-semibold flex items-center gap-2">
              <FaPhoneAlt className="text-xs" /> Phone Contact
            </span>
            <span className="font-semibold text-gray-800">{user.phone || "+1 (555) 382-9011"}</span>
          </div>

          {/* Region / Country of Residence */}
          <div className="flex items-center justify-between py-2 border-b border-gray-200/60">
            <span className="text-gray-400 font-semibold flex items-center gap-2">
              <FaGlobeAmericas className="text-xs" /> Country / Region
            </span>
            <span className="font-semibold text-gray-800">
              {user.country || "Nigeria"}
            </span>
          </div>

          {/* Student Account ID */}
          <div className="flex items-center justify-between py-2 border-b border-gray-200/60">
            <span className="text-gray-400 font-semibold flex items-center gap-2">
              <FaIdBadge className="text-xs" /> Student Account ID
            </span>
            <span className="font-mono font-medium text-gray-700">
              {user.id || "EDU-84920"}
            </span>
          </div>

          {/* Authentication Provider Status */}
          <div className="flex items-center justify-between py-2 border-b border-gray-200/60">
            <span className="text-gray-400 font-semibold flex items-center gap-2">
              <FaShieldAlt className="text-xs" /> Authentication Status
            </span>
            <span className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full text-[11px]">
              Verified Active Session
            </span>
          </div>

          {/* Registered Hubs */}
          <div className="pt-2">
            <span className="text-gray-400 font-semibold flex items-center gap-2 mb-2">
              <FaGraduationCap className="text-xs text-[#2a6ee5]" /> Registered Hubs & Courses
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="bg-blue-100 text-[#2a6ee5] px-3 py-1 rounded-xl font-bold text-xs">
                Computer Science
              </span>
              <span className="bg-red-100 text-[#E73F1E] px-3 py-1 rounded-xl font-bold text-xs">
                Medicine & Surgery
              </span>
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-xl font-bold text-xs">
                Law
              </span>
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <Link
            href="/dashboard"
            className="block w-full text-center bg-[#2a6ee5] hover:bg-blue-600 text-white font-bold py-3.5 rounded-2xl transition-all shadow-md text-xs sm:text-sm"
          >
            Go to Student Dashboard
          </Link>

          {/* Server Action Sign Out Form */}
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/login" });
            }}
          >
            <button
              type="submit"
              className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-bold py-3.5 rounded-2xl transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <FaSignOutAlt /> Sign Out of Account
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}