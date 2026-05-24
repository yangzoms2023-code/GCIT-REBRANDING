import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import handbookbanner from "../../assets/handbookbanner.png";

export default function StudentHandbook() {
  return (
    <div className="bg-[#F2F5F5]">
      <Navbar overlay />
      <PageBanner title="STUDENT HANDBOOK" image={handbookbanner} />

      <main className="mx-auto max-w-[90%] px-4 py-14 bg-[#F2F5F5]">
        <motion.h2
          className="text-center text-2xl font-bold text-black"
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          Student Handbook
        </motion.h2>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "backOut", delay: 0.2 }}
        >
          <a
            href="#"
            className="border-b-2 border-[#f48b1a] pb-1 text-[15px] font-semibold text-[#f48b1a] hover:opacity-80"
          >
            Student Handbook
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
