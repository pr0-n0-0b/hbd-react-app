import React, { useState } from 'react';

export const CelebratingYou = () => {
  const [openCard, setOpenCard] = useState(null);

  const reasons = [
    {
      id: 1,
      title: "Endless Joy",
      preview: "Tap to reveal a special note ✨",
      secret: "Your laughter and warmth light up every single room you step into. Never lose that sparkle!"
    },
    {
      id: 2,
      title: "Wonderful Memories",
      preview: "Tap to reveal a special note 🎈",
      secret: "Having a cousin who is truly a sister at heart means everything. Wishing you the happiest birthday and a year filled with wonderful surprises!"
    },
    {
      id: 3,
      title: "Heart of Gold",
      preview: "Tap to reveal a special note 💛",
      secret: "Wishing you a year ahead filled with peace, genuine success, and everything that makes your heart smile."
    }
  ];

  return (
    <section style={{
      padding: '80px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px' }}>
          Celebrating You Today 🌸
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
          Click on any card below to open a hidden birthday message!
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        width: '100%'
      }}>
        {reasons.map((item) => {
          const isOpen = openCard === item.id;
          return (
            <div
              key={item.id}
              onClick={() => setOpenCard(isOpen ? null : item.id)}
              style={{
                background: isOpen 
                  ? 'linear-gradient(135deg, rgba(255,143,177,0.2) 0%, rgba(184,161,255,0.25) 100%)' 
                  : 'var(--card-bg)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)',
                padding: '32px 24px',
                minHeight: '220px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-lg)',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transform: isOpen ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                backdropFilter: 'blur(8px)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(255, 143, 177, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                marginBottom: '16px'
              }}>
                {item.id === 1 ? '✨' : item.id === 2 ? '🎈' : '💛'}
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
                {item.title}
              </h3>

              <p style={{
                color: isOpen ? 'var(--text-main)' : 'var(--text-muted)',
                fontSize: '0.95rem',
                lineHeight: 1.5,
                transition: 'opacity 0.3s ease'
              }}>
                {isOpen ? item.secret : item.preview}
              </p>

              <span style={{
                position: 'absolute',
                bottom: '12px',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--primary)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
                {isOpen ? 'Click to close ▲' : 'Tap to open ▼'}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};