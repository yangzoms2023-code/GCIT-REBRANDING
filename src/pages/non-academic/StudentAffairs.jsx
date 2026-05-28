import React, { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import studentaffairsbanner from "../../assets/studentaffairsbanner.png"

import student1 from "../../assets/images/student1.png";
import student2 from "../../assets/images/student2.png";
import student3 from "../../assets/images/student3.png";
import student4 from "../../assets/images/student4.png";

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

export default function StudentAffairs() {
  const team = [
    {
      name: "Tshering Wangchuk",
      role: "Student Service Officer",
      image: student1,
    },
    {
      name: "Tshering Dorji",
      role: "Student Service Officer",
      image: student2,
    },
    {
      name: "Sangay Lhamo",
      role: "Student Service Officer",
      image: student3,
    },
    {
      name: "Rinzin Lhamo",
      role: "Student Service Officer",
      image: student4,
    },
  ];

  return (
    <div className="w-full bg-[#F2F5F5]">
      <Navbar overlay/>

      <PageBanner
        title="STUDENT AFFAIRS"
        subtitle="Supporting student success through the ICE model, fostering innovation, discipline, and wellbeing at GCIT."
        image={studentaffairsbanner}
      />

      <div className="mx-auto w-[90%] md:w-[85%] py-24 text-left">
        <FadeInLeft>
          <h3 className="text-2xl font-bold mb-8 text-black font-['Roboto_Slab']">
            Student Affairs
          </h3>
        </FadeInLeft>

        <FadeInRight>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            This team advocates for student development through Inspire, Challenge and Empower (ICE) Model. The interaction of the student and their learning environment is critical to the success of the student in their tertiary education.
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
                <h4 className="font-medium text-base">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </FadeInRight>
          ))}
        </div>

        <div className="relative my-16 flex justify-center">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent w-3/4"></div>
        </div>

        <FadeInLeft>
          <div className="bg-white rounded-xl shadow-md p-16">
            <p className="text-[15px] text-gray-700 mb-4">
              The following are the foundations of the model:
            </p>

            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-3">
              <li>
                Inspiring students by facilitating interactions with business communities
                and FANG like companies. This will help the students to broaden their
                perspectives of the world and how they can equip themselves with the
                necessary skills and mindset upon their graduation.
              </li>
              <li>
                Challenging students with hackathons/mini-hacks to address real-life
                challenges. Hosting events such as Bhutan TED Talk alike, ICT Summits
                and Bootcamps to allow for students' learning and development through
                their participation in such events.
              </li>
              <li>
                Empowering students as champions for ICT in Bhutan. The team will
                encourage and facilitate the formation of Special Interest Group (SIG)
                and Community of Practices (COP) for ICT areas where the students can
                serve as ambassadors or leads.
              </li>
            </ul>

            <p className="text-[15px] text-gray-700 mt-8 mb-4">
              The team's other key responsibilities will include:
            </p>

            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-3">
              <li>Organizing orientation and graduation process for all students.</li>
              <li>
                Ensuring students adhering to College's student code of conduct.
              </li>
              <li>
                Managing hostel allocation and ensuring hostel facility cleanliness for
                all students.
              </li>
              <li>
                Providing student welfare, sports and recreational services.
              </li>
            </ul>
          </div>
        </FadeInLeft>
      </div>

      <Footer />
    </div>
  );
}