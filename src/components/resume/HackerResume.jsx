import React, { useState, useEffect } from 'react';
import { Terminal, Code, User, Github, Mail, Linkedin, Award, Rocket } from 'lucide-react';
import MatrixRain from '../effects/MatrixRain';
import LoadingScreen from '../loading/LoadingScreen';
import WelcomeSection from './WelcomeSection';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import ResumeStyles from './ResumeStyles';
import resumeData from '../../data/resumeData';

const HackerResume = () => {
  const [loading, setLoading] = useState(true);
  const [section, setSection] = useState('welcome');
  const [showCursor, setShowCursor] = useState(true);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const handleSectionChange = (newSection) => {
    setTransitioning(true);
    setTimeout(() => {
      setSection(newSection);
      setTransitioning(false);
    }, 500);
  };

  const renderSection = () => {
    switch(section) {
      case 'welcome':
        return <WelcomeSection resumeData={resumeData} />;
      case 'skills':
        return <SkillsSection resumeData={resumeData} />;
      case 'experience':
        return <ExperienceSection resumeData={resumeData} />;
      case 'startup':
        return <ProjectsSection resumeData={resumeData} />;
      default:
        return null;
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      <MatrixRain />
      
      <div className="container mx-auto p-4 md:p-8 relative z-10">
        <div className="border border-green-500 rounded-lg p-4 md:p-6 bg-black bg-opacity-90">
          <div className="flex items-center space-x-2 mb-4">
            <Terminal size={20} />
            <span className="text-sm">terminal@suchith</span>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <button
              onClick={() => handleSectionChange('welcome')}
              className={`flex items-center space-x-2 px-4 py-2 border rounded transition-colors duration-300 ${
                section === 'welcome' ? 'bg-green-500 text-black border-black' : 'border-green-500 hover:bg-green-500 hover:text-black'
              }`}
            >
              <User size={16} />
              <span>Profile</span>
            </button>

            <button
              onClick={() => handleSectionChange('skills')}
              className={`flex items-center space-x-2 px-4 py-2 border rounded transition-colors duration-300 ${
                section === 'skills' ? 'bg-green-500 text-black border-black' : 'border-green-500 hover:bg-green-500 hover:text-black'
              }`}
            >
              <Code size={16} />
              <span>Skills</span>
            </button>
            <button
              onClick={() => handleSectionChange('experience')}
              className={`flex items-center space-x-2 px-4 py-2 border rounded transition-colors duration-300 ${
                section === 'experience' ? 'bg-green-500 text-black border-black' : 'border-green-500 hover:bg-green-500 hover:text-black'
              }`}
            >
              <Award size={16} />
              <span>Experience</span>
            </button>
            <button
              onClick={() => handleSectionChange('startup')}
              className={`flex items-center space-x-2 px-4 py-2 border rounded transition-colors duration-300 ${
                section === 'startup' ? 'bg-green-500 text-black border-black' : 'border-green-500 hover:bg-green-500 hover:text-black'
              }`}
            >
              <Rocket size={16} />
              <span>Projects</span>
            </button>
          </div>
          
          <div className={`min-h-[400px] transition-opacity duration-500 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
            {renderSection()}
            <span className={`inline-block w-3 mt-3 h-6 ${showCursor ? 'bg-green-400' : 'bg-transparent'}`} />
          </div>
          
          <div className="mt-8 flex space-x-4">
            <a href={`mailto:${resumeData.email}`} className="hover:text-green-300">
              <Mail size={20} />
            </a>
            <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
              <Github size={20} />
            </a>
            <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <ResumeStyles />
    </div>
  );
};

export default HackerResume; 