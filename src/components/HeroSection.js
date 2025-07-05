import React from "react";

const HeroSection = ({ scrollToContact }) => (
  <section
    id="home"
    className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white overflow-hidden"
  >
    <div className="absolute inset-0 z-0">
      {/* Simple animated background circles for visual appeal */}
      <div className="absolute w-64 h-64 bg-white opacity-10 rounded-full -top-16 -left-16 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-white opacity-10 rounded-full -bottom-32 -right-32 animate-pulse animation-delay-2000"></div>
    </div>
    <div className="relative z-10 text-center px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
        Pavan Reddy Nalla
      </h1>
      <p className="text-xl md:text-2xl font-light mb-8 animate-fade-in-up animation-delay-500">
        Frontend Developer | Building Scalable & Responsive Web Applications
      </p>
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          scrollToContact("contact");
        }}
        className="inline-block bg-white text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-1000"
      >
        Get in Touch
      </a>
    </div>
  </section>
);

export default HeroSection;
