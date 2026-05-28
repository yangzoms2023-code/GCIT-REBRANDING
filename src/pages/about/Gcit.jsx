import { motion } from "framer-motion";
import PageBanner from "../../components/PageBanner";
import LecturerSlider from "../../components/LectureSlider";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Mimg from "../../assets/images/gcitm.png";
import Vimg from "../../assets/images/gcitv.png";
import Timeline2017 from "../../assets/images/2017.svg";
import Timeline2021 from "../../assets/images/2021.svg";
import Timeline2022 from "../../assets/images/2022.svg";
import Timeline2023 from "../../assets/images/2023.svg";
import Timeline2024 from "../../assets/images/2024.svg";
import Timeline2025 from "../../assets/images/2025.svg";

function TimelineCard({ src, alt, className, direction = "right" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: direction === "right" ? 70 : -70 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    </motion.div>
  );
}

function MissionCard({ title, text, image, direction = "left", delay = 0 }) {
  return (
    <motion.div
      className="relative h-[200px] rounded-2xl overflow-hidden shadow-xl"
      initial={{ opacity: 0, x: direction === "left" ? -70 : 70, scale: 0.94 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.75, ease: "easeOut", delay }}
    >
      <motion.img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut", delay }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 flex flex-col justify-center px-6 text-left">
        <motion.h2
          className="text-xl font-semibold mb-2 text-white font-['Roboto_Slab']"
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeOut", delay: delay + 0.2 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-sm leading-relaxed text-white"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeOut", delay: delay + 0.32 }}
        >
          {text}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function Gcit() {
  return (
    <div className="min-h-screen bg-[#F2F5F5]">
      <Navbar overlay />

      <PageBanner title="ABOUT US" subtitle="GCIT shapes thinkers, creators, and leaders for tomorrow's digital world." />

      {/* Mission & Vision */}
      <div className="w-[90%] md:w-[85%] mx-auto py-16 flex flex-col gap-10">
        <motion.h3
          className="text-3xl font-semibold text-left text-black font-['Roboto_Slab']"
          initial={{ opacity: 0, x: -55 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          GCIT Mission &amp; Vision
        </motion.h3>

        <MissionCard
          title="Mission"
          image={Mimg}
          direction="left"
          delay={0}
          text="Our mission is to empower the next generation of learners with cutting-edge skills and knowledge in modern software technology and interactive design, equipping students with expertise, practical skills, and values."
        />

        <MissionCard
          title="Vision"
          image={Vimg}
          direction="right"
          delay={0.1}
          text="Our vision is to be a leading institution in software technology and interactive design that produces future-ready graduates with commitment to academic excellence, innovation, and social responsibility."
        />
      </div>

      {/* Lecturer Slider */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <LecturerSlider />
      </motion.div>

      {/* Timeline */}
      <div className="w-[90%] md:w-[85%] mx-auto py-8">
        <motion.h3
          className="text-3xl font-semibold text-left mb-4 text-black font-['Roboto_Slab']"
          initial={{ opacity: 0, x: -55 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          GCIT Journey
        </motion.h3>

        {/* Desktop timeline */}
        <div className="hidden md:block relative w-full" style={{ paddingBottom: "73.5%" }}>
          <div className="absolute inset-0">
            <motion.svg
              viewBox="0 0 878 752"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[41%] pointer-events-none select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ opacity: 0, pathLength: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <path
                d="M644.002 7.5L625.502 12.5L609.002 18C604.002 19.5 600.002 22.4537 600.002 25.5C600.002 30 606.922 33.4543 610.502 35.5C614.002 37.5 669.502 52.2199 681.502 57.5C685.669 59.3333 694.002 64 694.002 68C694.002 72 690.502 76 683.502 80.5L643.252 93.25L603.002 106C593.002 110.5 585.166 118.354 584.502 124C583.502 132.5 594.502 138.727 599.502 141C603.622 142.873 612.502 147 622.502 151L668.502 167.5C676.002 170.5 717.702 187.9 722.502 193.5C728.502 200.5 730.502 206.5 730.502 213C730.502 219.5 720.502 228.5 715.502 231.5C703.502 238.7 481.169 283.5 366.502 308C347.335 313.667 316.502 331.6 316.502 344C316.502 359.5 330.002 376.5 366.502 393C395.702 406.2 751.002 481 751.002 481C751.002 481 799.502 492.5 817.502 502.5C835.502 512.5 872.813 523.429 869.502 551C866.503 575.972 817.502 589 817.502 589C817.502 589 501.669 650 361.002 673.5C361.002 673.5 27.3353 739.333 7.50195 744"
                stroke="black"
                strokeWidth="20"
                strokeLinecap="round"
              />
            </motion.svg>
            <TimelineCard src={Timeline2017} alt="2017" className="absolute w-[30%] left-[74.5%] top-[4%] -translate-x-1/2" direction="right" />
            <TimelineCard src={Timeline2022} alt="2022" className="absolute w-[30%] left-[78.7%] top-[29%] -translate-x-1/2" direction="right" />
            <TimelineCard src={Timeline2024} alt="2024" className="absolute w-[28%] left-[84%] top-[53.4%] -translate-x-1/2" direction="right" />
            <TimelineCard src={Timeline2021} alt="2021" className="absolute w-[30%] left-[41.5%] top-[11%] -translate-x-1/2" direction="left" />
            <TimelineCard src={Timeline2023} alt="2023" className="absolute w-[30%] left-[29%] top-[36%] -translate-x-1/2" direction="left" />
            <TimelineCard src={Timeline2025} alt="2025" className="absolute w-[30%] left-[20%] top-[60%] -translate-x-1/2" direction="left" />
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden relative pl-8 border-l-2 border-gray-300 flex flex-col gap-8">
          {[
            { img: Timeline2017, label: "2017" },
            { img: Timeline2021, label: "2021" },
            { img: Timeline2022, label: "2022" },
            { img: Timeline2023, label: "2023" },
            { img: Timeline2024, label: "2024" },
            { img: Timeline2025, label: "2025" },
          ].map(({ img, label }, i) => (
            <motion.div
              key={label}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            >
              <div className="absolute -left-[2.6rem] top-2 w-4 h-4 rounded-full bg-orange-400 border-2 border-white shadow" />
              <img src={img} alt={label} className="w-full max-w-[280px] object-contain" draggable={false} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Highlights */}
      {/* Highlights */}
<div className="w-[90%] md:w-[85%] mx-auto pb-20">
  <motion.h3
    className="text-3xl font-semibold text-left mb-6 text-black font-['Roboto_Slab']"
    initial={{ opacity: 0, x: -55 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.65, ease: "easeOut" }}
  >
    GCIT Highlights
  </motion.h3>

  <div className="flex flex-col md:flex-row gap-6">
    <motion.div
      className="w-full md:w-[65%]"
      initial={{ opacity: 0, x: -50, scale: 0.96 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <iframe 
        className="w-full h-[350px] md:h-[550px] rounded-xl" 
        src="https://www.youtube.com/embed/IHCHsGV8xrk" 
        title="GCIT Corporate video 2024" 
        allowFullScreen 
      />
    </motion.div>

    <div className="w-full md:w-[35%] flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.96 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
      >
        <iframe 
          className="w-full h-[200px] md:h-[265px] rounded-xl" 
          src="https://www.youtube.com/embed/rshgeRbdygk" 
          title="Unboxing Metaverse by Gyalpozhing College of IT" 
          allowFullScreen 
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.96 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.26 }}
      >
        <iframe 
          className="w-full h-[200px] md:h-[265px] rounded-xl" 
          src="https://www.youtube.com/embed/HTpJakx-oLo" 
          title="Project Showcase AY23/24 - Compilation Year 4 & Year 3" 
          allowFullScreen 
        />
      </motion.div>
    </div>
  </div>
</div>

<Footer />
    </div>
  );
}
