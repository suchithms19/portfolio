import React from 'react';

const ExperienceSection = ({ resumeData }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-green-500 break-words">{"> EXPERIENCE_LOG.txt"}</h2>
      {resumeData.experience.map((exp, index) => (
        <div key={index} className="border border-green-500 p-4 rounded-lg">
          <h3 className="text-lg font-bold break-words">{exp.company}</h3>
          <p className="text-green-400 break-words">{exp.role}</p>
          <p className="text-sm text-green-300 break-words">{exp.period}</p>
          <p className="mt-2 break-words">{exp.details}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection; 