
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn('flex items-center', className)}>
      <img 
        src="/lovable-uploads/9da3a432-2bb4-4036-bec5-ec500067a43c.png" 
        alt="She Proves Logo" 
        className="h-12 w-auto"
      />
    </div>
  );
};

export default Logo;
