"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaArrowLeft,
  FaRedo,
  FaChevronLeft,
  FaChevronRight,
  FaLayerGroup,
  FaCheckCircle,
  FaGraduationCap,
  FaRandom
} from "react-icons/fa";

type Flashcard = {
  id: number;
  discipline: string;
  course: string;
  front: string;
  back: string;
};

const flashcardsData: Flashcard[] = [
  // Computer Science
  {
    id: 1,
    discipline: "Computer Science",
    course: "Introduction to Computer Science",
    front: "What is the difference between Compiled and Interpreted languages?",
    back: "Compiled languages (e.g., C++) convert code directly into machine code prior to execution, offering high performance. Interpreted languages (e.g., Python) read and execute code line-by-line via an interpreter at runtime."
  },
  {
    id: 2,
    discipline: "Computer Science",
    course: "Introduction to Discrete Systems",
    front: "What is a Proposition in Discrete Mathematics?",
    back: "A proposition is a declarative sentence that is either strictly true (T) or strictly false (F), but not both simultaneously."
  },
  {
    id: 3,
    discipline: "Computer Science",
    course: "Data Structures & Algorithms",
    front: "What is Big O Notation for Binary Search?",
    back: "O(log n) time complexity because the search space is divided in half with each step."
  },

  // Medicine & Surgery
  {
    id: 4,
    discipline: "Medicine & Surgery",
    course: "Human Anatomy & Physiology",
    front: "What is the primary natural pacemaker of the human heart?",
    back: "The Sinoatrial (SA) Node, located in the upper wall of the right atrium."
  },
  {
    id: 5,
    discipline: "Medicine & Surgery",
    course: "Pharmacology & Therapeutics",
    front: "What is the mechanism of action of Penicillin?",
    back: "Penicillin inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins (PBPs), causing cell lysis."
  },

  // Biology
  {
    id: 6,
    discipline: "Biology",
    course: "General Biology & Cell Mechanics",
    front: "What is the role of ATP in cellular respiration?",
    back: "ATP (Adenosine Triphosphate) acts as the primary energy currency of the cell, transferring energy to drive metabolic functions."
  },
  {
    id: 7,
    discipline: "Biology",
    course: "Genetics",
    front: "State Mendel's Law of Segregation.",
    back: "Allele pairs separate or segregate during gamete formation and randomly unite at fertilization."
  },

  // Law
  {
    id: 8,
    discipline: "Law",
    course: "Constitutional Law",
    front: "What is Judicial Review?",
    back: "The power of courts to examine actions of the executive, legislative, and administrative arms of government to ensure consistency with the constitution."
  }
];

const disciplines = ["All", "Computer Science", "Medicine & Surgery", "Biology", "Law"];

