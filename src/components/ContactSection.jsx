import collegeImg from "../assets/images/college.png";

export default function ContactSection() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="mx-auto max-w-[90%] px-4 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">

          {/* Left — info card */}
          <div className="relative overflow-hidden rounded-2xl">
            <img src={collegeImg} alt="GCIT campus" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/65" />
            <div className="relative p-8 text-left text-white">
              <h2 className="mb-6 text-xl font-extrabold uppercase tracking-wide !text-white">
                Get In Touch With Us
              </h2>

              <div className="mb-5">
                <p className="mb-1 font-bold">Office Address</p>
                <p className="text-sm leading-relaxed text-white/80">
                  Gyalpozhing College of Information Technology<br />
                  Royal University of Bhutan<br />
                  PO-11007, Chamjekha, Thimphu, Bhutan
                </p>
              </div>

              <div className="mb-5">
                <p className="mb-1 font-bold">Call Us</p>
                <p className="text-sm text-white/80">ADM</p>
                <p className="text-sm text-white/80">Tel: +9752361194</p>
              </div>

              <div className="mb-5">
                <p className="mb-1 font-bold">Finance</p>
                <p className="text-sm text-white/80">Tel: 02-361195</p>
              </div>

              <div>
                <p className="mb-1 font-bold">Message Us</p>
                <p className="text-sm text-white/80">Email: info.gcit@rub.edu.bt</p>
                <p className="text-sm text-white/80">Web Admins: ict.gcit@rub.edu.bt</p>
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="flex flex-col justify-center">
            <h3 className="mb-8 text-2xl font-extrabold uppercase tracking-wide text-black md:text-3xl">
              We Would Love To Hear From You
            </h3>

            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-[8px] border border-gray-200 bg-white px-5 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-[#f48b1a] focus:ring-2 focus:ring-[#f48b1a]/20"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-[8px] border border-gray-200 bg-white px-5 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-[#f48b1a] focus:ring-2 focus:ring-[#f48b1a]/20"
              />
              <textarea
                placeholder="Message"
                rows={7}
                className="w-full resize-none rounded-[8px] border border-gray-200 bg-white px-5 py-4 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-[#f48b1a] focus:ring-2 focus:ring-[#f48b1a]/20"
              />
              <button
                type="submit"
                className="w-full rounded-[8px] bg-[#f48b1a] py-2 text-sm font-semibold text-white transition-colors hover:bg-[#ff9b39]"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
