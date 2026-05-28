import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import a1 from "../../assets/images/a1.png";
import a2 from "../../assets/images/a2.png";
import a3 from "../../assets/images/a3.png";
import a4 from "../../assets/images/a4.png";

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
      "You will discover the technology behind intelligent agents like Siri, Google Assistant, and Alexa, enabling human-like conversations and dialogue interactions.",
      "You have the opportunity to explore the fascinating capabilities of computers in face recognition and predicting complex outcomes such as fraud detection, cybersecurity anomaly detection, and manufacturing downtime prediction.",
      "You can uncover the power of Big Data in utilizing historical data spanning decades or centuries to make powerful predictions, foresee cultural shifts like the rise of smartphones, and gain insights into people's lifestyles, spending habits, and entertainment preferences.",
    ],
  },
  learn: {
    type: "bullets",
    points: [
      "You will acquire knowledge to build, train, and deploy various kinds of neural network architectures.",
      "You can develop proficiency in big data analysis to extract high-value insights from data, fostering data literacy across different types of organizations.",
      "You have the opportunity to attain expertise in NLP algorithms, enabling you to collect datasets from open websites and apply different techniques to design AI models and develop applications for real-world problems.",
    ],
  },
  structure: {
    type: "paragraph",
    text: "Our four-year program prepares students for a career in technology through a strong foundation in computer science and essential industry skills. The curriculum balances knowledge with practical application and development competencies offering a meticulous learning journey. The program begins with a foundation year, followed by 3 years of challenging modules and projects each semester in full-stack development.",
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
      "AI Application Programmers",
      "Data Engineers, Data Architects",
      "Data Scientists, Data Analysts, Data Quality Engineers",
      "ML Engineers",
      "NLP Specialists",
      "Big Data Specialists",
      "Generative AI Developers",
    ],
  },
};

