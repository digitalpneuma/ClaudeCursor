import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

interface HeroProps {
  onAuditClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onAuditClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-cosmic-cyan/10 rounded-full blur-3xl"
        animate={floatingVariants.float}
        transition={{ duration: 8 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-cosmic-violet/10 rounded-full blur-3xl"
        animate={floatingVariants.float}
        transition={{ duration: 6, delay: 2 }}
      />

      <motion.div
        className="text-center max-w-2xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold font-display mb-6"
          variants={itemVariants}
        >
          <span className="bg-gradient-cosmic bg-clip-text text-transparent">
            Unlock AI's Vibe
          </span>
          <br />
          <span className="text-cosmic-night dark:text-cosmic-light">
            for Your Business
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-xl md:text-2xl text-cosmic-night/70 dark:text-cosmic-light/70 mb-8"
          variants={itemVariants}
        >
          AI integration and app development consulting tailored for small and medium-sized businesses.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <Button variant="success" size="lg" onClick={onAuditClick}>
            GET YOUR AI AUDIT
          </Button>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-cosmic-cyan text-3xl">↓</div>
        </motion.div>
      </motion.div>
    </section>
  );
};
