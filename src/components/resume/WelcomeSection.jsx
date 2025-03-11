import React from 'react';

const WelcomeSection = ({ resumeData }) => {
  return (
    <div className="space-y-4">
      <p className="text-green-400 break-words">{" > SYSTEM BREACH SUCCESSFUL "}</p>
      <p className="text-green-400 break-words">{"  > ACCESSING FILE... "}</p>
      <div className="mt-5">
        <h1 className="text-2xl md:text-3xl font-bold text-green-500 glitch break-words">{resumeData.name}</h1>
        <p className="text-lg md:text-xl text-green-400 break-words">{resumeData.title}</p>
      </div>
    </div>
  );
};

export default WelcomeSection; 