import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import si1 from "../../assets/images/si1.png";
import b2 from "../../assets/images/b2.png";
import b3 from "../../assets/images/b3.png";
import b4 from "../../assets/images/b4.png";

const tabs = [
  { id: "why", label: "Why this program?" },
  { id: "learn", label: "What Would I Learn?" },
  { id: "structure", label: "Program Structure" },
  { id: "career", label: "Your Career Prospects" },
];

const tabContent = {
  why: {
    type: "bullets",
    points: [
      "You possess a passion for aesthetics, technology, and a keen interest in understanding technology-mediated experiences.",
      "You have the opportunity to combine creative design thinking with technical development skills, building interactive digital products used by real people across web, mobile, and emerging platforms.",
      "You can develop expertise in UI/UX design, front-end development, and human-computer interaction — a rare combination that makes you highly valuable to modern technology teams.",
    ],
  },
  learn: {
    type: "bullets",
    points: [
      "You will acquire knowledge to design and develop interactive digital experiences, including user interface design, prototyping, usability testing, and front-end implementation.",
      "You can develop proficiency in design tools such as Figma, Adobe XD, and motion design, alongside development frameworks like React and React Native for web and mobile platforms.",
      "You have the opportunity to master the principles of human-computer interaction, information architecture, and accessibility standards to create inclusive and impactful digital products.",
    ],
  },
  structure: {
    type: "paragraph",
    text: "Our four-year program prepares students for a career in interactive design and development through a strong foundation in both design thinking and computer science. The curriculum balances creative practice with technical competencies, covering interaction design, visual communication, front-end development, and UX research. The program begins with a foundation year, followed by 3 years of challenging modules and projects each semester.",
  },
  career: {
    type: "career",
    intro:
      "You'll have numerous professional opportunities in various global and local organizations such as design agencies, technology companies, media firms, and government organizations. The following are potential job opportunities for our graduates:",
    general: [
      "Software Analysts, Software Engineers",
      "Application Developers",
      "Web and Mobile Application Developers",
      "Project Managers, Scrum Masters",
      "Software QA Engineers",
      "IT Consultants",
      "IT Entrepreneurs",
    ],
    specialization: [
      "UI/UX Designers",
      "Interaction Designers",
      "Front-End Developers",
      "Product Designers",
      "UX Researchers",
      "Motion & Visual Designers",
      "Design Systems Engineers",
    ],
  },
};

const images = [b2, b3, b4];

