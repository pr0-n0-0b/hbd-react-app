import React, { useState } from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '', 
  icon = null,
  ...props 
}) => {
  const [sparkles, setSparkles] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newSparkle = { id: Date.now(), x, y };
    setSparkles(prev => [...prev, newSparkle]);
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
    }, 600);

    if (onClick) onClick(e);
  };

  const getVariantStyles = () => {
    switch(variant) {
      case 'secondary':
        return {
          background: 'var(--secondary)',
          color: '#ffffff',
          boxShadow: '0 6px 20px rgba(184, 161, 255, 0.3)'
        };
      case 'outline':
        return {
          background: 'transparent',
          border: '2px solid var(--primary)',
          color: 'var(--primary)',
        };
      case 'primary':
      default:
        return {
          background: 'var(--primary)',
          color: '#ffffff',
          boxShadow: '0 6px 20px rgba(255, 143, 177, 0.35)'
        };
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`cute-btn ${className}`}
      style={{
        ...getVariantStyles(),
        padding: '14px 28px',
        borderRadius: 'var(--radius-full)',
        fontWeight: 700,
        fontSize: '1rem',
        border: variant === 'outline' ? '2px solid var(--primary)' : 'none',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        ...props.style
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
      }}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
      {sparkles.map(s => (
        <span
          key={s.id}
          style={{
            position: 'absolute',
            left: s.x,
            top: s.y,
            pointerEvents: 'none',
            animation: 'sparkle 0.6s forwards',
            fontSize: '16px'
          }}
        >
          ✨
        </span>
      ))}
    </button>
  );
};