export default function FlashcardsPage() {
  const [selectedDiscipline, setSelectedDiscipline] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState<number[]>([]);

  // Filter available cards based on selected discipline and course
  const filteredCards = flashcardsData.filter((card) => {
    const matchesDiscipline = selectedDiscipline === "All" || card.discipline === selectedDiscipline;
    const matchesCourse = selectedCourse === "All" || card.course === selectedCourse;
    return matchesDiscipline && matchesCourse;
  });

  // Extract unique courses for the current discipline
  const availableCourses = [
    "All",
    ...Array.from(
      new Set(
        flashcardsData
          .filter((card) => selectedDiscipline === "All" || card.discipline === selectedDiscipline)
          .map((card) => card.course)
      )
    )
  ];

  const currentCard = filteredCards[currentIndex] || filteredCards[0];

  const handleNext = () => {
    setIsFlipped(false);
    if (filteredCards.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (filteredCards.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
    }
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    if (filteredCards.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredCards.length);
      setCurrentIndex(randomIndex);
    }
  };

  const toggleMastered = (cardId: number) => {
    if (masteredCards.includes(cardId)) {
      setMasteredCards(masteredCards.filter((id) => id !== cardId));
    } else {
      setMasteredCards([...masteredCards, cardId]);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-10 font-sans text-gray-900">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* TOP BAR / NAVIGATION */}
        <div className="flex items-center justify-between">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-[#2a6ee5] transition-colors"
          >
            <FaArrowLeft size={10} /> Back to Dashboard
          </Link>
          <div className="text-xl font-extrabold text-[#2a6ee5] tracking-tight">
            Educatio
          </div>
        </div>

        {/* HEADER SECTION */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
              Study Flashcards
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Select your course discipline and review key concepts before exams.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl border border-gray-100 shadow-sm self-start">
            <FaLayerGroup className="text-[#2a6ee5]" />
            <span className="text-xs font-bold text-gray-700">
              {filteredCards.length} Cards in Deck
            </span>
          </div>
        </div>

        {/* DISCIPLINE FILTERS */}
        <div className="space-y-3 bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-wider">
            <FaGraduationCap className="text-[#2a6ee5] text-sm" /> Select Discipline
          </div>
          <div className="flex flex-wrap gap-2">
            {disciplines.map((disc) => (
              <button
                key={disc}
                onClick={() => {
                  setSelectedDiscipline(disc);
                  setSelectedCourse("All");
                  setCurrentIndex(0);
                  setIsFlipped(false);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedDiscipline === disc
                    ? "bg-[#2a6ee5] text-white shadow-md shadow-blue-500/20"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {disc}
              </button>
            ))}
          </div>

          {/* COURSE SUB-FILTER DROPDOWN */}
          {availableCourses.length > 1 && (
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="text-xs font-semibold text-gray-500">Filter by Course:</label>
              <select
                value={selectedCourse}
                onChange={(e) => {
                  setSelectedCourse(e.target.value);
                  setCurrentIndex(0);
                  setIsFlipped(false);
                }}
                className="bg-gray-50 border border-gray-200 text-xs text-gray-800 rounded-xl px-3 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/40"
              >
                {availableCourses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* INTERACTIVE FLASHCARD CANVAS */}
        {filteredCards.length > 0 && currentCard ? (
          <div className="space-y-6">
            
            {/* Card Progress Indicator */}
            <div className="flex items-center justify-between text-xs font-semibold text-gray-500 px-2">
              <span>
                Card {currentIndex + 1} of {filteredCards.length}
              </span>
              <span className="text-[#2a6ee5] font-bold">
                {currentCard.course}
              </span>
            </div>

            {/* FLIP CARD AREA */}
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="w-full min-h-[300px] sm:min-h-[340px] bg-white rounded-3xl border border-gray-200/80 shadow-lg p-8 sm:p-12 flex flex-col justify-between cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl relative select-none"
            >
              {/* Card Header Info */}
              <div className="flex items-center justify-between">
                <span className="bg-blue-50 text-[#2a6ee5] px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase">
                  {currentCard.discipline}
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMastered(currentCard.id);
                  }}
                  className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border transition-colors ${
                    masteredCards.includes(currentCard.id)
                      ? "bg-emerald-50 text-emerald-600 border-emerald-200"
                      : "bg-gray-50 text-gray-400 border-gray-200 hover:text-gray-600"
                  }`}
                >
                  <FaCheckCircle />
                  {masteredCards.includes(currentCard.id) ? "Mastered" : "Mark as Mastered"}
                </button>
              </div>

              {/* Front/Back Content Display */}
              <div className="my-auto py-6 text-center space-y-4">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-gray-400 block">
                  {isFlipped ? "ANSWER / DEFINITION" : "QUESTION / PROMPT"}
                </span>

                <p className="text-lg sm:text-2xl font-bold text-gray-800 leading-relaxed px-4">
                  {isFlipped ? currentCard.back : currentCard.front}
                </p>
              </div>

              {/* Bottom Flip Instructions */}
              <div className="flex justify-center items-center gap-2 text-xs font-semibold text-gray-400">
                <FaRedo className="text-xs" /> Click card to flip
              </div>
            </div>

            {/* CONTROLS (Next, Previous, Shuffle) */}
            <div className="flex items-center justify-between gap-4 pt-2">
              <button
                onClick={handlePrev}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-gray-200 text-gray-700 font-bold text-xs hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
              >
                <FaChevronLeft /> Previous
              </button>

              <button
                onClick={handleShuffle}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-gray-100 text-gray-700 font-bold text-xs hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <FaRandom /> Shuffle
              </button>

              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#2a6ee5] hover:bg-blue-600 text-white font-bold text-xs transition-colors shadow-md shadow-blue-500/20 cursor-pointer"
              >
                Next <FaChevronRight />
              </button>
            </div>

          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-3xl p-12 text-center space-y-3 border border-gray-100">
            <p className="text-base font-bold text-gray-800">No flashcards found for this selection.</p>
            <p className="text-xs text-gray-500">Try selecting a different course or discipline above.</p>
          </div>
        )}

      </div>
    </main>
  );
}