const semesters = [
  {
    name: "Year 1 Semester I",
    modules: [
      {
        name: "Fundamentals of Programming",
        desc: "Programming involves creating, testing, and maintaining instructions for a computer to execute. Through this course, you will learn the foundational constructs of programming languages, including variable manipulation, decision making, repetitive statements, operators, and data types. Additionally, you will learn functional and object-oriented programming, which are valuable for developing interactive applications.",
      },
      {
        name: "Front End Web Development I",
        desc: "Front-end web development offers an immersive learning experience that aims to equip students with the essential concepts and skills required to develop and design functional and interactive websites. The content covers a comprehensive range of topics, including mark-up, styling, and interactive language, as well as basic web design principles.",
      },
      {
        name: "Fundamentals of Computing",
        desc: "Students will be offered a comprehensive and hands-on exploration of operating systems and computer networking. The curriculum is designed to provide a solid foundation in modern operating systems, with a particular focus on Command-Line Interfaces and key OS commands and tools.",
      },
      {
        name: "Modern Database Design",
        desc: "Students will be introduced to the fascinating world of modern database systems. They will gain a comprehensive understanding of both SQL and NoSQL databases, covering theoretical foundations and practical skills needed to design and implement these databases effectively.",
      },
      {
        name: "Dzongkha Communication",
        desc: "A comprehensive introduction to the Dzongkha language, covering its historical background, significance, and grammatical structure. Emphasis will be placed on developing strong academic skills in listening, speaking, and writing, enabling students to communicate effectively both orally and in writing.",
      },
    ],
  },
  {
    name: "Year 1 Semester II",
    modules: [
      {
        name: "Back End Web Development",
        desc: "Students will delve into the world of backend web application development, focusing on building scalable and reliable applications. Students will be introduced to Object Oriented Design and the MVC architecture on the server-side, including API development and automated testing.",
      },
      {
        name: "User Interaction Design",
        desc: "Knowledge and skills related to interactive design for various applications will be covered in depth. Students will learn about interaction design principles, patterns, and processes, as well as rapid prototyping and UI/UX design applied to web and mobile development.",
      },
      {
        name: "Mathematics for Programming I",
        desc: "Discrete Mathematics provides students with a strong foundation in this essential area of computer science, with a particular emphasis on Graph Theory and logical reasoning, supporting algorithmic thinking in interactive application development.",
      },
      {
        name: "Academic Skills",
        desc: "Students will acquire the essential academic skills necessary for successful university-level study and beyond, developing critical reading, writing, and oral presentation skills while fostering effective communication and reflection.",
      },
      {
        name: "Mini Project I",
        desc: "In this capstone module, students will showcase all their skills and knowledge by developing a responsive full-stack web application, from requirement analysis and system design through prototyping, testing, and live deployment.",
      },
    ],
  },
  {
    name: "Year 2 Semester I",
    modules: [
      {
        name: "Applied Data Structures and Algorithms",
        desc: "Unlock the power of data structures and algorithms with topics covering abstract data types, dynamic arrays, linked lists, stacks, queues, binary search trees, hashing, graphs, and sorting for building efficient interactive applications.",
      },
      {
        name: "Visual Design and Typography",
        desc: "Students will explore the fundamentals of visual design including colour theory, typography, grid systems, and layout principles. Through practical projects, students will develop a strong aesthetic sensibility and learn to apply design principles to create visually compelling digital interfaces.",
      },
      {
        name: "Mathematics for Programming II",
        desc: "Linear algebra, calculus, and numerical methods as applied to computer graphics and interactive media. Students will gain a comprehensive understanding of algorithms used in visual computing and how to apply mathematical concepts to practical design and development problems.",
      },
      {
        name: "Analytical & Critical Thinking & Writing",
        desc: "Develop skills that enable one to dissect complex design problems, identify key components, and apply logical reasoning to arrive at effective solutions. Students will strengthen their ability to critique designs and communicate design rationale clearly.",
      },
      {
        name: "Agile Software Engineering Practice",
        desc: "Students will dive into an immersive experience in Agile software development, covering pair programming, test-driven development, behaviour-driven development, continuous delivery, clean code, refactoring, Scrum, and Agile project management.",
      },
    ],
  },
  {
    name: "Year 2 Semester II",
    modules: [
      {
        name: "Mobile Application Development",
        desc: "Students will learn to build cross-platform mobile applications using React Native. The module covers mobile UI components, navigation, gesture-based interactions, device APIs, and publishing interactive apps to the App Store and Google Play.",
      },
      {
        name: "UX Research and Usability",
        desc: "Students will learn user-centred design methodologies including contextual inquiry, user interviews, persona development, task analysis, usability testing, and heuristic evaluation. Students will conduct and document original UX research to inform design decisions.",
      },
      {
        name: "Economics",
        desc: "A comprehensive understanding of the principles of microeconomics, macroeconomics, and international economics. Students will learn to apply these concepts to the digital economy, creative industries, and the business of design.",
      },
      {
        name: "PRJ202",
        desc: "In this capstone module, students will develop an advanced responsive full-stack web and mobile solution using Agile process in a team, simulating a real-world scenario from requirement analysis through to live deployment.",
      },
      {
        name: "Elective I – Cyber Growth Conversation",
        desc: "Students will learn the basics of cybersecurity, explore tools and techniques used in cybercrimes, and understand vulnerabilities in information systems. Students will gain essential skills to protect against and respond to cyber incidents.",
      },
    ],
  },
  {
    name: "Year 3 Semester I",
    modules: [
      {
        name: "Advanced Front-End Development",
        desc: "Students will master advanced front-end technologies including React, state management with Redux/Zustand, performance optimization, accessibility (WCAG), progressive web apps, and component-driven development with design systems — bridging design and code at a professional level.",
      },
      {
        name: "DevOps and Automation for Development",
        desc: "An all-encompassing understanding of the DevOps pipeline process, from the initial stages of Agile development to software version control, continuous integration (CI), automated testing, and continuous delivery (CD) for interactive web applications.",
      },
      {
        name: "Professional Certification I",
        desc: "This module is designed to equip students with the knowledge and skills necessary to earn an industry-recognized certification in design or front-end development, gaining the confidence and credentials needed to excel in the competitive field.",
      },
      {
        name: "Introduction to Research",
        desc: "A solid foundation in the theories and practices of scientific research applied to design and HCI. Students will learn how to design and conduct design research studies, analyse findings, and communicate insights effectively.",
      },
      {
        name: "Elective II – Secure Coding",
        desc: "Students will learn how to write code that mitigates security vulnerabilities in web and mobile applications, covering input validation, error handling, secure session management, and protection against common web attacks.",
      },
    ],
  },
  {
    name: "Year 3 Semester II",
    modules: [
      {
        name: "Motion Design and Animation",
        desc: "Students will explore the principles of motion design and animation for digital interfaces, including micro-interactions, transition design, animated illustrations, and video production. Students will use industry tools such as After Effects and CSS/JS animation libraries.",
      },
      {
        name: "PRJ303",
        desc: "In this dynamic mini-capstone module, students will work collaboratively in small groups to design and develop an innovative interactive digital product, going through the full design and development lifecycle using Agile practices.",
      },
      {
        name: "Design Pattern",
        desc: "This module introduces students to essential software design principles and UI design patterns, focusing on best practices used in the development of robust and maintainable interactive systems including component libraries and design tokens.",
      },
      {
        name: "Professional Certificate II",
        desc: "Through practical, hands-on training, students will be fully prepared to sit for industry-recognized certifications in design or development, boosting their credentials in the competitive creative technology job market.",
      },
    ],
  },
  {
    name: "Year 4 Semester I",
    modules: [
      {
        name: "Emerging Interaction Technologies",
        desc: "Students will explore cutting-edge interaction paradigms including augmented reality (AR), virtual reality (VR), voice interfaces, gesture recognition, and AI-driven personalization. Students will prototype experiences for emerging platforms and evaluate their usability and impact.",
      },
      {
        name: "Design Systems and Product Design",
        desc: "Students will learn to build and maintain scalable design systems, covering component libraries, design tokens, documentation, and the governance of design at scale. Students will apply product design thinking to solve complex, real-world design challenges end-to-end.",
      },
      {
        name: "Ethics in Digital Media and Computing",
        desc: "Students will delve into the ethical dimensions of interactive design and computing, including issues of dark patterns, digital wellbeing, privacy, accessibility, algorithmic bias, and the designer's responsibility to users and society.",
      },
      {
        name: "Competitive Programming",
        desc: "Students will sharpen their algorithmic problem-solving skills, building the computational thinking abilities needed for technical front-end engineering roles and competitive coding challenges.",
      },
      {
        name: "Elective III – Ethical Hacking",
        desc: "The Ethical Hacking course provides a comprehensive, hands-on approach to understanding web application vulnerabilities and security practices relevant to interactive application development.",
      },
    ],
  },
  {
    name: "Year 4 Semester II",
    modules: [
      {
        name: "Advanced English Skills for Career Development",
        desc: "Students will develop skills for the global job market, focusing on utilizing portfolio platforms, career portals, and professional networks to identify opportunities. Students will learn to craft compelling case studies and present design work effectively to employers and clients.",
      },
      {
        name: "Industry Final Year Project – Major Capstone",
        desc: "The final capstone project is the culminating experience of the programme, designed to immerse students in a practical, real-world interactive design and development challenge. Students will deliver a complete, polished digital product demonstrating mastery of both design thinking and technical implementation.",
      },
    ],
  },
];

