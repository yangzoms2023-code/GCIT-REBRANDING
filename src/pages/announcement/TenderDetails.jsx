import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import tenderdetailsbanner from "../../assets/tenderdetailsbanner.png"

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

export default function TenderDetails() {
  const { id } = useParams();

  const tenderData = {
    "invitation-quotation": {
      title: "Invitation for Quotation: Establishment and Operation of a Convenience Store at GCIT",
      content: (
        <>
          <p className="text-sm text-black mb-4 text-left">
            Gyalpozhing College of Information Technology (GCIT) is pleased to invite qualified and reputable business entities to submit a quotation for the establishment and operation of a Convenience Store within the college campus.
          </p>
          <p className="text-sm text-black mb-4 text-left">
            The convenience store will serve our growing student and staff community by providing essential daily-use items, stationery, snacks, beverages, and other basic necessities. The selected vendor will play an important role in enhancing campus life by ensuring easy access to affordable and quality products.
          </p>

          <p className="text-lg font-semibold mt-6 mb-3 text-black text-left">Scope of Service</p>
          <p className="text-sm text-black mb-4 text-left">
            The proposed convenience store should aim to:
          </p>
          <ul className="list-disc pl-6 text-sm text-black space-y-2 mb-4 text-left">
            <li>Offer a wide range of essential goods suitable for students, faculty, and staff.</li>
            <li>Maintain consistent product availability and reasonable pricing.</li>
            <li>Provide clean, organised, and customer-friendly service.</li>
            <li>Operate during hours aligned with campus schedules and student needs.</li>
            <li>Ensure proper hygiene, safety, and waste management practices.</li>
          </ul>

          <p className="text-lg font-semibold mt-6 mb-3 text-black text-left">Eligibility Criteria</p>
          <p className="text-sm text-black mb-4 text-left">
            Interested vendors should:
          </p>
          <ul className="list-disc pl-6 text-sm text-black space-y-2 mb-4 text-left">
            <li>Be a legally registered business in Bhutan.</li>
            <li>Have prior experience in retail, convenience store management, or similar services.</li>
            <li>Demonstrate the capacity to manage inventory, operations, and customer service efficiently.</li>
            <li>Be willing to comply with GCIT rules, regulations, and campus policies.</li>
          </ul>

          <p className="text-lg font-semibold mt-6 mb-3 text-black text-left">Submission Requirements</p>
          <p className="text-sm text-black mb-4 text-left">
            Applicants are requested to submit:
          </p>
          <ul className="list-disc pl-6 text-sm text-black space-y-2 mb-4 text-left">
            <li>A detailed quotation including pricing structure and proposed product list.</li>
            <li>Business profile and experience background.</li>
            <li>Operational plan, including staffing and store management approach.</li>
            <li>Any additional services or value-added proposals beneficial to the GCIT community.</li>
          </ul>

          <p className="text-lg font-semibold mt-6 mb-3 text-black text-left">Submission Deadline</p>
          <p className="text-sm text-black mb-4 text-left">
            All quotations must be submitted to the GCIT Administration Office by the specified deadline. Late submissions will not be considered.
          </p>

          <p className="text-lg font-semibold mt-6 mb-3 text-black text-left">Evaluation & Selection</p>
          <p className="text-sm text-black mb-4 text-left">
            GCIT will evaluate proposals based on pricing, product variety, service quality, business experience, and the overall value offered to the campus community. Only shortlisted vendors may be contacted for further discussions or site visits.
          </p>
        </>
      ),
    },
    "convenience-store": {
      title: "Quotation For Convenience Store",
      content: (
        <>
          <p className="text-sm text-black mb-4 text-left">
            We are pleased to extend an invitation to your esteemed business entity to submit a quotation for establishing and operating a convenience store at our college, Gyalpozhing College of Information Technology (GCIT).
          </p>
          <p className="text-sm text-black mb-4 text-left">
            The convenience store will serve our growing student and staff community by providing essential daily-use items, stationery, snacks, beverages, and other basic necessities. The selected vendor will play an important role in enhancing campus life by ensuring easy access to affordable and quality products.
          </p>

          <p className="text-lg font-semibold mt-6 mb-3 text-black text-left">Scope of Service</p>
          <p className="text-sm text-black mb-4 text-left">
            The proposed convenience store should aim to:
          </p>
          <ul className="list-disc pl-6 text-sm text-black space-y-2 mb-4 text-left">
            <li>Offer a wide range of essential goods suitable for students, faculty, and staff.</li>
            <li>Maintain consistent product availability and reasonable pricing.</li>
            <li>Provide clean, organised, and customer-friendly service.</li>
            <li>Operate during hours aligned with campus schedules and student needs.</li>
            <li>Ensure proper hygiene, safety, and waste management practices.</li>
          </ul>

          <p className="text-lg font-semibold mt-6 mb-3 text-black text-left">Eligibility Criteria</p>
          <p className="text-sm text-black mb-4 text-left">
            Interested vendors should:
          </p>
          <ul className="list-disc pl-6 text-sm text-black space-y-2 mb-4 text-left">
            <li>Be a legally registered business in Bhutan.</li>
            <li>Have prior experience in retail, convenience store management, or similar services.</li>
            <li>Demonstrate the capacity to manage inventory, operations, and customer service efficiently.</li>
            <li>Be willing to comply with GCIT rules, regulations, and campus policies.</li>
          </ul>

          <p className="text-lg font-semibold mt-6 mb-3 text-black text-left">Submission Requirements</p>
          <p className="text-sm text-black mb-4 text-left">
            Applicants are requested to submit:
          </p>
          <ul className="list-disc pl-6 text-sm text-black space-y-2 mb-4 text-left">
            <li>A detailed quotation including pricing structure and proposed product list.</li>
            <li>Business profile and experience background.</li>
            <li>Operational plan, including staffing and store management approach.</li>
            <li>Any additional services or value-added proposals beneficial to the GCIT community.</li>
          </ul>

          <p className="text-lg font-semibold mt-6 mb-3 text-black text-left">Submission Deadline</p>
          <p className="text-sm text-black mb-4 text-left">
            All quotations must be submitted to the GCIT Administration Office by the specified deadline. Late submissions will not be considered.
          </p>

          <p className="text-lg font-semibold mt-6 mb-3 text-black text-left">Evaluation & Selection</p>
          <p className="text-sm text-black mb-4 text-left">
            GCIT will evaluate proposals based on pricing, product variety, service quality, business experience, and the overall value offered to the campus community. Only shortlisted vendors may be contacted for further discussions or site visits.
          </p>
        </>
      ),
    },
    "notice-tender-1": {
      title: "Notice Inviting Tender",
      content: (
        <>
          <p className="text-sm text-black mb-4 text-left">
            NOTICE INVITING TENDER: Gyalpozhing College of Information Technology, Royal University of Bhutan, Mongar invites sealed bids from the interested eligible bidders for the "Operation of College Canteen".
          </p>
          <p className="text-sm text-black mb-4 text-left">
            Operation of College Canteen Nu. 500 (non-refundable) Sale of tender documents 26th July 2021 to 10th August 2021 from AFD, GCIT.
          </p>

          <p className="text-lg font-semibold mt-6 mb-3 text-black text-left">Scope of Service</p>
          <p className="text-sm text-black mb-4 text-left">
            The selected canteen operator will be responsible for:
          </p>
          <ul className="list-disc pl-6 text-sm text-black space-y-2 mb-4 text-left">
            <li>Providing quality food and beverage services to students and staff.</li>
            <li>Maintaining hygiene and cleanliness standards.</li>
            <li>Ensuring affordable pricing for all items.</li>
            <li>Operating during college hours as specified.</li>
            <li>Complying with food safety regulations.</li>
          </ul>

          <p className="text-lg font-semibold mt-6 mb-3 text-black text-left">Eligibility Criteria</p>
          <p className="text-sm text-black mb-4 text-left">
            Interested bidders should:
          </p>
          <ul className="list-disc pl-6 text-sm text-black space-y-2 mb-4 text-left">
            <li>Be a legally registered business in Bhutan.</li>
            <li>Have prior experience in canteen or food service management.</li>
            <li>Demonstrate capacity to handle food preparation and service.</li>
            <li>Comply with GCIT rules and regulations.</li>
          </ul>

          <p className="text-lg font-semibold mt-6 mb-3 text-black text-left">Submission Requirements</p>
          <p className="text-sm text-black mb-4 text-left">
            Interested bidders may purchase tender documents from AFD, GCIT by paying Nu. 500 (non-refundable). Completed bids must be submitted before the deadline.
          </p>

          <p className="text-lg font-semibold mt-6 mb-3 text-black text-left">Important Dates</p>
          <ul className="list-disc pl-6 text-sm text-black space-y-2 mb-4 text-left">
            <li>Sale of tender documents: 26th July 2021 to 10th August 2021</li>
            <li>Submission deadline: As specified in tender document</li>
          </ul>

          <p className="text-lg font-semibold mt-6 mb-3 text-black text-left">Evaluation & Selection</p>
          <p className="text-sm text-black mb-4 text-left">
            GCIT will evaluate proposals based on experience, pricing, service quality, and overall value. Only shortlisted bidders may be contacted for further discussions.
          </p>
        </>
      ),
    },
  };

  const currentTender = tenderData[id] || tenderData["invitation-quotation"];

  return (
    <div className="w-full bg-[#F2F5F5]">
      <Navbar overlay />

      <PageBanner
        title="TENDER DETAILS"
        subtitle="Comprehensive information about tender opportunities at GCIT"
        image={tenderdetailsbanner}
      />

      <div className="mx-auto w-[85%]">
        <div className="pt-24 pb-16">
          <FadeInLeft>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center font-['Roboto_Slab']">
              {currentTender.title}
            </h3>
          </FadeInLeft>
          <FadeInRight>
            <div className="text-left">
              {currentTender.content}
            </div>
          </FadeInRight>
        </div>
      </div>

      <Footer />
    </div>
  );
}