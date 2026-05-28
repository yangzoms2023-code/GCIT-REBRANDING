import React, { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

import bishalImg from "../../assets/images/fin1.png";
import dorjiImg from "../../assets/images/fin2.png";
import nimaImg from "../../assets/images/fin3.png";

import financebanner from "../../assets/financebanner.png"

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

export default function Finance() {
  return (
    <div className="w-full bg-[#F2F5F5]">
      <Navbar overlay/>

      <PageBanner
        title="FINANCE"
        subtitle="Empowering GCIT through transparent and accountable financial management"
        image={financebanner}
      />

      <div className="mx-auto w-[90%] md:w-[85%] py-24 text-left">
        <FadeInLeft>
          <h3 className="text-2xl font-bold mb-8 text-black font-['Roboto_Slab']">
            Finance
          </h3>
        </FadeInLeft>

        <FadeInRight>
          <p className="text-gray-600 text-[15px] leading-relaxed w-full">
            The Finance Department at GCIT is responsible for managing the institute's financial
            operations with transparency, accuracy, and accountability. The team ensures smooth
            budgeting, payroll, procurement, and financial reporting processes while supporting the
            college's strategic and academic goals. By maintaining sound financial management, the
            department plays a key role in sustaining GCIT's growth and operational excellence.
          </p>
        </FadeInRight>

        <FadeInLeft>
          <h3 className="text-2xl font-semibold mt-16 mb-10 text-black font-['Roboto_Slab']">
            Core Team
          </h3>
        </FadeInLeft>

        <div className="flex flex-wrap gap-8 justify-center">
          <FadeInLeft delay={100}>
            <div className="bg-white rounded-xl shadow-md p-8 w-52 text-center flex flex-col">
              <img
                src={bishalImg}
                alt="Bishal Limbu"
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-medium text-base">Bishal Limbu</h4>
              <p className="text-sm text-gray-500">Finance Officer</p>
            </div>
          </FadeInLeft>

          <FadeInRight delay={200}>
            <div className="bg-white rounded-xl shadow-md p-8 w-52 text-center flex flex-col">
              <img
                src={dorjiImg}
                alt="Dorji Phuntsho"
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-medium text-base">Dorji Phuntsho</h4>
              <p className="text-sm text-gray-500">Finance Officer</p>
            </div>
          </FadeInRight>

          <FadeInLeft delay={300}>
            <div className="bg-white rounded-xl shadow-md p-8 w-52 text-center flex flex-col">
              <img
                src={nimaImg}
                alt="Nima Gyeltshen"
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-medium text-base">Nima Gyeltshen</h4>
              <p className="text-sm text-gray-500">Finance Assistant</p>
            </div>
          </FadeInLeft>
        </div>

        <div className="relative my-16 flex justify-center">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent w-3/4"></div>
        </div>

        <FadeInRight>
          <div className="bg-white rounded-xl shadow-md p-16">
            <p className="text-[15px] text-gray-700 mb-4 pb-8">
              The Finance Department is responsible for the effective financial and budget management
              of the college.
            </p>

            <p className="text-[15px] text-gray-700 mb-4">
              The department provides support and guidance in the following key activities:
            </p>

            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-3">
              <li>Delivery of management reporting for effective college activities.</li>
              <li>Statutory financial and fiscal reporting.</li>
              <li>
                Stewardship over the college's financial resources to maintain and manage strategic
                growth.
              </li>
              <li>
                Process daily transactions related to income, expenditure, capital projects and
                financing.
              </li>
              <li>
                Governance and ensuring proper internal controls in implementing financial policies
                from Royal University of Bhutan.
              </li>
              <li>
                Ensure compliance with international financial reporting standards for Education
                Institutions.
              </li>
              <li>Custodian of procurement process compliance for monetary efficiency.</li>
            </ul>
          </div>
        </FadeInRight>
      </div>

      <Footer />
    </div>
  );
}