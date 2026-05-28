import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import vacanciesbanner from "../../assets/vacanciesbanner.png"

import v1 from "../../assets/images/v1.png";
import v2 from "../../assets/images/v2.png";

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

export default function Vacancies() {
  const navigate = useNavigate();

  const vacancies = [
    {
      id: "ai-faculty",
      title: "AI Faculty Lead",
      description:
        "Pioneering research and curriculum design in autonomous systems and cognitive intelligence.",
    },
    {
      id: "multimedia",
      title: "Multimedia & Design Lecturer",
      description:
        "Inspiring creativity through courses in design, animation, and digital storytelling.",
    },
    {
      id: "student-service",
      title: "Student Service Officer",
      description:
        "Supporting student welfare and campus life through effective coordination and assistance.",
    },
    {
      id: "ict-support",
      title: "ICT Support Technician",
      description:
        "Providing technical support and maintaining campus IT infrastructure.",
    },
    {
      id: "finance",
      title: "Finance and Accounts Officer",
      description:
        "Overseeing financial planning and reporting to maintain transparency and compliance.",
    },
  ];

  return (
    <div className="w-full bg-[#F2F5F5]">
      <Navbar overlay />

      <PageBanner
        title="VACANCIES"
        subtitle="Explore careers at GCIT"
        image={vacanciesbanner}
      />

      <div className="mx-auto w-[90%] md:w-[85%]">
        <div className="pt-24">
          <FadeInLeft>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 font-['Roboto_Slab']">
              Vacancies
            </h3>
          </FadeInLeft>
          <FadeInRight>
            <p className="text-sm text-black w-full pb-20 text-left">
              Stay informed about the latest career opportunities at the Gyalpozhing College of Information Technology (GCIT).
              Explore current job openings for academic and administrative positions, along with details on eligibility, application procedures, and deadlines.
              Join our team and contribute to fostering innovation and excellence in education.
            </p>
          </FadeInRight>
        </div>

        <div className="grid md:grid-cols-5 gap-8 pb-16">
          <div className="md:col-span-3 space-y-8">
            <FadeInLeft delay={100}>
              <div>
                <img 
                  src={v1} 
                  alt="Hiring for Assistant or Associate Lecturer"
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div className="mt-4 text-left">
                  <p className="text-lg font-semibold text-black">
                    Assistant or Associate Lecturer
                  </p>
                  <p className="text-sm text-black mt-2">
                    We would like to announce a vacancy for the immediate recruitment of Assistant or Associate Lecturer. Eligible Candidates for the post of Assistant or Associate Lecturer may apply via{" "}
                    <a 
                      href="https://ims.rub.edu.bt" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#f48b1a] hover:underline break-all"
                    >
                      https://ims.rub.edu.bt
                    </a>{" "}
                    latest by 7 May 2024 on or before 5:00 pm.
                  </p>
                </div>
              </div>
            </FadeInLeft>

            <FadeInLeft delay={200}>
              <div>
                <img 
                  src={v2} 
                  alt="Hiring for ICT Technical Associate"
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div className="mt-4 text-left">
                  <p className="text-lg font-semibold text-black">
                    ICT Technical Associate
                  </p>
                  <p className="text-sm text-black mt-2">
                    We would like to announce vacancy for the immediate recruitment of ICT Technical Associate. Eligible Candidates for the post of ICT Technical Associate may submit an application via email{" "}
                    <a 
                      href="mailto:slhendup.gcit@rub.edu.bt"
                      className="text-[#f48b1a] hover:underline"
                    >
                      slhendup.gcit@rub.edu.bt
                    </a>{" "}
                    or submit application via{" "}
                    <a 
                      href="https://ims.rub.edu.bt" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#f48b1a] hover:underline break-all"
                    >
                      https://ims.rub.edu.bt
                    </a>{" "}
                    latest by 20 February 2024 on or before 5:00 pm.
                  </p>
                </div>
              </div>
            </FadeInLeft>
          </div>

          <div className="md:col-span-2">
            <FadeInRight>
              <p className="text-2xl font-semibold mb-6 text-left text-black pb-5">
                Current Vacancies
              </p>
            </FadeInRight>

            <div className="space-y-4">
              {vacancies.map((job, index) => (
                <FadeInRight key={job.id} delay={index * 100}>
                  <div
                    className="bg-white rounded-xl shadow p-5 flex flex-col"
                  >
                    <div className="text-left mb-4">
                      <p className="font-semibold text-base text-black">{job.title}</p>
                      <p className="text-xs text-black mt-1">
                        {job.description}
                      </p>
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        onClick={() => navigate(`/vacancy/${job.id}`)}
                        className="bg-[#f48b1a] hover:bg-[#e07a0f] text-white text-xs px-5 py-2 rounded-lg w-28 text-center"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </FadeInRight>
              ))}
            </div>

            <FadeInRight delay={500}>
              <div className="mt-6">
                <button className="w-full bg-[#f48b1a] hover:bg-[#e07a0f] text-white py-2 rounded-full text-sm">
                  View All
                </button>
              </div>
            </FadeInRight>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}