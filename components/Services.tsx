import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './Card';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface ServicesProps {
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    icon: '🎨',
    title: 'Video & Image Prompt Engineering',
    description: 'Master Midjourney and Stable Diffusion to generate stunning visuals for your brand.',
  },
  {
    icon: '⚡',
    title: 'Vibe Coding',
    description: 'Junior-level app development using no-code and low-code platforms.',
  },
  {
    icon: '🤖',
    title: 'AI Integration Consulting',
    description: 'Strategic business audits and custom AI integration solutions.',
  },
];

export const Services: React.FC<ServicesProps> = ({ services = defaultServices }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -5,
      boxShadow: '0 20px 40px rgba(0, 229, 255, 0.2)',
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="py-20 px-4 bg-cosmic-light dark:bg-cosmic-night">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold font-display">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-cosmic mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <motion.div
                whileHover="hover"
                variants={cardHoverVariants}
              >
                <Card variant="bordered" className="h-full">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold font-display mb-3">{service.title}</h3>
                  <p className="text-cosmic-night/70 dark:text-cosmic-light/70">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
