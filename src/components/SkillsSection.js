import React from "react";
import SectionWrapper from "./SectionWrapper"; // Import SectionWrapper
import SkillTag from "./SkillTag"; // Import SkillTag

const SkillsSection = ({ skills, certifications, education }) => (
  <SectionWrapper id="skills" title="Skills" className="bg-gray-100">
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Languages & Frameworks
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.languagesFrameworks.map((skill, index) => (
            <SkillTag key={index} skill={skill} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Other Expertise
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.other.map((skill, index) => (
            <SkillTag key={index} skill={skill} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Tools
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.tools.map((skill, index) => (
            <SkillTag key={index} skill={skill} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Certifications & Education
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {certifications.map((cert, index) => (
            <span
              key={index}
              className="inline-block bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-md"
            >
              {cert.name} - {cert.issuer}
            </span>
          ))}
          {education.map((edu, index) => (
            <span
              key={index}
              className="inline-block bg-teal-100 text-teal-800 text-sm font-medium px-4 py-2 rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-md"
            >
              {edu.degree} from {edu.university} ({edu.year})
            </span>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default SkillsSection;
