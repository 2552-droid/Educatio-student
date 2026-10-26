import Link from "next/link";
import {
  FaBook,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
  FaBalanceScale,
  FaStethoscope,
  FaLaptopCode,
  FaDownload,
  FaCalendarAlt,
  FaExclamationCircle,
} from "react-icons/fa";

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      {/* WELCOME BANNER */}
      <section className="bg-gradient-to-r from-[#2a6ee5] to-[#1d50ab] text-white p-8 rounded-3xl shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="bg-[#FFDD9C] text-black font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            Student Workspace
          </span>
          <h1 className="text-3xl md:text-4xl font-bold pt-1">
            Welcome back, Alex! 👋
          </h1>
          <p className="text-gray-100 text-sm md:text-base">
            You've completed <span className="font-bold text-[#FFDD9C]">75%</span> of your weekly study target. Keep up the momentum!
          </p>
        </div>
        <Link
          href="/dashboard/library"
          className="bg-[#FFDD9C] text-black font-bold px-6 py-3 rounded-full hover:bg-white transition-colors flex items-center gap-2 text-sm shadow-sm"
        >
          <span>Explore Library</span>
          <FaArrowRight />
        </Link>
      </section>

      {/* STATS OVERVIEW */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-blue-50 text-[#2a6ee5] rounded-2xl text-2xl">
            <FaBook />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Enrolled Hubs
            </p>
            <h3 className="text-2xl font-bold text-gray-900">3 Courses</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-amber-50 text-[#E73F1E] rounded-2xl text-2xl">
            <FaClock />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Hours Studied
            </p>
            <h3 className="text-2xl font-bold text-gray-900">28.5 hrs</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl text-2xl">
            <FaCheckCircle />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Completed
            </p>
            <h3 className="text-2xl font-bold text-gray-900">42 Modules</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-purple-50 text-purple-600 rounded-2xl text-2xl">
            <FaCalendarAlt />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Upcoming Exams
            </p>
            <h3 className="text-2xl font-bold text-gray-900">2 Pending</h3>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT & CENTER COLUMN: Course Progress & Quick Downloads */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Active Course Progress */}
          <section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Active Disciplines</h2>
                <p className="text-sm text-gray-500">Pick up where you left off</p>
              </div>
              <Link
                href="/dashboard/courses"
                className="text-sm text-[#2a6ee5] font-semibold hover:underline"
              >
                View all
              </Link>
            </div>

            <div className="space-y-4">
              {/* CS Hub */}
              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 text-[#2a6ee5] rounded-xl text-xl">
                    <FaLaptopCode />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Computer Science</h3>
                    <p className="text-xs text-gray-500">Data Structures & Algorithms</p>
                  </div>
                </div>
                <div className="w-full sm:w-48 space-y-1">
                  <div className="flex justify-between text-xs text-[#2a6ee5] font-semibold">
                    <span>Progress</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#2a6ee5] h-full rounded-full w-[80%]" />
                  </div>
                </div>
              </div>

              {/* Medicine Hub */}
              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-red-100 text-[#E73F1E] rounded-xl text-xl">
                    <FaStethoscope />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Medicine</h3>
                    <p className="text-xs text-gray-500">Human Anatomy & Physiology</p>
                  </div>
                </div>
                <div className="w-full sm:w-48 space-y-1">
                  <div className="flex justify-between text-xs text-[#E73F1E] font-semibold">
                    <span>Progress</span>
                    <span>55%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#E73F1E] h-full rounded-full w-[55%]" />
                  </div>
                </div>
              </div>

              {/* Law Hub */}
              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-amber-100 text-amber-700 rounded-xl text-xl">
                    <FaBalanceScale />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Law</h3>
                    <p className="text-xs text-gray-500">Constitutional Law Cases</p>
                  </div>
                </div>
                <div className="w-full sm:w-48 space-y-1">
                  <div className="flex justify-between text-xs text-amber-700 font-semibold">
                    <span>Progress</span>
                    <span>30%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full w-[30%]" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          
          {/* Recent Resource Downloads */}
<section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
  <h2 className="text-xl font-bold text-gray-900">Recently Saved Materials</h2>
  
  <div className="divide-y divide-gray-100">
    
    {/* Item 1: System Design Cheatsheet */}
    <div className="py-3 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <FaDownload className="text-gray-400 text-sm" />
        <div>
          <p className="text-sm font-semibold text-gray-800">
            System Design Architecture Cheatsheet.pdf
          </p>
          <p className="text-xs text-gray-400">Computer Science • Added yesterday</p>
        </div>
      </div>
      <a
        href="/downloads/system-design-cheatsheet.pdf"
        download="System Design Architecture Cheatsheet.pdf"
        className="text-xs font-semibold text-[#2a6ee5] hover:underline cursor-pointer"
      >
        Download
      </a>
    </div>

    {/* Item 2: Cardiovascular Lecture Notes */}
    <div className="py-3 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <FaDownload className="text-gray-400 text-sm" />
        <div>
          <p className="text-sm font-semibold text-gray-800">
            Cardiovascular System Lecture Notes.pdf
          </p>
          <p className="text-xs text-gray-400">Medicine • Added 3 days ago</p>
        </div>
      </div>
      <a
        href="/downloads/cardiovascular-system-notes.pdf"
        download="Cardiovascular System Lecture Notes.pdf"
        className="text-xs font-semibold text-[#2a6ee5] hover:underline cursor-pointer"
      >
        Download
      </a>
    </div>

    {/* Item 3: Landmark Supreme Court Cases */}
    <div className="py-3 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <FaDownload className="text-gray-400 text-sm" />
        <div>
          <p className="text-sm font-semibold text-gray-800">
            Landmark Supreme Court Cases Summary.pdf
          </p>
          <p className="text-xs text-gray-400">Law • Added 5 days ago</p>
        </div>
      </div>
      <a
        href="/downloads/supreme-court-cases-summary.pdf"
        download="Landmark Supreme Court Cases Summary.pdf"
        className="text-xs font-semibold text-[#2a6ee5] hover:underline cursor-pointer"
      >
        Download
      </a>
    </div>

  </div>
</section>

        </div>

        {/* RIGHT COLUMN: Deadlines & Notifications */}
        <div className="space-y-8">
          
          {/* Upcoming Schedule (Now Interactive) */}
          <section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Upcoming Deadlines</h2>

            <div className="space-y-4">
              {/* CS Mock Exam -> Links to Flashcards/Study */}
              <Link href="/flashcards" className="block group">
                <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3 transition-all group-hover:bg-red-100/70">
                  <FaExclamationCircle className="text-[#E73F1E] mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#2a6ee5] transition-colors">
                      CS Midterm Mock Exam
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">Tomorrow, 10:00 AM</p>
                    <span className="inline-block text-[10px] bg-red-200 text-red-800 font-bold px-2 py-0.5 rounded mt-2">
                      High Priority • Start Review
                    </span>
                  </div>
                </div>
              </Link>

              {/* Medicine Lab Report -> Links to Library or Course */}
              <Link href="/dashboard/library" className="block group">
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 flex items-start gap-3 transition-all group-hover:bg-amber-100/70">
                  <FaCalendarAlt className="text-amber-600 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-amber-800 transition-colors">
                      Medicine Lab Report Submission
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">In 3 days (Friday)</p>
                    <span className="inline-block text-[10px] bg-amber-200 text-amber-800 font-bold px-2 py-0.5 rounded mt-2">
                      Medium Priority • View Guidelines
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Quick Study Banner */}
          <section className="bg-[#fdf6e2] border border-amber-200 p-6 rounded-3xl shadow-sm space-y-4">
            <div className="space-y-1">
              <h3 className="font-extrabold text-gray-900 text-base">Need Quick Study Flashcards?</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Review key terms and practice quizzes designed for your upcoming exams.
              </p>
            </div>
            
            <Link href="/flashcards" className="block">
              <button className="w-full bg-black text-white font-bold py-3 px-4 rounded-2xl text-xs hover:bg-gray-800 transition-all shadow-sm cursor-pointer text-center">
                Start Practice Quiz
              </button>
            </Link>
          </section>

        </div>

      </div>
    </div>
  );
}