import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import newsdetailsbanner from "../../assets/newsdetailsbanner.png";

import ne1 from "../../assets/images/ne1.png";
import ne2 from "../../assets/images/ne2.png";
import l1 from "../../assets/images/l1.png";
import l2 from "../../assets/images/l2.png";
import l3 from "../../assets/images/l3.png";
import l4 from "../../assets/images/l4.png";
import l5 from "../../assets/images/l5.png";

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
  const navigate = useNavigate();

  const newsData = {
    "young-innovators": {
      title: "Young Innovators at GCIT create 40+ Projects using AI & Blockchain",
      date: "January 15, 2025",
      category: "Student Innovation",
      heroImage: ne1,
      content: (
        <>
          <p className="text-gray-700 mb-6 text-left leading-relaxed text-base md:text-lg">
            Young innovators at Gyalpozhing College of Information Technology (GCIT) showcased 40 groundbreaking projects that leverage artificial intelligence and blockchain to address real-world challenges in Bhutan. The exhibition, held at the GCIT campus in Thimphu, featured solutions ranging from land record digitisation and secure voting systems to smart aquaculture and digital flight reservation tools.
          </p>
          <p className="text-gray-700 mb-6 text-left leading-relaxed text-base md:text-lg">
            Highlighted projects included the RAG-based National Land Commission Security System, which enables instant AI-powered retrieval of land information; CRAW TECH IO, an AI-driven monitoring system for crawfish farming; the National Digital Voting System, a blockchain-based platform ensuring secure and inclusive elections; and the Drukair Helicopter Reservation System, designed to streamline online flight bookings.
          </p>
          <p className="text-gray-700 mb-8 text-left leading-relaxed text-base md:text-lg">
            According to GCIT, while some projects require minor refinements, several prototypes are already being piloted in government agencies and private firms. Faculty members noted that working with real clients has strengthened students' problem-solving skills and supports Bhutan's broader digital transformation efforts. These innovations reflect Bhutan's growing pool of young tech talent committed to contributing to His Majesty's vision of an advanced digital society.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="md:col-span-2">
              <img
                src={ne1}
                alt="GCIT Project Showcase Main"
                className="w-full h-80 md:h-96 object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="space-y-4">
              <img
                src={l1}
                alt="Blockchain Project Demo"
                className="w-full h-36 object-cover rounded-xl shadow-md"
              />
              <img
                src={l2}
                alt="AI Project Presentation"
                className="w-full h-36 object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </>
      ),
    },
    "admissions-open": {
      title: "Admissions Open for GCIT (2025 Intake)",
      date: "March 1, 2025",
      category: "Announcement",
      heroImage: ne2,
      content: (
        <>
          <p className="text-gray-700 mb-6 text-left leading-relaxed text-base md:text-lg">
            GCIT has opened admissions for Class 12 graduates to pursue the Bachelor of Computer Science or Bachelor of Interactive Design & Development programmes, for July 2025 intake.
          </p>
          <p className="text-gray-700 mb-6 text-left leading-relaxed text-base md:text-lg">
            The application window for both Higher Education Grant & self-financed students is from 1 March to 15 March 2025.
          </p>
          <p className="text-gray-700 mb-8 text-left leading-relaxed text-base md:text-lg">
            Interested candidates are encouraged to apply early through the official GCIT admission portal. Eligible students will be selected based on their academic performance and entrance examination results.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="md:col-span-2">
              <img
                src={ne2}
                alt="GCIT Campus"
                className="w-full h-80 md:h-96 object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="space-y-4">
              <img
                src={l3}
                alt="Students in Lab"
                className="w-full h-36 object-cover rounded-xl shadow-md"
              />
              <img
                src={l4}
                alt="GCIT Library"
                className="w-full h-36 object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </>
      ),
    },
    "zhingscan": {
      title: "GCIT Students Develop 'ZhingScan' App to Help Farmers",
      date: "February 20, 2025",
      category: "Student Innovation",
      heroImage: l1,
      content: (
        <>
          <p className="text-gray-700 mb-6 text-left leading-relaxed text-base md:text-lg">
            "ZhingScan" is a GCIT student-built app that detects plant pests and diseases from images and suggests treatments. The innovative application uses machine learning algorithms to analyze photos of crops and identify potential issues.
          </p>
          <p className="text-gray-700 mb-8 text-left leading-relaxed text-base md:text-lg">
            The app has been tested on various crops including rice, maize, and vegetables, showing promising accuracy rates. Farmers can simply take a photo of an affected plant, and ZhingScan provides immediate diagnosis and recommended solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="md:col-span-2">
              <img
                src={l1}
                alt="ZhingScan App Demo"
                className="w-full h-80 md:h-96 object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="space-y-4">
              <img
                src={l2}
                alt="Farmers Testing App"
                className="w-full h-36 object-cover rounded-xl shadow-md"
              />
              <img
                src={l3}
                alt="Crop Analysis"
                className="w-full h-36 object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </>
      ),
    },
    "cybersecurity": {
      title: "Cybersecurity Awareness Month & Upcoming Symposium with GCIT",
      date: "October 1, 2025",
      category: "Event",
      heroImage: l2,
      content: (
        <>
          <p className="text-gray-700 mb-6 text-left leading-relaxed text-base md:text-lg">
            GCIT partners with global cybersecurity experts to host workshops and activities for Cybersecurity Awareness Month 2025.
          </p>
          <p className="text-gray-700 mb-8 text-left leading-relaxed text-base md:text-lg">
            The event will feature expert talks, hands-on workshops, and networking opportunities for students and professionals interested in cybersecurity careers.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="md:col-span-2">
              <img
                src={l2}
                alt="Cybersecurity Event"
                className="w-full h-80 md:h-96 object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="space-y-4">
              <img
                src={l3}
                alt="Workshop"
                className="w-full h-36 object-cover rounded-xl shadow-md"
              />
              <img
                src={l4}
                alt="Experts Speaking"
                className="w-full h-36 object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </>
      ),
    },
    "fintech": {
      title: "BIL × GCIT Fintech Innovation Lab Launched",
      date: "November 15, 2025",
      category: "Partnership",
      heroImage: l3,
      content: (
        <>
          <p className="text-gray-700 mb-6 text-left leading-relaxed text-base md:text-lg">
            GCIT, in collaboration with BIL, launched the Fintech Innovation Lab to bridge technology and finance, empowering Bhutan's digital future.
          </p>
          <p className="text-gray-700 mb-8 text-left leading-relaxed text-base md:text-lg">
            The lab will focus on developing innovative financial technology solutions, conducting research, and training the next generation of fintech professionals in Bhutan.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="md:col-span-2">
              <img
                src={l3}
                alt="Fintech Lab Launch"
                className="w-full h-80 md:h-96 object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="space-y-4">
              <img
                src={l4}
                alt="Partnership Signing"
                className="w-full h-36 object-cover rounded-xl shadow-md"
              />
              <img
                src={l5}
                alt="Lab Facility"
                className="w-full h-36 object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </>
      ),
    },
    "ai-startup": {
      title: "Bhutan's First AI Startup Founded by GCIT Students",
      date: "December 10, 2025",
      category: "Student Achievement",
      heroImage: l4,
      content: (
        <>
          <p className="text-gray-700 mb-6 text-left leading-relaxed text-base md:text-lg">
            Seven students from GCIT launched NoMindBhutan, a startup developing AI chatbots and other AI tools.
          </p>
          <p className="text-gray-700 mb-8 text-left leading-relaxed text-base md:text-lg">
            The startup aims to provide AI solutions tailored to Bhutanese businesses and government agencies, helping to accelerate the country's digital transformation journey.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="md:col-span-2">
              <img
                src={l4}
                alt="AI Startup Team"
                className="w-full h-80 md:h-96 object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="space-y-4">
              <img
                src={l5}
                alt="Demo Day"
                className="w-full h-36 object-cover rounded-xl shadow-md"
              />
              <img
                src={ne1}
                alt="AI Tools"
                className="w-full h-36 object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </>
      ),
    },
    "royal-visit": {
      title: "Royal Visit Highlights GCIT's Tech Innovation Showcase",
      date: "June 18, 2025",
      category: "Royal Event",
      heroImage: l5,
      content: (
        <>
          <p className="text-gray-700 mb-6 text-left leading-relaxed text-base md:text-lg">
            On June 18, 2025, Their Majesties and Their Royal Highnesses graced GCIT's Capstone Tech Innovation Showcase.
          </p>
          <p className="text-gray-700 mb-8 text-left leading-relaxed text-base md:text-lg">
            The royal visit highlighted the college's commitment to fostering innovation and excellence in technology education, with students presenting their groundbreaking projects to the royal family.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="md:col-span-2">
              <img
                src={l5}
                alt="Royal Visit Main"
                className="w-full h-80 md:h-96 object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="space-y-4">
              <img
                src={ne1}
                alt="Royal Procession"
                className="w-full h-36 object-cover rounded-xl shadow-md"
              />
              <img
                src={ne2}
                alt="Students with Royals"
                className="w-full h-36 object-cover rounded-xl shadow-md"
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

      {/* Dynamic Hero Banner */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <img
          src={currentNews.heroImage}
          alt={currentNews.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <FadeInLeft>
              <span className="inline-block bg-[#f48b1a] text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-4 tracking-wide uppercase">
                {currentNews.category}
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-['Roboto_Slab'] leading-tight">
                {currentNews.title}
              </h1>
            </FadeInLeft>
            <FadeInRight delay={200}>
              <div className="flex items-center justify-center gap-3 text-white/90 text-sm md:text-base">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="font-medium">{currentNews.date}</span>
              </div>
            </FadeInRight>
          </div>
        </div>
      </div>

      <div className="mx-auto w-[90%] max-w-6xl">
        <div className="py-12 md:py-16">
          <FadeInLeft delay={300}>
            <button
              onClick={() => navigate('/announcement/news-events')}
              className="flex items-center gap-2 text-[#f48b1a] hover:text-[#e07a0f] font-semibold mb-8 transition-colors text-sm md:text-base"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Back to News
            </button>
          </FadeInLeft>
          
          <FadeInRight delay={400}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Featured Image */}
              <div className="w-full h-[400px] md:h-[500px]">
                <img
                  src={currentNews.heroImage}
                  alt={currentNews.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  {currentNews.content}
                </div>
              </div>
            </div>
          </FadeInRight>
        </div>
      </div>

      <Footer />
    </div>
  );
}