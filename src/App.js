// src/App.js
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Data from Resume (remains in App.js or could be moved to a separate data file like src/data/resumeData.js)
  const resumeData = {
    name: "Pavan Reddy Nalla",
    location: "Hyderabad, Telangana",
    email: "pavanreddyuiedu@gmail.com",
    linkedin: "linkedin.com/in/pavan-reddy-nalla-27b566226",
    summary:
      "Frontend Developer with over 4 years of experience in building modern web applications using Angular, React, Node.js, and related technologies. Skilled in responsive design, cross-browser compatibility, and performance optimization. Experienced in consuming REST APIs, building scalable UIs, and delivering quality code. Also involved in micro-frontend proof of concepts.",
    workExperience: [
      {
        title: "Technology Analyst",
        company: "Infosys Limited, Hyderabad",
        duration: "Feb 2023 - Present",
        responsibilities: [
          "Led modernization of a health insurance appeals system by migrating from legacy JavaScript to Angular.",
          "Ensured seamless transition with zero downtime while enhancing application performance and scalability.",
          "Built major modules like Dashboard, Search, and Case Intake using Angular.",
          "Conducted code reviews, managed deployments, and collaborated with QA teams to deliver high-quality features.",
          "Migrated Jasmine/Karma test cases to Jest to improve reliability and maintainability.",
          "Developed dynamic dashboards using Chart.js to improve data visualization.",
          "Contributed to projects: Beacon Appeals Manager (BAM) - A platform to automate health insurance appeals and grievances; Orbit Admin, Employee Portal - An employee experience platform with a customizable design system.",
        ],
      },
      {
        title: "Frontend Developer",
        company: "Himpact Technologies Pvt. Ltd, Bangalore",
        duration: "Jan 2021 - Feb 2023",
        responsibilities: [
          "Developed hybrid mobile/web applications using Angular and Ionic in E-commerce and Real Estate domains.",
          "Created responsive UI components using HTML, SCSS, Bootstrap, and integrated REST APIs.",
          "Participated in the complete SDLC including design, development, testing, and deployment.",
          "Collaborated with cross-functional teams to ensure timely and quality deliverables.",
          "Contributed to Agile sprint planning, code reviews, and used Node (NPM) for package management.",
          "Contributed to projects: Invites365 - An online invitation platform with customizable templates for Android, iOS, and Web; Commshell - A B2C E-commerce platform using Ionic and Angular for hybrid development.",
        ],
      },
    ],
    projects: [
      {
        name: "Tool Rental App",
        description:
          "Designed and developed a scalable RESTful API for a geolocation-based tool rental platform using Node.js and MongoDB. Implemented user authentication and role-based authorization using JWT, supporting both tool owners and renters. Built secure CRUD operations for tool listings with support for price, category, image uploads, and availability tracking. Developed geospatial queries using MongoDB 2dsphere indexing to allow users to search tools within a specified radius. Enabled rental request workflows including request, approval, and availability update mechanisms.",
        technologies: ["Node.js", "MongoDB", "JWT", "REST APIs"],
      },
      {
        name: "Beacon Appeals Manager (BAM)",
        description:
          "A platform to automate health insurance appeals and grievances, where I led modernization efforts by migrating from legacy JavaScript to Angular, ensuring seamless transition and enhanced performance.",
        technologies: ["Angular", "Chart.js", "Legacy JavaScript Migration"],
      },
      {
        name: "Orbit Admin, Employee Portal",
        description:
          "An employee experience platform with a customizable design system, where I contributed to building major modules like Dashboard, Search, and Case Intake.",
        technologies: ["Angular"],
      },
      {
        name: "Invites365",
        description:
          "An online invitation platform with customizable templates for Android, iOS, and Web, developed using Angular and Ionic.",
        technologies: ["Angular", "Ionic", "Hybrid Development"],
      },
      {
        name: "Commshell",
        description:
          "A B2C E-commerce platform using Ionic and Angular for hybrid development, where I developed responsive UI components and integrated REST APIs.",
        technologies: ["Angular", "Ionic", "Hybrid Development"],
      },
    ],
    skills: {
      languagesFrameworks: [
        "Angular",
        "React",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Node.js",
        "MongoDB",
      ],
      other: ["REST APIs", "Responsive Design", "Micro-Frontend"],
      tools: ["Git", "Jira", "Visual Studio Code", "Postman", "Insomnia"],
    },
    certifications: [
      {
        name: "JavaScript Algorithms and Data Structures",
        issuer: "freeCodeCamp",
      },
    ],
    education: [
      {
        degree: "Bachelor of Technology",
        university: "Sree Kavitha Engineering College, JNTU Hyderabad",
        year: "2017",
      },
    ],
  };

  // Handle scroll to section and update active nav link
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // Adjust as needed
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Nav activeSection={activeSection} scrollToSection={scrollToSection} />

      <HeroSection scrollToContact={scrollToSection} />
      <AboutSection
        summary={resumeData.summary}
        email={resumeData.email}
        phone={resumeData.phone}
        linkedin={resumeData.linkedin}
      />
      <ExperienceSection workExperience={resumeData.workExperience} />
      <ProjectsSection projects={resumeData.projects} />
      <SkillsSection
        skills={resumeData.skills}
        certifications={resumeData.certifications}
        education={resumeData.education}
      />
      <ContactSection email={resumeData.email} phone={resumeData.phone} />
      <Footer />

      {/* Global Styles for Animations and Inter Font */}
      {/* These styles remain global as they apply to the entire document */}
      <style jsx="true">{`
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: "Inter", sans-serif;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .filter-btn.active {
          background-color: #4f46e5;
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default App;
