import React from "react";

const SkillTag = ({ skill }) => (
  <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-2 rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-md">
    {skill}
  </span>
);

export default SkillTag;
