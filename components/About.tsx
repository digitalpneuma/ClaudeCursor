import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const timelineEvents = [
    { year: '2019', title: 'Founded', description: 'Started as a small AI consulting group' },
    { year: '2021', title: 'Growth', description: 'Expanded to 15+ consultants and developers' },
    { year: '2023', title: 'Innovation', description: 'Launched "Vibe Coding" methodology' },
    { year: '2024', title: 'Scale', description: 'Serving 100+ SMB clients worldwide' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-20 px-4 bg-cosmic-night text-cosmic-light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold font-display">About Us</h2>
          <p className="text-cosmic-cyan mt-4 max-w-2xl mx-auto">
            We're a team of passionate AI enthusiasts dedicated to helping SMBs unlock the potential of artificial intelligence.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-2xl font-bold font-display mb-4">Our Journey</h3>
            <p className="text-cosmic-light/70 mb-4">
              Founded in 2019, AI Vibe Co. started with a simple mission: make AI accessible and practical for small businesses.
            </p>
            <p className="text-cosmic-light/70 mb-4">
              We recognized that most AI consulting firms focus on enterprise clients, leaving SMBs without guidance. That's where we come in.
            </p>
            <p className="text-cosmic-light/70">
              Today, we've helped 100+ businesses integrate AI into their operations, saving thousands of hours and unlocking new revenue streams.
            </p>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: '100+', label: 'Clients Served' },
              { number: '50M+', label: 'Hours Saved' },
              { number: '15+', label: 'Team Members' },
              { number: '5', label: 'Years Experience' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="bg-cosmic-violet/10 rounded-lg p-6 text-center border border-cosmic-cyan/20"
                variants={itemVariants}
              >
                <div className="text-3xl font-bold text-cosmic-cyan mb-2">{stat.number}</div>
                <div className="text-sm text-cosmic-light/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold font-display mb-12 text-center">Our Timeline</h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-cyan-violet" />

            {/* Timeline items */}
            <div className="space-y-12">
              {timelineEvents.map((event, idx) => (
                <motion.div
                  key={idx}
                  className={`flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${idx % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-cosmic-violet/10 rounded-lg p-6 border border-cosmic-cyan/20">
                      <h4 className="font-bold text-cosmic-cyan text-lg">{event.title}</h4>
                      <p className="text-sm text-cosmic-light/70 mt-2">{event.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="w-2/12 flex justify-center">
                    <motion.div
                      className="w-4 h-4 bg-cosmic-cyan rounded-full border-4 border-cosmic-night"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  {/* Year */}
                  <div className="w-5/12">
                    <p className="text-2xl font-bold text-cosmic-cyan">{event.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
