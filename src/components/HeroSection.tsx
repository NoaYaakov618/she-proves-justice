
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--mouse-x', x.toString());
      heroRef.current.style.setProperty('--mouse-y', y.toString());
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(26, 145, 139, 0.15), transparent 40%)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-beige-light via-beige to-white z-0" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-teal mb-8"
          >
            She Proves
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-700 mb-8"
          >
            Innovative AI-powered evidence collection for legal accountability
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a 
              href="#about" 
              className="inline-block bg-teal hover:bg-teal-dark text-white font-medium px-8 py-3 rounded-md transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[1]" />
    </div>
  );
};

export default HeroSection;
