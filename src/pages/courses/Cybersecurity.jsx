import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import cb1 from "../../assets/images/cb1.png";
import cb2 from "../../assets/images/cb2.png";
import cb3 from "../../assets/images/cb3.png";
import cb4 from "../../assets/images/cb4.png";

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
      "You will gain in-depth knowledge of how cyberattacks work and how to defend against them, learning from real-world case studies involving breaches at major organizations worldwide.",
      "You have the opportunity to develop hands-on skills in ethical hacking, penetration testing, and digital forensics — the most sought-after capabilities in the global cybersecurity job market.",
      "You can build expertise in network security, cryptography, and incident response, preparing you to protect critical infrastructure and digital assets for governments and enterprises.",
    ],
  },
  learn: {
    type: "bullets",
    points: [
      "You will acquire knowledge to identify, analyse, and remediate vulnerabilities in networks, web applications, and operating systems using industry-standard tools and methodologies.",
      "You can develop proficiency in digital forensics, malware analysis, and threat intelligence to investigate and respond to cybersecurity incidents effectively.",
      "You have the opportunity to master ethical hacking techniques and penetration testing frameworks such as Metasploit, Burp Suite, and Kali Linux to assess and strengthen security postures.",
    ],
  },
  structure: {
    type: "paragraph",
    text: "Our four-year program prepares students for a career in cybersecurity through a strong foundation in computer science and advanced security disciplines. The curriculum balances theoretical knowledge with practical application, covering network defence, ethical hacking, digital forensics, and security operations. The program begins with a foundation year, followed by 3 years of challenging modules and projects each semester in cybersecurity.",
  },
  career: {
    type: "career",
    intro:
      "You'll have numerous professional opportunities in various global and local organizations such as financial institutions, government agencies, defence organizations, and technology companies. The following are potential job opportunities for our graduates:",
    general: [
      "Software Analysts, Software Engineers",
      "Software Solution Architects",
      "Application Developers",
      "Web and Mobile Application Developers",
      "Project Managers, Scrum Masters",
      "Software QA Engineers",
      "IT Consultants",
      "IT Entrepreneurs",
    ],
    specialization: [
      "Cybersecurity Analysts",
      "Penetration Testers / Ethical Hackers",
      "Digital Forensics Investigators",
      "Security Operations Center (SOC) Analysts",
      "Network Security Engineers",
      "Incident Response Specialists",
      "Cybersecurity Consultants",
    ],
  },
};

const images = [cb2, cb3, cb4];

