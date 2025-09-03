import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { HeroSection } from '../components/HeroSection';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Home;
