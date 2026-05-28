import { useState, useEffect } from "react";
import student1 from "../assets/images/student1.png";
import student2 from "../assets/images/student2.png";
import student3 from "../assets/images/student3.png";
import student4 from "../assets/images/student4.png";
import student5 from "../assets/images/gt2.png";

const lecturers = [
  {
    name: "Sonam Dorji",
    role: "Lecturer, School of Computing",
    bio: "Mr. Sonam Dorji is a specialist in mobile application development and user experience design. He has over eight years of experience in both industry and academia, having developed numerous successful mobile applications for local and international clients. He holds a Master's degree in Human-Computer Interaction from the University of Melbourne and is passionate about creating intuitive digital experiences. His teaching methodology emphasizes hands-on coding, design thinking, and agile development practices.",
    img: student5,
  },
  {
    name: "Jigme Dema",
    role: "Lecturer, School of Computing",
    bio: "Ms. Jigme Dema leads the AI & Data Science specialization at GCIT, teaching modules in machine learning, data analytics and artificial intelligence. She holds a Master of Science in Information Technology from the International Institute of Information Technology, Hyderabad (IIIT Hyderabad) and brings five years of professional and academic experience. Her teaching is grounded in practical, project-based learning and she guides students to apply AI methods to real-world problems.",
    img: student3,
  },
  {
    name: "Howard Yap",
    role: "Lecturer, School of Computing",
    bio: "Mr. Howard Yap specializes in software engineering and web development. He brings industry experience from leading tech firms and is passionate about bridging the gap between academic theory and real-world software practices. He holds a Master's degree in Computer Science and has been teaching for over seven years.",
    img: student1,
  },
  {
    name: "Yeshi Tshering",
    role: "Lecturer, School of Computing",
    bio: "Mr. Yeshi Tshering is an expert in networking and cybersecurity. He has worked extensively with government and private sector organizations on digital infrastructure projects. He holds certifications in network security and is committed to fostering a security-first mindset among his students.",
    img: student2,
  },
  {
    name: "Pema Yangden",
    role: "Lecturer, School of Computing",
    bio: "Ms. Pema Yangden teaches courses in database systems and cloud computing. She completed her postgraduate studies in Information Systems and has hands-on experience in enterprise software deployment. Her approach integrates case studies and collaborative problem-solving to prepare students for modern IT environments.",
    img: student4,
  },
];

export default function LecturerSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [selected, setSelected] = useState(0);
  
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 480) return 1;
      if (window.innerWidth < 640) return 2;
      if (window.innerWidth < 768) return 2;
      if (window.innerWidth < 1024) return 3;
      return 4;
    }
    return 4;
  };
  
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
      setStartIndex(0);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const circularLecturers = [...lecturers, ...lecturers];
  const visible = circularLecturers.slice(startIndex, startIndex + visibleCount);
  const totalItems = lecturers.length;
  const maxStartIndex = totalItems - visibleCount;

  const nextSlide = () => {
    setStartIndex((prev) => {
      let newIndex = prev + 1;
      if (newIndex > maxStartIndex) {
        newIndex = 0;
      }
      return newIndex;
    });
    setSelected((prev) => (prev + 1) % totalItems);
  };

  const prevSlide = () => {
    setStartIndex((prev) => {
      let newIndex = prev - 1;
      if (newIndex < 0) {
        newIndex = maxStartIndex;
      }
      return newIndex;
    });
    setSelected((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const current = lecturers[selected];

  const getActualIndex = (displayIndex) => {
    return (startIndex + displayIndex) % totalItems;
  };

  const getImageSize = (isActive) => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 480) {
        return isActive ? 'w-20 h-20' : 'w-16 h-16';
      }
      if (width < 640) {
        return isActive ? 'w-24 h-24' : 'w-20 h-20';
      }
      if (width < 768) {
        return isActive ? 'w-28 h-28' : 'w-24 h-24';
      }
      if (width < 1024) {
        return isActive ? 'w-32 h-32' : 'w-28 h-28';
      }
      return isActive ? 'w-40 h-40' : 'w-36 h-36';
    }
    return isActive ? 'w-40 h-40' : 'w-36 h-36';
  };

  return (
    <div className="bg-[#F2F5F5] py-8 md:py-12 font-sans">
      <div className="w-[90%] md:w-[85%] mx-auto">
        <h3 className="text-2xl md:text-3xl font-semibold text-left mb-6 md:mb-8 text-black font-['Roboto_Slab']">
          Our Lecturers
        </h3>

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md mb-8">
          <div className="flex items-center justify-between gap-4 md:gap-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-[#f48b1a] hover:bg-[#e07a0f] transition-all text-white flex items-center justify-center shadow-md shrink-0"
              aria-label="Previous"
            >
              <span className="text-4xl font-bold block leading-none -mt-1">‹</span>
            </button>

            <div className="flex-1 flex gap-4 md:gap-6 lg:gap-8 justify-center items-end px-4">
              {visible.map((lec, i) => {
                const actualIndex = getActualIndex(i);
                const isActive = actualIndex === selected;
                const imageSize = getImageSize(isActive);
                
                return (
                  <div
                    key={`${actualIndex}-${startIndex}`}
                    onClick={() => setSelected(actualIndex)}
                    className="flex flex-col items-center cursor-pointer transition-all group"
                  >
                    <div
                      className={`transition-all rounded-2xl ${
                        isActive 
                          ? 'p-2 md:p-3 bg-white shadow-lg border-2 border-[#f48b1a]' 
                          : 'border-2 border-transparent group-hover:border-gray-300'
                      }`}
                    >
                      <div
                        className={`rounded-full overflow-hidden transition-all duration-300 ${
                          isActive 
                            ? `border-4 border-[#f48b1a] ${imageSize}` 
                            : `border-4 border-gray-300 ${imageSize} group-hover:border-[#f48b1a] group-hover:scale-105`
                        }`}
                      >
                        <img
                          src={lec.img}
                          alt={lec.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <span
                      className={`mt-3 md:mt-4 text-sm md:text-base transition-all duration-200 text-center ${
                        isActive
                          ? 'font-semibold text-[#f48b1a]'
                          : 'font-normal text-gray-700 group-hover:text-[#f48b1a]'
                      }`}
                    >
                      {lec.name.split(' ')[0]}
                      <span className="hidden sm:inline"> {lec.name.split(' ').slice(1).join(' ')}</span>
                    </span>
                  </div>
                );
              })}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-[#f48b1a] hover:bg-[#e07a0f] transition-all text-white flex items-center justify-center shadow-md shrink-0"
              aria-label="Next"
            >
              <span className="text-4xl font-bold block leading-none -mt-1">›</span>
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {lecturers.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setStartIndex(i);
                  setSelected(i);
                }}
                className={`transition-all rounded-full ${
                  startIndex === i
                    ? 'w-3 h-3 bg-[#f48b1a]'
                    : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="w-3/4 md:w-2/4 h-0.5 mx-auto my-8 md:my-10 bg-gradient-to-r from-transparent via-[#f48b1a] to-transparent rounded-full" />

        {/* Bio section with improved spacing */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          <div className="shrink-0 w-32 h-40 md:w-44 md:h-56 lg:w-52 lg:h-64 rounded-xl overflow-hidden border-4 border-[#f48b1a] shadow-md mx-auto md:mx-0">
            <img
              src={current.img}
              alt={current.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-3">
              {current.name}
            </h3>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-1 h-5 bg-[#f48b1a] rounded-full" />
              <span className="italic text-gray-500 text-sm md:text-base">{current.role}</span>
            </div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
              {current.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}