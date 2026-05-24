import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import ictservicebanner from "../../assets/ictservicebanner.png";
import ict01 from "../../assets/images/ict01.png";
import ict02 from "../../assets/images/ict02.png";
import ict03 from "../../assets/images/ict03.png";

const services = [
  {
    title: "Internet",
    description:
      "As the academic programme at the GCIT focuses on IT, the campus is equipped with an optical fiber backbone and WiFi connection. The IT infrastructure includes servers for centrally hosted services, network-accessed shared storage, and a Virtual Learning Environment (VLE). The college maintains a 58 Mbps internet connection via a fiber backbone, and all the specified equipment supports external connectivity to the National Research and Education Network (DrukREN), which enhances accessibility and supports research.",
    image: ict01,
    imageRight: true,
  },
  {
    title: "ICT Labs",
    description:
      "The Gyalpozhing College of Information Technology provides two fully-equipped computer labs with projectors, furniture, computers, and internet connections. The labs are used during scheduled classes as well as open hours, and come equipped with standard office productivity software.",
    image: ict02,
    imageRight: false,
  },
  {
    title: "Maintenance & Support",
    description:
      "Students will be provided with access to necessary technological resources and support. These services may include troubleshooting technical issues with computers and printers. ICT services may also provide guidance and training to students on how to use various software and hardware tools effectively. This ensures students have a positive learning experience and can focus on their studies without worrying about technology issues.",
    image: ict03,
    imageRight: true,
  },
];

export default function Ict() {
  return (
    <div className="bg-[#F2F5F5]">
      <Navbar overlay />
      <PageBanner title="ICT SERVICES" subtitle="Empowering learning through technology." image={ictservicebanner} />

      <main className="mx-auto max-w-[90%] px-4 py-14 bg-[#F2F5F5]">
        <motion.h2
          className="!text-[32px] text-left !font-bold !font-black text-black"
          initial={{ opacity: 0, x: -55 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          ICT Services
        </motion.h2>
        <motion.p
          className="!mt-5 text-[17px] text-left leading-relaxed text-gray-600"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        >
          GCIT's ICT Services provide a robust and reliable digital environment that supports teaching, learning, and research. With high-speed internet, modern computer labs, and
          dedicated technical support, we ensure students and staff have the tools they need to innovate and excel.
        </motion.p>

        <div className="mt-10 space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="px-20 py-20 flex flex-col justify-between gap-8 rounded-2xl bg-white shadow-[0_0_20px_rgba(0,0,0,0.10)] md:flex-row md:items-center"
              initial={{ opacity: 0, x: service.imageRight ? 70 : -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.75, ease: "easeOut", delay: index * 0.1 }}
            >
              {!service.imageRight && (
                <div className="shrink-0 md:w-56">
                  <img src={service.image} alt={service.title} className="h-44 w-full rounded-xl object-cover" />
                </div>
              )}
              <div className="md:w-[60%]">
                <h3 className="!text-[25px] text-left !font-bold !text-black">{service.title}</h3>
                <p className="!mt-3 !text-[17px] text-left !leading-relaxed !text-gray-600">{service.description}</p>
              </div>
              {service.imageRight && (
                <div className="shrink-0 md:w-56">
                  <img src={service.image} alt={service.title} className="h-44 w-full rounded-xl object-cover" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
