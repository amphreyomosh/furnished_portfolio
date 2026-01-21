"use client";

import { motion } from "framer-motion";
import React from "react";
import { Calendar, MapPin, Award } from "lucide-react";

const experiences = [
  {
    role: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Led development of scalable web applications using React and Node.js. Mentored junior developers and established best practices.",
    achievements: [
      "Reduced application load time by 60% through optimization",
      "Led migration from legacy codebase to modern stack",
      "Implemented CI/CD pipeline, improving deployment speed by 40%",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Digital Solutions Ltd.",
    location: "Austin, TX",
    period: "2020 - 2022",
    description:
      "Developed and maintained multiple client projects using React, Next.js, and PostgreSQL. Collaborated with UX designers and product teams.",
    achievements: [
      "Built 15+ production applications for diverse industries",
      "Improved code quality with comprehensive test coverage",
      "Implemented responsive design achieving 100 Lighthouse scores",
    ],
  },
  {
    role: "Junior Developer",
    company: "Creative Web Studio",
    location: "New York, NY",
    period: "2019 - 2020",
    description:
      "Started career building responsive websites and web applications. Learned modern development practices and collaborated with experienced developers.",
    achievements: [
      "Completed 20+ client projects successfully",
      "Mastered React fundamentals and REST API integration",
      "Contributed to open-source projects",
    ],
  },
];

const TimelineItem = ({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">
                {experience.role}
              </h3>
              <Award className="w-5 h-5 text-purple-400" />
            </div>
            <p className="text-lg text-purple-400 mb-2 font-semibold">
              {experience.company}
            </p>

            <div className="flex flex-col gap-2 mb-4 text-sm text-gray-light">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
            </div>

            <p className="text-gray-light mb-4">{experience.description}</p>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-white">
                Key Achievements:
              </p>
              <ul className="space-y-1">
                {experience.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-light flex items-start gap-2"
                  >
                    <span className="text-purple-400 mt-1">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className={`hidden md:flex ${
            index % 2 === 1 ? "md:order-1" : ""
          } justify-center`}
        >
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center border-4 border-dark">
              <div className="w-4 h-4 bg-dark rounded-full" />
            </div>
            {index < experiences.length - 1 && (
              <div className="w-1 h-24 bg-gradient-to-b from-purple-500 to-transparent mx-auto mt-2" />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-dark/50 backdrop-blur">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-gray-light max-w-2xl mx-auto">
            Professional journey with proven track record of delivering
            exceptional results.
          </p>
        </motion.div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
