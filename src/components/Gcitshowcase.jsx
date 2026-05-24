import { useState, useEffect, useRef } from "react";
import data from "../data/projects.json";

import selfImg from "../assets/self.png";
import momImg from "../assets/mom.png";
import firewatchImg from "../assets/firewatch.png";
import veterinaryImg from "../assets/veterinary.png";
import apuImg from "../assets/apu.png";
import drukghiImg from "../assets/drukghi.png";
import drukviesImg from "../assets/drukvies.png";
import blogImg from "../assets/blog.png";
import laaImg from "../assets/laa.png";
import gImg from "../assets/g.png";
import landImg from "../assets/land.png";

const imageMap = {
  "self.png": selfImg,
  "mom.png": momImg,
  "firewatch.png": firewatchImg,
  "veterinary.png": veterinaryImg,
  "apu.png": apuImg,
  "drukghi.png": drukghiImg,
  "drukvies.png": drukviesImg,
  "blog.png": blogImg,
  "laa.png": laaImg,
  "g.png": gImg,
  "land.png": landImg,
};

export default function GCITShowcase() {
  const [selected, setSelected] = useState(null);
  const [active, setActive] = useState("All");
  
  const categories = ["All", "AI", "Blockchain", "BIDD", "Fullstack", "Computer Science"];
  const filtered = active === "All" ? data : data.filter((p) => p.category === active);

  // Scroll to top when a project is selected
  useEffect(() => {
    if (selected) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selected]);

  const FadeInLeft = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      });
      
      if (domRef.current) {
        observer.observe(domRef.current);
      }
      
      return () => observer.disconnect();
    }, []);

    return (
      <div
        className={`transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
        ref={domRef}
      >
        {children}
      </div>
    );
  };

  const FadeInRight = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      });
      
      if (domRef.current) {
        observer.observe(domRef.current);
      }
      
      return () => observer.disconnect();
    }, []);

    return (
      <div
        className={`transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
        ref={domRef}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="bg-[#F2F5F5] min-h-screen text-black flex flex-col items-center">
      <div className="w-[85%] mt-10 text-left">
        {!selected && (
          <>
            <FadeInLeft>
              <p className="text-gray-500 text-sm mb-8">
                Welcome to GCIT Students' Project Showcase. This is a platform for students to demonstrate and promote their cutting-edge, innovative and impactful software development and design projects.
              </p>
            </FadeInLeft>

            <FadeInRight>
              <div className="flex flex-wrap justify-between gap-4 mb-10 pt-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`flex-1 min-w-[120px] py-2 rounded-full font-bold border-2 text-center transition-all duration-300
                    ${
                      active === cat
                        ? "bg-white text-[#f48b1a] border-[#f48b1a]"
                        : "bg-[#f48b1a] text-white border-[#f48b1a]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </FadeInRight>
          </>
        )}

        {!selected && (
          <>
            <div className="hidden md:grid grid-cols-3 gap-8 mb-10">
              {filtered.map((p, index) => {
                const isMiddleCard = index % 3 === 1;
                const fadeDirection = index % 2 === 0 ? "left" : "right";
                
                return fadeDirection === "left" ? (
                  <FadeInLeft key={p.id} delay={index * 100}>
                    <div onClick={() => setSelected(p)} className="cursor-pointer text-left">
                      {isMiddleCard ? (
                        <div className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow h-full flex flex-col">
                          <div className="flex-1">
                            <div className="font-bold mb-2">{p.short}</div>
                            <div className="text-sm text-gray-500 mb-3">{p.summary}</div>
                            <div className="text-[#f48b1a] text-sm mb-4">Learn More →</div>
                          </div>
                          <img src={imageMap[p.image]} className="h-40 w-full object-cover rounded-lg" alt={p.short} />
                        </div>
                      ) : (
                        <div className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow">
                          <img src={imageMap[p.image]} className="h-40 w-full object-cover rounded-lg" alt={p.short} />
                          <div className="mt-3">
                            <div className="font-bold">{p.short}</div>
                            <div className="text-sm text-gray-500 mt-1">{p.summary}</div>
                            <div className="text-[#f48b1a] text-sm mt-2">Learn More →</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </FadeInLeft>
                ) : (
                  <FadeInRight key={p.id} delay={index * 100}>
                    <div onClick={() => setSelected(p)} className="cursor-pointer text-left">
                      {isMiddleCard ? (
                        <div className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow h-full flex flex-col">
                          <div className="flex-1">
                            <div className="font-bold mb-2">{p.short}</div>
                            <div className="text-sm text-gray-500 mb-3">{p.summary}</div>
                            <div className="text-[#f48b1a] text-sm mb-4">Learn More →</div>
                          </div>
                          <img src={imageMap[p.image]} className="h-40 w-full object-cover rounded-lg" alt={p.short} />
                        </div>
                      ) : (
                        <div className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow">
                          <img src={imageMap[p.image]} className="h-40 w-full object-cover rounded-lg" alt={p.short} />
                          <div className="mt-3">
                            <div className="font-bold">{p.short}</div>
                            <div className="text-sm text-gray-500 mt-1">{p.summary}</div>
                            <div className="text-[#f48b1a] text-sm mt-2">Learn More →</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </FadeInRight>
                );
              })}
            </div>

            <div className="md:hidden flex flex-col gap-6">
              {filtered.map((p, index) => (
                <FadeInLeft key={p.id} delay={index * 100}>
                  <div onClick={() => setSelected(p)} className="cursor-pointer">
                    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow">
                      <img src={imageMap[p.image]} className="h-48 w-full object-cover" alt={p.short} />
                      <div className="p-4">
                        <div className="font-bold text-lg mb-2">{p.short}</div>
                        <div className="text-sm text-gray-600 mb-3">{p.summary}</div>
                        <div className="text-[#f48b1a] text-sm font-semibold">Learn More →</div>
                      </div>
                    </div>
                  </div>
                </FadeInLeft>
              ))}
            </div>
          </>
        )}

        {selected && (
          <>
            <FadeInLeft>
              <div className="text-left">
                <div className="flex justify-between mb-10">
                  <div className="w-[60%]">
                    <div className="text-xl font-bold">{selected.learnTitle}</div>
                    <div className="text-gray-500 mt-2">{selected.learnDesc}</div>
                  </div>
                  <img src={imageMap[selected.image]} className="w-[30%] h-48 object-cover rounded-lg" alt={selected.short} />
                </div>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="flex justify-between mb-10">
                <img src={selected.image2} className="w-[30%] h-48 object-cover rounded-lg" alt="project" />
                <div className="w-[60%]">
                  <div className="font-bold text-lg mb-2">About the Project</div>
                  {selected.about.map((a, i) => (
                    <p key={i} className="text-gray-500">{a}</p>
                  ))}
                </div>
              </div>
            </FadeInRight>

            <FadeInLeft>
              <div className="mb-10">
                <div className="font-bold text-lg mb-4">How it Works</div>
                <div className="flex justify-between">
                  {selected.howItWorks.map((h, i) => (
                    <div key={i} className="w-[30%] bg-white shadow-sm p-4 rounded-lg flex gap-3 text-left">
                      <div className="text-[#f48b1a] text-2xl">{h.icon}</div>
                      <div>
                        <div className="font-bold">{h.title}</div>
                        <div className="text-sm text-gray-500">{h.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="flex justify-between mb-10">
                <img src={selected.image3} className="w-[60%] h-60 object-cover rounded-lg" alt="project" />
                <div className="w-[30%]">
                  <div className="font-bold mb-2">Key Features</div>
                  {selected.features.map((f, i) => (
                    <div key={i} className="text-gray-500">• {f}</div>
                  ))}
                </div>
              </div>
            </FadeInRight>

            <FadeInLeft>
              <div className="flex justify-between">
                <div className="w-[70%]">
                  <div className="font-bold mb-3">Developers</div>
                  <div className="grid grid-cols-3 gap-3">
                    {selected.developers.map((d, i) => (
                      <div key={i} className="bg-white shadow-sm p-3 rounded-lg text-left">
                        <div className="font-semibold">{d.name}</div>
                        <div className="text-sm text-gray-500">Index: {d.id}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-[20%]">
                  <div className="font-bold mb-3">Guide</div>
                  <div className="bg-white shadow-sm p-3 rounded-lg text-left">
                    <div className="font-semibold">{selected.guide}</div>
                    <div className="text-sm text-gray-500"> {selected.semester}</div>
                    <div className="text-sm text-gray-500"> {selected.year}</div>
                  </div>
                </div>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <button 
                onClick={() => setSelected(null)} 
                className="mt-10 mb-10 text-[#f48b1a] font-bold text-lg inline-block"
              >
                ← Back to all projects
              </button>
            </FadeInRight>
          </>
        )}
      </div>
    </div>
  );
}