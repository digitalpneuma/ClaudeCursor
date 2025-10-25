import type { NextPage } from 'next';
import Head from 'next/head';
import { Button, Card } from '@/components';

interface HomeProps {
  isDark: boolean;
  toggleDarkMode: () => void;
}

const Home: NextPage<HomeProps> = ({ isDark, toggleDarkMode }) => {
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
            <Button
              variant="secondary"
              size="sm"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {isDark ? '☀️ Light' : '🌙 Dark'}
            </Button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20 px-4">
          <div className="text-center max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold font-display mb-6 animate-fade-in">
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                Unlock AI's Vibe
              </span>
              <br />
              <span>for Your Business</span>
            </h2>
            <p className="text-xl md:text-2xl text-cosmic-night/70 dark:text-cosmic-light/70 mb-8 animate-slide-up">
              AI integration and app development consulting tailored for small and medium-sized businesses.
            </p>
            <Button variant="success" size="lg">
              GET YOUR AI AUDIT
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-cosmic-light dark:bg-cosmic-night">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold font-display text-center mb-16">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Video & Image Prompt Engineering',
                  description: 'Master Midjourney and Stable Diffusion to generate stunning visuals for your brand.',
                  icon: '🎨'
                },
                {
                  title: 'Vibe Coding',
                  description: 'Junior-level app development using no-code and low-code platforms.',
                  icon: '⚡'
                },
                {
                  title: 'AI Integration Consulting',
                  description: 'Strategic business audits and custom AI integration solutions.',
                  icon: '🤖'
                }
              ].map((service, idx) => (
                <Card key={idx} variant="bordered" className="hover:shadow-glow-cyan cursor-pointer">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold font-display mb-3">{service.title}</h3>
                  <p className="text-cosmic-night/70 dark:text-cosmic-light/70">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-cosmic-night text-cosmic-light">
          <div className="max-w-7xl mx-auto text-center">
            <p>&copy; 2024 AI Vibe Co. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