const semesters = [
  {
    name: "Year 1 Semester I",
    modules: [
      {
        name: "Fundamentals of Programming",
        desc: "Programming involves creating, testing, and maintaining instructions for a computer to execute. Through this course, you will learn the foundational constructs of programming languages, including variable manipulation, decision making, repetitive statements, operators, and data types. Additionally, you will learn functional and object-oriented programming, which are valuable for developing secure applications.",
      },
      {
        name: "Front End Web Development I",
        desc: "Front-end web development offers an immersive learning experience that aims to equip students with the essential concepts and skills required to develop and design functional and interactive websites, covering mark-up, styling, and interactive language, as well as basic web design principles.",
      },
      {
        name: "Fundamentals of Computing",
        desc: "Students will explore operating systems and computer networking with a focus on Command-Line Interfaces, key OS commands, and tools. Students will gain practical experience in writing scripts for user management, software installation, network administration, and service configuration — essential skills for cybersecurity professionals.",
      },
      {
        name: "Modern Database Design",
        desc: "Students will gain a comprehensive understanding of both SQL and NoSQL databases, covering theoretical foundations and practical skills needed to design and implement these databases effectively, with attention to database security and access control.",
      },
      {
        name: "Dzongkha Communication",
        desc: "A comprehensive introduction to the Dzongkha language, covering its historical background, significance, and grammatical structure. Emphasis will be placed on developing strong academic skills in listening, speaking, and writing.",
      },
    ],
  },
  {
    name: "Year 1 Semester II",
    modules: [
      {
        name: "Back End Web Development",
        desc: "Students will build scalable and reliable backend applications using Object Oriented Design and the MVC architecture. The module covers API development, automated testing, and secure coding practices essential for building web applications resilient to common security threats.",
      },
      {
        name: "User Interaction Design",
        desc: "Knowledge and skills related to interactive design for various applications will be covered. Students will learn about interaction design principles, patterns, rapid prototyping, and UI/UX design applied to web and mobile development.",
      },
      {
        name: "Mathematics for Programming I",
        desc: "Discrete Mathematics provides students with a strong foundation in graph theory, logic, and combinatorics — mathematical tools fundamental to understanding cryptographic algorithms and network security concepts.",
      },
      {
        name: "Academic Skills",
        desc: "Students will develop critical reading, writing, and oral presentation skills, fostering effective communication and critical analysis abilities for academic and professional success.",
      },
      {
        name: "Mini Project I",
        desc: "In this capstone module, students will develop a responsive full-stack web application from requirement analysis through to live deployment, applying secure development practices.",
      },
    ],
  },
  {
    name: "Year 2 Semester I",
    modules: [
      {
        name: "Applied Data Structures and Algorithms",
        desc: "Unlock the power of data structures and algorithms covering abstract data types, dynamic arrays, linked lists, stacks, queues, binary search trees, hashing, graphs, and sorting — building the algorithmic foundation needed for security tool development.",
      },
      {
        name: "Network Security Fundamentals",
        desc: "Students will explore the principles of secure network design, firewalls, intrusion detection systems, VPNs, and network monitoring. The module covers common network attack vectors including DDoS, man-in-the-middle, and ARP spoofing, along with mitigation strategies.",
      },
      {
        name: "Mathematics for Programming II",
        desc: "Linear algebra, number theory, and discrete probability are crucial for understanding cryptographic systems. Students will gain a comprehensive understanding of the mathematical foundations underpinning modern security algorithms.",
      },
      {
        name: "Analytical & Critical Thinking & Writing",
        desc: "Develop skills to dissect complex security problems, identify key components, and apply logical reasoning to arrive at effective defensive solutions. Students will learn to evaluate threat intelligence reports and security research critically.",
      },
      {
        name: "Agile Software Engineering Practice",
        desc: "Students will learn Agile methodologies including pair programming, test-driven development, continuous delivery, and Scrum, developing the collaborative and engineering skills needed for security software teams.",
      },
    ],
  },
  {
    name: "Year 2 Semester II",
    modules: [
      {
        name: "Cryptography and PKI",
        desc: "Students will study the mathematical and practical foundations of cryptography including symmetric and asymmetric encryption, hash functions, digital signatures, public key infrastructure, and TLS/SSL. Students will implement cryptographic protocols and analyse their security properties.",
      },
      {
        name: "Mathematics for Programming III",
        desc: "Students will explore probability distributions, hypothesis testing, and statistical modelling — skills needed to analyse security logs, model threat probabilities, and apply Bayesian reasoning to intrusion detection.",
      },
      {
        name: "Economics",
        desc: "A comprehensive understanding of microeconomics, macroeconomics, and international economics. Students will explore the economics of cybersecurity, including the cost of breaches, cyber insurance markets, and the economics of vulnerability disclosure.",
      },
      {
        name: "PRJ202",
        desc: "Students will develop an advanced full-stack web and mobile solution using Agile process in a team, incorporating secure development practices from requirement analysis through to live deployment.",
      },
      {
        name: "Elective I – Cyber Growth Conversation",
        desc: "Students will learn the basics of cybersecurity, explore tools and techniques used in cybercrimes, and understand vulnerabilities in information systems. The module introduces cyber forensics and addresses the security implications of emerging technologies.",
      },
    ],
  },
  {
    name: "Year 3 Semester I",
    modules: [
      {
        name: "Ethical Hacking and Penetration Testing",
        desc: "A comprehensive, hands-on introduction to ethical hacking. Students will learn penetration testing methodologies, reconnaissance techniques, exploitation frameworks like Metasploit, privilege escalation, and reporting. Students will practice on dedicated lab environments simulating real-world systems.",
      },
      {
        name: "DevOps and Security Automation",
        desc: "Students will learn DevSecOps principles, integrating security into CI/CD pipelines. Topics include automated security scanning, SAST/DAST tools, container security, secrets management, and infrastructure-as-code security practices.",
      },
      {
        name: "Professional Certification I",
        desc: "This module is designed to equip students with the knowledge and skills necessary to earn an industry-recognized cybersecurity certification such as CompTIA Security+, gaining the credentials needed to excel in the security field.",
      },
      {
        name: "Introduction to Research",
        desc: "A solid foundation in the theories and practices of scientific research applied to cybersecurity. Students will learn to design and conduct security research, analyse threat data, and communicate findings through academic and professional reports.",
      },
      {
        name: "Elective II – Secure Coding",
        desc: "Students will learn how to write code that mitigates security vulnerabilities in web and mobile applications. The course covers input validation, error handling, secure session management, and protection against OWASP Top 10 vulnerabilities.",
      },
    ],
  },
  {
    name: "Year 3 Semester II",
    modules: [
      {
        name: "Digital Forensics and Incident Response",
        desc: "Students will learn to conduct digital forensic investigations, preserve and analyse digital evidence, perform memory and disk forensics, and reconstruct attack timelines. The module also covers incident response planning, containment strategies, and post-incident reporting.",
      },
      {
        name: "PRJ303",
        desc: "In this mini-capstone module, students will collaborate in small groups to design and implement a cybersecurity solution addressing a real-world security challenge, going through the full development lifecycle using Agile practices.",
      },
      {
        name: "Design Pattern",
        desc: "This module introduces students to essential software design principles and security-focused design patterns, preparing students to build robust and maintainable secure software systems.",
      },
      {
        name: "Professional Certificate II",
        desc: "Through hands-on training, students will prepare for advanced industry-recognized certifications in cybersecurity, validating their expertise and boosting their credentials in the competitive security job market.",
      },
    ],
  },
  {
    name: "Year 4 Semester I",
    modules: [
      {
        name: "Advanced Penetration Testing and Red Teaming",
        desc: "Students will advance their offensive security skills with advanced exploitation techniques, Active Directory attacks, lateral movement, persistence mechanisms, and evasion strategies. Students will conduct full red team exercises simulating advanced persistent threats (APTs).",
      },
      {
        name: "Malware Analysis and Reverse Engineering",
        desc: "Students will learn to analyse malicious software using static and dynamic analysis techniques. Topics include disassembly, debugging, sandbox analysis, and writing detection signatures — skills essential for threat intelligence and incident response roles.",
      },
      {
        name: "Ethics in Digital Media and Computing",
        desc: "Students will explore the ethical and legal dimensions of cybersecurity, including responsible disclosure, computer crime law, privacy regulations (GDPR, PDPA), and the ethical considerations of offensive security work.",
      },
      {
        name: "Competitive Programming",
        desc: "Students will sharpen their algorithmic problem-solving skills, building the computational thinking abilities needed for security tool development, CTF competitions, and technical security interviews.",
      },
      {
        name: "Elective III – Security Operations and Threat Intelligence",
        desc: "Students will learn Security Operations Center (SOC) workflows, SIEM platforms, log analysis, threat hunting, and cyber threat intelligence. Students will practice identifying and responding to simulated attacks in a realistic SOC environment.",
      },
    ],
  },
  {
    name: "Year 4 Semester II",
    modules: [
      {
        name: "Advanced English Skills for Career Development",
        desc: "Students will develop skills for the global job market, focusing on utilizing career portals and professional networks to identify cybersecurity opportunities. Students will learn to create compelling resumes and portfolios showcasing their security expertise.",
      },
      {
        name: "Industry Final Year Project – Major Capstone",
        desc: "The final capstone project immerses students in a practical, real-world cybersecurity engagement. Students will conduct a comprehensive security assessment, develop defensive solutions, and present their findings — demonstrating mastery of the full cybersecurity lifecycle.",
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
        Students will have to complete 60 credits in each semester. In total, a student has to complete 480 credits to be eligible for the award of a Bachelor of Computer Science
        (Cybersecurity).
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

export default function Cybersecurity() {
  const [activeTab, setActiveTab] = useState("why");
  const content = tabContent[activeTab];

  return (
    <div className="bg-[#F2F5F5]">
      <Navbar overlay />
      <main className="min-h-screen">
        <PageBanner title="BACHELOR OF COMPUTER SCIENCE" subtitle="(Cyber Security)" image={cb1} fade />

        <motion.div
          className="mx-auto max-w-[90%] px-4 pt-10 pb-2 text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-[32px] font-bold text-black">Become a Guardian of Digital Security</p>
        </motion.div>

        <section className="mx-auto max-w-[90%] px-4 py-10">
          <motion.p
            className="!mb-20 text-left text-[17px] leading-relaxed text-gray-700"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Our comprehensive degree program specializing in Cybersecurity provides students with essential skills and in-depth knowledge required to secure digital assets, defend
            against cyber threats, and maintain information integrity. By combining foundational computer science with advanced cybersecurity training, you will be prepared to
            protect and secure modern technological infrastructures, engage in ethical hacking practices, perform digital forensic investigations, and respond effectively to
            cybersecurity incidents.
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
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
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
                  <p className="pt-2">And with Cybersecurity Specialization:</p>
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
