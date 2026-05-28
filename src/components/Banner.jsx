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
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={bgImage} 
          alt="banner" 
          className="h-full w-full object-cover object-center" 
          draggable={false} 
        />
        <div className="absolute inset-0 bg-black/45" />
        {fade && <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />}
      </div>

      {/* Content - Perfect centering */}
      <div className="relative h-full flex flex-col items-center justify-center">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-[90%] md:max-w-[85%] px-4 md:px-6">
            <motion.div
              className="text-center text-white"
              initial={{ opacity: 0, x: 80, y: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="font-['Roboto_Slab'] text-white leading-tight tracking-wide text-xl sm:text-2xl md:text-3xl lg:text-4xl font-boldfont-['Roboto_Slab'] text-white leading-tight tracking-wide text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                EMPOWERING THE NEXT GENERATION
                <br />
                <span className="block mt-2 md:mt-3">OF INNOVATORS</span>
              </p>

              <div className="mt-8 md:mt-10 lg:mt-12">
                <a
                  href="/about/gcit"
                  className="inline-flex items-center justify-center rounded-full bg-[#f48b1a] px-8 py-3 md:px-10 md:py-3.5 text-sm md:text-base lg:text-lg font-semibold text-white shadow-[0_10px_20px_rgba(0,0,0,0.25)] hover:bg-[#ff9b39] transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Explore now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator at bottom */}
        <div className="absolute bottom-8 left-0 right-0">
          <ScrollDownIndicator />
        </div>
      </div>
    </section>
  );
}