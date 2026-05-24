import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

import humanresourcebanner from "../../assets/humanresourcebanner.png"

import hr1 from "../../assets/images/hr1.png";
import hr2 from "../../assets/images/hr2.png";
import hr3 from "../../assets/images/hr3.png";
import hr4 from "../../assets/images/hr4.png";

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

export default function HumanResource() {
  const team = [
    {
      name: "Jigme Dema",
      role: "Exam Cell & Student Record Officer",
      image: hr1,
    },
    {
      name: "Sonam Lhendup",
      role: "Administrative Support",
      image: hr2,
    },
    {
      name: "Karma Yangden",
      role: "Store Support Assistant",
      image: hr3,
    },
    {
      name: "Karma Yangden",
      role: "Store Support Assistant",
      image: hr3,
    },
    {
      name: "Jigme Dorji",
      role: "Driver",
      image: hr4,
    },
  ];

  const extendedTeam = [...team, ...team, ...team];

  const [currentIndex, setCurrentIndex] = useState(team.length);
  const [cardsToShow, setCardsToShow] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= team.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(team.length);
      setTimeout(() => setIsTransitioning(true), 50);
    } else if (currentIndex < team.length) {
      setIsTransitioning(false);
      setCurrentIndex(team.length * 2 - cardsToShow);
      setTimeout(() => setIsTransitioning(true), 50);
    }
  };

  return (
    <div className="w-full bg-[#F2F5F5]">
      <Navbar overlay/>

      <PageBanner
        title="HUMAN RESOURCE AND ADMINISTRATION"
        subtitle="Oversees human resources and administrative services to support efficient operations"
        image={humanresourcebanner}
      />

      <div className="mx-auto w-[85%] py-24 text-left">
        <FadeInLeft>
          <h3 className="text-3xl font-bold mb-8 text-black font-['Roboto_Slab']">
            Human Resource & Administration
          </h3>
        </FadeInLeft>

        <FadeInRight>
          <p className="text-gray-600 text-base leading-relaxed">
            The main functions of Human Resource & Administration are in processing
            employee data and assisting in the hiring process. This team facilitates
            a conducive work environment consistent with the college's mission,
            core values, and culture.
          </p>
        </FadeInRight>

        <FadeInLeft>
          <h3 className="text-xl font-semibold mt-16 mb-10 text-black font-['Roboto_Slab']">
            Core Team
          </h3>
        </FadeInLeft>

        <FadeInRight>
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors flex-shrink-0"
            >
              <span className="text-4xl font-bold block leading-none translate-y-[-5px]">‹</span>
            </button>

            <div className="overflow-hidden w-full">
              <div
                className={`flex transition-transform duration-500 ease-in-out ${!isTransitioning ? 'transition-none' : ''}`}
                style={{
                  transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extendedTeam.map((member, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 px-2"
                    style={{ width: `${100 / cardsToShow}%` }}
                  >
                    <div className="bg-white rounded-xl shadow-md p-6 text-center flex flex-col h-full max-w-[220px] mx-auto">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover bg-gray-200"
                      />
                      <div className="flex flex-col flex-grow justify-center">
                        <h4 className="font-medium text-sm">
                          {member.name}
                        </h4>
                        <p className="text-xs text-gray-500 mt-2">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors flex-shrink-0"
            >
              <span className="text-4xl font-bold block leading-none translate-y-[-5px]">›</span>
            </button>
          </div>
        </FadeInRight>

        <div className="relative my-16 flex justify-center">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent w-3/4"></div>
        </div>

        <FadeInLeft>
          <div className="bg-white rounded-xl shadow-md p-16">
            <p className="text-base text-gray-700 mb-4 pb-8">
              The key human resource related responsibilities are:
            </p>

            <ul className="list-disc pl-6 text-base text-gray-600 space-y-3">
              <li>Interpreting and applying HR policies and procedures.</li>
              <li>
                Administering departmental protocols in compliance with Royal
                University of Bhutan.
              </li>
              <li>
                Facilitating staff discussions and individual work plans (IWP).
              </li>
              <li>Supporting performance reviews.</li>
              <li>Producing HR management reports.</li>
              <li>Organizing college functions and events.</li>
              <li>
                Handling immigration, work permits, and official travel support.
              </li>
              <li>Managing logistics for VIP visits.</li>
            </ul>

            <p className="text-base text-gray-700 mt-8 pt-8">
              Under administration, the team handles procurement of services,
              equipment, and goods to support daily operations, ensuring proper
              tendering processes and compliance.
            </p>
          </div>
        </FadeInLeft>
      </div>

      <Footer />
    </div>
  );
}