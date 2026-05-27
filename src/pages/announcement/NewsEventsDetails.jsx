import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import ne1 from "../../assets/images/ne1.png";
import ne2 from "../../assets/images/ne2.png";
import l1 from "../../assets/images/l1.png";
import l2 from "../../assets/images/l2.png";
import l3 from "../../assets/images/l3.png";
import l4 from "../../assets/images/l4.png";
import l5 from "../../assets/images/l5.png";

const FadeInUp = ({ children, delay = 0 }) => {
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
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      ref={domRef}
    >
      {children}
    </div>
  );
};

// Share Button Component
const ShareButtons = ({ title }) => {
  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out: ${title}`;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    };
    
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-500">Share:</span>
      <button
        onClick={() => handleShare('facebook')}
        className="p-2 bg-gray-100 hover:bg-[#1877f2] rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Share on Facebook"
      >
        <svg className="w-4 h-4 text-gray-600 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
        </svg>
      </button>
      <button
        onClick={() => handleShare('twitter')}
        className="p-2 bg-gray-100 hover:bg-[#1da1f2] rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Share on Twitter"
      >
        <svg className="w-4 h-4 text-gray-600 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.68-1.42 2.3-2.33z"/>
        </svg>
      </button>
      <button
        onClick={() => handleShare('linkedin')}
        className="p-2 bg-gray-100 hover:bg-[#0077b5] rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Share on LinkedIn"
      >
        <svg className="w-4 h-4 text-gray-600 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.98 0 1.778-.773 1.778-1.729V1.729C24 .774 23.203 0 22.225 0z"/>
        </svg>
      </button>
    </div>
  );
};

// Related News Card
const RelatedNewsCard = ({ title, image, date, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-xs text-[#f48b1a] font-semibold mb-2">{date}</p>
        <h4 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-[#f48b1a] transition-colors">
          {title}
        </h4>
      </div>
    </div>
  );
};

// Image Card Component for Gallery
const ImageCard = ({ src, alt, caption }) => {
  return (
    <div className="group">
      <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-md">
        <img 
          src={src} 
          alt={alt}
          className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      {caption && (
        <p className="text-sm text-gray-500 text-center mt-3 italic">
          {caption}
        </p>
      )}
    </div>
  );
};

// Main News Article Body Component
const NewsArticleBody = ({ headline, date, content, images }) => {
  return (
    <article className="max-w-3xl mx-auto">
      {/* Headline */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
        {headline}
      </h1>
      
      {/* Date & Metadata */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-12 pb-6 border-b border-gray-200">
        <div className="flex items-center gap-2 text-gray-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="text-sm">{date}</span>
        </div>
        <ShareButtons title={headline} />
      </div>

      {/* Content */}
      <div className="prose prose-lg prose-gray max-w-none">
        <p className="text-lg leading-relaxed text-gray-700 first-letter:text-5xl first-letter:font-bold first-letter:text-[#f48b1a] first-letter:mr-3 first-letter:float-left">
          {content}
        </p>
      </div>

      {/* Image Gallery with Cards */}
      {images && images.length > 0 && (
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#f48b1a] rounded-full"></span>
            Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <ImageCard 
                key={idx}
                src={img.src}
                alt={img.alt}
                caption={img.caption}
              />
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default function NewsEventsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const newsData = {
    "young-innovators": {
      title: "Young Innovators at GCIT create 40+ Projects using AI & Blockchain",
      date: "January 15, 2025",
      category: "Student Innovation",
      heroImage: ne1,
      content: `GCIT students developed over 40 technology projects aimed at solving everyday problems. These include systems for land records, voting, fish farm monitoring, flight booking, and more. Many are aimed at supporting Bhutan's digital transformation journey. The annual Capstone Showcase brought together industry experts, government officials, and technology leaders who witnessed the innovative solutions created by our young talents.`,
      images: [
        { src: ne1, alt: "GCIT Project Showcase Main", caption: "Students presenting their blockchain solution at the Capstone Showcase" },
        { src: l1, alt: "Blockchain Project Demo", caption: "Live demonstration of the blockchain-based voting system" },
        { src: l2, alt: "AI Project Presentation", caption: "AI-powered agricultural monitoring system in action" }
      ],
    },
    "admissions-open": {
      title: "Admissions Open for GCIT (2025 Intake)",
      date: "March 1, 2025",
      category: "Announcement",
      heroImage: ne2,
      content: `GCIT has opened admissions for the 2025 academic year. We invite Class 12 graduates to pursue the Bachelor of Computer Science or Bachelor of Interactive Design & Development programmes. Join a global institution situated within the Himalayas in Bhutan, where autonomous learning, smart pedagogies along with experiential knowledge are the norm. The deadline for applications is June 30, 2025.`,
      images: [
        { src: ne2, alt: "GCIT Campus", caption: "Main campus building with stunning Himalayan backdrop" },
        { src: l3, alt: "Students in Lab", caption: "Students working in our state-of-the-art computer labs" },
        { src: l4, alt: "GCIT Library", caption: "Modern library facilities with extensive resources" }
      ],
    },
    "zhingscan": {
      title: "GCIT Students Develop 'ZhingScan' App to Help Farmers",
      date: "February 20, 2025",
      category: "Student Innovation",
      heroImage: l1,
      content: `GCIT students have developed 'ZhingScan', a mobile application that helps farmers detect plant pests and diseases by simply taking photos of their crops. The app uses artificial intelligence to analyze images and suggest treatments for crops including rice, maize, and vegetables. This innovation supports Bhutan's agricultural sector by providing farmers with accessible, real-time diagnostic tools.`,
      images: [
        { src: l1, alt: "ZhingScan App Demo", caption: "App interface showing pest detection and diagnosis" },
        { src: l2, alt: "Farmers Testing App", caption: "Local farmers testing the application in the field" },
        { src: l3, alt: "Crop Analysis", caption: "AI analyzing crop health in real-time" }
      ],
    },
    "cybersecurity": {
      title: "Cybersecurity Awareness Month & Upcoming Symposium with GCIT",
      date: "October 1, 2025",
      category: "Event",
      heroImage: l2,
      content: `GCIT partners with global cybersecurity experts to host Cybersecurity Awareness Month 2025 with workshops, expert talks, and activities throughout October. The event will culminate in a two-day symposium featuring industry leaders, hands-on workshops, and networking opportunities for students and professionals.`,
      images: [
        { src: l2, alt: "Cybersecurity Event", caption: "Opening ceremony of Cybersecurity Awareness Month" },
        { src: l3, alt: "Workshop", caption: "Hands-on cybersecurity workshop for students" },
        { src: l4, alt: "Experts Speaking", caption: "Industry expert panel discussion on emerging threats" }
      ],
    },
    "fintech": {
      title: "BIL × GCIT Fintech Innovation Lab Launched",
      date: "November 15, 2025",
      category: "Partnership",
      heroImage: l3,
      content: `GCIT has launched a Fintech Innovation Lab in partnership with Bhutan Insurance Limited (BIL). The lab aims to bridge technology and finance, empowering Bhutan's digital future through developing innovative financial technology solutions, conducting research, and training fintech professionals.`,
      images: [
        { src: l3, alt: "Fintech Lab Launch", caption: "Official launch ceremony with dignitaries" },
        { src: l4, alt: "Partnership Signing", caption: "Signing of the partnership agreement between GCIT and BIL" },
        { src: l5, alt: "Lab Facility", caption: "State-of-the-art fintech lab equipped with modern tools" }
      ],
    },
    "ai-startup": {
      title: "Bhutan's First AI Startup Founded by GCIT Students",
      date: "December 10, 2025",
      category: "Student Achievement",
      heroImage: l4,
      content: `Seven students from GCIT have launched 'NoMindBhutan', the country's first AI startup focused on developing AI chatbots and other AI tools for local businesses. The startup aims to accelerate Bhutan's digital transformation journey by making artificial intelligence accessible and practical for everyday use.`,
      images: [
        { src: l4, alt: "AI Startup Team", caption: "The founding team of NoMindBhutan celebrating their launch" },
        { src: l5, alt: "Demo Day", caption: "Presenting their AI solutions at Demo Day" },
        { src: ne1, alt: "AI Tools", caption: "AI chatbot demonstration for local business owners" }
      ],
    },
    "royal-visit": {
      title: "Royal Visit Highlights GCIT's Tech Innovation Showcase",
      date: "June 18, 2025",
      category: "Royal Event",
      heroImage: l5,
      content: `Their Majesties and Their Royal Highnesses graced GCIT's Capstone Tech Innovation Showcase, highlighting the college's commitment to fostering innovation and excellence in technology education. The royal visit celebrated groundbreaking projects, student presentations, and technology demonstrations that showcase Bhutan's bright technological future.`,
      images: [
        { src: l5, alt: "Royal Visit Main", caption: "Their Majesties arriving at GCIT for the showcase" },
        { src: ne1, alt: "Royal Procession", caption: "Tour of the innovation showcase with student presenters" },
        { src: ne2, alt: "Students with Royals", caption: "Students presenting their projects to Their Majesties" }
      ],
    },
  };

  const currentNews = newsData[id] || newsData["young-innovators"];
  const allNews = Object.values(newsData);
  const relatedNews = allNews.filter(news => news !== currentNews).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navbar overlay={false} />

      {/* Hero Banner - Clean, no fixed/parallax, white text */}
      <div className="relative w-full">
        <img 
          src={currentNews.heroImage}
          alt={currentNews.title}
          className="w-full !h-[100vh] md:h-[60vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <FadeInUp delay={200}>
              <h1 className="roboto-slab-banner !text-white leading-[1.05] tracking-normal !text-[35px] sm:text-[22px] md:text-[28px]">
                {currentNews.title}
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={400}>
              <div className="flex items-center justify-center gap-6 text-white/90 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>{currentNews.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
                  </svg>
                  <span>5 min read</span>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>

      {/* Main Content - No outer card */}
      <div className="mx-auto w-[90%] max-w-6xl py-12 md:py-16">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/announcement/news-events')}
            className="group flex items-center gap-2 text-gray-600 hover:text-[#f48b1a] font-semibold transition-all duration-300"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to News
          </button>
        </div>

        {/* Article Content - No card wrapper */}
        <NewsArticleBody 
          headline={currentNews.title}
          date={currentNews.date}
          content={currentNews.content}
          images={currentNews.images}
        />

        {/* Related News Section */}
        {relatedNews.length > 0 && (
          <div className="mt-20 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Related Stories</h2>
              <button 
                onClick={() => navigate('/announcement/news-events')}
                className="text-[#f48b1a] hover:text-[#e07a0f] font-semibold text-sm flex items-center gap-1 transition-colors"
              >
                View All
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedNews.map((news, index) => (
                <FadeInUp key={index} delay={index * 100}>
                  <RelatedNewsCard
                    title={news.title}
                    image={news.heroImage}
                    date={news.date}
                    onClick={() => {
                      const slug = Object.keys(newsData).find(key => newsData[key] === news);
                      navigate(`/news/${slug}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />
                </FadeInUp>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}