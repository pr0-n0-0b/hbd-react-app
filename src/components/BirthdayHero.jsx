import React, { useState } from 'react';
import { Button } from './Button';

export const BirthdayHero = () => {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [balloons, setBalloons] = useState([]);

  const triggerCelebration = () => {
    setCandlesBlown(true);

    // Generate 30 floating items across the full screen width
    const newBalloons = Array.from({ length: 30 }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100, // Random percentage across the screen width (0% - 100%)
      duration: 3 + Math.random() * 2.5, // Random speed between 3s and 5.5s
      emoji: ['🎈', '🎉', '✨', '💖', '⭐', '🎂', '🎁'][Math.floor(Math.random() * 7)]
    }));

    setBalloons(prev => [...prev, ...newBalloons]);

    // Clean up elements from DOM after animation completes
    setTimeout(() => {
      setBalloons(prev => prev.filter(b => !newBalloons.includes(b)));
    }, 6000);
  };

  return (
    <header style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '140px 20px 80px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Full-screen flying balloons & emojis container */}
      {balloons.map(b => (
        <span
          key={b.id}
          style={{
            position: 'fixed',
            left: `${b.left}%`,
            bottom: '-50px',
            pointerEvents: 'none',
            fontSize: '28px',
            animation: `flyUpFullScreen ${b.duration}s linear forwards`,
            zIndex: 9999
          }}
        >
          {b.emoji}
        </span>
      ))}

      {/* Inline keyframe style for the full screen balloon fly-up */}
      <style>{`
        @keyframes flyUpFullScreen {
          0% {
            transform: translateY(0) scale(0.6);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            transform: translateY(-110vh) scale(1.3);
            opacity: 0;
          }
        }
      `}</style>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px',
        alignItems: 'center',
        width: '100%'
      }}>
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 143, 177, 0.1)',
            border: '1px solid var(--border-color)',
            padding: '6px 16px',
            borderRadius: 'var(--radius-full)',
            width: 'fit-content',
            fontSize: '0.85rem',
            fontWeight: 700,
            color: 'var(--primary)'
          }}>
            <span>🌹</span> Click Below Candles Multiple Times
          </div>

          <h1 style={{
            fontSize: 'clamp(2.1rem, 5vw, 3.8rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '0.02em',
            color: 'var(--text-main)'
          }}>
            <span style={{ fontFamily: "'Monsieur La Doulaise', cursive" }}>
              Happy Birthday, <span style={{ fontFamily: "'Monsieur La Doulaise', cursive", color: 'var(--primary)' }}>Arshman</span> ✨
            </span>
          </h1>

          <p style={{ 
            fontFamily: "'Monsieur La Doulaise', cursive",
            color: 'var(--text-muted)',
            fontSize: '2.1rem',
            lineHeight: 1.6,
            maxWidth: '380px'
          }}> 
            Today is all about celebrating You. May your year ahead be filled with endless joy, sweet surprises, and unforgettable adventures.
          </p>

          <div style={{ display: 'flex', gap: '16px', marginTop: '10px', flexWrap: 'wrap' }}>
            <Button variant="primary" onClick={triggerCelebration}>
              Blow Candles 🎂
            </Button>
          </div>
        </div>

        {/* Right Column / Stacked Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
          
          {/* Cake Card */}
          <div style={{
            width: '320px',
            height: '380px',
            background: 'linear-gradient(135deg, var(--card-bg) 0%, rgba(255,217,142,0.15) 100%)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            backdropFilter: 'blur(8px)'
          }}>
            <span style={{ position: 'absolute', top: '24px', left: '30px', fontSize: '20px' }}>🎈</span>
            <span style={{ position: 'absolute', bottom: '40px', right: '35px', fontSize: '22px' }}>🎁</span>
            
            <div 
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: 'rgba(255, 217, 142, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '72px',
                boxShadow: 'inset 0 4px 12px rgba(255,255,255,0.5)',
                marginBottom: '20px',
                cursor: 'pointer',
                transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
              onClick={triggerCelebration}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {candlesBlown ? '🥳' : '🎂'}
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
              {candlesBlown ? 'Make a Wish!' : 'Birthday Cake'}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              {candlesBlown ? 'Your wish has been locked in! ✨' : 'Click the cake to blow candles!'}
            </p>
          </div>

          {/* Bottom Card: Tenor GIF embed */}
          <div style={{
            width: '320px',
            height: '200px',
            background: 'linear-gradient(135deg, var(--card-bg) 0%, rgba(184,161,255,0.15) 100%)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px',
            overflow: 'hidden',
            backdropFilter: 'blur(8px)'
          }}>
            <img
 src="https://tenor.com/embed/26751018"  
  alt="Happy Birthday GIF" 
  style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '12px',
    pointerEvents: 'none'
  }}
/>
          </div>
        </div>
      </div>
    </header>
  );
};