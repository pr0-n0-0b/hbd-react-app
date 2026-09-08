import React, { useState, useRef, useEffect } from 'react';
import { Button } from './Button';
import cuteCharacter from '../assets/cute-gift-character.png';

export const BirthdayPlayground = () => {
  const [giftAccepted, setGiftAccepted] = useState(false);
  const [isScratched, setIsScratched] = useState(false);
  const canvasRef = useRef(null);
  const [toastMessage, setToastMessage] = useState(null);
  const isDrawing = useRef(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Initialize the scratch canvas with a golden-brown coating and a centered heart
  useEffect(() => {
    if (giftAccepted && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      // Set high-res internal rendering dimensions for clarity
      canvas.width = 520;
      canvas.height = 240;

      ctx.fillStyle = '#e6a95a'; // Golden-brown color
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw a red heart strictly in the center of the canvas
      ctx.save();
      ctx.font = '40px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('❤️', canvas.width / 2, canvas.height / 2);
      ctx.restore();
    }
  }, [giftAccepted]);

  const handleTouchOrMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas || !isDrawing.current) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    // Scale coordinates accurately from DOM element size to canvas internal dimensions
    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2, false);
    ctx.fill();
    setIsScratched(true);
  };

  return (
    <section id="playground" style={{ maxWidth: '900px', margin: '80px auto', padding: '0 20px', boxSizing: 'border-box' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', fontWeight: 800, color: 'var(--text-main)' }}>
          Interactive Surprise Zone 💌
        </h2>
        <p style={{ color: 'var(--text-muted)', marginTop: '8px', fontSize: '1rem' }}>
          Accept your gift and scratch below to reveal your special message!
        </p>
      </div>

      <div style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)',
        padding: '40px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
        boxSizing: 'border-box',
        width: '100%'
      }}>
        {/* Character Illustration */}
        <div style={{ textAlign: 'center' }}>
          <img 
            src={cuteCharacter} 
            alt="Cute Character Sticker" 
            style={{ width: '160px', height: '160px', objectFit: 'contain', marginBottom: '16px' }}
          />
          <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)', color: 'var(--text-main)', fontWeight: 700 }}>
            PLEASE ACCEPT THE GIFT 🎁
          </h3>
        </div>

        {/* Yes / No Interactive Choice */}
        {!giftAccepted ? (
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button variant="primary" onClick={() => { setGiftAccepted(true); showToast('Yay! Gift Accepted! 💖'); }}>
              YES 🥰
            </Button>
            <Button variant="outline" onClick={() => alert('Wrong button! You must say YES! 😜')}>
              NO ❌
            </Button>
          </div>
        ) : (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', animation: 'fadeIn 0.5s ease', boxSizing: 'border-box' }}>
            <div style={{ background: 'rgba(255,143,177,0.1)', padding: '12px 24px', borderRadius: 'var(--radius-full)', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', fontSize: '0.95rem' }}>
              🎉 Gift Unlocked Successfully!
            </div>

            {/* Fully Responsive Scratch Card Section */}
            <div style={{ textAlign: 'center', width: '100%', maxWidth: '520px', boxSizing: 'border-box' }}>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '12px', padding: '0 10px' }}>
                ✨ Scratch the golden-brown layer below to reveal your message! ✨
              </p>
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '520px',
                height: '240px',
                margin: '0 auto',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #f3e7e9 0%, #e3eeff 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-md)',
                overflow: 'hidden',
                userSelect: 'none',
                border: '2px solid #C68B59',
                boxSizing: 'border-box'
              }}>
                {/* Custom Wish Message Inside */}
                <div style={{ position: 'absolute', textAlign: 'center', padding: '20px', color: '#403A46', width: '100%', boxSizing: 'border-box', zIndex: 1 }}>
                  <h4 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', fontWeight: 800, color: '#d63384', marginBottom: '8px' }}>HAPPY BIRTHDAY ✨</h4>
                  <p style={{fontFamily:'Monsieur La Doulaise', fontSize: 'clamp(0.9rem, 2vw, 1.02rem)', fontWeight: 600, lineHeight: 1.5, fontStyle: 'italic' }}>
                    "Happy Birthday to my Everything!
😘🎂😘🥀😘🥀🥀🎉
Happy Birthday to the one who makes my heart smile a little brighter every single day. I hope this year brings you endless happiness, success, good health, and all the beautiful moments you truly deserve. You have a special place in my heart, and I feel lucky just to know you. May your smile never fade, your dreams come true, and your life be filled with love and laughter. Thank you for being such an amazing person. Enjoy your special day to the fullest-you deserve nothing but the best!
🎂🎂😘🎉😘🎉🥀"
                  </p>
                </div>

                {/* Scratch Overlay Canvas (Golden-Brown with Centered Heart) */}
                <canvas
                  ref={canvasRef}
                  onMouseDown={() => { isDrawing.current = true; }}
                  onMouseUp={() => { isDrawing.current = false; }}
                  onMouseMove={handleTouchOrMove}
                  onTouchStart={() => { isDrawing.current = true; }}
                  onTouchEnd={() => { isDrawing.current = false; }}
                  onTouchMove={handleTouchOrMove}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    cursor: 'crosshair',
                    touchAction: 'none',
                    borderRadius: '18px',
                    zIndex: 2
                  }}
                />
              </div>
              {isScratched && (
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '10px' }}>
                  💖 Hope this message makes your day extra special! 🌟
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '30px',
          right: '20px',
          background: 'var(--card-bg)',
          color: 'var(--text-main)',
          padding: '12px 20px',
          borderRadius: 'var(--radius-full)',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--border-color)',
          fontWeight: 700,
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '0.9rem'
        }}>
          <span>✨</span> {toastMessage}
        </div>
      )}
    </section>
  );
};