function ChevronDown() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function CourseModules() {
  const [open, setOpen] = useState(null);
  return (
    <section className="mx-auto max-w-[90%] px-4 py-14">
      <h2 className="!mb-8 text-center !text-[32px] !font-bold text-black">Course Modules</h2>
      <p className="!mb-8 text-[17px] leading-relaxed text-gray-700">
        Students will have to complete 60 credits in each semester. In total, a student has to complete 480 credits to be eligible for the award of a Bachelor of Interactive Design
        &amp; Development.
      </p>
      <div>
        {semesters.map((sem) => (
          <div key={sem.name}>
            <button className="flex w-full items-center justify-between py-4 text-left" onClick={() => setOpen(open === sem.name ? null : sem.name)}>
              <span className="text-[15px] font-bold text-gray-700">{sem.name}</span>
              <span className={open === sem.name ? "rotate-180 transition-transform duration-200" : "transition-transform duration-200"}>
                <ChevronDown />
              </span>
            </button>
            {open === sem.name && (
              <div className="mb-4 space-y-4 pl-4">
                {sem.modules.map((mod) => (
                  <div key={mod.name}>
                    <p className="text-left text-[14px] font-bold text-gray-800">{mod.name}</p>
                    <p className="mt-1 text-left text-[13px] leading-relaxed text-gray-600">{mod.desc}</p>
                  </div>
                ))}
              </div>
            )}
            <hr className="border-gray-300" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function InteractiveDesign() {
  const [activeTab, setActiveTab] = useState("why");
  const content = tabContent[activeTab];

  return (
    <div className="">
      <Navbar overlay />
      <main className="min-h-screen">
        <PageBanner title="BACHELOR OF INTERACTIVE DESIGN & DEVELOPMENT" image={si1} />

        <section className="mx-auto max-w-[90%] px-4 py-10">
          <motion.div
            className="mb-10 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={
                  "rounded-full px-6 py-2.5 text-sm font-semibold transition-colors " +
                  (activeTab === tab.id ? "border-2 border-[#f48b1a] bg-white text-black" : "bg-[#f48b1a] text-white hover:bg-[#e07d10]")
                }
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 gap-20 px-10 md:grid-cols-2 md:items-start">
            <motion.div
              className="grid h-[60%] grid-cols-2 gap-3"
              initial={{ opacity: 0, scale: 0.94, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img src={images[0]} alt="" className="h-full w-full rounded-2xl object-cover" />
              <div className="flex flex-col gap-3">
                <img src={images[1]} alt="" className="min-h-0 flex-1 w-full rounded-2xl object-cover" />
                <img src={images[2]} alt="" className="min-h-0 flex-1 w-full rounded-2xl object-cover" />
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {content.type === "bullets" && (
                <ul className="space-y-4">
                  {content.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-left text-[15px] leading-relaxed text-gray-800">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-800" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              {content.type === "paragraph" && <p className="text-left text-[15px] leading-relaxed text-gray-800">{content.text}</p>}
              {content.type === "career" && (
                <div className="space-y-4 text-left text-[15px] leading-relaxed text-gray-800">
                  <p>{content.intro}</p>
                  <ul className="space-y-1">
                    {content.general.map((item, i) => (
                      <li key={i} className="ml-8 flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-800" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="pt-2">And with Interactive Design &amp; Development Specialization:</p>
                  <ul className="space-y-1">
                    {content.specialization.map((item, i) => (
                      <li key={i} className="ml-8 flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-800" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        <CourseModules />
      </main>
      <Footer />
    </div>
  );
}
