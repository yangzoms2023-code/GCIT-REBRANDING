import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageBanner from "../../components/PageBanner";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import clubbanner from "../../assets/clubbanner.png";
import lia1 from "../../assets/images/lia1.png";
import lia2 from "../../assets/images/lia2.png";
import lia3 from "../../assets/images/lia3.png";
import gt1 from "../../assets/images/gt1.png";
import gt2 from "../../assets/images/gt2.png";
import gt3 from "../../assets/images/gt3.png";
import in1 from "../../assets/images/in1.png";
import in2 from "../../assets/images/in2.png";
import mmd1 from "../../assets/images/mmd1.png";
import mmd2 from "../../assets/images/mmd2.png";
import ro1 from "../../assets/images/ro1.png";
import ro2 from "../../assets/images/ro2.png";
import st1 from "../../assets/images/st1.png";
import st2 from "../../assets/images/st2.png";
import st3 from "../../assets/images/st3.png";
import ta2 from "../../assets/images/ta2.png";
import ta3 from "../../assets/images/ta3.png";

const clubs = [
  {
    id: "gtech",
    label: "G-Tech",
    name: "G-Tech Club",
    description:
      "The G-Tech Club is a dynamic community of technology enthusiasts who come together to explore the latest in software development, hardware, and emerging technologies. Members engage in hands-on projects, hackathons, and tech talks that bridge the gap between classroom learning and industry practice. We cultivate a culture of innovation and collaboration among future technology leaders.",
    objectivesHeading: "The following are the objectives of G-Tech Club:",
    objectives: [
      "To foster a passion for technology and innovation among GCIT students.",
      "To provide hands-on learning experiences through projects, workshops, and hackathons.",
      "To connect students with industry professionals and technology communities.",
    ],
    image: gt1,
    advisors: [
      { name: "Sonam Tshering", image: gt2 },
      { name: "Suraj Mukhia", image: gt3 },
    ],
  },
  {
    id: "integrity",
    label: "Integrity",
    name: "Integrity Club",
    description:
      "The Integrity Club is dedicated to promoting ethical values, academic honesty, and moral leadership among students at GCIT. Through awareness campaigns, discussions, and community service activities, members develop a strong sense of personal and professional integrity that will serve them throughout their careers and lives.",
    objectivesHeading: "The following are the objectives of Integrity Club:",
    objectives: [
      "To promote a culture of honesty, transparency, and ethical conduct within GCIT.",
      "To educate students on the importance of academic integrity and professional ethics.",
      "To engage in community outreach activities that inspire integrity in society.",
    ],
    image: in1,
    advisors: [{ name: "Nima Gyaltshen", image: in2 }],
  },
  {
    id: "lia",
    label: "LIA",
    name: "Literary & Interactive Arts",
    description:
      "The LIA Club is a vibrant community of young artists and creative thinkers who come together to explore their passions and hone their talents. The club will be focusing on Visual Arts (Music, Dance, Instruments, and Theatre), Creative Writing, and Digital Content Creation. We foster creativity, innovation, and self-expression through an array of activities that cater different artistic disciplines and philosophy.",
    objectivesHeading: "The following are the objectives of LIA Club:",
    objectives: [
      "To unleash and hone each member's skills and talents through various activities and workshops.",
      "To boost the morale of each member and become confident individuals in their respective specializations.",
      "To allow them to express themselves and build a fun and friendly environment.",
    ],
    image: lia1,
    advisors: [
      { name: "Chimi Dema", image: lia2 },
      { name: "Thubten Zepa", image: lia3 },
    ],
  },
  {
    id: "mmd",
    label: "MMD",
    name: "MMD Club",
    description:
      "The MMD Club brings together students passionate about multimedia design, digital media production, and visual storytelling. Members collaborate on video production, graphic design, photography, and animation projects. The club serves as a creative hub where students can apply their technical skills to produce compelling multimedia content.",
    objectivesHeading: "The following are the objectives of MMD Club:",
    objectives: [
      "To develop students' skills in multimedia design and digital content production.",
      "To provide a platform for students to showcase their creative multimedia projects.",
      "To collaborate on real-world multimedia projects for the college and community.",
    ],
    image: mmd1,
    advisors: [{ name: "Karma Cheki", image: mmd2 }],
  },
  {
    id: "rovers",
    label: "Rovers",
    name: "Rovers Club",
    description:
      "The Rovers Club is GCIT's community service and outdoor adventure club. Members engage in environmental conservation, community development projects, and outdoor activities that build teamwork, leadership, and resilience. The Rovers embody the spirit of service and adventure, contributing positively to both the college community and the broader society.",
    objectivesHeading: "The following are the objectives of Rovers Club:",
    objectives: [
      "To instil a spirit of service and community responsibility among GCIT students.",
      "To engage in environmental conservation and community development initiatives.",
      "To build teamwork, leadership, and resilience through outdoor and adventure activities.",
    ],
    image: ro1,
    advisors: [{ name: "Karma Dorji", image: ro2 }],
  },
  {
    id: "startup",
    label: "Start-Up Agency",
    name: "Start-Up Agency Club",
    description:
      "The Start-Up Agency Club is an entrepreneurship-focused community where students learn to transform innovative ideas into viable businesses. Through mentorship, workshops, pitch competitions, and networking events, members develop the entrepreneurial mindset, business acumen, and practical skills needed to launch and grow successful technology startups.",
    objectivesHeading: "The following are the objectives of Start-Up Agency Club:",
    objectives: [
      "To nurture entrepreneurial thinking and innovation among GCIT students.",
      "To provide mentorship, resources, and support for student startup ventures.",
      "To connect aspiring entrepreneurs with investors, mentors, and industry networks.",
    ],
    image: st1,
    advisors: [
      { name: "Mr. Ong", image: st2 },
      { name: "Howard Yap", image: st3 },
    ],
  },
  {
    id: "tarayana",
    label: "Tarayana",
    name: "Tarayana Club",
    description:
      "The Tarayana Club at GCIT is dedicated to social welfare and community outreach, inspired by the Tarayana Foundation's mission of reaching the most vulnerable communities in Bhutan. Members engage in fundraising, volunteering, and awareness campaigns to support underprivileged communities, promoting compassion, generosity, and social responsibility.",
    objectivesHeading: "The following are the objectives of Tarayana Club:",
    objectives: [
      "To support vulnerable communities through fundraising and social welfare activities.",
      "To raise awareness about social issues and inspire a culture of giving among students.",
      "To partner with community organizations to deliver meaningful impact to those in need.",
    ],
    image: st1,
    advisors: [
      { name: "Yeshi Tshering", image: ta2 },
      { name: "Dorji Phuntsho", image: ta3 },
    ],
  },
];

