import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import schoolaffairsbanner from "../../assets/schoolaffairsbanner.png";

import s1 from "../../assets/images/s1.png";
import s2 from "../../assets/images/s2.png";
import s3 from "../../assets/images/s3.png";
import s4 from "../../assets/images/s4.png";
import s5 from "../../assets/images/s5.png";
import s6 from "../../assets/images/s6.png";
import s7 from "../../assets/images/s7.png";
import s8 from "../../assets/images/s8.png";
import s9 from "../../assets/images/s9.png";
import s10 from "../../assets/images/s10.png";
import s11 from "../../assets/images/s11.png";
import s12 from "../../assets/images/s12.png";
import s13 from "../../assets/images/s13.png";
import s14 from "../../assets/images/s14.png";
import s15 from "../../assets/images/s15.png";
import s16 from "../../assets/images/s16.png";
import s17 from "../../assets/images/s17.png";

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

function InfiniteTeamSlider({ team }) {
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

  if (team.length === 0) return null;

  return (
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
  );
}

export default function SchoolAffairs() {
  const engineeringServicesTeam = [
    { name: "Karan Gurung", role: "Estate Manager", image: s1 },
    { name: "Karma Yeshi", role: "Carpenter", image: s2 },
    { name: "Nima Rinchen", role: "Mason", image: s3 },
    { name: "Kinzang Chophel", role: "Driver", image: s4 },
  ];

  const facilitiesManagementTeam = [
    { name: "Tshering Tshomo", role: "Gardener", image: s5 },
    { name: "Karma Loday", role: "Gardener", image: s6 },
    { name: "Jamyang Choephel", role: "Gardener", image: s7 },
    { name: "Lhendup Wangmo", role: "Gardener", image: s8 },
  ];

  const securityServicesTeam = [
    { name: "Jigme Singye", role: "Security Guard", image: s9 },
    { name: "Thinley Dorji", role: "Security Guard", image: s10 },
    { name: "Chimi Wangyal", role: "Security Guard", image: s11 },
    { name: "Sonam Rinzin", role: "Security Guard", image: s12 },
  ];

  const foodServicesTeam = [
    { name: "Sangay Lhaden", role: "Lead Student Food and Event", image: s13 },
    { name: "Barma", role: "Cook", image: s14 },
    { name: "Phurpa", role: "Cook", image: s15 },
    { name: "Kelzang Nima", role: "Cook", image: s16 },
  ];

  const libraryServicesTeam = [
    { name: "Pema Wangchuk", role: "Library Assistant", image: s17 },
  ];

  return (
    <div className="w-full bg-[#F2F5F5]">
      <Navbar overlay />

      <PageBanner
        title="SCHOOL AFFAIRS"
        subtitle="Fostering safe, clean and vibrant campus life"
        image={schoolaffairsbanner}
      />

      <div className="mx-auto w-[85%] py-24 text-left">
        <FadeInLeft>
          <h3 className="text-2xl font-bold mb-8 text-black font-['Roboto_Slab']">
            School Affairs
          </h3>
        </FadeInLeft>

        <FadeInRight>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            The School Affairs department is responsible for maintaining and operating all campus facilities, ensuring a safe, clean, and vibrant environment for students and staff.
          </p>
        </FadeInRight>

        <FadeInLeft>
          <h3 className="text-2xl font-semibold mt-16 mb-10 text-black font-['Roboto_Slab']">
            Team Engineering Services
          </h3>
          <h4 className="text-2xl font-semibold mb-10 text-black font-['Roboto_Slab']">Core Team</h4>
        </FadeInLeft>

        <FadeInRight>
          <InfiniteTeamSlider team={engineeringServicesTeam} />
        </FadeInRight>

        <FadeInLeft>
          <div className="bg-white rounded-xl shadow-md p-16 mt-8">
            <p className="text-[15px] text-gray-700 mb-4">
              The electricity, carpentry and plumbing services make up the Engineering Services Unit. They supervise and spearhead day-to-day operations and upkeep of the college assets.
            </p>

            <p className="text-[15px] text-gray-700 mb-4">
              Plans, manages and implements comprehensive maintenance and refurbishment programs for the college.
            </p>

            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-3">
              <li>
                Project manages all professional procurement and delivery of major and minor capital projects ranging from new buildings and campus improvements to alterations and refurbishment projects.
              </li>
              <li>
                Prepares options appraisals and makes recommendations for improvement, refurbishment or alteration of buildings.
              </li>
              <li>
                Manages local authority and statutory approval processes including planning applications and building regulations approvals.
              </li>
            </ul>
          </div>
        </FadeInLeft>

        <div className="relative my-16 flex justify-center">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent w-3/4"></div>
        </div>

        <FadeInRight>
          <h3 className="text-2xl font-semibold mt-4 mb-10 text-black font-['Roboto_Slab']">
            Team Facilities Management
          </h3>
          <h4 className="text-2xl font-semibold mb-10 text-black font-['Roboto_Slab']">Core Team</h4>
        </FadeInRight>

        <FadeInLeft>
          <InfiniteTeamSlider team={facilitiesManagementTeam} />
        </FadeInLeft>

        <FadeInRight>
          <div className="bg-white rounded-xl shadow-md p-16 mt-8">
            <p className="text-[15px] text-gray-700 mb-4">
              The facility management unit consists of gardeners and cleaning support staff.
            </p>

            <p className="text-[15px] text-gray-700 mb-4">They are specifically responsible for the following:</p>

            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-3">
              <li>Administrating prayer services and major religious events for the college.</li>
              <li>Ensuring cleanliness of classrooms, offices, labs, buildings and external areas.</li>
              <li>Landscaping and beautification of the campus with local flowers and plants.</li>
              <li>Maintaining vegetable gardens on campus.</li>
            </ul>
          </div>
        </FadeInRight>

        <div className="relative my-16 flex justify-center">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent w-3/4"></div>
        </div>

        <FadeInLeft>
          <h3 className="text-2xl font-semibold mt-4 mb-10 text-black font-['Roboto_Slab']">
            Security Services
          </h3>
          <h4 className="text-2xl font-semibold mb-10 text-black font-['Roboto_Slab']">Core Team</h4>
        </FadeInLeft>

        <FadeInRight>
          <InfiniteTeamSlider team={securityServicesTeam} />
        </FadeInRight>

        <FadeInLeft>
          <div className="bg-white rounded-xl shadow-md p-16 mt-8">
            <p className="text-[15px] text-gray-700 mb-4">
              The Security Services team is responsible for ensuring the safety and security of the GCIT campus. They monitor and regulate movement of students, staff, and visitors.
            </p>

            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-3">
              <li>Monitor entry and exit points at campus gates.</li>
              <li>Verify and record student leave approvals before departure.</li>
              <li>Collect and manage student ID cards during campus exit and return.</li>
              <li>Maintain visitor logs and ensure proper authorization for access.</li>
              <li>Conduct routine security checks to safeguard college property.</li>
              <li>Assist in maintaining discipline and safety across campus.</li>
            </ul>
          </div>
        </FadeInLeft>

        <div className="relative my-16 flex justify-center">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent w-3/4"></div>
        </div>

        <FadeInRight>
          <h3 className="text-2xl font-semibold mt-4 mb-10 text-black font-['Roboto_Slab']">
            Food Services (FS)
          </h3>
          <h4 className="text-2xl font-semibold mb-10 text-black font-['Roboto_Slab']">Core Team</h4>
        </FadeInRight>

        <FadeInLeft>
          <InfiniteTeamSlider team={foodServicesTeam} />
        </FadeInLeft>

        <FadeInRight>
          <div className="bg-white rounded-xl shadow-md p-16 mt-8">
            <p className="text-[15px] text-gray-700 mb-4">
              Our Food Services function has a team of experienced cooks who prepare daily meals for all students on campus.
            </p>

            <p className="text-[15px] text-gray-700 mb-4">The key responsibilities include:</p>

            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-3">
              <li>Management of monthly stipend for the student population.</li>
              <li>Maintaining relationships with suppliers for kitchen operations.</li>
              <li>Regular sourcing of food supplies from local farmers.</li>
              <li>Ensuring food hygiene and kitchen cleanliness.</li>
              <li>Planning food and drinks for events and cultural activities.</li>
            </ul>
          </div>
        </FadeInRight>

        <div className="relative my-16 flex justify-center">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent w-3/4"></div>
        </div>

        <FadeInLeft>
          <h3 className="text-2xl font-semibold mt-4 mb-10 text-black font-['Roboto_Slab']">
            Library Services (LS)
          </h3>
          <h4 className="text-2xl font-semibold mb-10 text-black font-['Roboto_Slab']">Core Team</h4>
        </FadeInLeft>
        
        <div className="flex flex-wrap gap-8 justify-center">
          {libraryServicesTeam.map((member, i) => (
            <FadeInRight key={i} delay={i * 150}>
              <div className="bg-white rounded-xl shadow-md p-8 w-52 text-center flex flex-col">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="font-medium text-[15px]">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </FadeInRight>
          ))}
        </div>

        <FadeInLeft>
          <div className="bg-white rounded-2xl shadow-md p-16 mt-8">
            <p className="text-[15px] text-gray-700 mb-4">
              GCIT librarians collect, organize and issue library resources such as books, journals and magazines for different disciplines.
            </p>

            <p className="text-[15px] text-gray-700 mb-4">Their primary responsibilities are:</p>

            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-3">
              <li>Maintaining catalog of library resources in KOHA system.</li>
              <li>Collaborating with faculty to keep resources updated.</li>
              <li>Managing electronic books and journals for student access.</li>
              <li>Ensuring proper library discipline and resource usage.</li>
            </ul>
          </div>
        </FadeInLeft>
      </div>

      <Footer />
    </div>
  );
}