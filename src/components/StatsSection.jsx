import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

const stats = [
  { target: 600, suffix: " +", label: "Total" },
  { target: 400, suffix: " +", label: "Students" },
  { target: 41, suffix: "", label: "Academic staff" },
  { target: 48, suffix: "", label: "Non-Academic staff" },
];

function Counter({ target, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px 0px -20% 0px" });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, target, {
        duration: 2,
        ease: "easeOut",
      });
      const unsub = motionValue.on("change", (v) => setDisplay(Math.round(v)));
      return () => {
        controls.stop();
        unsub();
      };
    } else {
      motionValue.set(0);
      setDisplay(0);
    }
  }, [isInView, target, motionValue]);

  return (
    <span ref={ref} className="text-3xl font-bold text-white md:text-4xl">
      {display}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-[90%] px-4 md:px-6">
        <div className="rounded-2xl bg-[#2f2f32] px-8 py-12 md:px-16">
          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-0">
            {stats.map((stat, i) => (
              <div key={stat.label} className={"flex flex-col items-center text-center " + (i < stats.length - 1 ? "md:border-r md:border-white/10" : "")}>
                <Counter target={stat.target} suffix={stat.suffix} />
                <span className="mt-2 text-sm text-white/60 md:text-base">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
