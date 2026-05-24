import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import f1 from "../../assets/images/f1.png";
import f2 from "../../assets/images/f2.png";
import f3 from "../../assets/images/f3.png";
import f4 from "../../assets/images/f4.png";

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
      "You will gain comprehensive knowledge of both front-end and back-end development, enabling you to build complete web and mobile applications from scratch using the latest technologies.",
      "You have the opportunity to master a broad range of tools including HTML, CSS, JavaScript, React, NodeJS, React Native, and Go-Lang, making you highly versatile in the job market.",
      "You can develop expertise in 3-tier application architecture, RESTful APIs, and cloud deployment, preparing you to build and deliver production-grade software used by real users.",
    ],
  },
  learn: {
    type: "bullets",
    points: [
      "You will acquire knowledge to build, test, and deploy advanced web and mobile applications using modern front-end frameworks like React and back-end frameworks like Express and Go-Lang.",
      "You can develop proficiency in database design, API development, and cloud infrastructure to architect scalable and maintainable full-stack solutions.",
      "You have the opportunity to master Agile software engineering practices, DevOps pipelines, and automated testing, enabling you to work effectively in professional software development teams.",
    ],
  },
  structure: {
    type: "paragraph",
    text: "Our four-year program prepares students for a career in full-stack development through a strong foundation in computer science and essential industry skills. The curriculum balances knowledge with practical application and development competencies offering a meticulous learning journey. The program begins with a foundation year, followed by 3 years of challenging modules and projects each semester in full-stack development.",
  },
  career: {
    type: "career",
    intro:
      "You'll have numerous professional opportunities in various global and local organizations such as financial institutions, tech-based firms, business organizations, government agencies, and ministries. The following are potential job opportunities for our graduates:",
    general: [
      "Software Analysts, Software Engineers",
      "Software Solution Architects",
      "Application Developers",
      "Web and Mobile Application Developers",
      "Project Managers, Scrum Masters",
      "Software QA Engineers",
      "Cybersecurity Professionals",
      "IT Consultants",
      "IT Entrepreneurs",
    ],
    specialization: [
      "Full Stack Web Developers",
      "Front-End Developers (React, Vue, Angular)",
      "Back-End Developers (Node.js, Go, Python)",
      "Mobile Application Developers",
      "API & Microservices Engineers",
      "DevOps & Cloud Engineers",
      "UI/UX Engineers",
    ],
  },
};

const images = [f2, f3, f4];

