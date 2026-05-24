import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import vacanciesbanner from "../../assets/vacanciesbanner.png"

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

export default function VacancyDetails() {
  const { id } = useParams();

  const data = {
    "ai-faculty": {
      title: "Vacancies : AI Faculty Lead",
    },
    multimedia: {
      title: "Vacancies : Multimedia & Design Lecturer",
    },
    "student-service": {
      title: "Vacancies : Student Service Officer",
    },
    "ict-support": {
      title: "Vacancies : ICT Technical Associate",
    },
    finance: {
      title: "Vacancies : Finance and Accounts Officer",
    },
  };

  const job = data[id];

  if (!job) {
    return <div className="p-10 text-left">Vacancy not found</div>;
  }

  return (
    <div className="w-full bg-[#F2F5F5] text-left">
      <Navbar overlay />

      <PageBanner
        title="VACANCY DETAILS"
        subtitle="Explore detailed information about this opportunity"
        image={vacanciesbanner}
      />

      <div className="mx-auto w-[85%]">
        <div className="pt-24 pb-16">
          <FadeInLeft>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center font-['Roboto_Slab']">
              {job.title}
            </h3>
          </FadeInLeft>

          <FadeInRight>
            <p className="mb-6 text-sm text-black">
              Gyalpozhing College of Information Technology (GCIT), under the Royal University of Bhutan (RUB), is pleased to announce a vacancy for the position mentioned above for immediate recruitment.
            </p>
          </FadeInRight>

          <FadeInLeft delay={100}>
            <div className="mb-6">
              <p className="text-base font-semibold mb-2 text-black">Position Details</p>
              <ul className="list-disc pl-5 text-sm space-y-1 text-black">
                <li>Position Title: {job.title.replace("Vacancies : ", "")}</li>
                <li>Position Level: S-2/S-4</li>
                <li>No. of Slot: 1</li>
                <li>Category of Employment: Regular</li>
                <li>Place of Posting: GCIT, Gyalpozhing</li>
              </ul>
            </div>
          </FadeInLeft>

          <FadeInRight delay={150}>
            <div className="mb-6">
              <p className="text-base font-semibold mb-2 text-black">Eligibility Criteria</p>
              <ul className="list-decimal pl-5 text-sm space-y-1 text-black">
                <li>Be a Bhutanese Citizen.</li>
                <li>Be not more than 45 years of age at the time of application.</li>
                <li>Meet the required qualifications and other conditions as specified below.</li>
              </ul>
            </div>
          </FadeInRight>

          <FadeInLeft delay={200}>
            <div className="mb-6">
              <p className="text-base font-semibold mb-2 text-black">Minimum Qualification and Requirements</p>
              <ul className="list-disc pl-5 text-sm space-y-1 text-black">
                <li>Bachelor's degree or Diploma in relevant field.</li>
                <li>Strong knowledge related to the position applied.</li>
                <li>Ability to handle responsibilities efficiently.</li>
                <li>Good communication and teamwork skills.</li>
              </ul>
            </div>
          </FadeInLeft>

          <FadeInRight delay={250}>
            <div className="mb-6">
              <p className="text-base font-semibold mb-2 text-black">Documents Required</p>
              <ul className="list-decimal pl-5 text-sm space-y-1 text-black">
                <li>Academic transcripts and certificates (Class X, XII, Degree).</li>
                <li>Copy of Citizenship Identity Card (CID).</li>
                <li>Security Clearance Certificate (valid).</li>
                <li>Medical Fitness Certificate (valid).</li>
                <li>Audit Clearance Certificate (if applicable).</li>
                <li>No Objection Certificate (if employed).</li>
                <li>Other relevant certificates.</li>
                <li>Contact details — phone number and email.</li>
              </ul>
            </div>
          </FadeInRight>

          <FadeInLeft delay={300}>
            <div className="mb-6 text-sm">
              <p className="text-base font-semibold mb-2 text-black">How to Apply</p>
              <p className="text-black">
                Apply online through RUB IMS portal:
                <br />
                <a
                  href="https://ims.rub.edu.bt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f48b1a] hover:underline"
                >
                  https://ims.rub.edu.bt
                </a>
              </p>

              <p className="mt-2 text-black">
                Application Deadline: 1st November 2025, 5:00 PM
              </p>
            </div>
          </FadeInLeft>

          <FadeInRight delay={350}>
            <div className="text-sm">
              <p className="text-base font-semibold mb-2 text-black">Important Note</p>
              <ul className="list-disc pl-5 space-y-1 text-black">
                <li>Incomplete applications will not be accepted.</li>
                <li>Only shortlisted candidates will be contacted.</li>
                <li>GCIT reserves the right to reject any or all applications.</li>
              </ul>
            </div>
          </FadeInRight>
        </div>
      </div>

      <Footer />
    </div>
  );
}