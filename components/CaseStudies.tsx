import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from './Card';
import { ArrowRightIcon } from './Icons';

interface CaseStudy {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
}

interface CaseStudiesProps {
  cases?: CaseStudy[];
}

const defaultCases: CaseStudy[] = [
  {
    company: 'TechStartup Co.',
    industry: 'SaaS',
    challenge: 'Manual data entry was taking 40 hours per week',
    solution: 'Implemented AI-powered document processing and automation',
    result: 'Reduced data entry time by 95%',
    metrics: [
      { label: 'Time Saved', value: '38 hrs/week' },
      { label: 'Cost Reduction', value: '60%' },
    ],
  },
  {
    company: 'Local Retail Shop',
    industry: 'E-commerce',
    challenge: 'Low conversion rates and poor customer insights',
    solution: 'Deployed AI chatbot and personalization engine',
    result: 'Increased conversion by 45%',
    metrics: [
      { label: 'Conversion Lift', value: '+45%' },
      { label: 'Customer Satisfaction', value: '+82%' },
    ],
  },
  {
    company: 'Healthcare Clinic',
    industry: 'Healthcare',
    challenge: 'Appointment scheduling and patient follow-ups were inefficient',
    solution: 'Built custom AI scheduling and reminder system',
    result: 'Reduced no-shows by 70%',
    metrics: [
      { label: 'No-Show Reduction', value: '-70%' },
      { label: 'Revenue Increase', value: '+$150k/year' },
    ],
  },
];

export const CaseStudies: React.FC<CaseStudiesProps> = ({ cases = defaultCases }) => {
  const [current, setCurrent] = useState(0);

  const slideVariants = {
    enter: { opacity: 0, x: 1000 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -1000 },
  };

  const next = () => setCurrent((prev) => (prev + 1) % cases.length);
  const prev = () => setCurrent((prev) => (prev - 1 + cases.length) % cases.length);

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
          <h2 className="text-4xl font-bold font-display">Case Studies</h2>
          <p className="text-cosmic-night/70 dark:text-cosmic-light/70 mt-4 max-w-2xl mx-auto">
            See how we've helped real businesses transform with AI
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative h-96 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="absolute w-full md:w-3/4"
            >
              <Card variant="elevated" className="h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left side - Company info */}
                  <div>
                    <h3 className="text-2xl font-bold font-display text-cosmic-night dark:text-cosmic-light mb-2">
                      {cases[current].company}
                    </h3>
                    <p className="text-cosmic-cyan text-sm font-semibold mb-6">
                      {cases[current].industry}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-cosmic-night dark:text-cosmic-light mb-2">Challenge</h4>
                        <p className="text-sm text-cosmic-night/70 dark:text-cosmic-light/70">
                          {cases[current].challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-cosmic-night dark:text-cosmic-light mb-2">Solution</h4>
                        <p className="text-sm text-cosmic-night/70 dark:text-cosmic-light/70">
                          {cases[current].solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Results */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-cosmic-night dark:text-cosmic-light mb-4">Results</h4>
                      <p className="text-lg font-bold text-cosmic-cyan mb-6">
                        {cases[current].result}
                      </p>

                      <div className="space-y-4">
                        {cases[current].metrics.map((metric, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                            className="bg-cosmic-cyan/10 rounded-lg p-4"
                          >
                            <p className="text-xs text-cosmic-night/70 dark:text-cosmic-light/70">
                              {metric.label}
                            </p>
                            <p className="text-xl font-bold text-cosmic-cyan">
                              {metric.value}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 z-10 p-2 rounded-full bg-cosmic-violet text-white hover:bg-cosmic-cyan transition transform hover:scale-110"
            aria-label="Previous case study"
          >
            <ArrowRightIcon size={24} className="transform rotate-180" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 z-10 p-2 rounded-full bg-cosmic-violet text-white hover:bg-cosmic-cyan transition transform hover:scale-110"
            aria-label="Next case study"
          >
            <ArrowRightIcon size={24} />
          </button>
        </div>

        {/* Indicators */}
        <motion.div
          className="flex justify-center gap-2 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          {cases.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === current
                  ? 'w-8 bg-cosmic-violet'
                  : 'w-2 bg-cosmic-cyan/50 hover:bg-cosmic-cyan'
              }`}
              aria-label={`Go to case study ${idx + 1}`}
            />
          ))}
        </motion.div>

        {/* Counter */}
        <div className="text-center mt-8 text-sm text-cosmic-night/70 dark:text-cosmic-light/70">
          {current + 1} / {cases.length}
        </div>
      </div>
    </section>
  );
};
