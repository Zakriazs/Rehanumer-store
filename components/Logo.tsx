import React from 'react';

interface LogoProps {
  className?: string;
  iconClass?: string;
  textSize?: string;
  variant?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  iconClass = "w-8 h-8", 
  textSize = "text-xl",
  variant = 'dark' 
}) => {
  const isDark = variant === 'dark';
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg 
        className={iconClass}
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Rehanumer Logo"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" /> {/* Indigo 600 */}
            <stop offset="100%" stopColor="#818CF8" /> {/* Indigo 400 */}
          </linearGradient>
          <linearGradient id="logoGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" /> 
            <stop offset="100%" stopColor="#E0E7FF" /> 
          </linearGradient>
        </defs>
        
        {/* Bag Body */}
        <path 
          d="M20 35 L25 85 C25.5 90 30 93 35 93 H65 C70 93 74.5 90 75 85 L80 35 H20 Z" 
          fill={isDark ? "url(#logoGradient)" : "white"} 
        />
        
        {/* Bag Handle */}
        <path 
          d="M35 35 V28 C35 18 40 12 50 12 C60 12 65 18 65 28 V35" 
          stroke={isDark ? "url(#logoGradient)" : "white"} 
          strokeWidth="8" 
          strokeLinecap="round" 
        />
        
        {/* Minimal R accent */}
        <path 
          d="M45 55 L45 75 M45 55 L55 55 C60 55 60 65 55 65 L45 65 L58 75" 
          stroke="white" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          opacity={isDark ? "0.9" : "0"} 
        />
        {/* Simple dot for light mode */}
        {!isDark && <circle cx="50" cy="65" r="10" fill="#4F46E5" />}
      </svg>
      <span className={`font-bold tracking-tight ${textSize} ${isDark ? 'text-slate-900' : 'text-white'}`}>
        Rehanumer
      </span>
    </div>
  );
};