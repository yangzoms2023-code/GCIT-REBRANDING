import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import tenderbanner from "../../assets/tenderbanner.png"

import t1 from "../../assets/images/t1.png";
import t2 from "../../assets/images/t2.png";

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

export default function Tender() {
  const navigate = useNavigate();

  const tenders = [
    {
      id: "convenience-store",
      title: "Quotation for Convenience Store",
      date: "October 11, 2005",
    },
    {
      id: "invitation-quotation",
      title: "Invitation for Quotation",
      date: "October 16, 2025",
    },
    {
      id: "notice-tender-1",
      title: "Notice Inviting Tender",
      date: "June 10, 2025",
    },
    {
      id: "call-participation-1",
      title: "Call For Participation in The Tender",
      date: "May 21, 2025",
    },
    {
      id: "call-participation-2",
      title: "Call For Participation in The Tender",
      date: "April 14, 2025",
    },
  ];

  return (
    <div className="w-full bg-[#F2F5F5]">
      <Navbar overlay />

      <PageBanner
        title="TENDER"
        subtitle="Explore GCIT procurement tenders"
        image={tenderbanner}
      />

      <div className="mx-auto w-[85%]">
        <div className="pt-24">
          <FadeInLeft>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 font-['Roboto_Slab']">
              Tenders
            </h3>
          </FadeInLeft>
          <FadeInRight>
            <p className="text-sm text-black w-full pb-20 text-left">
              The Gyalpozhing College of Information Technology (GCIT) regularly announces tenders and procurement opportunities to ensure transparency and fairness in all its operations. This section provides up-to-date information on available tenders, bidding guidelines, and submission deadlines for suppliers and contractors interested in partnering with the college.
            </p>
          </FadeInRight>
        </div>

        <div className="grid md:grid-cols-5 gap-8 pb-16">
          <div className="md:col-span-3 space-y-8">
            <FadeInLeft delay={100}>
              <div>
                <img 
                  src={t1}
                  alt="Quotation for Convenience Store"
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div className="mt-4 text-left">
                  <p className="text-lg font-semibold text-black">
                    Quotation For Convenience Store
                  </p>
                  <p className="text-sm text-black mt-2">
                    We are pleased to extend an invitation to your esteemed business entity to submit a quotation for establishing and operating a convenience store at our college, Gyalpozhing College of Information Technology (GCIT).
                  </p>
                </div>
              </div>
            </FadeInLeft>

            <FadeInLeft delay={200}>
              <div>
                <img 
                  src={t2}
                  alt="Notice Inviting Tender"
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div className="mt-4 text-left">
                  <p className="text-lg font-semibold text-black">
                    Notice Inviting Tender
                  </p>
                  <p className="text-sm text-black mt-2">
                    NOTICE INVITING TENDER Gyalpozhing College of Information Technology, Royal University of Bhutan, Mongar invites sealed bids from the interested eligible bidders for the "Operation of College Canteen" Operation of College Canteen Nu. 500 (non-refundable) Sale of tender documents 26th July 2021 to 10th August 2021 from AFD, GCIT.
                  </p>
                </div>
              </div>
            </FadeInLeft>
          </div>

          <div className="md:col-span-2">
            <FadeInRight>
              <p className="text-2xl font-semibold mb-6 text-left text-black pb-5">
                Current Tender Announcements
              </p>
            </FadeInRight>

            <div className="space-y-4">
              {tenders.map((tender, index) => (
                <FadeInRight key={tender.id} delay={index * 100}>
                  <div
                    className="bg-white rounded-xl shadow p-5 flex flex-col"
                  >
                    <div className="text-left mb-4">
                      <p className="font-semibold text-base text-black">{tender.title}</p>
                      <p className="text-xs text-black mt-1">
                        {tender.date}
                      </p>
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        onClick={() => navigate(`/tender/${tender.id}`)}
                        className="bg-[#f48b1a] hover:bg-[#e07a0f] text-white text-xs px-5 py-2 rounded-lg w-28 text-center"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </FadeInRight>
              ))}
            </div>

            {/* <FadeInRight delay={500}>
              <div className="mt-6">
                <button className="w-full bg-[#f48b1a] hover:bg-[#e07a0f] text-white py-2 rounded-full text-sm">
                  View All
                </button>
              </div>
            </FadeInRight> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}