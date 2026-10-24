// import { auth } from "@/auth";
import { auth } from "@/auth";
import Link from "next/link";
import {
  FaComments,
  FaThumbsUp,
  FaBookmark,
  FaMagnifyingGlass,
  FaFire,
  FaLaptopCode,
  FaStethoscope,
  FaScaleBalanced,
  FaPlus,
  FaUser,
  FaUserSecret,
  FaHandshakeAngle,
  FaArrowRight,
} from "react-icons/fa6";

export default async function CommunityPage() {
  // Retrieve session server-side using Auth.js (NextAuth v5) API
  const session = await auth();

  // Mock community discussion threads across Educatio disciplines
  const discussions = [
    {
      id: "disc-1",
      title: "Best practices for microservices architecture in scalable enterprise systems?",
      category: "Computer Science & Tech",
      categoryColor: "bg-blue-100 text-[#2a6ee5]",
      author: {
        name: "Dr. Evelyn Vance",
        role: "Senior Software Engineer",
      },
      timeAgo: "2 hours ago",
      likes: 42,
      replies: 12,
      excerpt:
        "When designing distributed systems across multi-region clusters, managing eventual consistency and transaction boundaries can become complex. What strategies do you prefer?",
    },
    {
      id: "disc-2",
      title: "Understanding clinical pharmacology pathways and drug interactions effectively",
      category: "Medicine & Health",
      categoryColor: "bg-amber-100 text-amber-800",
      author: {
        name: "Marcus Thorne",
        role: "Medical Research Fellow",
      },
      timeAgo: "4 hours ago",
      likes: 38,
      replies: 9,
      excerpt:
        "Sharing my study notes on pharmacokinetics, clearance rates, and receptor binding affinities. Feel free to add your own clinical summaries below!",
    },
    {
      id: "disc-3",
      title: "Constitutional precedents and landmark case studies summary for Semester 1",
      category: "Law & Public Policy",
      categoryColor: "bg-purple-100 text-purple-800",
      author: {
        name: "Sarah Jenkins",
        role: "Constitutional Law Scholar",
      },
      timeAgo: "1 day ago",
      likes: 65,
      replies: 24,
      excerpt:
        "I’ve compiled a comprehensive brief covering major supreme court judgments from the past decade. Perfect for exam revision.",
    },
  ];

  const trendingTopics = [
    { tag: "#Microservices", posts: "1.4k posts" },
    { tag: "#ClinicalTrials", posts: "980 posts" },
    { tag: "#ReactNextRouter", posts: "2.3k posts" },
    { tag: "#LegalPrecedents", posts: "640 posts" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-900 pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* COMMUNITY HERO BANNER */}
        <div className="bg-[#2a6ee5] rounded-3xl p-8 sm:p-10 text-white shadow-lg relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-3 z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#FFDD9C] border border-white/20">
              <FaFire className="text-amber-300" /> Active Student Network
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Educatio <span className="text-[#FFDD9C]">Community Hub</span>
            </h1>
            <p className="text-blue-100 text-sm sm:text-base max-w-xl leading-relaxed">
              Connect with fellow scholars, collaborate on multi-discipline study guides, and debate complex academic topics.
            </p>
          </div>

          <div className="z-10 flex items-center gap-3">
            {session?.user ? (
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-2xl flex items-center gap-3 text-white">
                <div className="w-9 h-9 rounded-full bg-[#FFDD9C] text-gray-900 font-bold flex items-center justify-center text-sm shadow">
                  {session.user.name?.[0] || <FaUser />}
                </div>
                <div>
                  <p className="text-xs text-blue-100 font-medium">Logged in as</p>
                  <p className="text-sm font-bold truncate max-w-[140px]">{session.user.name}</p>
                </div>
              </div>
            ) : (
              <Link
                href="/auth?mode=signin"
                className="bg-[#FFDD9C] hover:bg-amber-300 text-gray-900 font-bold px-6 py-3.5 rounded-2xl transition-all shadow-md text-sm whitespace-nowrap"
              >
                Sign In to Post
              </Link>
            )}
          </div>

          {/* Background Decorative Gradient */}
          <div className="absolute -right-16 -top-16 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        </div>

        {/* MAIN LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT 2 COLUMNS: DISCUSSIONS FEED */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* SEARCH & FILTER BAR */}
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative w-full sm:w-80">
                <FaMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                <input
                  type="text"
                  placeholder="Search discussions or tags..."
                  className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/40 text-gray-900 font-medium"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button className="bg-[#2a6ee5] text-white text-xs font-bold px-4 py-2.5 rounded-xl whitespace-nowrap shadow-sm">
                  Trending
                </button>
                <button className="bg-gray-100 text-gray-600 hover:bg-gray-200 text-xs font-bold px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap">
                  Latest
                </button>
                <button className="bg-gray-100 text-gray-600 hover:bg-gray-200 text-xs font-bold px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap">
                  Unanswered
                </button>
              </div>
            </div>

            {/* DISCUSSION THREADS LIST */}
            <div className="space-y-4">
              {discussions.map((disc) => (
                <div
                  key={disc.id}
                  className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all space-y-4 group"
                >
                  <div>
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${disc.categoryColor}`}>
                      {disc.category}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-2.5 group-hover:text-[#2a6ee5] transition-colors leading-snug">
                      {disc.title}
                    </h2>
                  </div>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {disc.excerpt}
                  </p>

                  {/* Author & Metrics Footer */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 border-t border-gray-100 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center font-bold text-gray-700 text-xs overflow-hidden">
                        <FaUser className="text-gray-400 text-sm" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900">{disc.author.name}</p>
                        <p className="text-[10px] text-gray-400">{disc.author.role} • {disc.timeAgo}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-bold text-gray-500">
                      <button className="flex items-center gap-1.5 hover:text-[#2a6ee5] transition-colors bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100">
                        <FaThumbsUp /> {disc.likes}
                      </button>
                      <button className="flex items-center gap-1.5 hover:text-[#2a6ee5] transition-colors bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100">
                        <FaComments /> {disc.replies} Replies
                      </button>
                      <button className="hover:text-gray-900 transition-colors bg-gray-50 p-2 rounded-xl border border-gray-100">
                        <FaBookmark />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">
            
            {/* EDUCATIO ECO FEATURE CARD */}
            <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white p-6 rounded-3xl shadow-md space-y-4 relative overflow-hidden">
              <div className="relative z-10 space-y-2">
                <span className="bg-[#FFDD9C] text-gray-900 font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                  New Feature
                </span>
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <FaUserSecret className="text-[#FFDD9C]" /> Educatio Eco
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Struggling with a course? Ask for peer tutoring completely anonymously. If unanswered in 24 hours, it auto-escalates to a lecturer!
                </p>
              </div>

              <div className="relative z-10 pt-2">
                <Link
                  href="/community/eco"
                  className="w-full bg-[#2a6ee5] hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-2xl transition-all shadow-sm text-xs flex items-center justify-center gap-2"
                >
                  <FaHandshakeAngle /> Open Eco Network <FaArrowRight className="text-[10px]" />
                </Link>
              </div>

              {/* Background Glow */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#2a6ee5]/30 rounded-full blur-2xl pointer-events-none" />
            </div>

            {/* START DISCUSSION CARD */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <h3 className="font-bold text-gray-900 text-base">Have a question or note?</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Share your research insights, project dilemmas, or study queries with the Educatio scholarly network.
              </p>
              {session?.user ? (
                <button className="w-full bg-[#2a6ee5] hover:bg-blue-600 text-white font-bold py-3 rounded-2xl transition-colors text-xs flex items-center justify-center gap-2 shadow-sm">
                  <FaPlus /> Start New Discussion
                </button>
              ) : (
                <Link
                  href="/auth?mode=signin"
                  className="block text-center w-full bg-gray-900 hover:bg-black text-white font-bold py-3 rounded-2xl transition-colors text-xs shadow-sm"
                >
                  Sign In to Participates
                </Link>
              )}
            </div>

            {/* TRENDING TOPICS */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                <FaFire className="text-[#2a6ee5]" /> Trending Tags
              </h3>
              <div className="space-y-2.5">
                {trendingTopics.map((topic, idx) => (
                  <div key={idx} className="flex justify-between items-center p-2.5 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer">
                    <span className="text-xs font-bold text-gray-800">{topic.tag}</span>
                    <span className="text-[11px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-md">
                      {topic.posts}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* FACULTY CHANNELS */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <h3 className="font-bold text-gray-900 text-base">Faculty Channels</h3>
              <div className="space-y-2 text-xs font-semibold text-gray-600">
                <Link href="/courses/software-engineering" className="flex items-center gap-3 p-2.5 hover:bg-blue-50 hover:text-[#2a6ee5] rounded-xl transition-colors">
                  <FaLaptopCode className="text-sm text-[#2a6ee5]" /> Computer Science & Tech
                </Link>
                <Link href="/courses/nursing" className="flex items-center gap-3 p-2.5 hover:bg-amber-50 hover:text-amber-800 rounded-xl transition-colors">
                  <FaStethoscope className="text-sm text-amber-600" /> Medicine & Health
                </Link>
                <Link href="/courses/peace-and-conflict" className="flex items-center gap-3 p-2.5 hover:bg-purple-50 hover:text-purple-800 rounded-xl transition-colors">
                  <FaScaleBalanced className="text-sm text-purple-600" /> Arts, Law & Social Sciences
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}