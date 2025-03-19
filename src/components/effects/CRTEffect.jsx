import React from 'react';

const CRTEffect = () => {
  return (
    <>
      <div className="crt-overlay"></div>
      <style jsx="true">{`
        .crt-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 10;
          animation: flicker 0.15s infinite;
          background: linear-gradient(
            rgba(18, 16, 16, 0) 50%,
            rgba(0, 0, 0, 0.25) 50%
          );
          background-size: 100% 4px;
        }

        .crt-overlay::before {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at center,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.2) 100%
          );
          pointer-events: none;
        }

        @keyframes flicker {
          0% {
            opacity: 0.97;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.98;
          }
        }
      `}</style>
    </>
  );
};

export default CRTEffect;