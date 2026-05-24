import { motion } from "framer-motion";
import { useState } from "react";
import heroImg from "../assets/images/college.png";
import ScrollDownIndicator from "./ScrollDownIndicator";

export default function Banner({ title = "Default Title", subtitle = "Default Subtitle", image, fade = false, editable = false }) {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const bgImage = preview || image || heroImg;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgImage} alt="banner" className="h-full w-full object-cover object-center" draggable={false} />

        <div className="absolute inset-0 bg-black/45" />

        {fade && <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />}
      </div>

      <div className="relative mx-auto flex h-full w-full max-w-[90%] items-end px-4 pb-14 md:px-6 md:pb-16">
        <motion.div
          className="max-w-[1126px] text-left text-white"
          initial={{ opacity: 0, x: 80, y: 100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="roboto-slab-banner text-xl !text-white leading-[1.05] tracking-wide sm:text-3xl md:text-4xl">
            EMPOWERING THE NEXT GENERATION
            <span className="md:block mt-3">OF INNOVATORS</span>
          </p>

          <div className="mt-6">
            <a
              href="/about/gcit"
              className="inline-flex items-center justify-center rounded-full bg-[#f48b1a] px-6 py-2 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(0,0,0,0.25)] hover:bg-[#ff9b39]"
            >
              Explore now
            </a>
          </div>
        </motion.div>
      </div>

      <ScrollDownIndicator />
    </section>
  );
}
