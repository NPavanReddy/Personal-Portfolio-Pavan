import React from "react";
import SkillTag from "./SkillTag"; // Import SkillTag as it's used here

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
    <div className="p-6 flex-grow">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h3>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm">
        {project.description}
      </p>
    </div>
    <div className="p-6 bg-gray-50 border-t border-gray-100">
      <h4 className="text-sm font-semibold text-gray-800 mb-2">
        Technologies:
      </h4>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <SkillTag key={index} skill={tech} />
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;
