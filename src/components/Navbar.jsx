import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logoPng from "../assets/logo.png";
import SearchModal from "./SearchComponent";

// Icons
function ChevronDownIcon({ className = "" }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon({ className = "" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="currentColor" strokeWidth="2" />
      <path d="M16.5 16.5 21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon({ className = "" }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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

// Navigation items configuration
const navItems = [
  {
    label: "About",
    dropdown: {
      layout: "row",
      items: [
        { label: "GCIT", href: "/about/gcit" },
        { label: "Projects Showcase", href: "/about/projects-showcase" },
        { label: "BICT", href: "https://ceta.gcit.edu.bt/bict.html" },
        { label: "CETA", href: "https://ceta.gcit.edu.bt/" },
        { label: "SPARK", href: "https://sparkgcit.com/about" },
      ],
    },
  },
  {
    label: "Courses",
    dropdown: {
      layout: "columns",
      left: [
        { label: "BSc Computer Science (AI Development & Data Science)", href: "/courses/ai-data-science" },
        { label: "BSc Computer Science (Full Stack)", href: "/courses/full-stack" },
        { label: "BSc Interactive Design & Development", href: "/courses/interactive-design" },
      ],
      right: [
        { label: "BSc Computer Science (Blockchain Development)", href: "/courses/blockchain" },
        { label: "BSc Computer Science (Cybersecurity)", href: "/courses/cybersecurity" },
      ],
    },
  },
  {
    label: "Non Academic",
    dropdown: {
      layout: "columns",
      left: [
        { label: "Finance", href: "/non-academic/finance" },
        { label: "Human Resource & Administration", href: "/non-academic/human-resource-administration" },
        { label: "Information & Communication Technology", href: "/non-academic/information-communication-technology" },
      ],
      right: [
        { label: "School Affairs", href: "/non-academic/school-affairs" },
        { label: "Student Affairs", href: "/non-academic/student-affairs" },
      ],
    },
  },
  {
    label: "Student Services",
    dropdown: {
      layout: "columns",
      left: [
        { label: "Clubs", href: "/student-services/clubs" },
        { label: "ICT", href: "/student-services/ict" },
        { label: "Library", href: "/student-services/library" },
      ],
      right: [
        { label: "Student Welfare", href: "/student-services/student-welfare" },
        { label: "Student Handbook", href: "/student-services/student-handbook" },
      ],
    },
  },
  {
    label: "Announcement",
    dropdown: {
      layout: "row",
      items: [
        { label: "News & Events", href: "/announcement/news-events" },
        { label: "Vacancies", href: "/announcement/vacancies" },
        { label: "Tenders", href: "/announcement/tenders" },
      ],
    },
  },
  { label: "Contact", href: "/contact" },
];

// Dropdown Content Component
function DropdownContent({ dropdown, onClose }) {
  if (dropdown.layout === "row") {
    return (
      <div className="rounded-2xl bg-[#f3f3f3] shadow-[0_10px_25px_rgba(0,0,0,0.18)] ring-1 ring-black/10">
        <div className="flex overflow-hidden rounded-2xl">
          {dropdown.items.map((item, idx) => (
            <Link
              key={item.href}
              to={item.href}
              role="menuitem"
              className={"flex-1 px-5 py-3 text-center text-[13px] font-semibold text-black transition-colors hover:bg-black/5" + (idx === 0 ? "" : " border-l-2 border-black/70")}
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  const rowsCount = Math.max(dropdown.left.length, dropdown.right.length);

  return (
    <div className="flex flex-col">
      {Array.from({ length: rowsCount }).map((_, idx) => {
        const leftItem = dropdown.left[idx];
        const rightItem = dropdown.right[idx];

        return (
          <div key={idx} className="relative overflow-hidden rounded-2xl bg-[#f3f3f3] shadow-[0_10px_25px_rgba(0,0,0,0.18)] ring-1 ring-black/10">
            <div className="pointer-events-none absolute left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-black/80" />
            <div className="grid grid-cols-2">
              {leftItem ? (
                <Link to={leftItem.href} role="menuitem" className="px-5 py-3 text-left text-[13px] font-semibold text-black transition-colors hover:bg-black/5" onClick={onClose}>
                  {leftItem.label}
                </Link>
              ) : (
                <div className="px-6 py-4" />
              )}

              {rightItem ? (
                <Link to={rightItem.href} role="menuitem" className="px-5 py-3 text-left text-[13px] font-semibold text-black transition-colors hover:bg-black/5" onClick={onClose}>
                  {rightItem.label}
                </Link>
              ) : (
                <div className="px-5 py-3" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Main Navbar Component
export default function Navbar({ overlay = false }) {
  const [openItem, setOpenItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenItem, setMobileOpenItem] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") {
        setOpenItem(null);
        setIsMobileMenuOpen(false);
        setMobileOpenItem(null);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function openDropdown(label) {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenItem(label);
  }

  function closeDropdownWithDelay() {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setOpenItem(null);
      closeTimeoutRef.current = null;
    }, 120);
  }

  const topOverlay = !isScrolled && overlay;

  return (
    <>
      <header className={"w-full text-left z-50 transition-all duration-300 ease-in-out " + (isScrolled ? "sticky top-0 left-0 right-0" : "absolute top-0 left-0 right-0")}>
        <div className={"relative w-full transition-colors duration-300 ease-in-out " + (topOverlay ? "bg-black/45 backdrop-blur-sm" : "bg-[#3d3d3f]")}>
          <div className="mx-auto flex w-full max-w-[90%] items-center px-4 py-2 md:px-6">
            {/* Logo Section */}
            <div className="flex flex-1 items-center">
              <Link to="/" className="flex min-w-0 items-center gap-2 text-white" aria-label="Home">
                <div className="grid h-10 w-10 place-items-center overflow-hidden rounded bg-white/5 ring-1 ring-white/10">
                  <img src={logoPng} alt="GCIT logo" className="h-9 w-9 object-contain" />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-5 text-[15px] font-semibold text-white/90 md:flex">
              {navItems.map((item) => {
                const isOpen = openItem === item.label;

                if (!item.dropdown) {
                  return (
                    <Link key={item.label} to={item.href} className="inline-flex items-center gap-1 transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <button
                    key={item.label}
                    type="button"
                    className={"inline-flex items-center gap-1 transition-colors " + (isOpen ? "text-[#f48b1a]" : "hover:text-white")}
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                    onMouseEnter={() => openDropdown(item.label)}
                    onMouseLeave={closeDropdownWithDelay}
                    onFocus={() => openDropdown(item.label)}
                    onClick={() => setOpenItem((v) => (v === item.label ? null : item.label))}
                  >
                    {item.label}
                    <ChevronDownIcon className={"-mt-[1px] transition-transform " + (isOpen ? "rotate-180" : "")} />
                  </button>
                );
              })}
            </nav>

            {/* Right Side Icons */}
            <div className="flex flex-1 items-center justify-end gap-2">
              <button
                type="button"
                className="hidden rounded p-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white md:inline-flex"
                aria-label="Search (Ctrl+K)"
                onClick={() => setIsSearchOpen(true)}
              >
                <SearchIcon />
              </button>
              <button
                type="button"
                className="inline-flex rounded p-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white md:hidden"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsMobileMenuOpen((v) => !v)}
              >
                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>

            {/* Desktop Dropdown Menus */}
            {navItems.map((item) => {
              const isOpen = openItem === item.label;

              if (!item.dropdown) return null;

              return (
                <div
                  key={item.label}
                  className={"absolute left-0 top-full z-30 w-full px-4 pb-2 md:px-6 " + (isOpen ? "block" : "hidden")}
                  onMouseEnter={() => openDropdown(item.label)}
                  onMouseLeave={closeDropdownWithDelay}
                >
                  <div role="menu" className="mx-auto w-full max-w-[1200px]">
                    <DropdownContent dropdown={item.dropdown} onClose={() => setOpenItem(null)} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Menu */}
          <div className={"md:hidden " + (isMobileMenuOpen ? "block border-t border-white/10" : "hidden")}>
            <div className="mx-auto w-full max-w-[1126px] px-4 py-3">
              <div className="mb-2 flex justify-end">
                <button 
                  type="button" 
                  className="inline-flex rounded p-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white" 
                  aria-label="Search" 
                  onClick={() => setIsSearchOpen(true)}
                >
                  <SearchIcon />
                </button>
              </div>

              {navItems.map((item) => {
                if (!item.dropdown) {
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block rounded px-3 py-2 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                }

                const isOpen = mobileOpenItem === item.label;
                const allItems = item.dropdown.layout === "row" ? item.dropdown.items : [...item.dropdown.left, ...item.dropdown.right];

                return (
                  <div key={item.label}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded px-3 py-2 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                      aria-expanded={isOpen}
                      onClick={() => setMobileOpenItem((v) => (v === item.label ? null : item.label))}
                    >
                      {item.label}
                      <ChevronDownIcon className={"transition-transform " + (isOpen ? "rotate-180" : "")} />
                    </button>
                    <div className={"mb-2 mt-1 overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 " + (isOpen ? "block" : "hidden")}>
                      {allItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="block px-4 py-3 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}