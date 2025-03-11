import React from 'react';

const ProjectsSection = ({ resumeData }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-green-500 break-words">{"> PROJECTS_LIST.sys "}</h2>
      {resumeData.startup.map((project, index) => (
        <div key={index} className="border border-green-500 p-4 rounded-lg">
          <h3 className="text-lg font-bold break-words">{project.name}</h3>
          <p className="mt-2 break-words">{project.description}</p>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 inline-block text-green-400 hover:text-green-300 underline break-words"
          >
            ACCESS_PROJECT_PORTAL →
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection; 