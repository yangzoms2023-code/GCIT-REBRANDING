import { motion } from "framer-motion";
import heroImg from "../assets/images/college.png";
import ScrollDownIndicator from "./ScrollDownIndicator";

export default function PageBanner({ title, subtitle, image, fade = false }) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image || heroImg}
          alt={title || "Banner image"}
          className="h-full w-full object-cover object-center"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/50" />
        {fade && <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />}
      </div>

      {/* Content - Perfectly centered */}
      <div className="relative h-full flex items-center justify-center">
        <div className="w-full max-w-[90%] md:max-w-[85%] px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, x: 80, y: 100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1
              className="font-['Roboto_Slab'] !text-white leading-tight tracking-wide text-sm sm:text-base md:text-lg lg:text-xl font-bold"
              style={{
                fontFamily: "'Roboto Slab', serif",
                letterSpacing: "0.05em"
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 md:mt-4 text-white/90 text-sm sm:text-base md:text-lg font-medium">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollDownIndicator />
    </section>
  );
}