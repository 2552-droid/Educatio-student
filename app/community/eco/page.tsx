"use client";

import { useState } from "react";
import { 
  FaUserSecret, 
  FaPaperclip, 
  FaCalendarAlt, 
  FaComments, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaClock, 
  FaLaptopCode, 
  FaStethoscope, 
  FaScaleBalanced,
  FaArrowRight,
  FaUserGraduate
} from "react-icons/fa";

export default function EducatioEcoPage() {
  const [activeTab, setActiveTab] = useState<"requests" | "ask">("requests");
  
  // Form State
  const [course, setCourse] = useState("Computer Science & Tech");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mode, setMode] = useState<"chat" | "physical">("chat");
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Mock Active Requests Pool
  const [requests, setRequests] = useState([
    {
      id: "eco-1",
      anonId: "Anonymous Scholar #309",
      course: "Computer Science & Tech",
      title: "Need help understanding pointer arithmetic and memory allocation in C++",
      description: "I am stuck on dynamic memory segments. Would prefer a quick text chat or code review session.",
      mode: "In-App Secure Chat",
      status: "Pending Peer Match",
      timeAgo: "2 hours left before admin escalation",
      assignedAdmin: "Prof. Alan Turing & Dr. Grace Hopper",
      hasAttachment: true,
      attachmentName: "Memory_Allocation_Notes.pdf",
    },
    {
      id: "eco-2",
      anonId: "Anonymous Scholar #112",
      course: "Medicine & Health",
      title: "Struggling to memorize cardiac action potentials and ion channel phases",
      description: "Looking for someone for a physical 1-on-1 walkthrough at the campus library study rooms.",
      mode: "Physical 1-on-1 Tutorial",
      status: "Escalated to Lecturer",
      timeAgo: "Escalated 1 hour ago",
      assignedAdmin: "Dr. Robert Cardio & Prof. Sarah Heal",
      hasAttachment: false,
      attachmentName: "",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;

    const newReq = {
      id: `eco-${Date.now()}`,
      anonId: `Anonymous Scholar #${Math.floor(100 + Math.random() * 900)}`,
      course,
      title,
      description,
      mode: mode === "chat" ? "In-App Secure Chat" : "Physical 1-on-1 Tutorial",
      status: "Pending Peer Match",
      timeAgo: "24 hours left before admin escalation",
      assignedAdmin: course.includes("Computer") 
        ? "Prof. Alan Turing & Dr. Grace Hopper" 
        : course.includes("Medicine") 
        ? "Dr. Robert Cardio & Prof. Sarah Heal" 
        : "Prof. John Marshall & Dr. Elizabeth Reed",
      hasAttachment: !!fileName,
      attachmentName: fileName,
    };

    setRequests([newReq, ...requests]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setActiveTab("requests");
      setTitle("");
      setDescription("");
      setFileName("");
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-900 pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* HERO BANNER */}
        <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-3 z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#FFDD9C]/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#FFDD9C] border border-[#FFDD9C]/30">
              <FaUserSecret /> Educatio Eco Network
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Anonymous <span className="text-[#FFDD9C]">Peer & Lecturer Tutoring</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Ask for help completely anonymously. Connect via secure in-app chat or physical 1-on-1 sessions. Unanswered requests automatically escalate to senior course professors after 24 hours.
            </p>
          </div>

          <div className="z-10 flex gap-3">
            <button
              onClick={() => setActiveTab("requests")}
              className={`px-5 py-3 rounded-2xl font-bold text-xs transition-all shadow-sm ${
                activeTab === "requests" 
                  ? "bg-[#2a6ee5] text-white" 
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
              }`}
            >
              Open Requests Pool
            </button>
            <button
              onClick={() => setActiveTab("ask")}
              className={`px-5 py-3 rounded-2xl font-bold text-xs transition-all shadow-sm ${
                activeTab === "ask" 
                  ? "bg-[#FFDD9C] text-gray-900" 
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
              }`}
            >
              + Ask Anonymously
            </button>
          </div>

          {/* Background Glow */}
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-[#2a6ee5]/20 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* TAB 1: REQUESTS POOL */}
        {activeTab === "requests" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Active Anonymous Help Pool</h2>
                <p className="text-xs text-gray-500 mt-1">Accept a student request to reveal identities and start mentoring.</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold bg-blue-50 text-[#2a6ee5] px-4 py-2 rounded-xl">
                <FaShieldAlt /> 100% Identity Protected Until Match
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requests.map((req) => (
                <div key={req.id} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold bg-gray-100 text-gray-700 px-3 py-1 rounded-full flex items-center gap-1.5">
                        <FaUserSecret className="text-[#2a6ee5]" /> {req.anonId}
                      </span>
                      <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${
                        req.status.includes("Escalated") ? "bg-amber-100 text-amber-800" : "bg-blue-100 text-[#2a6ee5]"
                      }`}>
                        {req.status}
                      </span>
                    </div>

                    <h3 className="font-bold text-gray-900 text-base">{req.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{req.description}</p>

                    {req.hasAttachment && (
                      <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 p-2.5 rounded-xl text-xs text-gray-700">
                        <FaPaperclip className="text-[#2a6ee5]" />
                        <span className="font-semibold truncate">{req.attachmentName}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    <div className="flex flex-wrap justify-between items-center text-[11px] text-gray-500 gap-2">
                      <span className="flex items-center gap-1 font-medium">
                        <FaClock className="text-amber-500" /> {req.timeAgo}
                      </span>
                      <span className="bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-200 font-medium">
                        Preference: <strong>{req.mode}</strong>
                      </span>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100 flex items-center justify-between">
                      <div className="text-[11px]">
                        <p className="text-gray-400 font-semibold">Assigned Course Admins:</p>
                        <p className="font-bold text-gray-800">{req.assignedAdmin}</p>
                      </div>
                      <button 
                        onClick={() => alert(`Connection requested! Once approved by ${req.anonId} or course admin, secure session opens.`)}
                        className="bg-[#2a6ee5] hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-xl text-xs transition-colors shadow-sm whitespace-nowrap"
                      >
                        Offer Help
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: ASK ANONYMOUSLY FORM */}
        {activeTab === "ask" && (
          <div className="max-w-2xl mx-auto bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-md space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-bold text-gray-900">Create Anonymous Request</h2>
              <p className="text-xs text-gray-500">
                Your name remains hidden from students and professors until you accept a tutor match.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-2">
                <FaCheckCircle className="text-3xl text-emerald-600 mx-auto" />
                <h3 className="font-bold text-base">Request Published Anonymously!</h3>
                <p className="text-xs">Peers and course admins have been notified. Redirecting back...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Select Course Hub</label>
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-3 text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/40"
                  >
                    <option value="Computer Science & Tech">Computer Science & Tech</option>
                    <option value="Medicine & Health">Medicine & Health</option>
                    <option value="Law & Public Policy">Law & Public Policy</option>
                    <option value="Engineering & Architecture">Engineering & Architecture</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Topic / Summary Title</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Stuck on Database Normalization rules..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-3 text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Detailed Question or Challenge</label>
                  <textarea
                    required
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe what you are stuck on so peers or lecturers can assist effectively..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-3 text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/40 resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Preferred Interaction Mode</label>
                    <select
                      value={mode}
                      onChange={(e) => setMode(e.target.value as "chat" | "physical")}
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-3 text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/40"
                    >
                      <option value="chat">In-App Secure Chat (For Shy Students)</option>
                      <option value="physical">Physical 1-on-1 Tutorial</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Attach Note or PDF (Optional)</label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.png,.jpg"
                      onChange={(e) => {
                        if (e.target.files?.[0]) setFileName(e.target.files[0].name);
                      }}
                      className="w-full text-xs text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-blue-50 file:text-[#2a6ee5] hover:file:bg-blue-100 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl text-xs text-amber-800 space-y-1">
                  <p className="font-bold flex items-center gap-1.5">
                    <FaShieldAlt /> Auto-Escalation Guarantee:
                  </p>
                  <p>If no peer claims your request within 24 hours, it will automatically route to the two senior course professors assigned as course admins.</p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2a6ee5] hover:bg-blue-600 text-white font-bold py-4 rounded-2xl transition-all shadow-md text-sm flex items-center justify-center gap-2"
                >
                  Publish Anonymous Request <FaArrowRight />
                </button>
              </form>
            )}
          </div>
        )}

      </div>
    </main>
  );
}