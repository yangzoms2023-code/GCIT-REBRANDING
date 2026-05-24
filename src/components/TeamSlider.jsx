import { useState, useEffect } from "react";

export default function TeamSlider({ team }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % team.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? team.length - 1 : prev - 1
    );
  };

  return (
    <div className="flex items-center gap-4 mt-4">
      <button
        onClick={prevSlide}
        className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center"
      >
        ‹
      </button>

      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / cardsToShow
            }%)`,
          }}
        >
          {team.map((member, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-3"
              style={{ width: `${100 / cardsToShow}%` }}
            >
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover bg-gray-200"
                />
                <h4 className="text-sm font-medium text-black">
                  {member.name}
                </h4>
                <p className="text-xs text-black">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center"
      >
        ›
      </button>
    </div>
  );
}