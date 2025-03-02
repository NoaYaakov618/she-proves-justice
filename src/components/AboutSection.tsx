
import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Shield, Clock, Lock } from 'lucide-react';

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  const features = [
    {
      icon: <Shield className="w-10 h-10 text-teal" />,
      title: 'Real-time Protection',
      description: 'Operates discreetly and fully complies with privacy laws and GDPR on mobile devices and smartwatches.'
    },
    {
      icon: <Clock className="w-10 h-10 text-teal" />,
      title: 'Secure Evidence',
      description: 'All evidence is securely stored, timestamped, and geotagged to ensure court-admissible, tamper-proof forensic proof.'
    },
    {
      icon: <Lock className="w-10 h-10 text-teal" />,
      title: 'Blockchain Security',
      description: 'Data is encrypted and stored on a blockchain, eliminating any possibility of deletion or manipulation.'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-teal mb-6">She Proves</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              An innovative AI-powered solution for violence recognition and preserving forensic evidence for legal proceedings, 
              ensuring the ability to file an indictment and secure a conviction.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-lg bg-beige bg-opacity-30 border border-beige-dark hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-teal-dark mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-700 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-center text-lg text-gray-700 leading-relaxed"
          >
            By enabling legal accountability and strengthening deterrence, She Proves will reduce violence rates and provide 
            victims of all forms of violence with a solid legal foundation for financial compensation and justice.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
