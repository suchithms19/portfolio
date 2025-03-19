import React, { useState, useEffect } from 'react';

const GlitchText = ({ text, className = '' }) => {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance to glitch
        setGlitching(true);
        setTimeout(() => setGlitching(false), 150);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  if (!glitching) {
    return <span className={className}>{text}</span>;
  }

  const generateGlitchText = () => {
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    return text
      .split('')
      .map(char => Math.random() < 0.5 ? chars[Math.floor(Math.random() * chars.length)] : char)
      .join('');
  };

  return (
    <span className={`glitch-text ${className}`}>
      <span className="glitch-base">{text}</span>
      <span className="glitch-layer-1">{generateGlitchText()}</span>
      <span className="glitch-layer-2">{generateGlitchText()}</span>
      <style jsx="true">{`
        .glitch-text {
          position: relative;
          display: inline-block;
        }
        
        .glitch-layer-1,
        .glitch-layer-2 {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.8;
          pointer-events: none;
        }
        
        .glitch-layer-1 {
          animation: glitch1 0.15s infinite;
          color: #0ff;
          transform: translate(-2px);
        }
        
        .glitch-layer-2 {
          animation: glitch2 0.15s infinite;
          color: #f0f;
          transform: translate(2px);
        }
        
        @keyframes glitch1 {
          0% { clip-path: inset(50% 0 30% 0); }
          20% { clip-path: inset(20% 0 60% 0); }
          40% { clip-path: inset(40% 0 40% 0); }
          60% { clip-path: inset(80% 0 5% 0); }
          80% { clip-path: inset(10% 0 85% 0); }
          100% { clip-path: inset(40% 0 50% 0); }
        }
        
        @keyframes glitch2 {
          0% { clip-path: inset(30% 0 50% 0); }
          20% { clip-path: inset(60% 0 20% 0); }
          40% { clip-path: inset(40% 0 40% 0); }
          60% { clip-path: inset(5% 0 80% 0); }
          80% { clip-path: inset(85% 0 10% 0); }
          100% { clip-path: inset(50% 0 40% 0); }
        }
      `}</style>
    </span>
  );
};

export default GlitchText;