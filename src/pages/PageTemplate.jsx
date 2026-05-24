import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PageTemplate({ title, section }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="bg-[#3d3d3f] py-14">
          <div className="mx-auto max-w-[90%] px-4">
            {section && <p className="mb-1 text-sm font-medium text-[#f48b1a]">{section}</p>}
            <h1 className="text-3xl font-bold text-white">{title}</h1>
          </div>
        </div>
        <div className="mx-auto max-w-[90%] px-4 py-16">
          <p className="text-gray-400">Content coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
