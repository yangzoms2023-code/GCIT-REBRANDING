import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import newsbanner from "../../assets/newsbanner.png";

import ne1 from "../../assets/images/ne1.png";
import ne2 from "../../assets/images/ne2.png";
import l1 from "../../assets/images/l1.png";
import l2 from "../../assets/images/l2.png";
import l3 from "../../assets/images/l3.png";
import l4 from "../../assets/images/l4.png";
import l5 from "../../assets/images/l5.png";

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

export default function NewsEvents() {
  const navigate = useNavigate();

  const mainStories = [
    {
      id: "young-innovators",
      title: "Young Innovators at GCIT create 40+ Projects using AI & Blockchain",
      image: ne1,
      description:
        "GCIT students developed over 40 technology projects aimed at solving everyday problems—these include systems for land records, voting, fish farm monitoring, flight booking, and more. Many are aimed at supporting Bhutan's digital transformation.",
    },
    {
      id: "admissions-open",
      title: "Admissions Open for GCIT (2025 Intake)",
      image: ne2,
      description:
        "GCIT has opened admissions for Class 12 graduates to pursue the Bachelor of Computer Science or Bachelor of Interactive Design & Development programmes, for July 2025 intake. The application window for both Higher Education Grant & self-financed students is from 1 March to 15 March 2025.",
    },
  ];

  const latestStories = [
    {
      id: "zhingscan",
      title: "GCIT Students Develop 'ZhingScan' App to Help Farmers",
      description: "“ZhingScan” is a GCIT student-built app that detects plant pests and diseases from images and suggests treatments.",
      image: l1,
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity Awareness Month & Upcoming Symposium with GCIT",
      description: "GCIT partners with global cybersecurity experts to host workshops and activities for Cybersecurity Awareness Month 2025.",
      image: l2,
    },
    {
      id: "fintech",
      title: "BIL × GCIT Fintech Innovation Lab Launched",
      description: "GCIT, in collaboration with BIL, launched the Fintech Innovation Lab to bridge technology and finance, empowering Bhutan's digital future.",
      image: l3,
    },
    {
      id: "ai-startup",
      title: "Bhutan's First AI Startup Founded by GCIT Students",
      description: "Seven students from GCIT launched NoMindBhutan, a startup developing AI chatbots and other AI tools.",
      image: l4,
    },
    {
      id: "royal-visit",
      title: "Royal Visit Highlights GCIT's Tech Innovation Showcase",
      description: "On June 18, 2025, Their Majesties and Their Royal Highnesses graced GCIT's Capstone Tech Innovation Showcase.",
      image: l5,
    },
  ];

  return (
    <div className="w-full">
      <Navbar overlay />

      <PageBanner title="NEWS & EVENTS" subtitle="Stay updated with the latest happenings at GCIT" image={newsbanner} />

      <div className="mx-auto w-[85%]">
        <div className="pt-24">
          <FadeInLeft>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 font-['Roboto_Slab']">GCIT News and Events</h3>
          </FadeInLeft>
          <FadeInRight>
            <p className="text-sm text-black w-full pb-20 text-left">
              Stay up to date with the latest happenings at Gyalpozhing College of Information Technology (GCIT). Explore stories about student achievements, innovative projects,
              campus events, academic collaborations, and institutional milestones. This section highlights how GCIT continues to foster innovation, creativity, and excellence in
              technology and education — shaping the next generation of digital leaders in Bhutan.
            </p>
          </FadeInRight>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 pb-16">
          <div className="lg:col-span-2 space-y-8">
            {mainStories.map((story, index) => (
              <FadeInLeft key={story.id} delay={index * 200}>
                <div className="space-y-4">
                  <img src={story.image} alt={story.title} className="w-full h-96 object-cover rounded-xl" />
                  <h3 className="text-xl font-bold text-black cursor-pointer hover:text-[#f48b1a] transition-colors text-left" onClick={() => navigate(`/news/${story.id}`)}>
                    {story.title}
                  </h3>
                  <p className="text-sm text-black text-left">{story.description}</p>
                </div>
              </FadeInLeft>
            ))}
          </div>

          <div>
            <FadeInRight>
              <p className="text-2xl font-semibold mb-6 text-left text-black pb-5">Latest</p>
            </FadeInRight>
            <div className="space-y-4">
              {latestStories.map((story, index) => (
                <FadeInRight key={story.id} delay={index * 100}>
                  <div
                    className="bg-white rounded-xl shadow p-4 cursor-pointer hover:shadow-lg transition-shadow flex justify-between items-center gap-4"
                    onClick={() => navigate(`/news/${story.id}`)}
                  >
                    <div className="flex-1 text-left">
                      <p className="font-semibold text-sm text-black mb-2">{story.title}</p>
                      <p className="text-xs text-black">{story.description}</p>
                    </div>
                    <img src={story.image} alt={story.title} className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
                  </div>
                </FadeInRight>
              ))}
            </div>

            <FadeInRight delay={500}>
              <div className="mt-6">
                <button className="w-full bg-[#f48b1a] hover:bg-[#e07a0f] text-white py-2 rounded-full text-sm">View All News</button>
              </div>
            </FadeInRight>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}