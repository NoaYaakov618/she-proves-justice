
import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const DemoSection: React.FC = () => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start('visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Updated demo video URL
  const demoVideoUrl = "https://www.youtube.com/embed/tZ0rhG7R944";

  return (
    <section id="demo" ref={sectionRef} className="py-24 bg-beige bg-opacity-30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-teal mb-6">See She Proves in Action</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Watch our demonstration to see how She Proves works to protect individuals and provide legal accountability.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-beige-dark relative"
          style={{ aspectRatio: "16/9" }}
        >
          {!isVideoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-beige">
              <div className="w-12 h-12 border-4 border-teal border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <iframe
            src={demoVideoUrl}
            title="She Proves Demo Video"
            className="w-full h-full"
            style={{ opacity: isVideoLoaded ? 1 : 0 }}
            onLoad={() => setIsVideoLoaded(true)}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
