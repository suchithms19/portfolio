import React from 'react';

const ResumeStyles = () => {
  return (
    <style jsx="true">{`
      .loading-title {
        animation: noise 2s linear infinite;
        position: relative;
      }

      .loading-log {
        opacity: 0;
        animation: fadeIn 0.5s forwards;
      }

      .loading-log:nth-child(1) { animation-delay: 0.5s; }
      .loading-log:nth-child(2) { animation-delay: 1.5s; }
      .loading-log:nth-child(3) { animation-delay: 2.5s; }
      .loading-log:nth-child(4) { animation-delay: 3.5s; }

      @keyframes noise {
        0%, 3%, 5%, 42%, 44%, 100% { opacity: 1; transform: scaleY(1); }
        4.5% { opacity: 1; transform: scaleY(1.7); }
        43% { opacity: 1; transform: scaleX(1.5); }
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .glitch {
        animation: glitch 1s linear infinite;
        position: relative;
      }
      
      @keyframes glitch {
        2%, 64% {
          transform: translate(2px,0) skew(0deg);
        }
        4%, 60% {
          transform: translate(-2px,0) skew(0deg);
        }
        62% {
          transform: translate(0,0) skew(5deg);
        }
      }
    `}</style>
  );
};

export default ResumeStyles; 