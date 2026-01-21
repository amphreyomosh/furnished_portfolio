"use client";

import { motion } from "framer-motion";
import React from "react";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 93 },
      { name: "Three.js", level: 85 },
      { name: "Framer Motion", level: 88 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 86 },
      { name: "REST APIs", level: 92 },
      { name: "GraphQL", level: 80 },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 85 },
      { name: "AWS", level: 82 },
      { name: "Vercel", level: 90 },
      { name: "Jest", level: 88 },
      { name: "CI/CD", level: 85 },
    ],
  },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="text-sm text-gray-light">{level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
        />
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-light max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-purple-500/30">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
