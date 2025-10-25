import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from './Card';
import { ArrowRightIcon } from './Icons';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

interface BlogProps {
  posts?: BlogPost[];
}

const defaultPosts: BlogPost[] = [
  {
    id: '1',
    title: '5 AI Tools Every SMB Should Know About in 2024',
    excerpt: 'Discover the most impactful AI tools that can transform your small business operations.',
    category: 'AI Tools',
    date: 'Oct 20, 2024',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'The Complete Guide to AI Prompt Engineering',
    excerpt: 'Master the art of crafting effective prompts to get better results from AI models.',
    category: 'Tutorial',
    date: 'Oct 15, 2024',
    readTime: '8 min read',
  },
  {
    id: '3',
    title: 'How to Calculate ROI on Your AI Implementation',
    excerpt: 'A practical framework for measuring the return on investment from AI projects.',
    category: 'Business',
    date: 'Oct 10, 2024',
    readTime: '6 min read',
  },
  {
    id: '4',
    title: 'ChatGPT vs Claude: Which AI Assistant is Right for You?',
    excerpt: 'A detailed comparison of popular AI assistants and their use cases for businesses.',
    category: 'Comparison',
    date: 'Oct 5, 2024',
    readTime: '7 min read',
  },
  {
    id: '5',
    title: 'Automating Your Workflow with AI Agents',
    excerpt: 'Learn how to set up AI agents to automate repetitive tasks in your business.',
    category: 'Automation',
    date: 'Sep 30, 2024',
    readTime: '9 min read',
  },
  {
    id: '6',
    title: 'The Ethics of AI in Business: What You Need to Know',
    excerpt: 'Understanding ethical considerations when implementing AI solutions.',
    category: 'Ethics',
    date: 'Sep 25, 2024',
    readTime: '6 min read',
  },
];

export const Blog: React.FC<BlogProps> = ({ posts = defaultPosts }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category)))];

  const filteredPosts = selectedCategory && selectedCategory !== 'All'
    ? posts.filter((p) => p.category === selectedCategory)
    : posts;

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
          <h2 className="text-4xl font-bold font-display">Blog & Resources</h2>
          <p className="text-cosmic-night/70 dark:text-cosmic-light/70 mt-4 max-w-2xl mx-auto">
            Stay updated with the latest insights, tips, and strategies for AI integration.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === 'All' ? null : category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition transform ${
                (category === 'All' && selectedCategory === null) ||
                selectedCategory === category
                  ? 'bg-cosmic-violet text-white scale-105'
                  : 'bg-cosmic-cyan/10 text-cosmic-night dark:text-cosmic-light hover:bg-cosmic-cyan/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {filteredPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Card variant="elevated" className="h-full flex flex-col cursor-pointer group hover:border-cosmic-cyan/50">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-cosmic-cyan bg-cosmic-cyan/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-cosmic-night/50 dark:text-cosmic-light/50">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-cosmic-night dark:text-cosmic-light mb-3 group-hover:text-cosmic-cyan transition">
                    {post.title}
                  </h3>

                  <p className="text-sm text-cosmic-night/70 dark:text-cosmic-light/70">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6 pt-6 border-t border-cosmic-cyan/10">
                  <span className="text-xs text-cosmic-night/50 dark:text-cosmic-light/50">
                    {post.readTime}
                  </span>
                  <motion.div
                    className="text-cosmic-cyan"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRightIcon size={18} />
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-3 bg-cosmic-violet text-white font-semibold rounded-lg hover:bg-cosmic-cyan transition transform hover:scale-105">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
};
