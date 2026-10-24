"use client"

import { useState } from "react";
import Link from "next/link";
import { 
  FaChevronDown, 
  FaSearch, 
  FaHeadset,
  FaArrowRight
} from "react-icons/fa";

export default function FAQs() {
  const [openId, setOpenId] = useState<string | null>("gen-0");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const faqCategories = [
    {
      id: "gen",
      title: "General Questions",
      items: [
        {
          question: "What is Educatio?",
          answer: "Educatio is a premium digital learning platform that provides highly curated, specialized study materials for university students across disciplines like Law, Medicine, and Computer Science."
        },
        {
          question: "Is Educatio free to use?",
          answer: "We offer a freemium model. Creating an account gives you free access to basic study guides, public forums, and introductory materials. Premium, deeply curated resources and past exam papers require a subscription."
        },
        {
          question: "Can I access the platform on my mobile device?",
          answer: "Absolutely! Our web platform is fully responsive and optimized for mobile devices, tablets, and desktop computers so you can study anywhere, anytime."
        }
      ]
    },
    {
      id: "acad",
      title: "Academic & Content",
      items: [
        {
          question: "Who creates the study materials?",
          answer: "All premium materials are created, curated, and rigorously reviewed by a board of academic professionals, professors, and top-tier graduate students to ensure absolute accuracy."
        },
        {
          question: "I don't see my major. Can I request a new course hub?",
          answer: "Yes! We are constantly expanding our disciplines. You can submit a request through our Contact page, and our content team evaluates these requests based on student demand."
        },
        {
          question: "How frequently is the content updated?",
          answer: "We update our hubs at the beginning of every major academic semester (Fall and Spring) to ensure alignment with the latest syllabi, legal precedents, and medical guidelines."
        }
      ]
    },
    {
      id: "bill",
      title: "Accounts & Billing",
      items: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit/debit cards (Visa, MasterCard, American Express), PayPal, and Apple/Google Pay."
        },
        {
          question: "Can I cancel my subscription at any time?",
          answer: "Yes, you can cancel your subscription at any time from your Account Settings page. You will continue to have premium access until the end of your current billing cycle."
        },
        {
          question: "Do you offer student discounts?",
          answer: "Yes! If you sign up using a valid .edu email address, an automatic 20% discount is applied to all premium subscription tiers."
        }
      ]
    }
  ];

  // Filter logic based on search query
  const filteredCategories = faqCategories.map(category => ({
    ...category,
    items: category.items.filter(
      item => 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <main className="min-h-dvh font-sans text-[#2a6ee5] bg-gray-50">
      
      {/* HEADER SECTION */}
      <section className="bg-[#F3F4F6] text-[#2a6ee5] text-center mt-16 lg:mt-0">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-[#FFDD9C] text-black px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase inline-block mb-2">
            Support Center
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Frequently Asked <span className="text-[#FFDD9C]">Questions</span>
          </h1>
          <p className="text-xl text-[#2a6ee5] text-semibold max-w-2xl mx-auto leading-relaxed mb-8">
            Find answers to common questions about our platform, subscriptions, and academic resources.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaSearch className="text-[#2a6ee5] text-lg" />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for answers (e.g., 'billing', 'courses')..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl text-[#2a6ee5] border border-[#2a6ee5] focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ CONTENT SECTION */}
      <section className="py-20 px-6 max-w-4xl mx-auto min-h-[50vh]">
        
        {filteredCategories.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No results found</h3>
            <p className="text-gray-500">We couldn't find any FAQs matching "{searchQuery}". Try different keywords or contact support.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredCategories.map((category) => (
              <div key={category.id} className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">
                  {category.title}
                </h2>
                
                <div className="space-y-4">
                  {category.items.map((item, index) => {
                    const itemId = `${category.id}-${index}`;
                    const isOpen = openId === itemId;
                    
                    return (
                      <div 
                        key={itemId} 
                        className={`bg-white border rounded-2xl transition-all duration-300 overflow-hidden ${
                          isOpen ? "border-[#2a6ee5] shadow-md" : "border-gray-200 hover:border-gray-300 shadow-sm"
                        }`}
                      >
                        <button
                          onClick={() => toggleAccordion(itemId)}
                          className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus-visible:bg-gray-50"
                        >
                          <span className={`font-bold text-lg pr-8 ${isOpen ? "text-[#2a6ee5]" : "text-gray-900"}`}>
                            {item.question}
                          </span>
                          <span className={`transform transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180 text-[#2a6ee5]" : "text-gray-400"}`}>
                            <FaChevronDown />
                          </span>
                        </button>
                        
                        <div 
                          className={`grid transition-all duration-300 ease-in-out ${
                            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA SECTION */}
      <section className="bg-gray-100 py-16 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex items-center gap-6 flex-col md:flex-row">
            <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center text-[#E73F1E] text-3xl flex-shrink-0">
              <FaHeadset />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
              <p className="text-gray-600 text-lg">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
            </div>
          </div>
          <Link 
            href="/contact" 
            className="bg-[#2a6ee5] text-white font-bold py-4 px-8 rounded-full hover:bg-blue-600 transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            Contact Support <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-500 py-12 text-center border-t border-gray-800">
        <p>© {new Date().getFullYear()} Educatio. All rights reserved.</p>
      </footer>

    </main>
  );
}