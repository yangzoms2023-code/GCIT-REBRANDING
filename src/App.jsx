import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

import Home from "./pages/Home";
import Contact from "./pages/Contact";

import Gcit from "./pages/about/Gcit";
import ProjectsShowcase from "./pages/about/ProjectsShowcase";
import Bict from "./pages/about/Bict";
import Ceta from "./pages/about/Ceta";
import Spark from "./pages/about/Spark";

import AiDataScience from "./pages/courses/AiDataScience";
import FullStack from "./pages/courses/FullStack";
import InteractiveDesign from "./pages/courses/InteractiveDesign";
import Blockchain from "./pages/courses/Blockchain";
import Cybersecurity from "./pages/courses/Cybersecurity";

import Finance from "./pages/non-academic/Finance";
import HumanResource from "./pages/non-academic/HumanResource";
import NonAcademicIct from "./pages/non-academic/Ict";
import SchoolAffairs from "./pages/non-academic/SchoolAffairs";
import StudentAffairs from "./pages/non-academic/StudentAffairs";

import Clubs from "./pages/student-services/Clubs";
import StudentServicesIct from "./pages/student-services/Ict";
import Library from "./pages/student-services/Library";
import StudentWelfare from "./pages/student-services/StudentWelfare";
import StudentHandbook from "./pages/student-services/StudentHandbook";

import NewsEvents from "./pages/announcement/NewsEvents";
import NewsEventsDetails from "./pages/announcement/NewsEventsDetails";

import Vacancies from "./pages/announcement/Vacancies";
import VacancyDetails from "./pages/announcement/VacancyDetails";

import Tenders from "./pages/announcement/Tenders";
import TenderDetails from "./pages/announcement/TenderDetails";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about/gcit" element={<Gcit />} />
        <Route path="/about/projects-showcase" element={<ProjectsShowcase />} />
        <Route path="/about/bict" element={<Bict />} />
        <Route path="/about/ceta" element={<Ceta />} />
        <Route path="/about/spark" element={<Spark />} />

        <Route path="/courses/ai-data-science" element={<AiDataScience />} />
        <Route path="/courses/full-stack" element={<FullStack />} />
        <Route path="/courses/interactive-design" element={<InteractiveDesign />} />
        <Route path="/courses/blockchain" element={<Blockchain />} />
        <Route path="/courses/cybersecurity" element={<Cybersecurity />} />

        <Route path="/non-academic/finance" element={<Finance />} />
        <Route path="/non-academic/human-resource-administration" element={<HumanResource />} />
        <Route path="/non-academic/information-communication-technology" element={<NonAcademicIct />} />
        <Route path="/non-academic/school-affairs" element={<SchoolAffairs />} />
        <Route path="/non-academic/student-affairs" element={<StudentAffairs />} />

        <Route path="/student-services/clubs" element={<Clubs />} />
        <Route path="/student-services/ict" element={<StudentServicesIct />} />
        <Route path="/student-services/library" element={<Library />} />
        <Route path="/student-services/student-welfare" element={<StudentWelfare />} />
        <Route path="/student-services/student-handbook" element={<StudentHandbook />} />

        <Route path="/announcement/news-events" element={<NewsEvents />} />
        <Route path="/news/:id" element={<NewsEventsDetails />} />

        <Route path="/announcement/vacancies" element={<Vacancies />} />
        <Route path="/vacancy/:id" element={<VacancyDetails />} />

        <Route path="/announcement/tenders" element={<Tenders />} />
        <Route path="/tender/:id" element={<TenderDetails />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
