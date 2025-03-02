
import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const teamMembers = [
  {
    name: "Noa Yaakov",
    position: "Software Engineer",
    image: "/lovable-uploads/noa.png"
  },
  {
    name: "Ivgeni Kucherov",
    position: "Senior Computer and AI Engineer at Nvidia",
    image: "/lovable-uploads/ivgeni.png"
  },
  {
    name: "Shir Papo",
    position: "Lawyer, with extensive marketing experience",
    image: "/lovable-uploads/shir.png"
  },
  {
    name: "Nir Shilo",
    position: "Voice Technologies Expert & Business Strategy",
    image: "/lovable-uploads/nir.png"
  }
];

const TeamSection: React.FC = () => {
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
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="team" ref={sectionRef} className="py-24 teal-gradient">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">TEAM</h2>
          <div className="w-24 h-1 bg-beige mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="team-card-bg rounded-full overflow-hidden border-2 border-beige flex flex-col items-center py-8"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 bg-beige-light border-2 border-white">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-teal mb-2">{member.name}</h3>
              <p className="text-gray-700 text-center px-4">{member.position}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
