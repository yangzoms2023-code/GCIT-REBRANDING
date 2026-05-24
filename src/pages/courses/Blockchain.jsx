import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import b1 from "../../assets/images/b1.png";
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
      "You will explore the technology behind decentralized systems, smart contracts, and distributed ledgers that are transforming industries from finance to healthcare and supply chain management.",
      "You have the opportunity to gain hands-on experience building blockchain applications using industry-standard platforms like Ethereum, Hyperledger, and Solana, preparing you for a rapidly growing job market.",
      "You can develop expertise in cryptography and consensus mechanisms that underpin the security and integrity of digital assets and decentralized finance (DeFi) applications.",
    ],
  },
  learn: {
    type: "bullets",
    points: [
      "You will acquire knowledge to design, develop, and deploy smart contracts and decentralized applications (dApps) on major blockchain platforms.",
      "You can develop proficiency in blockchain security, cryptographic protocols, and tokenomics to build secure and scalable blockchain solutions.",
      "You have the opportunity to master Web3 development tools and frameworks, enabling you to create next-generation decentralized financial and enterprise applications.",
    ],
  },
  structure: {
    type: "paragraph",
    text: "Our four-year program prepares students for a career in blockchain technology through a strong foundation in computer science and distributed systems. The curriculum balances theoretical knowledge with practical application, covering smart contract development, cryptography, and decentralized application architecture. The program begins with a foundation year, followed by 3 years of challenging modules and projects each semester in blockchain development.",
  },
  career: {
    type: "career",
    intro:
      "You'll have numerous professional opportunities in various global and local organizations such as financial institutions, fintech firms, government agencies, and technology companies. The following are potential job opportunities for our graduates:",
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
      "Blockchain Developers",
      "Smart Contract Engineers",
      "DeFi Application Developers",
      "Web3 Frontend Developers",
      "Blockchain Security Auditors",
      "Tokenomics & Cryptoeconomics Specialists",
      "Distributed Systems Engineers",
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
        desc: "Students will delve into the world of backend web application development, focusing on building applications that are scalable and reliable in handling high volumes of concurrent connections. Students will be introduced to Object Oriented Design and the MVC architecture on the server-side.",
      },
      {
        name: "User Interaction Design",
        desc: "Knowledge and skills related to interactive design for various applications will be covered. Students will learn about interaction design principles, patterns, and processes, as well as rapid prototyping and UI/UX design.",
      },
      {
        name: "Mathematics for Programming I",
        desc: "The world of Discrete Mathematics will provide students with a strong foundation in this essential area of computer science, with a particular emphasis on Graph Theory. Students will develop their mathematical maturity and ability to work with abstract concepts.",
      },
      {
        name: "Academic Skills",
        desc: "The students will acquire the essential academic skills necessary for successful university-level study and beyond. Through active engagement with academic texts, students will develop their critical reading, writing, and oral presentation skills.",
      },
      {
        name: "Mini Project I",
        desc: "In this capstone module, students will showcase all their skills and knowledge by developing a responsive full-stack web application. From start to finish, students will be involved in every step of the development process, from requirement analysis through to live deployment.",
      },
    ],
  },
  {
    name: "Year 2 Semester I",
    modules: [
      {
        name: "Applied Data Structures and Algorithms",
        desc: "Unlock the power of data structures and algorithms with topics covering abstract data types, dynamic arrays, linked lists, stacks, queues, binary search trees, hashing, graphs, and sorting. Covers various application scenarios such as graphics, web programming, and user interfaces.",
      },
      {
        name: "Cryptography Fundamentals",
        desc: "Students will explore the mathematical foundations of cryptography, including symmetric and asymmetric encryption, hash functions, digital signatures, and public key infrastructure. These concepts are fundamental to understanding blockchain security and building secure distributed systems.",
      },
      {
        name: "Mathematics for Programming II",
        desc: "Linear algebra, calculus, and numerical methods are crucial concepts in computing. Students will gain a comprehensive understanding of algorithms and how to apply mathematical concepts to practical problems in blockchain and distributed systems.",
      },
      {
        name: "Analytical & Critical Thinking & Writing",
        desc: "Unlock the power of the mind in this module that delves into the art of analytical and critical thinking. Develop skills that enable one to dissect complex problems, identify key components, and apply logical reasoning to arrive at effective solutions.",
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
        name: "Blockchain Fundamentals",
        desc: "Students will learn the core principles of blockchain technology, including distributed ledger concepts, consensus mechanisms, peer-to-peer networking, and the architecture of major blockchain platforms such as Bitcoin and Ethereum. By the end of the module, students will have a solid foundation in blockchain systems.",
      },
      {
        name: "Mathematics for Programming III",
        desc: "Students will start by understanding the basics of probability distributions and hypothesis testing, before delving deeper into advanced statistical modelling. The module also covers number theory and finite fields essential for understanding cryptographic algorithms used in blockchain.",
      },
      {
        name: "Economics",
        desc: "A comprehensive understanding of the principles of microeconomics, macroeconomics, and international economics will be covered. Students will learn to apply these concepts to explain real-world economic issues including digital economies and tokenomics.",
      },
      {
        name: "PRJ202",
        desc: "In this capstone module, students will develop an advanced responsive full stack web and mobile solution using Agile process in a team, simulating a real-world scenario from requirement analysis through to live deployment.",
      },
      {
        name: "Elective I – Cyber Growth Conversation",
        desc: "Students will learn the basics of cybersecurity, explore tools and techniques used in cybercrimes, and understand vulnerabilities in information systems. The module also introduces cyber forensics and addresses the security implications of emerging technologies.",
      },
    ],
  },
  {
    name: "Year 3 Semester I",
    modules: [
      {
        name: "Smart Contract Development",
        desc: "A comprehensive introduction to smart contract programming using Solidity and other languages. Students will learn to design, develop, test, and deploy smart contracts on Ethereum and EVM-compatible blockchains, with a focus on security best practices and gas optimization.",
      },
      {
        name: "DevOps and Automation for Development",
        desc: "An all-encompassing understanding of the DevOps pipeline process, from the initial stages of Agile development to software version control, continuous integration (CI), automated testing, and continuous delivery (CD) for blockchain applications.",
      },
      {
        name: "Professional Certification I",
        desc: "This module is designed to equip students with the knowledge and skills necessary to earn an industry-recognized IT professional certification, gaining the confidence and credentials needed to excel in the competitive field of blockchain and distributed technologies.",
      },
      {
        name: "Introduction to Research",
        desc: "A solid foundation in the theories and practices of scientific research. Students will learn how to design, conduct, and communicate research using appropriate methodologies, techniques, and tools relevant to blockchain and distributed systems research.",
      },
      {
        name: "Elective II – Secure Coding",
        desc: "Students will learn how to write code that mitigates security vulnerabilities, particularly in web, mobile, and smart contract applications. The course covers input validation, error handling, secure session management, and protection against common blockchain attack vectors.",
      },
    ],
  },
  {
    name: "Year 3 Semester II",
    modules: [
      {
        name: "Decentralized Application Development",
        desc: "Students will build complete decentralized applications (dApps) integrating smart contracts with Web3 frontends. They will explore frameworks like Hardhat and Truffle, connect to blockchain networks using ethers.js and Web3.js, and implement wallet authentication and on-chain data management.",
      },
      {
        name: "PRJ303",
        desc: "In this dynamic mini-capstone module, students will put their blockchain development skills into practice. Working collaboratively in small groups, they will go through the entire software development life cycle using Agile, creating innovative blockchain solutions to address real-life problems.",
      },
      {
        name: "Design Pattern",
        desc: "This module introduces students to essential software design principles and blockchain-specific design patterns, focusing on best practices used in the development of robust and maintainable smart contracts and dApp systems including upgradeability patterns and proxy contracts.",
      },
      {
        name: "Professional Certificate II",
        desc: "Through practical, hands-on training, students will be fully prepared to sit for industry-recognized certifications in blockchain and distributed technologies, boosting their credentials in the competitive IT job market.",
      },
    ],
  },
  {
    name: "Year 4 Semester I",
    modules: [
      {
        name: "DeFi and Tokenomics",
        desc: "Students will dive deep into decentralized finance protocols, token standards (ERC-20, ERC-721, ERC-1155), liquidity pools, automated market makers, yield farming, and governance mechanisms. Students will learn to design and analyse token economies for real-world blockchain projects.",
      },
      {
        name: "Blockchain Security and Auditing",
        desc: "Students will explore smart contract vulnerabilities, common attack vectors such as reentrancy and flash loan attacks, and formal verification techniques. Students will learn to conduct security audits using tools like Slither, MythX, and Echidna to identify and remediate vulnerabilities.",
      },
      {
        name: "Ethics in Digital Media and Computing",
        desc: "Students will delve into the complex world of technology ethics and the legal considerations that come with it, including intellectual property rights, computer crimes, and the ethical implications of decentralized and autonomous systems.",
      },
      {
        name: "Competitive Programming",
        desc: "A solid foundation in the theories and practices of algorithmic problem-solving. Students will learn how to design, conduct, and communicate solutions using appropriate methodologies and techniques, building skills for technical interviews and blockchain protocol development.",
      },
      {
        name: "Elective III – Ethical Hacking",
        desc: "The Ethical Hacking course provides a comprehensive, hands-on approach to understanding and mitigating the threats posed by cyber attackers, covering network attacks, wireless security, web application vulnerabilities, and network forensics.",
      },
    ],
  },
  {
    name: "Year 4 Semester II",
    modules: [
      {
        name: "Advanced English Skills for Career Development",
        desc: "Students will develop an understanding of the nuances of job application processes, with a particular focus on utilizing social media and career portals to identify opportunities. Students will learn how to create a professional resume that effectively communicates their strengths in blockchain development.",
      },
      {
        name: "Industry Final Year Project – Major Capstone",
        desc: "The final capstone project is the culminating experience of the programme, designed to immerse students in a practical, real-world setting where they can apply blockchain knowledge and skills. Students will learn how to communicate effectively, conduct research, work collaboratively, and deliver an industry-level blockchain solution.",
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
      <h2 className="!mb-8 !text-center !text-[32px] !font-bold !text-black">Course Modules</h2>
      <p className="!mb-8 !text-[17px] !text-left !leading-relaxed !text-gray-700">
        Students will have to complete 60 credits in each semester. In total, a student has to complete 480 credits to be eligible for the award of a Bachelor of Computer Science
        (Blockchain Development).
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

export default function Blockchain() {
  const [activeTab, setActiveTab] = useState("why");
  const content = tabContent[activeTab];

  return (
    <div className="">
      <Navbar overlay />
      <main className="min-h-screen">
        <PageBanner title="BACHELOR OF COMPUTER SCIENCE" subtitle="(Blockchain Technology)" image={b1} />

        <motion.div
          className="mx-auto max-w-[90%] px-4 pt-10 pb-2 text-center"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="text-[32px] font-bold text-black">Immerse into the world of Blockchain Tech & Metaverse</p>
        </motion.div>

        <section className="mx-auto max-w-[90%] px-4 py-10">
          <motion.p
            className="!mb-20 text-left text-[17px] leading-relaxed text-gray-700"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            This cutting-edge program equips students with the skills to develop and manage blockchain-based systems and applications. The comprehensive curriculum covers
            blockchain architecture, distributed ledger technology, smart contracts, digital currencies, and cybersecurity, enabling you to design and implement blockchain
            solutions for various industries such as the world of Metaverse.
          </motion.p>

          <motion.div
            className="mb-10 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
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
              initial={{ opacity: 0, x: 60 }}
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
                  <p className="pt-2">And with Blockchain Development Specialization:</p>
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
