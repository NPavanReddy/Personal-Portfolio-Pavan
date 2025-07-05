import React, { useRef } from "react";

const Nav = ({ activeSection, scrollToSection }) => {
  const navRef = useRef(null);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md shadow-sm z-50 transition-all duration-300 ease-in-out"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a
          href="#home"
          className="text-xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
        >
          Pavan Nalla
        </a>
        <div className="hidden md:flex space-x-6">
          {["home", "about", "experience", "projects", "skills", "contact"].map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
                className={`relative text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300 capitalize
                                ${
                                  activeSection === section
                                    ? "text-indigo-600 after:scale-x-100"
                                    : "after:scale-x-0"
                                }
                                after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-indigo-600 after:transition-transform after:duration-300 after:origin-left`}
              >
                {section === "home" ? "Home" : section}
              </a>
            )
          )}
        </div>
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <select
            onChange={(e) => scrollToSection(e.target.value)}
            value={activeSection}
            className="block w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {[
              "home",
              "about",
              "experience",
              "projects",
              "skills",
              "contact",
            ].map((section) => (
              <option key={section} value={section}>
                {section === "home"
                  ? "Home"
                  : section.charAt(0).toUpperCase() + section.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
