import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'mark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const GoldEmblem: React.FC<{ size?: number; className?: string }> = ({ size = 48, className = '' }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Men & Motors Gold M Emblem"
    >
      <defs>
        <linearGradient id="goldGradL" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF3B0" />
          <stop offset="30%" stopColor="#FFC928" />
          <stop offset="70%" stopColor="#D49900" />
          <stop offset="100%" stopColor="#805400" />
        </linearGradient>
        <linearGradient id="goldGradR" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFADB" />
          <stop offset="35%" stopColor="#FFCE3B" />
          <stop offset="75%" stopColor="#B88000" />
          <stop offset="100%" stopColor="#664000" />
        </linearGradient>
        <filter id="mBevel" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.6"/>
        </filter>
      </defs>

      <g filter="url(#mBevel)">
        {/* Left upright ribbon loop */}
        <path 
          d="M18,36 L50,8 L76,32 L76,68 C76,76 69,82 60,82 C51,82 44,76 44,68 L44,40 L28,54 L28,68 C28,70 26,72 24,72 C22,72 20,70 20,68 L20,38 Z" 
          fill="url(#goldGradL)" 
          stroke="#784E00" 
          strokeWidth="1.2"
        />
        {/* Right upright ribbon loop with interlocking center */}
        <path 
          d="M82,36 L50,8 L24,32 L24,68 C24,76 31,82 40,82 C49,82 56,76 56,68 L56,40 L72,54 L72,68 C72,70 74,72 76,72 C78,72 80,70 80,68 L80,38 Z" 
          fill="url(#goldGradR)" 
          stroke="#523200" 
          strokeWidth="1.2"
        />
        {/* Interlocking top facet highlights */}
        <path d="M50,8 L64,21 L50,33 L36,21 Z" fill="#FFF5B8" opacity="0.65" />
        <path d="M18,36 L30,46 L24,52 L18,36 Z" fill="#FFE279" opacity="0.5" />
        <path d="M82,36 L70,46 L76,52 L82,36 Z" fill="#FFE279" opacity="0.5" />
      </g>
    </svg>
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'compact',
  size = 'md'
}) => {
  if (variant === 'mark') {
    const emblemSizes = { sm: 32, md: 44, lg: 64, xl: 88 };
    return <GoldEmblem size={emblemSizes[size]} className={className} />;
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        {/* Top Gold M Emblem */}
        <GoldEmblem size={size === 'xl' ? 96 : size === 'lg' ? 76 : 56} />
        
        {/* MEN & MOTORS */}
        <span className="font-display font-extrabold tracking-wider text-white text-2xl md:text-3xl lg:text-4xl uppercase mt-2 drop-shadow-md">
          MEN &amp; MOTORS
        </span>
        
        {/* CAR WASH & OIL CHANGE */}
        <span className="font-display font-bold tracking-widest text-[#F7F7F5] text-xs md:text-sm uppercase mt-0.5">
          CAR WASH &amp; OIL CHANGE
        </span>
        
        {/* A PROJECT OF MUNRO CAFE */}
        <span className="font-display font-bold tracking-wider text-[#FFC928] text-[10px] md:text-xs uppercase mt-1">
          A PROJECT OF MUNRO CAFE
        </span>
      </div>
    );
  }

  // Compact variant for Header / Nav
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <GoldEmblem size={size === 'sm' ? 36 : 44} />
      <div className="flex flex-col leading-none">
        <span className="font-display font-extrabold tracking-wider text-white text-lg md:text-xl uppercase drop-shadow-sm">
          MEN &amp; MOTORS
        </span>
        <span className="font-display font-semibold tracking-wider text-[#A6A6A6] text-[10px] md:text-xs uppercase mt-0.5">
          CAR WASH &amp; OIL CHANGE
        </span>
        <span className="font-display font-bold tracking-wide text-[#FFC928] text-[9px] uppercase mt-0.5">
          A PROJECT OF MUNRO CAFE
        </span>
      </div>
    </div>
  );
};
