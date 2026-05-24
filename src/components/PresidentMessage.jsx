import { motion } from "framer-motion";
import presidentPng from "../assets/images/president.png";

export default function PresidentMessage() {
  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto w-full max-w-[90%] px-4 md:px-6">
        <motion.div
          className="rounded-2xl bg-[#2f2f2f] px-6 py-8 text-white shadow-[0_18px_35px_rgba(0,0,0,0.18)] md:px-10 md:py-10"
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: false, margin: "0px 0px -20% 0px" }}
        >
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_260px]">
            <div className="text-left">
              <h2 className="text-3xl font-bold leading-tight !text-white md:text-3xl">
                Message From A <span className="text-[#f48b1a]">President</span>
              </h2>

              <p className="mt-4 max-w-[720px] text-sm leading-relaxed text-white/80 md:text-[15px]">
                "Welcome to the Gyalpozhing College of Information Technology (GCIT), where innovation meets tradition. At GCIT, we are committed to nurturing the next generation
                of digital leaders, fostering creativity, and empowering our students with the skills and knowledge to thrive in a rapidly evolving world. Our vision is to create a
                bold, modern, and technologically advanced..."
              </p>

              <div className="mt-6">
                <a href="#" className="inline-flex items-center justify-center rounded-full bg-[#f48b1a] px-6 py-2 text-sm font-semibold text-white hover:bg-[#ff9b39]">
                  Read more
                </a>
              </div>
            </div>

            <div className="relative mx-auto">
              <div
                className="absolute -inset-0.5 rotate-45 rounded-[20px] border-[4px] border-[#2f7bd9]/70"
                style={{
                  borderBottomColor: "transparent",
                  borderRightColor: "rgba(47,123,217,0.2)",
                  borderLeftColor: "rgba(47,123,217,0.2)",
                }}
              />
              <div className="relative h-44 w-44 overflow-hidden rounded-full bg-white md:h-52 md:w-52">
                <img src={presidentPng} alt="" className="h-full w-full object-contain" draggable={false} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
