import React, { useEffect } from 'react';

const MatrixRain = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrix-rain');
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const fontSize = window.innerWidth <= 768 ? 10 : 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00FF00';
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? '1' : '0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    
    const matrixInterval = setInterval(draw, 33);
    
    return () => {
      clearInterval(matrixInterval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas id="matrix-rain" className="fixed top-0 left-0 w-full h-full opacity-30" />;
};

export default MatrixRain; 