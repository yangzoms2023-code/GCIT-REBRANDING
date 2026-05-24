import { motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import Showcase from "../../components/Gcitshowcase";
import projectshowcasebanner from "../../assets/projectshowcasebanner.png";

export default function ProjectsShowcase() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar overlay />

      <PageBanner title="PROJECTS SHOWCASE" subtitle="Explore innovative projects built by our students and teams." image={projectshowcasebanner} />

      <motion.div
        className="px-6 py-10 bg-[#F2F5F5]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Showcase />
      </motion.div>

      <Footer />
    </div>
  );
}
