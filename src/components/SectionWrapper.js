import React from "react";

const SectionWrapper = ({ id, title, children, className = "" }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12 relative">
        {title}
        <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-indigo-600 rounded-full"></span>
      </h2>
      {children}
    </div>
  </section>
);

export default SectionWrapper;
