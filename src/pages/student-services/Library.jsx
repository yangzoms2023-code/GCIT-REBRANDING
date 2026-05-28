import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import librarybanner from "../../assets/librarybanner.png";
import lib1 from "../../assets/images/lib1.png";
import lib2 from "../../assets/images/lib2.png";
import lib3 from "../../assets/images/lib3.png";

const libraryImages = [lib1, lib2, lib3];

export default function Library() {
  return (
    <div className="bg-[#F2F5F5]">
      <Navbar overlay />
      <PageBanner
        title="GCIT LIBRARY"
        subtitle="Empowering students and faculty through accessible resources and a culture of lifelong learning."
        image={librarybanner}
      />

      <main className="mx-auto max-w-[90%] px-4 py-14 bg-[#F2F5F5]">
        <motion.p
          className="text-[15px] text-gray-700 text-left"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          College currently has access to the following e-resources for staff and students:
        </motion.p>

        <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-start">
          {/* Image grid */}
          <motion.div
            className="grid shrink-0 grid-cols-2 gap-2 md:w-[380px]"
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <img src={libraryImages[0]} alt="Library" className="col-span-1 row-span-2 h-full w-full rounded-xl object-cover" style={{ minHeight: "300px" }} />
            <img src={libraryImages[1]} alt="Library" className="h-[150px] w-full rounded-xl object-cover" />
            <img src={libraryImages[2]} alt="Library" className="h-[150px] w-full rounded-xl object-cover" />
          </motion.div>

          {/* E-Library content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
          >
            <h3 className="text-2xl text-left font-bold text-black">E-Library</h3>
            <p className="!mt-4 text-[15px] text-left leading-relaxed text-gray-700">
              O'Reilly is an online library service that provides access to a vast collection of technology and
              business-related e-books, videos, and learning resources. It's an excellent resource for college
              students who need to stay up-to-date with the latest technologies and trends in their field. With
              O'Reilly, students can access a wealth of information from anywhere, at any time, with just an
              internet connection.
            </p>
            <p className="!mt-6 text-[15px] text-left leading-relaxed text-gray-700">
              One of the main advantages of O'Reilly over a physical library is the convenience factor. Students
              can access resources and information from their dorm rooms or off-campus, saving them time and
              effort. Additionally, online library services are often more cost-effective for students since they
              eliminate the need to buy expensive textbooks or travel to a physical library.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
