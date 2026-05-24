import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import newsdetailsbanner from "../../assets/newsdetailsbanner.png";

import n1 from "../../assets/images/n1.png";
import n2 from "../../assets/images/n2.png";
import n3 from "../../assets/images/n3.png";

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

export default function NewsEventsDetails() {
  const { id } = useParams();

  const newsData = {
    "young-innovators": {
      title: "Young Innovators at GCIT create 40+ Projects using AI & Blockchain",
      content: (
        <>
          <p className="text-base text-black mb-6 text-left leading-relaxed">
            Young innovators at Gyalpozhing College of Information Technology (GCIT) showcased 40 groundbreaking projects that leverage artificial intelligence and blockchain to address real-world challenges in Bhutan. The exhibition, held at the GCIT campus in Thimphu, featured solutions ranging from land record digitisation and secure voting systems to smart aquaculture and digital flight reservation tools.
          </p>
          <p className="text-base text-black mb-6 text-left leading-relaxed">
            Highlighted projects included the RAG-based National Land Commission Security System, which enables instant AI-powered retrieval of land information; CRAW TECH IO, an AI-driven monitoring system for crawfish farming; the National Digital Voting System, a blockchain-based platform ensuring secure and inclusive elections; and the Drukair Helicopter Reservation System, designed to streamline online flight bookings.
          </p>
          <p className="text-base text-black mb-6 text-left leading-relaxed">
            According to GCIT, while some projects require minor refinements, several prototypes are already being piloted in government agencies and private firms. Faculty members noted that working with real clients has strengthened students' problem-solving skills and supports Bhutan's broader digital transformation efforts. These innovations reflect Bhutan's growing pool of young tech talent committed to contributing to His Majesty's vision of an advanced digital society.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="md:col-span-2">
              <img 
                src={n1}
                alt="GCIT Project Showcase Main"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <img 
                src={n2}
                alt="Blockchain Project Demo"
                className="w-full h-45 object-cover rounded-lg"
              />
              <img 
                src={n3}
                alt="AI Project Presentation"
                className="w-full h-45 object-cover rounded-lg"
              />
            </div>
          </div>
        </>
      ),
    },
    "admissions-open": {
      title: "Admissions Open for GCIT (2025 Intake)",
      content: (
        <>
          <p className="text-base text-black mb-6 text-left leading-relaxed">
            GCIT has opened admissions for Class 12 graduates to pursue the Bachelor of Computer Science or Bachelor of Interactive Design & Development programmes, for July 2025 intake.
          </p>
          <p className="text-base text-black mb-6 text-left leading-relaxed">
            The application window for both Higher Education Grant & self-financed students is from 1 March to 15 March 2025.
          </p>
          <p className="text-base text-black mb-6 text-left leading-relaxed">
            Interested candidates are encouraged to apply early through the official GCIT admission portal. Eligible students will be selected based on their academic performance and entrance examination results.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="md:col-span-2">
              <img 
                src={n1}
                alt="GCIT Campus"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <img 
                src={n2}
                alt="Students in Lab"
                className="w-full h-45 object-cover rounded-lg"
              />
              <img 
                src={n3}
                alt="GCIT Library"
                className="w-full h-45 object-cover rounded-lg"
              />
            </div>
          </div>
        </>
      ),
    },
    "zhingscan": {
      title: "GCIT Students Develop 'ZhingScan' App to Help Farmers",
      content: (
        <>
          <p className="text-base text-black mb-6 text-left leading-relaxed">
            "ZhingScan" is a GCIT student-built app that detects plant pests and diseases from images and suggests treatments. The innovative application uses machine learning algorithms to analyze photos of crops and identify potential issues.
          </p>
          <p className="text-base text-black mb-6 text-left leading-relaxed">
            The app has been tested on various crops including rice, maize, and vegetables, showing promising accuracy rates. Farmers can simply take a photo of an affected plant, and ZhingScan provides immediate diagnosis and recommended solutions.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="md:col-span-2">
              <img 
                src={n1}
                alt="ZhingScan App Demo"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <img 
                src={n2}
                alt="Farmers Testing App"
                className="w-full h-45 object-cover rounded-lg"
              />
              <img 
                src={n3}
                alt="Crop Analysis"
                className="w-full h-45 object-cover rounded-lg"
              />
            </div>
          </div>
        </>
      ),
    },
    "cybersecurity": {
      title: "Cybersecurity Awareness Month & Upcoming Symposium with GCIT",
      content: (
        <>
          <p className="text-base text-black mb-6 text-left leading-relaxed">
            GCIT partners with global cybersecurity experts to host workshops and activities for Cybersecurity Awareness Month 2025.
          </p>
          <p className="text-base text-black mb-6 text-left leading-relaxed">
            The event will feature expert talks, hands-on workshops, and networking opportunities for students and professionals interested in cybersecurity careers.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="md:col-span-2">
              <img 
                src={n1}
                alt="Cybersecurity Event"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <img 
                src={n2}
                alt="Workshop"
                className="w-full h-45 object-cover rounded-lg"
              />
              <img 
                src={n3}
                alt="Experts Speaking"
                className="w-full h-45 object-cover rounded-lg"
              />
            </div>
          </div>
        </>
      ),
    },
    "fintech": {
      title: "BIL × GCIT Fintech Innovation Lab Launched",
      content: (
        <>
          <p className="text-base text-black mb-6 text-left leading-relaxed">
            GCIT, in collaboration with BIL, launched the Fintech Innovation Lab to bridge technology and finance, empowering Bhutan's digital future.
          </p>
          <p className="text-base text-black mb-6 text-left leading-relaxed">
            The lab will focus on developing innovative financial technology solutions, conducting research, and training the next generation of fintech professionals in Bhutan.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="md:col-span-2">
              <img 
                src={n1}
                alt="Fintech Lab Launch"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <img 
                src={n2}
                alt="Partnership Signing"
                className="w-full h-45 object-cover rounded-lg"
              />
              <img 
                src={n3}
                alt="Lab Facility"
                className="w-full h-45 object-cover rounded-lg"
              />
            </div>
          </div>
        </>
      ),
    },
    "ai-startup": {
      title: "Bhutan's First AI Startup Founded by GCIT Students",
      content: (
        <>
          <p className="text-base text-black mb-6 text-left leading-relaxed">
            Seven students from GCIT launched NoMindBhutan, a startup developing AI chatbots and other AI tools.
          </p>
          <p className="text-base text-black mb-6 text-left leading-relaxed">
            The startup aims to provide AI solutions tailored to Bhutanese businesses and government agencies, helping to accelerate the country's digital transformation journey.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="md:col-span-2">
              <img 
                src={n1}
                alt="AI Startup Team"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <img 
                src={n2}
                alt="Demo Day"
                className="w-full h-45 object-cover rounded-lg"
              />
              <img 
                src={n3}
                alt="AI Tools"
                className="w-full h-45 object-cover rounded-lg"
              />
            </div>
          </div>
        </>
      ),
    },
    "royal-visit": {
      title: "Royal Visit Highlights GCIT's Tech Innovation Showcase",
      content: (
        <>
          <p className="text-base text-black mb-6 text-left leading-relaxed">
            On June 18, 2025, Their Majesties and Their Royal Highnesses graced GCIT's Capstone Tech Innovation Showcase.
          </p>
          <p className="text-base text-black mb-6 text-left leading-relaxed">
            The royal visit highlighted the college's commitment to fostering innovation and excellence in technology education, with students presenting their groundbreaking projects to the royal family.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="md:col-span-2">
              <img 
                src={n1}
                alt="Royal Visit Main"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <img 
                src={n2}
                alt="Royal Procession"
                className="w-full h-45 object-cover rounded-lg"
              />
              <img 
                src={n3}
                alt="Students with Royals"
                className="w-full h-45 object-cover rounded-lg"
              />
            </div>
          </div>
        </>
      ),
    },
  };

  const currentNews = newsData[id] || newsData["young-innovators"];

  return (
    <div className="w-full bg-[#F2F5F5]">
      <Navbar overlay />

      <PageBanner
        title="NEWS DETAILS"
        subtitle="Learn more about the latest happenings at GCIT"
        image={newsdetailsbanner}
      />

      <div className="mx-auto w-[85%]">
        <div className="pt-24 pb-16">
          <FadeInLeft>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center font-['Roboto_Slab']">
              {currentNews.title}
            </h3>
          </FadeInLeft>
          <FadeInRight>
            <div className="text-left">
              {currentNews.content}
            </div>
          </FadeInRight>
        </div>
      </div>

      <Footer />
    </div>
  );
}