const semesters = [
  {
    name: "Year 1 Semester I",
    modules: [
      {
        name: "Fundamentals of Programming",
        desc: "Programming involves creating, testing, and maintaining instructions for a computer to execute. Through this course, you will learn the foundational constructs of programming languages, including variable manipulation, decision making, repetitive statements, operators, and data types. Additionally, you will learn functional and object-oriented programming, which are valuable for developing front-end web applications.",
      },
      {
        name: "Front End Web Development I",
        desc: "Front-end web development offers an immersive learning experience that aims to equip students with the essential concepts and skills required to develop and design functional and interactive websites. The content covers a comprehensive range of topics, including mark-up, styling, and interactive language, as well as basic web design principles.",
      },
      {
        name: "Fundamentals of Computing",
        desc: "Students will be offered a comprehensive and hands-on exploration so that they will delve into the fascinating world of operating systems (OS) and computer networking. The curriculum is designed to provide a solid foundation in modern operating systems, with a particular focus on Command-Line Interfaces and key OS commands and tools.",
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
        desc: "Students will delve into the world of backend web application development, focusing on building applications that are scalable and reliable in handling high volumes of concurrent connections. Students will be introduced to Object Oriented Design and the MVC architecture on the server-side, with coverage of necessary APIs and automated testing.",
      },
      {
        name: "User Interaction Design",
        desc: "Knowledge and skills related to interactive design for various applications will be covered. Students will learn about interaction design principles, patterns, and processes, as well as rapid prototyping and UI/UX design applied to web and mobile development.",
      },
      {
        name: "Mathematics for Programming I",
        desc: "The world of Discrete Mathematics will provide students with a strong foundation in this essential area of computer science, with a particular emphasis on Graph Theory and logical reasoning.",
      },
      {
        name: "Academic Skills",
        desc: "The students will acquire the essential academic skills necessary for successful university-level study and beyond. Students will develop critical reading, writing, and oral presentation skills while fostering effective communication and critical analysis abilities.",
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
        desc: "Unlock the power of data structures and algorithms with topics covering abstract data types, dynamic arrays, linked lists, stacks, queues, binary search trees, hashing, graphs, and sorting. Covers various application scenarios such as web programming and user interfaces.",
      },
      {
        name: "Front End Web Development II",
        desc: "Students will advance their front-end skills by learning modern JavaScript frameworks, primarily React, and state management patterns. They will build complex, component-driven user interfaces and integrate them with RESTful APIs and third-party services.",
      },
      {
        name: "Mathematics for Programming II",
        desc: "Linear algebra, calculus, and numerical methods are crucial concepts in computing. Students will gain a comprehensive understanding of algorithms and how to apply mathematical concepts to practical problems in software development.",
      },
      {
        name: "Analytical & Critical Thinking & Writing",
        desc: "Unlock the power of analytical and critical thinking. Develop skills that enable one to dissect complex problems, identify key components, and apply logical reasoning to arrive at effective solutions.",
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
        desc: "Students will learn to build cross-platform mobile applications using React Native. The module covers mobile UI components, navigation, state management, device APIs, and publishing apps to the App Store and Google Play.",
      },
      {
        name: "Mathematics for Programming III",
        desc: "Students will start by understanding the basics of probability distributions and hypothesis testing, before delving deeper into advanced statistical modelling and fitting techniques. These concepts underpin data-driven decision making in modern full-stack applications.",
      },
      {
        name: "Economics",
        desc: "A comprehensive understanding of the principles of microeconomics, macroeconomics, and international economics. Students will learn to apply these concepts to real-world economic issues including digital product markets and tech industry economics.",
      },
      {
        name: "PRJ202",
        desc: "In this capstone module, students will develop an advanced responsive full-stack web and mobile solution using Agile process in a team, simulating a real-world scenario from requirement analysis through to live deployment.",
      },
      {
        name: "Elective I – Cyber Growth Conversation",
        desc: "Students will learn the basics of cybersecurity, explore tools and techniques used in cybercrimes, and understand vulnerabilities in web and mobile applications. Students will gain essential skills to protect against and respond to cyber incidents.",
      },
    ],
  },
  {
    name: "Year 3 Semester I",
    modules: [
      {
        name: "API Design and Microservices",
        desc: "Students will master the design and development of RESTful and GraphQL APIs, microservices architecture, service discovery, and inter-service communication patterns. The module covers API security, versioning, documentation, and performance optimization.",
      },
      {
        name: "DevOps and Automation for Development",
        desc: "An all-encompassing understanding of the DevOps pipeline process, from Agile development to software version control, continuous integration (CI), automated testing, and continuous delivery (CD) for full-stack applications.",
      },
      {
        name: "Professional Certification I",
        desc: "This module is designed to equip students with the knowledge and skills necessary to earn an industry-recognized IT professional certification, gaining the confidence and credentials needed to excel in the competitive field of software development.",
      },
      {
        name: "Introduction to Research",
        desc: "A solid foundation in the theories and practices of scientific research. Students will learn how to design, conduct, and communicate research using appropriate methodologies, techniques, and tools relevant to software engineering.",
      },
      {
        name: "Elective II – Secure Coding",
        desc: "Students will learn how to write code that mitigates security vulnerabilities in web and mobile applications. The course covers input validation, error handling, secure session management, and protection against SQL injection and cross-site scripting.",
      },
    ],
  },
  {
    name: "Year 3 Semester II",
    modules: [
      {
        name: "Cloud and Serverless Development",
        desc: "Students will learn to design and deploy cloud-native applications using platforms such as AWS, Azure, and Google Cloud. Topics include serverless functions, containerization with Docker, orchestration with Kubernetes, and cloud storage and database services.",
      },
      {
        name: "PRJ303",
        desc: "In this dynamic mini-capstone module, students will put their full-stack development skills into practice. Working collaboratively in small groups using Agile, they will build and deploy an innovative full-stack solution addressing real-life problems.",
      },
      {
        name: "Design Pattern",
        desc: "This module introduces students to essential software design principles and patterns including SOLID, DRY, KISS, Singleton, Factory, Observer, and MVC, preparing students to build scalable and maintainable software architectures.",
      },
      {
        name: "Professional Certificate II",
        desc: "Through practical, hands-on training, students will be fully prepared to sit for industry-recognized certifications in cloud or full-stack development technologies, boosting their credentials in the competitive IT job market.",
      },
    ],
  },
  {
    name: "Year 4 Semester I",
    modules: [
      {
        name: "Advanced Full Stack Development",
        desc: "Students will tackle advanced topics in full-stack development including server-side rendering, progressive web apps (PWAs), real-time applications with WebSockets, performance optimization, and accessibility standards. Students will build production-quality applications end-to-end.",
      },
      {
        name: "Go-Lang Backend Development",
        desc: "Students will learn Go-Lang for building high-performance, concurrent backend services. Topics include Go routines, channels, REST API development, database integration, and building microservices with Go, a language widely adopted in cloud-native development.",
      },
      {
        name: "Ethics in Digital Media and Computing",
        desc: "Students will delve into the complex world of technology ethics and legal considerations, including intellectual property rights, computer crimes, and the ethical implications of software systems on society.",
      },
      {
        name: "Competitive Programming",
        desc: "A solid foundation in algorithmic problem-solving. Students will learn how to design efficient algorithms and data structures, building skills for technical interviews and competitive coding challenges.",
      },
      {
        name: "Elective III – Ethical Hacking",
        desc: "The Ethical Hacking course provides a comprehensive, hands-on approach to understanding web application vulnerabilities. Students will learn penetration testing techniques, network forensics, and security assessments to build more secure full-stack applications.",
      },
    ],
  },
  {
    name: "Year 4 Semester II",
    modules: [
      {
        name: "Advanced English Skills for Career Development",
        desc: "Students will develop skills for the global job market, focusing on utilizing social media and career portals to identify opportunities. Students will learn how to create a professional resume and portfolio that effectively showcases their full-stack development projects.",
      },
      {
        name: "Industry Final Year Project – Major Capstone",
        desc: "The final capstone project is the culminating experience of the programme, designed to immerse students in a practical, real-world setting. Students will deliver a complete, production-grade full-stack application, demonstrating mastery of the entire software development lifecycle.",
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
      <h2 className="!mb-8 !text-center !text-[32px] !font-bold !font-black !text-black">Course Modules</h2>
      <p className="!mb-8 !text-[17px] !leading-relaxed !text-gray-700">
        Students will have to complete 60 credits in each semester. In total, a student has to complete 480 credits to be eligible for the award of a Bachelor of Computer Science
        (Full Stack Development).
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

export default function FullStack() {
  const [activeTab, setActiveTab] = useState("why");
  const content = tabContent[activeTab];

  return (
    <div className="">
      <Navbar overlay />
      <main className="min-h-screen">
        <PageBanner title="BACHELOR OF COMPUTER SCIENCE" subtitle="(Full Stack Development)" image={f1} fade />

        <motion.div
          className="mx-auto max-w-[90%] px-4 pt-10 pb-2 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-[32px] font-bold text-black">Ready to become a Full-Stack Development Wizard?</p>
        </motion.div>

        <section className="mx-auto max-w-[90%] px-4 py-10">
          <motion.p
            className="!mb-20 text-left text-[17px] leading-relaxed text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            This program offers a comprehensive education in the latest tools and technologies for advanced web, mobile and API application development, covering 3-tier
            architecture. You will be able to use your wizard skills to develop modern front-end and back-end applications with knowledge in HTML, CSS, Javascript, NodeJS, React
            Native, Go-Lang along with popular frameworks.
          </motion.p>

          <motion.div
            className="mb-10 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, ease: "easeOut" }}
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
              initial={{ opacity: 0, x: -40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
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
              initial={{ opacity: 0, x: 40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
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
                  <p className="pt-2">And with Full Stack Development Specialization:</p>
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
