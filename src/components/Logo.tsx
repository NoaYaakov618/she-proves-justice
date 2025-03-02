
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn('flex items-center', className)}>
      <img 
        src="/lovable-uploads/logo.png" 
        alt="She Proves Logo" 
        className="h-12 w-auto"
      />
    </div>
  );
};

export default Logo;
