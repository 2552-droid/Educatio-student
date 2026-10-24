"use client";
import { useState, useEffect } from "react";
import { FaSearch, FaBook, FaExternalLinkAlt, FaBookmark } from "react-icons/fa";

export default function ResourceLibraryPage() {
  const [search, setSearch] = useState("computer science");
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Function to call your API route
  const fetchBooks = async (searchTerm: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/textbooks?query=${encodeURIComponent(searchTerm)}`);
      const data = await res.json();
      setBooks(data);
    } catch (err) {
      console.error("Failed to fetch books:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch books on initial page load
  useEffect(() => {
    fetchBooks(search);
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Textbook Library</h1>
        <p className="text-gray-500 text-sm mt-1">
          Search thousands of academic books and study materials.
        </p>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex gap-4 max-w-xl">
        <div className="relative flex-1">
          <FaSearch className="absolute left-4 top-3.5 text-[#2a6ee5] text-sm" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search textbooks (e.g., Law, Anatomy, Algorithms)..."
            className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#2a6ee5] font-bold focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]"
          />
        </div>
        <button
          onClick={() => fetchBooks(search)}
          className="bg-[#2a6ee5] hover:bg-[#1d50ab] text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
        >
          Search
        </button>
      </div>

      {/* Results Grid */}
      {loading ? (
        <p className="text-gray-500 text-center py-12">Loading textbooks...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.length === 0 ? (
            <p className="text-gray-500">No textbooks found. Try another search term.</p>
          ) : (
            books.map((book) => {
              const info = book.volumeInfo;
              return (
                <div 
                  key={book.id} 
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    {info.imageLinks?.thumbnail ? (
                      <img 
                        src={info.imageLinks.thumbnail} 
                        alt={info.title} 
                        className="h-36 object-contain mx-auto rounded"
                      />
                    ) : (
                      <div className="h-36 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                        <FaBook size={32} />
                      </div>
                    )}
                    <h3 className="font-bold text-gray-900 text-base line-clamp-1">
                      {info.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-1">
                      By {info.authors ? info.authors.join(", ") : "Unknown Author"}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-[#2a6ee5] px-2.5 py-1 rounded-md">
                      {info.categories ? info.categories[0] : "Academic"}
                    </span>
                    {info.previewLink && (
                      <a
                        href={info.previewLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#2a6ee5] font-semibold hover:underline"
                      >
                        <span>Preview</span>
                        <FaExternalLinkAlt size={10} />
                      </a>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}