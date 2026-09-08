import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { BirthdayHero } from './components/BirthdayHero';
import { CelebratingYou } from './components/CelebratingYou';
import { BirthdayPlayground } from './components/BirthdayPlayground';
import { CherryBlossomBackground } from './components/CherryBlossomBackground';


export function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('birthday_theme') === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('birthday_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [darkMode]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <BirthdayHero />


      {/* Celebrating You Section (Updated with interactive click-to-reveal cards) */}
      <CelebratingYou />

      <BirthdayPlayground />
     
    <CherryBlossomBackground />
    {/* Your Navbar, Hero, Playground, and Footer components go here */}
  

      {/* Footer */}
      <footer style={{
        marginTop: 'auto',
        background: 'var(--card-bg)',
        borderTop: '1px solid var(--border-color)',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '28px' }}>🎂</span>
            <span style={{ fontFamily: "'Monsieur La Doulaise', cursive", fontWeight: 800, fontSize: '2.20rem' }}>Happy Birthday!</span>
          </div>
          <p style={{ fontFamily: "'Monsieur La Doulaise', cursive", color: 'var(--text-muted)', fontSize: '1.55rem', maxWidth: '400px', lineHeight: 1.5 }}>
            Made with love, warm wishes, and plenty of sparkles just for you.
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '20px' }}>
            © 2026 Special Birthday Edition ✨
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;