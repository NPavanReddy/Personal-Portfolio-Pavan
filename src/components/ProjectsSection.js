import React from "react";
import SectionWrapper from "./SectionWrapper"; // Import SectionWrapper
import ProjectCard from "./ProjectCard"; // Import ProjectCard

const ProjectsSection = ({ projects }) => (
  <SectionWrapper id="projects" title="My Projects" className="bg-white">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
