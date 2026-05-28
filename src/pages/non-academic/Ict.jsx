import React, { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

import ictbanner from "../../assets/ictbanner.png"

import ict1 from "../../assets/images/ict1.png";
import ict2 from "../../assets/images/ict2.png";
import ict3 from "../../assets/images/ict3.png";

const FadeInLeft = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = React.useState(false);
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
  const [isVisible, setIsVisible] = React.useState(false);
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

export default function ICT() {
  const team = [
    {
      name: "Bernardo Gumapac",
      role: "ICT HEAD",
      image: ict1,
    },
    {
      name: "Pema Yangchen",
      role: "IT Technician",
      image: ict2,
    },
    {
      name: "Ngawang Gyeltshen",
      role: "IT Technician",
      image: ict3,
    },
  ];

  return (
    <div className="w-full bg-[#F2F5F5]">
      <Navbar overlay />

      <PageBanner
        title="Information & Communication Technology"
        subtitle="Delivering seamless GCIT technology"
        image={ictbanner}
      />

      <div className="mx-auto w-[90%] md:w-[85%] py-24 text-left">
        <FadeInLeft>
          <h3 className="text-2xl font-bold mb-8 text-black font-['Roboto_Slab']">
            Information & Communication Technology
          </h3>
        </FadeInLeft>

        <FadeInRight>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            Information & Communication Technology (ICT) team is responsible for the planning, management, and implementation of technology initiatives in support of both academic and non academic operations at the college.
          </p>
        </FadeInRight>

        <FadeInLeft>
          <h3 className="text-2xl font-semibold mt-16 mb-10 text-black font-['Roboto_Slab']">
            Core Team
          </h3>
        </FadeInLeft>

        <div className="flex flex-wrap gap-8 justify-center">
          {team.map((member, i) => (
            <FadeInRight key={i} delay={i * 150}>
              <div className="bg-white rounded-xl shadow-md p-8 w-52 text-center flex flex-col">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover bg-gray-200"
                />
                <h4 className="font-medium text-base">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {member.role}
                </p>
              </div>
            </FadeInRight>
          ))}
        </div>

        <div className="relative my-16 flex justify-center">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent w-3/4"></div>
        </div>

        <FadeInLeft>
          <div className="bg-white rounded-xl shadow-md p-16">
            <p className="text-[15px] text-gray-700 mb-4 pb-8">
              ICT team provides the campus community a diverse set of technology services as per the new college blueprint of expansion. Keep the lights on (KLO) is their priority.
            </p>

            <p className="text-[15px] text-gray-700 mb-4">
              Their responsibilities include development, sourcing, implementation and maintenance of:
            </p>

            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-3">
              <li>Network connectivities (WAN and LAN).</li>
              <li>Infrastructure components of server, storage and backup.</li>
              <li>Computer labs system and wireless access for classrooms.</li>
              <li>Cybersecurity for campus network and system.</li>
            </ul>

            <p className="text-[15px] text-gray-700 mt-8 mb-4">
              Our ICT team also ensures the availability and reliability of key applications that support our college daily functions.
            </p>

            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-3">
              <li>Online teaching and e-learning using Moodle Virtual Learning Environment (VLE).</li>
              <li>Management of library catalog online access system (KOHA).</li>
              <li>Administration and customisation of RUB Information Management System (IMS) for effective teaching, assessments and database.</li>
              <li>Maintenance of college website.</li>
            </ul>
          </div>
        </FadeInLeft>
      </div>

      <Footer />
    </div>
  );
}