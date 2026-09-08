import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: scrolled ? '12px' : '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '92%',
        maxWidth: '1200px',
        background: scrolled ? 'var(--card-bg)' : 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-full)',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        boxSizing: 'border-box'
      }}>
        {/* Brand / Logo */}
        <div 
          style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(-5deg) scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1)'}
        >
          <span style={{ fontSize: '22px' }}>🎂</span>
          <span style={{ fontFamily: "'Monsieur La Doulaise', cursive", fontWeight: 300, fontSize: '2.1rem', color: 'var(--text-main)', whiteSpace: 'nowrap' }}>
            Happy Birthday<span style={{ color: 'var(--primary)' }}></span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="desktop-nav-links" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {['Features', 'Playground'].map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase()}`}
              style={{
                textDecoration: 'none',
                color: 'var(--text-muted)',
                fontWeight: 600,
                fontSize: '0.95rem',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Desktop Controls (Theme + Button) */}
        <div className="desktop-nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: 'var(--bg-main)',
              border: '1px solid var(--border-color)',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              transition: 'transform 0.3s'
            }}
            title="Toggle Theme"
            onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(15deg)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}
          >
            {darkMode ? '🌙' : '☀️'}
          </button>

          <Button 
            variant="primary" 
            style={{ padding: '8px 18px', fontSize: '0.85rem' }}
            onClick={() => alert('Happy Birthday! 🎉 Enjoy your special day!')}
          >
            Celebrate ✨
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: 'var(--text-main)',
            padding: '4px'
          }}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '92%',
          background: 'var(--card-bg)',
          backdropFilter: 'blur(16px)',
          border: '1px solid var(--border-color)',
          borderRadius: '20px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: 'var(--shadow-lg)',
          zIndex: 999,
          boxSizing: 'border-box',
          textAlign: 'center'
        }}>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 600, fontSize: '1.1rem', padding: '8px 0' }}
          >
            Features
          </a>
          <a
            href="#playground"
            onClick={() => setMobileMenuOpen(false)}
            style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 600, fontSize: '1.1rem', padding: '8px 0' }}
          >
            Playground
          </a>
          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '8px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                background: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px'
              }}
            >
              {darkMode ? '🌙' : '☀️'}
            </button>

            <Button 
              variant="primary" 
              style={{ padding: '10px 20px', fontSize: '0.9rem' }}
              onClick={() => {
                setMobileMenuOpen(false);
                alert('Happy Birthday! 🎉 Enjoy your special day!');
              }}
            >
              Celebrate ✨
            </Button>
          </div>
        </div>
      )}

      {/* Responsive Inline Media Queries Handling */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav-links, .desktop-nav-actions {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};