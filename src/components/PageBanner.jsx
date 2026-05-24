import { motion } from "framer-motion";
import heroImg from "../assets/images/college.png";
import ScrollDownIndicator from "./ScrollDownIndicator";

export default function PageBanner({ title, subtitle, image, fade = false }) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
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

      <div className="relative mx-auto flex h-full w-full max-w-[90%] flex-col items-start justify-end px-4 pb-20 md:px-6 md:pb-24">
        <motion.div
          initial={{ opacity: 0, x: 80, y: 100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1
            className="!text-xl text-left !text-white leading-[1.05] sm:!text-3xl md:!text-4xl"
            style={{
              fontFamily: "'Roboto Slab', serif",
              letterSpacing: "0.05em"
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-2 !text-base font-semibold uppercase tracking-wide text-left !text-white md:!text-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      <ScrollDownIndicator />
    </section>
  );
}