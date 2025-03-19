import React, { useState, useEffect } from 'react';
import { Terminal, Code, User, Github, Mail, Linkedin, Award, Rocket } from 'lucide-react';
import MatrixRain from '../effects/MatrixRain';
import LoadingScreen from '../loading/LoadingScreen';
import CRTEffect from '../effects/CRTEffect';
import GlitchText from '../effects/GlitchText';
import TypewriterText from '../effects/TypewriterText';
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
      <CRTEffect />
      
      <div className="container mx-auto p-4 md:p-8 relative z-10">
        <div className="border border-green-500 rounded-lg p-4 md:p-6 bg-black bg-opacity-90 shadow-[0_0_15px_rgba(0,255,0,0.3)]">
          <div className="flex items-center space-x-2 mb-4">
            <Terminal size={20} className="animate-pulse" />
            <GlitchText text="terminal@suchith" className="text-sm" />
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6">
            {[
              { id: 'welcome', icon: User, text: 'Profile' },
              { id: 'skills', icon: Code, text: 'Skills' },
              { id: 'experience', icon: Award, text: 'Experience' },
              { id: 'startup', icon: Rocket, text: 'Projects' }
            ].map(({ id, icon: Icon, text }) => (
              <button
                key={id}
                onClick={() => handleSectionChange(id)}
                className={`flex items-center space-x-2 px-4 py-2 border rounded transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,0,0.5)] ${
                  section === id
                    ? 'bg-green-500 text-black border-black shadow-[0_0_15px_rgba(0,255,0,0.7)]'
                    : 'border-green-500 hover:bg-green-500/20'
                }`}
              >
                <Icon size={16} className={section === id ? 'animate-pulse' : ''} />
                <GlitchText text={text} className={section === id ? 'text-black' : ''} />
              </button>
            ))}
          </div>
          
          <div className={`min-h-[400px] transition-all duration-500 ${
            transitioning
              ? 'opacity-0 transform translate-y-4'
              : 'opacity-100 transform translate-y-0'
          }`}>
            <div className="glitch-container relative">
              <TypewriterText
                text={section === 'welcome' ? '> Initializing profile...\n\n' :
                      section === 'skills' ? '> Loading skillset...\n\n' :
                      section === 'experience' ? '> Accessing experience records...\n\n' :
                      '> Loading project data...\n\n'}
                speed={30}
              />
              {renderSection()}
            </div>
          </div>
          
          <div className="mt-8 flex space-x-6 justify-center">
            {[
              { href: `mailto:${resumeData.email}`, Icon: Mail, label: 'Email' },
              { href: resumeData.github, Icon: Github, label: 'GitHub' },
              { href: resumeData.linkedin, Icon: Linkedin, label: 'LinkedIn' }
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group relative hover:text-green-300 transition-colors duration-300"
                onMouseEnter={() => setShowCursor(false)}
                onMouseLeave={() => setShowCursor(true)}
              >
                <Icon size={20} className="transform group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <GlitchText text={label} className="text-xs" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <ResumeStyles />
    </div>
  );
};

export default HackerResume; 