import React, { useState, useEffect } from 'react';

const TypewriterText = ({ text, speed = 50, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  useEffect(() => {
    // Reset when text changes
    setDisplayedText('');
    setCurrentIndex(0);
  }, [text]);

  return (
    <span className="typewriter">
      {displayedText}
      <span className="cursor">_</span>
      <style jsx="true">{`
        .typewriter {
          white-space: pre-wrap;
        }
        .cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          from, to {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </span>
  );
};

export default TypewriterText;