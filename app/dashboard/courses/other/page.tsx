"use client";

import { useState } from "react";
import { 
  FaLaptopCode, 
  FaStethoscope, 
  FaBalanceScale, 
  FaHardHat, 
  FaDraftingCompass, 
  FaChartLine, 
  FaAtom, 
  FaBook, 
  FaGlobe, 
  FaGraduationCap,
  FaSearch,
  FaCheckCircle
} from "react-icons/fa";

export default function OtherCoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>(["Computer Science", "Medicine"]);

  const toggleEnroll = (courseTitle: string) => {
    if (enrolledCourses.includes(courseTitle)) {
      setEnrolledCourses(enrolledCourses.filter((c) => c !== courseTitle));
    } else {
      setEnrolledCourses([...enrolledCourses, courseTitle]);
    }
  };

  const courses = [
    {
      title: "Computer Science",
      category: "Technology",
      description: "Algorithms, Data Structures, System Design, and Full-Stack Web Development.",
      modules: 42,
      icon: <FaLaptopCode className="text-blue-600 text-3xl" />,
      bg: "bg-blue-50 border-blue-100",
    },
    {
      title: "Medicine & Health Sciences",
      category: "Health",
      description: "Human Anatomy, Pharmacology, Pathology, and Clinical Guidelines.",
      modules: 38,
      icon: <FaStethoscope className="text-red-600 text-3xl" />,
      bg: "bg-red-50 border-red-100",
    },
    {
      title: "Law & Jurisprudence",
      category: "Humanities",
      description: "Constitutional Law, Criminal Justice, Torts, and Case Brief Analysis.",
      modules: 30,
      icon: <FaBalanceScale className="text-amber-700 text-3xl" />,
      bg: "bg-amber-50 border-amber-100",
    },
    {
      title: "Engineering (Civil & Mechanical)",
      category: "Technology",
      description: "Structural Mechanics, Thermodynamics, Fluid Dynamics, and CAD Design.",
      modules: 35,
      icon: <FaHardHat className="text-orange-600 text-3xl" />,
      bg: "bg-orange-50 border-orange-100",
    },
    {
      title: "Architecture & Urban Design",
      category: "Arts",
      description: "Building Information Modeling (BIM), Architectural History, and Spatial Planning.",
      modules: 25,
      icon: <FaDraftingCompass className="text-purple-600 text-3xl" />,
      bg: "bg-purple-50 border-purple-100",
    },
    {
      title: "Business & Finance",
      category: "Business",
      description: "Corporate Finance, Macroeconomics, Strategic Marketing, and Accounting.",
      modules: 40,
      icon: <FaChartLine className="text-emerald-600 text-3xl" />,
      bg: "bg-emerald-50 border-emerald-100",
    },
    {
      title: "Physics & Applied Sciences",
      category: "Science",
      description: "Quantum Mechanics, Newtonian Physics, Electromagnetism, and Vectors.",
      modules: 28,
      icon: <FaAtom className="text-cyan-600 text-3xl" />,
      bg: "bg-cyan-50 border-cyan-100",
    },
    {
      title: "Global History & Political Science",
      category: "Humanities",
      description: "International Relations, World History, Public Policy, and Governance.",
      modules: 22,
      icon: <FaGlobe className="text-indigo-600 text-3xl" />,
      bg: "bg-indigo-50 border-indigo-100",
    },
    {
      title: "Psychology & Behavioral Science",
      category: "Health",
      description: "Cognitive Psychology, Developmental Stages, and Neuropsychology.",
      modules: 26,
      icon: <FaGraduationCap className="text-pink-600 text-3xl" />,
      bg: "bg-pink-50 border-pink-100",
    },
  ];

  const categories = ["All", "Technology", "Health", "Humanities", "Business", "Science", "Arts"];

  // Filter courses based on search query and category tab
  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Explore All Courses & Hubs</h1>
          <p className="text-gray-500 text-sm mt-1">
            Select your discipline to customize your study materials, lectures, and resource library.
          </p>
        </div>
        <div className="bg-[#FFDD9C] text-black text-xs font-bold px-4 py-2 rounded-xl shadow-sm">
          {enrolledCourses.length} Hubs Enrolled
        </div>
      </div>

      {/* Search & Filter Section */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-96">
          <FaSearch className="absolute left-4 top-3.5 text-gray-400 text-sm" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search disciplines (e.g., Engineering, Finance)..."
            className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? "bg-[#2a6ee5] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center py-12">No courses found matching your query.</p>
        ) : (
          filteredCourses.map((course) => {
            const isEnrolled = enrolledCourses.includes(course.title);
            return (
              <div
                key={course.title}
                className={`p-6 rounded-2xl border shadow-sm flex flex-col justify-between space-y-6 transition-all hover:shadow-md bg-white`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className={`p-4 rounded-2xl ${course.bg}`}>
                      {course.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                      {course.category}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-bold text-gray-900 text-xl">{course.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{course.description}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-400">
                    {course.modules} Modules Available
                  </span>
                  <button
                    onClick={() => toggleEnroll(course.title)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm ${
                      isEnrolled
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-[#2a6ee5] text-white hover:bg-[#1d50ab]"
                    }`}
                  >
                    {isEnrolled ? (
                      <>
                        <FaCheckCircle /> Enrolled
                      </>
                    ) : (
                      "Join Hub"
                    )}
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}