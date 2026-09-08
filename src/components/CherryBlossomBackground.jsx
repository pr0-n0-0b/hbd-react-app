import React from 'react';

export const CherryBlossomBackground = () => {
  const petals = Array.from({ length: 18 });

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden'
    }}>
      <style>{`
        @keyframes floatDown {
          0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.7;
          }
          85% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(110vh) translateX(60px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
      {petals.map((_, i) => {
        const randomLeft = Math.random() * 100;
        const randomDuration = 6 + Math.random() * 8;
        const randomDelay = Math.random() * 5;
        const randomSize = 12 + Math.random() * 14;

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: '-20px',
              left: `${randomLeft}%`,
              fontSize: `${randomSize}px`,
              animation: `floatDown ${randomDuration}s linear infinite`,
              animationDelay: `${randomDelay}s`,
              opacity: 0.6,
              userSelect: 'none'
            }}
          >
            🌸
          </div>
        );
      })}
    </div>
  );
};