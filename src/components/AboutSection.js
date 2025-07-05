import React from "react";
import SectionWrapper from "./SectionWrapper"; // Import SectionWrapper

const AboutSection = ({ summary, email, phone, linkedin }) => (
  <SectionWrapper id="about" title="About Me" className="bg-white">
    <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 text-center">
      <p className="mb-4">{summary}</p>
      <p className="mb-4">
        With a strong foundation in modern web technologies like Angular and
        React, I specialize in crafting intuitive, high-performance user
        interfaces. My experience spans the complete SDLC, from design and
        development to testing and deployment, always with a keen eye on
        delivering quality and scalability.
      </p>
      <p>
        I'm passionate about creating seamless user experiences and am always
        eager to explore new technologies and contribute to impactful projects.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium">
        <a
          href={`mailto:${email}`}
          className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span>{email}</span>
        </a>
        <a
          href={`https://${linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
