import React from "react";
import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ServicesSection } from "../components/ServicesSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ContactSection } from "../components/ContactSection";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
