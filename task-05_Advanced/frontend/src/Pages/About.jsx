import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import AboutHeader from "../components/About/Header";
import StatsSection from "../components/About/Stats";
import StorySection from "../components/About/History";
import TeamSection from "../components/About/Teams";
import CTASection from "../components/About/CTA";
import GetApp from "../components/About/GetApp";
import MissionVision from "../components/About/Mission";

const About = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="relative bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">

      {/* ----------------- CENTERED SVG BACKGROUND ----------------- */}
      {/* Center Main - Light Blue */}
      <div className="absolute top-1/4 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 opacity-8">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-pulse-slow">
          <circle cx="100" cy="100" r="60" fill="#dbeafe" />
        </svg>
      </div>

      {/* Top Center - Light Yellow */}
      <div className="absolute top-1/6 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 opacity-7">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-bounce-slow">
          <circle cx="100" cy="100" r="50" fill="#fef3c7" />
        </svg>
      </div>

      {/* Bottom Center - Light Pink */}
      <div className="absolute bottom-1/4 left-1/2 w-36 h-36 -translate-x-1/2 translate-y-1/2 opacity-7">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-pulse">
          <circle cx="100" cy="100" r="55" fill="#fce7f3" />
        </svg>
      </div>

      {/* Left Center - Light Orange */}
      <div className="absolute top-1/2 left-1/4 w-28 h-28 -translate-x-1/2 -translate-y-1/2 opacity-6">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
          <circle cx="100" cy="100" r="45" fill="#ffedd5" />
        </svg>
      </div>

      

      {/* Top Left Quarter - Light Green */}
      <div className="absolute top-1/3 left-1/3 w-24 h-24 -translate-x-1/2 -translate-y-1/2 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-pulse">
          <circle cx="100" cy="100" r="40" fill="#d1fae5" />
        </svg>
      </div>

      {/* Top Right Quarter - Light Purple */}
      <div className="absolute top-1/3 right-1/3 w-26 h-26 translate-x-1/2 -translate-y-1/2 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
          <circle cx="100" cy="100" r="42" fill="#f3e8ff" />
        </svg>
      </div>

      {/* Bottom Left Quarter - Light Teal */}
      <div className="absolute bottom-1/3 left-1/3 w-22 h-22 -translate-x-1/2 translate-y-1/2 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-pulse-slow">
          <circle cx="100" cy="100" r="38" fill="#ccfbf1" />
        </svg>
      </div>

      {/* Bottom Right Quarter - Light Amber */}
      <div className="absolute bottom-1/3 right-1/3 w-20 h-20 translate-x-1/2 translate-y-1/2 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-bounce-slow">
          <circle cx="100" cy="100" r="35" fill="#fef3c7" />
        </svg>
      </div>

      {/* Center Top - Light Indigo */}
      <div className="absolute top-2/5 left-2/5 w-18 h-18 -translate-x-1/2 -translate-y-1/2 opacity-4">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-pulse">
          <circle cx="100" cy="100" r="32" fill="#e0e7ff" />
        </svg>
      </div>

      {/* Center Bottom - Light Rose */}
      <div className="absolute bottom-2/5 right-2/5 w-16 h-16 translate-x-1/2 translate-y-1/2 opacity-4">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
          <circle cx="100" cy="100" r="30" fill="#ffe4e6" />
        </svg>
      </div>

      {/* ----------------- PAGE CONTENT ----------------- */}
      <div className="relative z-10">
        <AboutHeader />
        <StorySection />
        <TeamSection />
        <MissionVision />
        <GetApp />
        <CTASection />
        <StatsSection />
      </div>

    </div>
  );
};

export default About;