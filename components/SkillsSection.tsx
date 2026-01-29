"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

const allSkills = [
  { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
  { name: "HTML", logo: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "WordPress", logo: "https://cdn.simpleicons.org/wordpress/21759B" },
  { name: "Squarespace", logo: "https://cdn.simpleicons.org/squarespace/000000" },
  { name: "Wix", logo: "https://cdn.simpleicons.org/wix/0C6EFC" },
];

const getRandomSkills = (count: number) => {
  const shuffled = [...allSkills].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export const SkillsSection = () => {
  const [displayedSkills, setDisplayedSkills] = useState<typeof allSkills>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Initialize with random logos based on screen size
    const count = window.innerWidth < 768 ? 9 : 8;
    const initialSkills = getRandomSkills(count);
    setDisplayedSkills(initialSkills);

    // Create individual timers for each logo position
    const timers: NodeJS.Timeout[] = [];
    
    initialSkills.forEach((_, index) => {
      // Random interval between 10-20 seconds for each logo
      const randomInterval = 10000 + Math.random() * 10000;
      
      const timer = setTimeout(function shuffleLogo() {
        setDisplayedSkills(prev => {
          const newSkills = [...prev];
          const currentCount = window.innerWidth < 768 ? 9 : 8;
          
          // Only shuffle if we still have the same number of logos
          if (newSkills.length === currentCount) {
            // Get a random logo that's not currently displayed
            const availableLogos = allSkills.filter(skill => 
              !newSkills.some(displayed => displayed.name === skill.name)
            );
            
            if (availableLogos.length > 0) {
              const randomLogo = availableLogos[Math.floor(Math.random() * availableLogos.length)];
              newSkills[index] = randomLogo;
            }
          }
          
          return newSkills;
        });
        
        // Schedule next shuffle for this position with new random interval
        const nextInterval = 10000 + Math.random() * 10000;
        timers[index] = setTimeout(shuffleLogo, nextInterval);
      }, randomInterval);
      
      timers.push(timer);
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section id="skills" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies.
          </p>
        </motion.div>

        {/* Skills Grid - Mobile: 3 rows (3x3), Desktop: 2 rows (4x2) */}
        <div className="grid grid-cols-3 md:grid-cols-4 md:grid-rows-2 gap-6 md:gap-12 max-w-4xl mx-auto">
          <AnimatePresence mode="sync">
            {displayedSkills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="flex items-center justify-center"
              >
                <img 
                  src={skill.logo} 
                  alt={`${skill.name} logo`}
                  className="w-16 h-16 md:w-24 md:h-24 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
