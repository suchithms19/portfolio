import React, { useState, useEffect } from 'react';
import MatrixRain from '../effects/MatrixRain';

const LoadingScreen = () => {
  const [loadingText, setLoadingText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [progressBar, setProgressBar] = useState(0);
  const fullText = 'INITIALIZING_SYSTEM.exe';

  useEffect(() => {
    let currentIndex = 0;
    const textInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setLoadingText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(textInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    const progressInterval = setInterval(() => {
      setProgressBar(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 250);

    return () => {
      clearInterval(textInterval);
      clearInterval(cursorInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <MatrixRain />
      
      <div className="text-center z-10 space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold text-green-500 loading-title mb-8">
            SYSTEM ACCESS
          </h1>
          <div className="text-xl md:text-2xl text-green-400 font-mono">
            {loadingText}
            <span className={`inline-block w-3 h-6 ml-1 ${showCursor ? 'bg-green-400' : 'bg-transparent'}`} />
          </div>
        </div>
        
        <div className="space-y-4 max-w-md mx-auto px-4">
          <div className="relative w-full h-2 bg-green-900 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-300"
              style={{ width: `${progressBar}%` }}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-green-400 font-mono">
            <div className="text-left">LOADING .....</div>
            <div className="text-right">{progressBar}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 