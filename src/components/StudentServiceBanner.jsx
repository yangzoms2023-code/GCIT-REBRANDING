import heroImg from "../assets/images/college.png";
import ScrollDownIndicator from "./ScrollDownIndicator";

export default function StudentServiceBanner({ title, subtitle, image, fade = false }) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img src={image || heroImg} alt="" className="h-full w-full object-cover object-center" draggable={false} />
        <div className="absolute inset-0 bg-black/50" />
        {fade && <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />}
      </div>

      <div className="relative mx-auto flex h-full w-full max-w-[90%] flex-col items-start justify-end px-4 pb-20 md:px-6 md:pb-24">
        <h1 className="!text-[52px] font-extrabold uppercase tracking-wide !text-white md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="font-open-sans mt-2 text-left !text-[20px] font-semibold uppercase tracking-wide !text-white md:!text-[20px]">
            {subtitle}
          </p>
        )}
      </div>

      <ScrollDownIndicator />
    </section>
  );
}
