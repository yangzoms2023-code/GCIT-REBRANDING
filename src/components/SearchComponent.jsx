import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// Icons
function SearchIcon({ className = "" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="currentColor" strokeWidth="2" />
      <path d="M16.5 16.5 21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className = "" }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Searchable content data
export const searchableContent = [
  // About section
  { title: "GCIT", path: "/about/gcit", content: "Gyalpozhing College of Information Technology about us, history, mission, vision", category: "About" },
  { title: "Projects Showcase", path: "/about/projects-showcase", content: "Student and faculty projects, research work, innovations", category: "About" },
  { title: "BICT", path: "/about/bict", content: "Bachelor of Information and Communication Technology program", category: "About" },
  { title: "CETA", path: "/about/ceta", content: "Center for Engineering and Technology Advancement", category: "About" },
  { title: "SPARK", path: "/about/spark", content: "SPARK innovation hub, startup incubation, entrepreneurship", category: "About" },
  
  // Courses section
  { title: "BSc Computer Science (AI Development & Data Science)", path: "/courses/ai-data-science", content: "Artificial intelligence, machine learning, data science, python, neural networks", category: "Courses" },
  { title: "BSc Computer Science (Full Stack)", path: "/courses/full-stack", content: "Full stack development, frontend, backend, react, node.js, databases", category: "Courses" },
  { title: "BSc Interactive Design & Development", path: "/courses/interactive-design", content: "UI/UX design, interactive media, frontend development, user experience", category: "Courses" },
  { title: "BSc Computer Science (Blockchain Development)", path: "/courses/blockchain", content: "Blockchain technology, smart contracts, cryptocurrency, web3", category: "Courses" },
  { title: "BSc Computer Science (Cybersecurity)", path: "/courses/cybersecurity", content: "Network security, ethical hacking, cryptography, security protocols", category: "Courses" },
  
  // Non Academic section
  { title: "Finance", path: "/non-academic/finance", content: "Financial services, budgeting, accounting, fees, scholarships", category: "Non Academic" },
  { title: "Human Resource & Administration", path: "/non-academic/human-resource-administration", content: "HR policies, staff management, recruitment, employee services", category: "Non Academic" },
  { title: "Information & Communication Technology", path: "/non-academic/information-communication-technology", content: "IT support, network services, computer labs, technical support", category: "Non Academic" },
  { title: "School Affairs", path: "/non-academic/school-affairs", content: "Academic administration, examinations, registration, records", category: "Non Academic" },
  { title: "Student Affairs", path: "/non-academic/student-affairs", content: "Student support, counseling, activities, student services", category: "Non Academic" },
  
  // Student Services section
  { title: "Clubs", path: "/student-services/clubs", content: "Student clubs, coding club, robotics club, cultural activities", category: "Student Services" },
  { title: "ICT", path: "/student-services/ict", content: "ICT services, computer access, software, hardware support", category: "Student Services" },
  { title: "Library", path: "/student-services/library", content: "Library resources, books, journals, study spaces, e-resources", category: "Student Services" },
  { title: "Student Welfare", path: "/student-services/student-welfare", content: "Student wellbeing, health services, counseling, support", category: "Student Services" },
  { title: "Student Handbook", path: "/student-services/student-handbook", content: "Student guidelines, rules, regulations, policies", category: "Student Services" },
  
  // Announcement section
  { title: "News & Events", path: "/announcement/news-events", content: "Latest news, events, workshops, seminars, activities", category: "Announcement" },
  { title: "Vacancies", path: "/announcement/vacancies", content: "Job openings, career opportunities, faculty positions", category: "Announcement" },
  { title: "Tenders", path: "/announcement/tenders", content: "Tender notices, procurement, bids, contracts", category: "Announcement" },
  
  // Contact
  { title: "Contact", path: "/contact", content: "Contact information, address, phone, email, location", category: "Contact" },
];

// Popular searches data
const mostSearched = [
  { label: "Courses in GCIT", href: "/courses/ai-data-science" },
  { label: "BSc Computer Science", href: "/courses/full-stack" },
  { label: "Student Services", href: "/student-services/clubs" },
  { label: "News & Events", href: "/announcement/news-events" },
  { label: "Library", href: "/student-services/library" },
];

// Search Results Component
function SearchResults({ searchTerm, onResultClick, searchHistory, onSaveToHistory }) {
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }
    
    const term = searchTerm.toLowerCase().trim();
    const filtered = searchableContent
      .map(item => {
        let score = 0;
        
        // Title match (highest priority)
        if (item.title.toLowerCase().includes(term)) {
          score += 10;
          // Bonus for exact match
          if (item.title.toLowerCase() === term) score += 5;
        }
        
        // Content match
        if (item.content.toLowerCase().includes(term)) {
          score += 3;
        }
        
        // Category match
        if (item.category.toLowerCase().includes(term)) {
          score += 2;
        }
        
        // Word boundary matches in title
        const titleWords = item.title.toLowerCase().split(' ');
        const searchWords = term.split(' ');
        searchWords.forEach(word => {
          if (titleWords.some(tw => tw.includes(word))) {
            score += 2;
          }
        });
        
        return { ...item, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
      
    setResults(filtered);
    setSelectedIndex(-1);
  }, [searchTerm]);

  const handleKeyDown = (e) => {
    if (results.length === 0) return;
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % results.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
        break;
      case 'Enter':
        if (selectedIndex >= 0 && results[selectedIndex]) {
          onResultClick(results[selectedIndex].path);
        }
        break;
    }
  };

  if (!searchTerm.trim()) {
    return (
      <div className="mt-5 px-4">
        <p className="mb-2 text-base font-bold text-white">Popular searches</p>
        <div className="space-y-2">
          {mostSearched.map((item, idx) => (
            <button
              key={idx}
              onClick={() => onResultClick(item.href)}
              className="block w-full cursor-pointer text-left text-sm text-white/70 transition-colors hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>
        
        {searchHistory && searchHistory.length > 0 && (
          <div className="mt-6">
            <p className="mb-2 text-base font-bold text-white">Recent searches</p>
            <div className="space-y-2">
              {searchHistory.slice(0, 5).map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => onResultClick(item.path)}
                  className="block w-full cursor-pointer text-left text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
  
  if (results.length === 0) {
    return (
      <div className="mt-5 px-4">
        <p className="text-sm text-white/60">
          No results found for "{searchTerm}"
        </p>
        <p className="mt-2 text-xs text-white/40">
          Try different keywords or browse our popular searches above
        </p>
      </div>
    );
  }
  
  return (
    <div className="mt-5 px-4" onKeyDown={handleKeyDown}>
      <p className="mb-2 text-sm font-semibold text-white/80">
        Found {results.length} result{results.length !== 1 ? 's' : ''} for "{searchTerm}"
      </p>
      <div className="max-h-[60vh] space-y-2 overflow-y-auto">
        {results.map((result, idx) => (
          <button
            key={idx}
            onClick={() => {
              onSaveToHistory?.(result);
              onResultClick(result.path);
            }}
            className={`w-full cursor-pointer rounded-lg bg-white/5 p-3 text-left transition-all hover:bg-white/10 ${
              selectedIndex === idx ? 'bg-white/15 ring-1 ring-[#f48b1a]' : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h6 className="text-sm font-semibold text-white">{result.title}</h6>
                <p className="mt-1 text-xs text-white/50 line-clamp-2">{result.content}</p>
              </div>
              <span className="ml-2 rounded bg-white/10 px-2 py-0.5 text-xs text-white/60">
                {result.category}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// Main Search Component
export default function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  // Load search history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('searchHistory');
    if (saved) {
      try {
        setSearchHistory(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load search history', e);
      }
    }
  }, []);

  // Save search history to localStorage
  const saveToHistory = (result) => {
    const newHistory = [result, ...searchHistory.filter(item => item.path !== result.path)].slice(0, 10);
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  // Clear search history
  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  // Focus input when search opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (!isOpen && ((e.ctrlKey || e.metaKey) && e.key === 'k')) {
        e.preventDefault();
        onClose();
      }
      if (isOpen && e.key === 'Escape') {
        onClose();
        setSearchTerm("");
      }
    };

    document.addEventListener('keydown', handleGlobalKeyDown);
    return () => document.removeEventListener('keydown', handleGlobalKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleResultClick = (path) => {
    onClose();
    setSearchTerm("");
    navigate(path);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // You could navigate to a dedicated search results page
      // navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col bg-black/80 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
          setSearchTerm("");
        }
      }}
    >
      <div className="px-4 py-6 md:px-8 md:py-6">
        <div className="relative mx-auto max-w-3xl">
          {/* Search input */}
          <form onSubmit={handleSubmit}>
            <div className="flex items-center rounded-xl border border-gray-600 bg-gray-900 px-4 py-3 shadow-lg transition-all focus-within:ring-2 focus-within:ring-[#f48b1a]">
              <SearchIcon className="h-5 w-5 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search for courses, services, announcements... (Ctrl+K)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="ml-3 flex-1 bg-transparent text-base text-white placeholder-gray-400 outline-none md:text-lg"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="mr-2 rounded-full p-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
              <button 
                type="submit" 
                className="rounded bg-[#f48b1a] px-3 py-1 text-sm font-semibold text-white transition-colors hover:bg-[#e07a0a]"
              >
                Search
              </button>
            </div>
          </form>

          {/* Close button */}
          <button
            type="button"
            className="absolute -right-2 -top-12 rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white md:-right-4"
            aria-label="Close search"
            onClick={() => {
              onClose();
              setSearchTerm("");
            }}
          >
            <CloseIcon />
          </button>

          {/* Clear history button */}
          {searchHistory.length > 0 && !searchTerm && (
            <div className="absolute right-0 top-20">
              <button
                onClick={clearHistory}
                className="text-xs text-white/40 transition-colors hover:text-white/70"
              >
                Clear history
              </button>
            </div>
          )}

          {/* Search results or popular searches */}
          <SearchResults 
            searchTerm={searchTerm} 
            onResultClick={handleResultClick}
            searchHistory={searchHistory}
            onSaveToHistory={saveToHistory}
          />

          {/* Keyboard shortcuts hint */}
          <div className="mt-4 px-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/40">
              <span>
                <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-xs">↑</kbd>
                <kbd className="ml-1 rounded bg-white/10 px-1.5 py-0.5 text-xs">↓</kbd>
                <span className="ml-1">to navigate</span>
              </span>
              <span>
                <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-xs">Enter</kbd>
                <span className="ml-1">to select</span>
              </span>
              <span>
                <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-xs">ESC</kbd>
                <span className="ml-1">to close</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}