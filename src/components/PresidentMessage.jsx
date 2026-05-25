import { motion } from "framer-motion";
import { useState } from "react";
import presidentPng from "../assets/images/president.png";

export default function PresidentMessage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullMessage = `Kuzuzangpo la!

Welcome to GCIT, a global institution situated within the Himalayas in Bhutan. The meteoric rise of computing with the emergence of Agentic Development, Decentralise Open Ecosystems and LLMs mark an exciting era in the revolution of design and technology education.

Our vision and purpose recognises that autonomous learning, smart pedagogies along with experiential knowledge will be the norm in lifelong global education. We continue to strive by teaching with cognitive interactions and true to life experiences, focusing on advancing tech in service to a hyper-connected society. You will find that GCIT's curriculum is deeply integrated in students' active exploration and their ongoing prospective careers. Together with our staff, students and industry pioneers, we also conduct applied research where computing and technology is the conduit for planetary stewardship, economic vitality and symbiosis with humanity.

As you navigate through our website, you will find detailed information about our courses, admission requirements, student development, personas of our faculty members and, among many other interesting highlights. Certainly, if you are our prospective student, parent or stakeholder, we invite you to further explore with GCIT, our achievements, our growing infrastructure of new labs & facilities and our unyielding committment to paving the way for intellectual exchange and strategic international partnerships.

Click the star icon or bookmark our handle as your favourite digital URL giving you quick access to staying in touch with us. If you have any queries and would like to connect with GCIT, please do not hesitate to reach out to us at [info.gcit@rub.edu.bt](mailto:info.gcit@rub.edu.bt).

Kadrinche la.`;

  const shortMessage = fullMessage.split("\n\n").slice(0, 2).join("\n\n");

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
                Message From The <span className="text-[#f48b1a]">President</span>
              </h2>

              <p className="mt-4 max-w-[720px] text-sm leading-relaxed text-white/80 md:text-[15px]">
                "{isExpanded ? fullMessage : shortMessage}"
              </p>

              <div className="mt-6">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center justify-center rounded-full bg-[#f48b1a] px-6 py-2 text-sm font-semibold text-white hover:bg-[#ff9b39]"
                >
                  {isExpanded ? "Read less" : "Read more"}
                </button>
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
