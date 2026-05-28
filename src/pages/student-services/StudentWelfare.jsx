import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import welfarebanner from "../../assets/welfarebanner.png";

const sportFacilities = [
  "Standard size football field",
  "Basketball Courts",
  "Volleyball Court",
  "Table Tennis",
  "Chess Boards",
];

export default function StudentWelfare() {
  return (
    <div className="bg-[#F2F5F5]">
      <Navbar overlay />
      <PageBanner
        title="STUDENT WELFARE"
        subtitle="Counseling, hostels, sports for well-being"
        image={welfarebanner}
      />

      <main className="mx-auto max-w-[90%] px-4 py-14 space-y-10 bg-[#F2F5F5]">
        {/* Student Counseling */}
        <motion.section
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="!text-2xl text-left !font-bold text-black">Student Counseling</h2>
          <p className="!mt-6 text-[15px] text-left leading-relaxed text-gray-700">
            Student counseling service in GCIT aims to provide students with support and guidance to address
            personal, academic, and emotional issues that may affect their overall well-being and academic
            performance. Professional counselors with specialized training offer confidential counseling services
            that are tailored to meet the unique needs of each student. Students can receive support in areas such
            as stress management, time management, decision-making, interpersonal relationships, and mental health.
            Student counseling service is an integral part of a college's commitment to promoting student success
            and well-being.
          </p>
        </motion.section>

        {/* Student Hospital Facility */}
        <motion.section
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="!text-2xl text-left !font-bold text-black">Student Hospital Facility</h2>
          <p className="!mt-6 text-[15px] text-left leading-relaxed text-gray-700">
            Gyalpozhing College of Information Technology provides comfortable residential facilities for both male
            and female students. All students are accommodated within the campus, with the college offering
            remodelled hostels as well as a newly constructed 96-bed hostel to ensure adequate space for students.
          </p>
        </motion.section>

        {/* Sports & Recreational */}
        <motion.section
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="!text-2xl text-left !font-bold text-black">Sports &amp; Recreational</h2>
          <p className="!mt-6 text-[15px] text-left leading-relaxed text-gray-700">
            Student Services focuses on our students' welfare by providing a range of services and resources to
            support personal, social, and academic development. This includes promoting student health and
            well-being, facilitating access to financial aid and creating opportunities for extracurricular and
            community engagement activities. Co-curricular activities such as sports, cultural events, and clubs
            provide students with opportunities for personal and social development outside of the academic
            curriculum.
          </p>
          <p className="!mt-6 text-[15px] text-left leading-relaxed text-gray-700">
            The campus boasts excellent games and sports facilities, which include indoor games infrastructure.
            The college hosts regular intra-college and regional games to provide a platform for athletes and
            versatile students to showcase their skills. These games are instrumental in empowering students and
            enhancing their teamwork and coordination skills.
          </p>
        </motion.section>

        {/* Sport Facilities list */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="!text-2xl text-left !font-bold text-black">
            Gyalpozhing College Of Information Technology Sport Facilities:
          </h2>
          <ul className="!mt-3 space-y-1">
            {sportFacilities.map((item, i) => (
              <motion.li
                key={item}
                className="flex items-start text-[15px] text-left leading-relaxed text-gray-700"
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.09 }}
              >
                <span className="shrink-0">•{"  "}</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