export default function Clubs() {
  const [activeClub, setActiveClub] = useState("lia");
  const club = clubs.find((c) => c.id === activeClub);

  return (
    <div className="bg-[#F2F5F5]">
      <Navbar overlay />
      <PageBanner title="GCIT CLUBS" subtitle="Supporting students holistically" image={clubbanner} />

      <main className="mx-auto max-w-[90%] px-4 py-10 bg-[#F2F5F5]">
        {/* Section heading */}
        <motion.h2
          className="!text-2xl text-left !font-bold text-black"
          initial={{ opacity: 0, x: -55 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          GCIT Clubs
        </motion.h2>
        <motion.p
          className="!mt-[30px] text-left text-[15px] text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          GCIT clubs bring students together to learn, create, and lead through shared interests and meaningful activities.
        </motion.p>

        {/* Club tabs */}
        <motion.div
          className="!mt-[81px] flex flex-wrap justify-between gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {clubs.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveClub(c.id)}
              className={
                "rounded-xl w-[170px] px-5 py-2 !text-[14px] font-semibold transition-colors " +
                (activeClub === c.id ? "border-2 border-[#f48b1a] bg-white text-black" : "bg-[#f48b1a] text-white hover:bg-[#e07d10]")
              }
            >
              {c.label}
            </button>
          ))}
        </motion.div>

        {/* Club content cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeClub}
            className="mt-12 space-y-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Card 1: About */}
            <motion.div
              className="rounded-2xl bg-white p-6 shadow-[0_0_20px_rgba(0,0,0,0.15)] mb-[85px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            >
              <div className="px-10 py-10 flex flex-col justify-between gap-12 md:flex-row md:items-start">
                <div className="md:w-[60%]">
                  <motion.h3
                    className="text-[20px] text-left font-bold text-[#f48b1a]"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
                  >
                    {club.name}
                  </motion.h3>
                  <motion.p
                    className="!mt-6 text-left text-[15px] leading-relaxed text-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
                  >
                    {club.description}
                  </motion.p>
                </div>
                <motion.div
                  className="relative shrink-0 overflow-hidden rounded-xl md:w-60"
                  initial={{ opacity: 0, scale: 0.88, x: 30 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
                >
                  <img src={club.image} alt={club.name} className="h-36 w-full object-cover md:h-full" />
                  <div className="absolute inset-0 bg-black/50" />
                </motion.div>
              </div>
            </motion.div>

            {/* Card 2: Objectives */}
            <motion.div
              className="px-15 py-15 rounded-2xl bg-white shadow-[0_0_20px_rgba(0,0,0,0.15)] mb-[85px]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            >
              <motion.p
                className="text-[15px] text-left font-semibold text-[#f48b1a]"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.17 }}
              >
                {club.objectivesHeading}
              </motion.p>
              <ul className="mt-3 space-y-2">
                {club.objectives.map((obj, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2 text-left text-[15px] leading-relaxed text-gray-700"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 + i * 0.08 }}
                  >
                    <span className="mt-1.5 shrink-0">•</span>
                    {obj}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Card 3: Advisors */}
            <motion.div
              className="px-15 py-15 rounded-2xl bg-white shadow-[0_0_20px_rgba(0,0,0,0.15)] mb-[219px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.28 }}
            >
              <motion.h3
                className="text-[20px] font-bold text-left text-[#f48b1a]"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
              >
                Club Advisors
              </motion.h3>
              <div className="mt-5 flex flex-wrap gap-[56px]">
                {club.advisors.map((advisor, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center !gap-4"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.45, ease: "easeOut", delay: 0.35 + i * 0.1 }}
                  >
                    <img src={advisor.image} alt={advisor.name} className="h-50 w-50 rounded-xl object-cover" />
                    <motion.span
                      className="text-[15px] font-medium text-gray-700"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.35, ease: "easeOut", delay: 0.45 + i * 0.1 }}
                    >
                      {advisor.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
