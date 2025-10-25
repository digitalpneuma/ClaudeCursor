import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { Button, Hero, Services, About, CaseStudies } from '@/components';

interface HomeProps {
  isDark: boolean;
  toggleDarkMode: () => void;
}

const Home: NextPage<HomeProps> = ({ isDark, toggleDarkMode }) => {
  const [showAuditForm, setShowAuditForm] = useState(false);

  return (
    <>
      <Head>
        <title>AI Consultancy - Unlock AI's Vibe for Your Business</title>
        <meta name="description" content="AI integration and app development for SMBs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-cosmic-light dark:bg-cosmic-dark text-cosmic-night dark:text-cosmic-light">
        {/* Navigation / Header */}
        <header className="fixed top-0 w-full bg-white/80 dark:bg-cosmic-dark/80 backdrop-blur-md z-50 border-b border-cosmic-cyan/20">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold font-display bg-gradient-cosmic bg-clip-text text-transparent">
              AI Vibe Co.
            </h1>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAuditForm(!showAuditForm)}
              >
                Book Audit
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
              >
                {isDark ? '☀️' : '🌙'}
              </Button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <Hero onAuditClick={() => setShowAuditForm(true)} />

        {/* Services Section */}
        <Services />

        {/* About Section */}
        <About />

        {/* Case Studies Section */}
        <CaseStudies />

        {/* Footer */}
        <footer className="py-12 px-4 bg-cosmic-night text-cosmic-light">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold font-display mb-4">Company</h3>
                <ul className="space-y-2 text-sm opacity-70">
                  <li><a href="#about" className="hover:text-cosmic-cyan transition">About</a></li>
                  <li><a href="#blog" className="hover:text-cosmic-cyan transition">Blog</a></li>
                  <li><a href="#careers" className="hover:text-cosmic-cyan transition">Careers</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold font-display mb-4">Services</h3>
                <ul className="space-y-2 text-sm opacity-70">
                  <li><a href="#services" className="hover:text-cosmic-cyan transition">Consulting</a></li>
                  <li><a href="#services" className="hover:text-cosmic-cyan transition">Development</a></li>
                  <li><a href="#services" className="hover:text-cosmic-cyan transition">Training</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold font-display mb-4">Legal</h3>
                <ul className="space-y-2 text-sm opacity-70">
                  <li><a href="#privacy" className="hover:text-cosmic-cyan transition">Privacy</a></li>
                  <li><a href="#terms" className="hover:text-cosmic-cyan transition">Terms</a></li>
                  <li><a href="#cookie" className="hover:text-cosmic-cyan transition">Cookies</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold font-display mb-4">Connect</h3>
                <ul className="space-y-2 text-sm opacity-70">
                  <li><a href="#twitter" className="hover:text-cosmic-cyan transition">Twitter</a></li>
                  <li><a href="#linkedin" className="hover:text-cosmic-cyan transition">LinkedIn</a></li>
                  <li><a href="#github" className="hover:text-cosmic-cyan transition">GitHub</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-cosmic-cyan/20 pt-8">
              <p className="text-center text-sm opacity-70">
                &copy; 2024 AI Vibe Co. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
