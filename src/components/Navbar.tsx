
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Demo', href: '#demo' }
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass-effect py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#hero" 
          className="z-10"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Logo />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={cn(
                'text-teal px-1 py-2 font-medium transition-all duration-300 relative',
                'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-teal after:transition-all after:duration-300',
                'hover:text-teal-dark hover:after:w-full'
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-teal"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden glass-effect py-4 shadow-md"
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-teal py-2 text-center font-medium transition-colors hover:text-teal-dark"
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
