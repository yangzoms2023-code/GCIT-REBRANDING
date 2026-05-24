import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import contactbanner from "../assets/contactbanner.png";

export default function Contact() {
  return (
    <div className="">
      <div className="relative">
        <Navbar overlay />
        <PageBanner title="CONTACT" image={contactbanner} />
      </div>
      <main className="mx-auto min-h-[30vh] max-w-[90%] px-4 py-16 md:px-6">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
