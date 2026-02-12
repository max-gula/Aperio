import React from 'react';

interface LogoProps {
  className?: string;
  fill?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "", fill = "#B41F24" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span 
        className="text-2xl lg:text-3xl font-black tracking-tighter leading-none"
        style={{ color: fill, fontFamily: 'sans-serif' }}
      >
        APERIO
      </span>
    </div>
  );
};

export default Logo;