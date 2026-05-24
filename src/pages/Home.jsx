import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import AboutSection from "../components/AboutSection";
import CoursesSection from "../components/CoursesSection";
import StatsSection from "../components/StatsSection";
import PresidentMessage from "../components/PresidentMessage";
import NewsSection from "../components/NewsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar overlay />
        <Banner />
      </div>
      <AboutSection />
      <CoursesSection />
      <StatsSection />
      <PresidentMessage />
      <NewsSection />
      <Footer />
    </>
  );
}
