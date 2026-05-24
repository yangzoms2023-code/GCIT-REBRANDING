import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-[90%] px-4 md:px-6">
        <div className="flex max-w-5xl flex-col gap-15 md:flex-row md:gap-20">
          <motion.div
            className="md:w-2/5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="font-roboto text-[24px] text-left font-extrabold uppercase tracking-wide !text-black md:text-[22px]">
              Gyalpozhing College of
              <br />
              Information Technology
            </h2>
          </motion.div>

          <motion.div
            className="md:w-3/5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <p className="font-open-sans text-left text-[16px] leading-relaxed text-gray-600">
              The Gyalpozhing College of Information Technology (GCIT) is Bhutan's leading tech and design college, shaping students with creativity, innovation, and technical
              skills to solve real-world challenges.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
