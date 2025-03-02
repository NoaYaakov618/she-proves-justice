
import React from 'react';
import Logo from './Logo';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal text-white py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <Logo className="invert" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <div className="mb-4">
              <nav className="flex space-x-6 justify-center md:justify-end">
                <a href="#about" className="hover:text-beige transition-colors">About</a>
                <a href="#team" className="hover:text-beige transition-colors">Team</a>
                <a href="#demo" className="hover:text-beige transition-colors">Demo</a>
              </nav>
            </div>
            <div className="text-sm text-beige-light opacity-80">
              &copy; {new Date().getFullYear()} She Proves. All rights reserved.
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
