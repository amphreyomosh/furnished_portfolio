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
  { name: "CSS", logo: "https://cdn.simpleicons.org/css3/1572B6" },
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

  useEffect(() => {
    setDisplayedSkills(getRandomSkills(9)); // Changed from 8 to 9 for 3x3 grid

    const interval = setInterval(() => {
      setDisplayedSkills(getRandomSkills(9)); // Changed from 8 to 9
    }, 4000); // Rotate every 4 seconds

    return () => clearInterval(interval);
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

        {/* Skills Grid - 3 per row on mobile, 4 per row on desktop (9 logos rotating) */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-12 max-w-4xl mx-auto">
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.5,
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
