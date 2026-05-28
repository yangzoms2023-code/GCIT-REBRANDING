function FlagIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import n1 from "../assets/images/n1.jpg";
import n2 from "../assets/images/t1.jpg";
import n3 from "../assets/images/n3.jpg";
import n4 from "../assets/images/n4.jpg";
import n5 from "../assets/images/n5.jpg";

function ImageCard({ title, image, readMore = true, titlePosition = "bottom", className = "", newsId }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (newsId) {
      navigate(`/news/${newsId}`);
    }
  };

  return (
    <div 
      className={"relative overflow-hidden rounded-2xl cursor-pointer " + className} 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500"
        style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
      />

      {titlePosition === "bottom" ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-2 p-4">
            <h3 className="text-[14px] font-bold leading-snug transition-colors duration-300" style={{ color: hovered ? "#f48b1a" : "#ffffff" }}>
              {title}
            </h3>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-2 p-4">
            {readMore && (
              <span className="shrink-0 text-xs font-medium text-white/80 hover:text-white">
                Read More
              </span>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/50" />
          <div className="absolute left-0 right-0 top-0 p-4 w-[90%]">
            <h3 className="text-left text-base font-bold leading-snug transition-colors duration-300" style={{ color: hovered ? "#f48b1a" : "#ffffff" }}>
              {title}
            </h3>
          </div>
          {readMore && (
            <div className="absolute bottom-4 right-4">
              <span className="text-xs font-medium text-white/80 hover:text-white">
                Read More
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
}

const ease = [0.22, 1, 0.36, 1];
const transition = { duration: 0.7, ease };

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0 } },
};

const slideLeft = { hidden: { opacity: 0, x: -120 }, visible: { opacity: 1, x: 0, transition } };
const slideRight = { hidden: { opacity: 0, x: 120 }, visible: { opacity: 1, x: 0, transition } };
const slideUp = { hidden: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0, transition } };

export default function NewsSection() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-[90%] px-4 md:px-6">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "0px 0px -20% 0px" }}>
          <motion.h2 className="!mb-[56px] !text-center !text-2xl !font-bold !font-black !tracking-tight !text-black text-left" variants={slideLeft}>
            News & Events
          </motion.h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-[5fr_2fr_2fr] md:items-stretch lg:grid-cols-[5fr_2fr_2fr]">
            {/* Left column */}
            <div className="flex flex-col gap-4">
              <motion.div variants={slideLeft}>
                <ImageCard title="Her Majesty Gyalyum Dorji Wangmo Wangchuck visited GCIT" image={n1} className="h-72" titlePosition="top" newsId="royal-visit" />
              </motion.div>
              <motion.div className="grid grid-cols-2 gap-4" variants={slideLeft}>
                <ImageCard title="BUSF Regional Tournament 2025 – at NRC!" image={n4} className="h-52" titlePosition="top" newsId="cybersecurity" />
                <ImageCard title="Training on University Teaching-Learning Pedagogy" image={n5} className="h-52" titlePosition="top" newsId="young-innovators" />
              </motion.div>
            </div>

            {/* Middle column */}
            <motion.div className="flex flex-col gap-4" variants={slideUp}>
              <ImageCard title="The Royal Family graced GCIT's 2025 Capstone Tech Innovation Showcase." image={n2} titlePosition="top" className="min-h-72 flex-1" newsId="royal-visit" />
              <div className="rounded-2xl bg-[#0d1b3e] p-5 text-white">
                <h3 className="text-left text-[13px] font-bold leading-snug">JOIN GCIT'S FAMILY! | Looking for an Assistant Lecturer in Interactive Design & Development</h3>
                <p className="mt-2 text-[11px] text-white/50">Registration closes: December 05, 2025</p>
                <div className="mt-3 flex justify-end">
                  <a
                    href="/announcement/vacancies"
                    className="rounded-full border border-[#f48b1a] px-4 py-1 text-[11px] font-semibold text-[#f48b1a] transition-colors hover:bg-[#f48b1a] hover:text-white"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right column */}
            <motion.div className="flex flex-col gap-4" variants={slideRight}>
              <div className="rounded-2xl bg-gray-100 p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-gray-500">
                    <FlagIcon />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-black">AI & Data Science Hackathon</h3>
                    <p className="mt-1.5 text-xs text-gray-500">Registration closes: November 20, 2025</p>
                  </div>
                </div>
              </div>
              <ImageCard title="Welcome Show" image={n3} titlePosition="top" className="h-64" newsId="zhingscan" />
              <div className="mt-auto flex justify-end">
                <a href="/announcement/news-events" className="flex items-center gap-1 text-sm font-semibold text-black hover:text-[#f48b1a]">
                  See More ...
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}