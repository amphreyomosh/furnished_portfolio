"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

const allSkills = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Figma", icon: "🎭" },
  { name: "Framer Motion", icon: "✨" },
  { name: "REST APIs", icon: "🔌" },
  { name: "Git", icon: "🔧" },
  { name: "JavaScript", icon: "JS" },
  { name: "HTML/CSS", icon: "📝" },
  { name: "Web Performance", icon: "⚡" },
  { name: "Responsive Design", icon: "📱" },
  { name: "WordPress", icon: "W" },
  { name: "Squarespace", icon: "S" },
  { name: "UI/UX Design", icon: "✏️" },
  { name: "Accessibility", icon: "♿" },
];

const getRandomSkills = (count: number) => {
  const shuffled = [...allSkills].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export const SkillsSection = () => {
  const [displayedSkills, setDisplayedSkills] = useState<typeof allSkills>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setDisplayedSkills(getRandomSkills(8));

    const interval = setInterval(() => {
      setDisplayedSkills(getRandomSkills(8));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="py-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-light max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies.
          </p>
        </motion.div>

        {/* Skills Grid - 4 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeInOut",
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl group-hover:blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />

                <div className="relative p-8 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col items-center justify-center min-h-40">
                  <div className="text-6xl mb-4">{skill.icon}</div>
                  <h3 className="text-lg font-bold text-white text-center">
                    {skill.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
