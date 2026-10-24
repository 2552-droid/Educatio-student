import Image from "next/image";
import Link from "next/link";
import {
  FaBookOpen,
  FaUserGraduate,
  FaStethoscope,
  FaLaptopCode,
  FaBalanceScale,
  FaCertificate,
  FaArrowRight
} from "react-icons/fa";

export const Theme = {
  primaryColor: "#E73F1E",
  secondaryColor: "#FFDD9C"
};

export default function Home() {
  return (
    <main className="min-h-dvh font-sans text-gray-900 bg-gray-50">

      {/* HERO SECTION */}
      <section className="min-h-dvh bg-[url('/bg.jpeg')] bg-no-repeat bg-center bg-cover">
        <div className="min-h-dvh bg-black/70 text-white flex flex-col justify-center items-center px-4">
          <blockquote className="w-full md:w-2/3 lg:w-1/2 mx-auto space-y-6 flex flex-col items-center">
            <div className="bg-[#FFDD9C] text-black px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-2">
              Welcome to Educatio
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-center leading-tight">
              Knowledge is <span className="text-[#2a6ee5]">Power</span>
            </h1>
            <p className="tracking-wider text-lg md:text-xl text-center text-gray-200 max-w-xl">
              Empowering students across disciplines. Access premium educational materials tailored for Law, Medicine, Computer Science, and beyond.
            </p>
            <Link
              href="community"
              className="bg-white text-black flex items-center w-fit p-2 pr-2 rounded-full gap-4 hover:bg-gray-200 transition-colors mt-4"
            >
              <span className="pl-4 font-semibold">See Our Community</span>
              <button className="text-white w-10 h-10 rounded-full flex items-center justify-center bg-[#2a6ee5] hover:scale-105 transition-transform">
                <FaArrowRight />
              </button>
            </Link>
          </blockquote>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">Why Study With Educatio?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide curated, high-quality resources to help you master your coursework and excel in your academic journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center space-y-4">
            <div className="bg-[#FFDD9C]/30 p-4 rounded-full">
              <FaBookOpen className="text-4xl text-[#2a6ee5]" />
            </div>
            <h3 className="text-xl font-bold">Extensive Library</h3>
            <p className="text-gray-600 leading-relaxed">
              Access thousands of textbooks, lecture notes, and research papers tailored to your exact syllabus.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center space-y-4">
            <div className="bg-[#FFDD9C]/30 p-4 rounded-full">
              <FaCertificate className="text-4xl text-[#2a6ee5]" />
            </div>
            <h3 className="text-xl font-bold">Expert Curated</h3>
            <p className="text-gray-600 leading-relaxed">
              All materials are reviewed by academic professionals to ensure accuracy and relevance.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center space-y-4">
            <div className="bg-[#FFDD9C]/30 p-4 rounded-full">
              <FaUserGraduate className="text-4xl text-[#2a6ee5]" />
            </div>
            <h3 className="text-xl font-bold">Exam Preparation</h3>
            <p className="text-gray-600 leading-relaxed">
              Test your knowledge with past papers, mock exams, and comprehensive study guides.
            </p>
          </div>
        </div>
      </section>

      
           {/* CTA SECTION */}
      <section className="bg-[#2a6ee5] py-20 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to ace your next semester?</h2>
          <p className="text-xl text-[#FFDD9C]">
            Join thousands of students who are already using Educatio to elevate their grades.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link href="/signup" className="bg-[#FFDD9C] text-black font-bold py-4 px-8 rounded-full hover:bg-white transition-colors">
              Create Free Account
            </Link>
            <Link href="/about" className="bg-black/20 text-white font-bold py-4 px-8 rounded-full hover:bg-black/30 transition-colors border border-white/30">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center">
        <p>© {new Date().getFullYear()} Educatio. All rights reserved.</p>
      </footer>

    </main>
  );
}