const images = [a4, a2, a3];

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
        desc: "Front-end web development offers an immersive learning experience that aims to equip students with the essential concepts and skills required to develop and design functional and interactive websites. The content covers a comprehensive range of topics, including mark-up, styling, and interactive language, as well as basic web design principles. Students will be guided through the process of building a website from start to finish, with a focus on creating responsive and user-friendly interfaces.",
      },
      {
        name: "Fundamentals of Computing",
        desc: "Students will be offered a comprehensive and hands-on exploration so that they will delve into the fascinating world of operating systems (OS) and computer networking. The curriculum is designed to provide a solid foundation in modern operating systems, with a particular focus on Command-Line Interfaces and key OS commands and tools. Students will gain practical experience in writing scripts for tasks such as user management, software installation, network administration, and service configuration.",
      },
      {
        name: "Modern Database Design",
        desc: "Students will be introduced to the fascinating world of modern database systems. They will gain a comprehensive understanding of both SQL and NoSQL databases, covering theoretical foundations and practical skills needed to design and implement these databases effectively. The emphasis is on practical application, empowering students with the skills they need to tackle any database project with confidence.",
      },
      {
        name: "Dzongkha Communication",
        desc: "A comprehensive introduction to the Dzongkha language, covering its historical background, significance, and grammatical structure. Emphasis will be placed on developing strong academic skills in listening, speaking, and writing, enabling students to communicate effectively both orally and in writing. The module will equip students with the necessary skills to draft letters, applications, and agreements for government and private organizations.",
      },
    ],
  },
  {
    name: "Year 1 Semester II",
    modules: [
      {
        name: "Back End Web Development",
        desc: "Students will delve into the world of backend web application development, focusing on building applications that are scalable and reliable in handling high volumes of concurrent connections. Through the course, students will be introduced to Object Oriented Design and the Model-View-Controller (MVC) architecture on the server-side. The module will also cover the exposure of necessary APIs to interact with the application and introduce students to automated testing and test management.",
      },
      {
        name: "User Interaction Design",
        desc: "Knowledge and skills related to interactive design for various applications will be covered. Students will learn about interaction design principles, patterns, and processes, as well as rapid prototyping and UI/UX design. These skills will be applied to web and mobile development to create interactive prototypes using prototyping tools.",
      },
      {
        name: "Mathematics for Programming I",
        desc: "The world of Discrete Mathematics will provide students with a strong foundation in this essential area of computer science, with a particular emphasis on Graph Theory. Students will develop their mathematical maturity and ability to work with abstract concepts, while also gaining practical experience by implementing and illustrating mathematical concepts and techniques using a programming language.",
      },
      {
        name: "Academic Skills",
        desc: "The students will acquire the essential academic skills necessary for successful university-level study and beyond. Through active engagement with academic texts, students will develop their critical reading, writing, and oral presentation skills while fostering effective communication, reflection, and critical analysis abilities.",
      },
      {
        name: "Mini Project I",
        desc: "In this capstone module, students will showcase all their skills and knowledge by developing a responsive full-stack web application. From start to finish, students will be involved in every step of the development process, starting with requirement analysis, conceptualization, and system design, followed by prototyping, testing, and finally, deploying the application in a live environment.",
      },
    ],
  },
  {
    name: "Year 2 Semester I",
    modules: [
      {
        name: "Applied Data Structures and Algorithms",
        desc: "Unlock the power of data structures and algorithms with topics covering abstract data types, dynamic arrays, iterators, linked lists, generics, stacks, queues, binary search trees, collections, maps, hashing, graphs, and sorting. It also covers various application scenarios, such as graphics, web programming, and user interfaces.",
      },
      {
        name: "Data Analytics and Visualization",
        desc: "Through the fundamental principles of design and data visualization, students will learn how to evaluate and identify the key components of effective visualizations, including charts, graphs, and other types of visual representations. Through hands-on experience with popular programming languages and data analytics tools, you will gain the skills needed to wrangle and prepare data for visualization.",
      },
      {
        name: "Mathematics for Programming II",
        desc: "Linear algebra, calculus, and numerical methods are crucial concepts in data science. By exploring basic theory and principles, vectors and matrices, single and multivariate vector calculus, students will gain a comprehensive understanding of algorithms used in AI and data science, as well as how to apply these concepts to practical problems.",
      },
      {
        name: "Analytical & Critical Thinking & Writing",
        desc: "Unlock the power of the mind in this module that delves into the art of analytical and critical thinking. Develop skills that enable one to dissect complex problems, identify key components, and apply logical reasoning to arrive at effective solutions. Discover techniques for identifying patterns, gathering evidence, and evaluating arguments to make informed decisions.",
      },
      {
        name: "Agile Software Engineering Practice",
        desc: "Students will dive into an immersive experience in Agile software development, covering both technical and social aspects of Agile. They will learn various Agile methodologies, including pair programming, test-driven development, behaviour-driven development, continuous delivery, clean code, refactoring, Scrum, and Agile project management.",
      },
    ],
  },
  {
    name: "Year 2 Semester II",
    modules: [
      {
        name: "Artificial Intelligence and Machine Learning",
        desc: "Students will learn the fundamental concepts and techniques in AI and ML, with a focus on hands-on experience building applications. Students will explore supervised and unsupervised learning techniques, as well as ensemble techniques, machine learning pipelines, and the data engineering process. By the end of the module, students will have a solid foundation in AI and ML.",
      },
      {
        name: "Mathematics for Programming III",
        desc: "Students will start by understanding the basics of probability distributions and hypothesis testing, before delving deeper into advanced statistical modelling and fitting techniques such as regression analysis. The module will also cover Bayesian thinking and modelling as well as Markov Chains, which are crucial for building the statistical foundation for AI and Data Science.",
      },
      {
        name: "Economics",
        desc: "A comprehensive understanding of the principles of microeconomics, macroeconomics, and international economics will be covered. Students will learn to apply these concepts to explain real-world economic issues and events, covering topics such as supply and demand, market structure, inflation, unemployment, international trade, and exchange rates.",
      },
      {
        name: "PRJ202",
        desc: "In this capstone module, students will put their skills to the test and develop an advanced responsive full stack web and mobile solution using Agile process in a team. The module will simulate a real-world scenario requiring students to produce a solution from requirement analysis, to conceptualization, to system design, to prototyping, to testing and finally to live deployment.",
      },
      {
        name: "Elective I – Cyber Growth Conversation",
        desc: "Students will learn the basics of cybersecurity, explore tools and techniques used in cybercrimes, and understand vulnerabilities in information systems. The module also introduces cyber forensics and addresses the security implications of emerging technologies. Through theoretical instruction and practical sessions, students will gain essential skills to protect against and respond to cyber incidents.",
      },
    ],
  },
  {
    name: "Year 3 Semester I",
    modules: [
      {
        name: "Deep Learning",
        desc: "A comprehensive overview of deep learning and its role in modern AI technology. Through a combination of lectures and hands-on practical sessions, students will gain a strong understanding of popular Python frameworks for deep learning, data cleaning and preprocessing techniques, and the design and implementation of various neural network architectures such as CNNs, RNNs, and autoencoders.",
      },
      {
        name: "DevOps and Automation for Development",
        desc: "An all-encompassing understanding of the DevOps pipeline process, from the initial stages of Agile development to software version control, continuous integration (CI), automated testing, and continuous delivery (CD). The emphasis is on practical, hands-on experience, as students learn how to build an effective pipeline process culminating in a live project deployment.",
      },
      {
        name: "Professional Certification I",
        desc: "This module is designed to equip students with the knowledge and skills necessary to earn an industry-recognized IT professional certification. Through hands-on training and expert guidance, students will gain the confidence and credentials needed to excel in the competitive field of IT.",
      },
      {
        name: "Introduction to Research",
        desc: "A solid foundation in the theories and practices of scientific research. Students will learn how to design, conduct, and communicate research using appropriate methodologies, techniques, and tools. The module will also cover various issues and considerations that arise during the research process, such as ethical considerations and data analysis.",
      },
      {
        name: "Elective II – Secure Coding",
        desc: "Students will learn how to write code that mitigates security vulnerabilities, particularly in web, mobile, and database applications. The course will cover key topics such as input validation, error handling, secure session management, and protection against common attacks like SQL injection and cross-site scripting.",
      },
    ],
  },
  {
    name: "Year 3 Semester II",
    modules: [
      {
        name: "Advanced Deep Learning",
        desc: "Students will begin with a review of MLPs, CNNs, and RNNs before moving on to more cutting-edge techniques and deep neural network architectures such as ResNet and DenseNet. They will also gain practical experience creating variational autoencoders (VAEs) and understand how GANs and VAEs have the power to generate synthetic data. Additionally, students will delve into Deep Reinforcement Learning.",
      },
      {
        name: "PRJ303",
        desc: "In this dynamic mini-capstone module, students will have the opportunity to put their software development skills into practice. Working collaboratively in small groups, they will go through the entire software development life cycle using an Agile process, creating innovative solutions to address real-life problems.",
      },
      {
        name: "Design Pattern",
        desc: "This module introduces students to essential software design principles, focusing on the best practices and patterns used in the development of robust and maintainable software systems. Students will explore fundamental design principles such as SOLID, DRY, and KISS, alongside commonly used design patterns like Singleton, Factory, Observer, and MVC.",
      },
      {
        name: "Professional Certificate II",
        desc: "Through practical, hands-on training, students will be fully prepared to sit for industry-recognized certifications. With this cutting-edge IT professional certification module, students are validated of their advanced skills and knowledge in the latest IT technologies, boosting their credentials in the competitive IT job market.",
      },
    ],
  },
  {
    name: "Year 4 Semester I",
    modules: [
      {
        name: "Natural Language Processing",
        desc: "Students will study different approaches to NLP tasks, and perform exercises in programming to understand the process of preparing datasets for NLP models. Students will use advanced NLP algorithms and visualization techniques to collect datasets from open websites, and to summarize and generate random text from a document. Students will also use NLP to create a chatbot that detects positive or negative sentiment.",
      },
      {
        name: "Big Data",
        desc: "Students will dive deep into the world of Big Data, exploring the terminology, core concepts, and practical skills necessary to tackle complex problems and develop innovative solutions. Using state-of-the-art frameworks and tools for big data analysis, students will learn to apply their knowledge to real-world scenarios.",
      },
      {
        name: "Ethics in Digital Media and Computing",
        desc: "Students will delve into the complex world of technology ethics and the legal considerations that come with it. The focus will be on exploring the codes of ethics outlined by professional computing societies, along with examining issues such as intellectual property rights, computer crimes, and security-related legal redress.",
      },
      {
        name: "Competitive Programming",
        desc: "A solid foundation in the theories and practices of scientific research is essential to embark on research projects and inquiry-based problem-solving endeavors with confidence. Students will learn how to design, conduct, and communicate research using appropriate methodologies, techniques, and tools.",
      },
      {
        name: "Elective III – Ethical Hacking",
        desc: "The Ethical Hacking course provides a comprehensive, hands-on approach to understanding and mitigating the threats posed by cyber attackers. It covers a wide range of topics, including network protocols, network attacks and defence, wireless security, web application vulnerabilities, and network forensics. By the end of the course, participants will be equipped to identify, analyse, and defend against various cyber threats.",
      },
    ],
  },
  {
    name: "Year 4 Semester II",
    modules: [
      {
        name: "Advanced English Skills for Career Development",
        desc: "Students will develop an understanding of the nuances of job application processes, with a particular focus on utilizing social media and career portals to identify opportunities that align with their skills and interests. Additionally, students will learn how to create a professional resume that effectively communicates their strengths and achievements.",
      },
      {
        name: "Industry Final Year Project – Major Capstone",
        desc: "The final capstone project is the culminating experience of the programme, designed to immerse students in a practical, real-world setting where they can apply the knowledge and skills they have learned throughout the programme. Students will learn how to communicate effectively, conduct research, work collaboratively, and plan and set goals to successfully complete an industry-level project.",
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
    <section className="mx-auto max-w-[90%] px-4 py-10 mt-[60px]">
      <h2 className="!mb-8 !text-center !text-2xl !font-black !text-black">Course Modules</h2>
      <p className="!mb-8 !text-[15px] text-left !leading-relaxed !text-gray-700">
        Students will have to complete 60 credits in each semester. In total, a student has to complete 480 credits to be eligible for the award of a Bachelor of Computer Science
        (AI Development &amp; Data Science).
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
                    <p className="text-[14px] font-bold text-gray-800 text-left">{mod.name}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-gray-600 text-left">{mod.desc}</p>
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

export default function AiDataScience() {
  const [activeTab, setActiveTab] = useState("why");
  const content = tabContent[activeTab];

  return (
    <div className="">
      <Navbar overlay />
      <main className="min-h-screen">
        <PageBanner title="BACHELOR OF COMPUTER SCIENCE" subtitle="(AI Development and Data Science)" image={a1}  />

        {/* Intro section */}
        <motion.div
          className="mx-auto max-w-[90%] px-4 pt-10 pb-2 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-2xl font-bold text-black">Be at the Forefront of AI and Robotic Revolution</p>
        </motion.div>

        {/* Tabbed content section */}
        <section className="mx-auto max-w-[90%] px-4 py-10 h-auto">
          {/* Description */}
          <motion.p
            className="!mb-20 text-[15px] text-left leading-relaxed text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Welcome to GCIT's BSc Computer Science (AI Development &amp; Data Science) programme. This is a platform for students to demonstrate and promote their cutting-edge,
            innovative and impactful software development and design projects. Please contact us if you like to expand the possibilities of development projects with students.
          </motion.p>

          {/* Tab buttons */}
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

          {/* Content */}
          <div className="grid grid-cols-1 gap-10 px-4 md:gap-20 md:px-10 md:grid-cols-2 md:items-start">
            {/* Images */}
            <motion.div
              className="grid h-[60%] grid-cols-2 gap-3"
              initial={{ opacity: 0, x: -50 }}
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

            {/* Text */}
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
                      <li key={i} className="flex items-start gap-2 ml-8">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-800" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="pt-2">And with AI and Data Science Specialization:</p>
                  <ul className="space-y-1">
                    {content.specialization.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 ml-8">
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

        {/* Course Modules */}
        <CourseModules />
      </main>
      <Footer />
    </div>
  );
}
