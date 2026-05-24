import { useState } from "react";

function FacebookIcon({ className = "" }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function YouTubeIcon({ className = "" }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.6 4.6 12 4.6 12 4.6s-5.6 0-7.5.5A3 3 0 0 0 2.4 7.2 31.6 31.6 0 0 0 2 12a31.6 31.6 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 22 12a31.6 31.6 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

function LinkedInIcon({ className = "" }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.7-1.8 3.4-1.8 3.7 0 4.3 2.4 4.3 5.5v6.1ZM5.2 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7 20.4H3.4V9H7v11.4Z" />
    </svg>
  );
}

const sections = [
  {
    label: "College Info",
    content: (
      <div className="text-left">
        <div className="space-y-1 text-sm leading-relaxed">
          <div>Gyalpozhing College of Information Technology</div>
          <div>Royal University of Bhutan</div>
          <div>Chamjekha, Thimphu, Bhutan</div>
          <div>Tel No.: +975 2361194</div>
          <div>info.gcit@rub.edu.bt</div>
          <div>ict.gct@rub.edu.bt</div>
        </div>
        <div className="mt-5 flex items-center gap-4">
          <a href="#" aria-label="Facebook" className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#f48b1a] hover:bg-white/90">
            <FacebookIcon />
          </a>
          <a href="#" aria-label="YouTube" className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#f48b1a] hover:bg-white/90">
            <YouTubeIcon />
          </a>
          <a href="#" aria-label="LinkedIn" className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#f48b1a] hover:bg-white/90">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    ),
  },
  {
    label: "E-services",
    content: (
      <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
        <div className="flex flex-col gap-1">
          {[
            "Happiness and Wellbeing Center",
            "ICT Help Desk",
            "Estate Help Desk",
            "CCA",
            "Library Catalog (OPAC) - Koho",
            "RUB-Information Management System",
            "RUB Web Mail",
          ].map((item) => (
            <a key={item} href="#" className="hover:underline text-left">{item}</a>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          {[
            "Virtual Learning Environment – Moodle",
            "Staff Residence Application Form",
          ].map((item) => (
            <a key={item} href="#" className="hover:underline text-left">{item}</a>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: "Quick-Links",
    content: (
      <div className="flex flex-col gap-1 text-sm">
        {[
          "GovTech Agency",
          "Ministry of Education and Skills Development",
          "Ministry of Industry Commerce & Employment",
          "G2C Services",
          "Royal Civil Service Service Commission",
          "Royal University of Bhutan",
          "Admission Criteria 2024 - RUB",
        ].map((item) => (
          <a key={item} href="#" className="hover:underline text-left">{item}</a>
        ))}
      </div>
    ),
  },
  {
    label: "Downloads",
    content: (
      <div className="flex flex-col gap-1 text-sm">
        {[
          "Class Trip Form",
          "Forms",
          "GCIT Strategic Plan",
          "Monday Assembly Agenda Item",
          "Time and Stress Management Flyer",
        ].map((item) => (
          <a key={item} href="#" className="hover:underline text-left">{item}</a>
        ))}
      </div>
    ),
  },
];

export default function Footer() {
  const [active, setActive] = useState(0);

  return (
    <footer className="w-full bg-[#f48b1a] text-white">
      <div className="mx-auto w-full px-4 py-10 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-6">
          <div className="flex flex-col items-center gap-3">
            {sections.map((section, idx) => (
              <button
                key={section.label}
                onClick={() => setActive(idx)}
                className={
                  "inline-flex h-7 w-36 cursor-pointer items-center justify-center rounded-md border text-sm font-semibold shadow-sm transition-colors" +
                  (idx === active
                    ? "border-white/80 bg-white/10 text-white"
                    : "border-white bg-white text-[#f48b1a] hover:bg-white/90")
                }
              >
                {section.label}
              </button>
            ))}
          </div>

          <div>{sections[active].content}</div>
        </div>
      </div>

      <div className="border-t border-white/30">
        <div className="mx-auto w-full px-4 py-4 text-center text-xs md:px-6">
          Copyright © Gyalpozhing College of Information Technology 2025. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
