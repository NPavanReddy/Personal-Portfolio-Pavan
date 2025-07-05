import React from "react";
import SectionWrapper from "./SectionWrapper"; // Import SectionWrapper

const ExperienceSection = ({ workExperience }) => (
  <SectionWrapper
    id="experience"
    title="Work Experience"
    className="bg-gray-100"
  >
    <div className="max-w-4xl mx-auto space-y-12">
      {workExperience.map((job, index) => (
        <div key={index} className="relative pl-8 md:pl-16 group">
          <div className="absolute left-0 top-0 h-full w-1 bg-indigo-200 rounded-full group-hover:bg-indigo-600 transition-colors duration-300"></div>
          <div className="absolute left-[-6px] md:left-[-6px] top-0 w-4 h-4 bg-indigo-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.01]">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {job.title}
            </h3>
            <p className="text-indigo-600 text-lg font-semibold mb-2">
              {job.company}
            </p>
            <p className="text-gray-500 text-sm mb-4">{job.duration}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {job.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ExperienceSection;
