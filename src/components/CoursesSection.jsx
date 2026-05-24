import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.jpg";
import c3 from "../assets/images/c3.jpg";
import c4 from "../assets/images/c4.jpg";
import c5 from "../assets/images/c5.jpg";
import { useNavigate } from "react-router-dom";

const sectionVariants = {
  hidden: {},
  visible: {},
};

const headerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.85,
    transition: { duration: 0.55, ease: [0.4, 0, 1, 1] },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 180, damping: 22, delay: 0.45 },
  },
};

const cardsWrapperVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardOffsets = [
  { x: 350, y: 120 },
  { x: 30, y: 120 },
  { x: -290, y: 120 },
  { x: 160, y: 120 },
  { x: -160, y: 120 },
];

const cardVariants = {
  hidden: (o) => ({
    opacity: 0,
    x: o.x,
    y: o.y,
    scale: 0.2,
    transition: { duration: 0.65, ease: [0.4, 0, 0.6, 1] },
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 160, damping: 22 },
  },
};

const courses = [
  {
    id: 1,
    title: "Interactive Design and Development",
    description: "Learn to craft engaging digital experiences through UI/UX design, prototyping, and front-end development for the modern web.",
    image: c1,
    tag: "BHUTAN TECH ACADEMY · UI/UX INNOVATION LAB",
    color: "#1a73e8",
    path: "/courses/interactive-design",
  },
  {
    id: 2,
    title: "AI & Data Science",
    description:
      "This program provides a strong foundation in machine learning, data analytics, and computational intelligence to prepare students for the evolving world of AI and data-driven innovation.",
    image: c2,
    tag: "AI & DATA SCIENCE",
    color: "#e53935",
    path: "/courses/ai-data-science",
  },
  {
    id: 3,
    title: "Fullstack Development",
    description: "Master both front-end and back-end technologies to build complete, scalable web applications from the ground up.",
    image: c3,
    tag: "FULLSTACK DEVELOPMENT",
    color: "#00acc1",
    path: "/courses/full-stack",
  },
  {
    id: 4,
    title: "Blockchain Development",
    description: "Explore decentralized systems, smart contracts, and distributed ledger technologies shaping the future of digital transactions.",
    image: c4,
    tag: "BLOCKCHAIN DEVELOPMENT",
    color: "#43a047",
    path: "/courses/blockchain",
  },
  {
    id: 5,
    title: "Cybersecurity",
    description: "Develop expertise in protecting digital systems, networks, and data from cyber threats in an increasingly connected world.",
    image: c5,
    tag: "CYBERSECURITY ACADEMY",
    color: "#00acc1",
    path: "/courses/cybersecurity",
  },
];

function CourseCard({ course }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <div className="course-card" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <img className="h-full w-auto" src={course.image} alt={course.title} />

      <div className="course-title">
        <p>{course.title}</p>
      </div>

      <div className="slide-overlay" style={{ transform: hovered ? "translateY(0)" : "translateY(100%)" }} onClick={() => navigate(course.path)}>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
      </div>
    </div>
  );
}

export default function CoursesSection() {

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap');

        .courses-section {
          padding: 48px 24px;
          box-sizing: border-box;
          font-family: sans-serif;
          display: flex;
          flex-direction: column-reverse;
          gap: 0;
        }

        .courses-title {
          text-align: center;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 800;
          color: #1a1a1a;
          margin: 0 0 40px;
        }

        .courses-wrapper {
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          justify-content: center;
        }

        .course-card-wrapper {
          flex: 0 0 300px;
        }

        @media (max-width: 640px) {
          .courses-section {
            padding: 32px 12px;
          }

          .courses-wrapper {
            gap: 16px;
            width: 100%;
          }

          .course-card-wrapper {
            flex: 0 0 100%;
            width: 90%;
            max-width: 90%;
          }
        }

        .course-card {
          width: 100%;
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          background: #111;
          aspect-ratio: 5 / 4;
        }

        .course-card img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .course-card:hover img {
          transform: scale(1.06);
        }

        .course-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          right: 12px;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(6px);
          border-radius: 6px;
          padding: 5px 10px;
          font-size: clamp(9px, 0.9vw, 11px);
          font-weight: 700;
          letter-spacing: 0.06em;
          text-align: center;
        }

        .course-title {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.72);
          backdrop-filter: blur(4px);
          padding: 10px 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 30%;
        }

        .course-title p {
          margin: 0;
          color: #fff;
          font-size: clamp(13px, 1.4vw, 16px);
          font-weight: 700;
          text-align: center;
        }

        .slide-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 10, 14, 0.7);
          backdrop-filter: blur(3px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 28px 24px;
          text-align: center;
          transition: transform 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .slide-overlay h3 {
          margin: 0 0 14px;
          color: #fff;
          font-size: clamp(15px, 1.6vw, 18px);
          font-weight: 700;
          line-height: 1.3;
        }

        .slide-overlay p {
          margin: 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: clamp(12px, 1.1vw, 14px);
          line-height: 1.7;
        }
      `}</style>

      <motion.div className="courses-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "0px 0px -50% 0px" }}>
        <motion.div className="courses-wrapper" variants={cardsWrapperVariants}>
          {courses.map((course, i) => (
            <motion.div key={course.id} className="course-card-wrapper" custom={cardOffsets[i]} variants={cardVariants}>
              <CourseCard course={course} />
            </motion.div>
          ))}
        </motion.div>

        <motion.h2 className="courses-title" variants={headerVariants}>
          Courses
        </motion.h2>
      </motion.div>
    </>
  );
}
