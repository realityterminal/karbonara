import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

/**
 * LandingPage assembles the main sections of the landing page.
 * Ensures modularity, maintainability, and visual consistency.
 */
const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
