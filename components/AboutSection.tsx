"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import React from "react";
import { ArrowRight } from "lucide-react";

export const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      id="about"
      className="py-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-dark"
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start"
        >
          {/* Left Column - Header and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-start"
          >
            <div className="mb-8">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
                Front-End
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Web Developer
                </span>
                <br />& UI Designer
              </h2>

              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "60px" } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-white mb-8"
              />
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-3 px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors w-fit"
            >
              Let's Work Together
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-light leading-relaxed">
                I'm a Front-End Web Developer and UI Designer who enjoys
                creating modern, responsive, and user-friendly web experiences.
                I love turning ideas and designs into clean, functional
                interfaces that feel intuitive and work seamlessly across all
                devices.
              </p>

              <p className="text-lg text-gray-light leading-relaxed">
                My approach focuses on building websites that not only look good
                but are easy to use and perform well. I design interfaces using
                Figma, paying close attention to clarity, usability, and visual
                balance before bringing them to life with React and Next.js.
              </p>

              <p className="text-lg text-gray-light leading-relaxed">
                Alongside development, I also teach computer packages and web
                design to students, which has strengthened my communication
                skills and attention to best practices. With 2 years of
                experience working with WordPress and Squarespace, I'm
                comfortable creating both custom front-end solutions and
                CMS-based websites, always aiming to deliver practical,
                reliable, and impactful results.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-gray-800">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-white font-semibold mb-3">Development</h3>
                <ul className="text-gray-light space-y-2 text-sm">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>HTML / CSS / JS</li>
                  <li>Responsive Design</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-white font-semibold mb-3">
                  Design & Tools
                </h3>
                <ul className="text-gray-light space-y-2 text-sm">
                  <li>Figma</li>
                  <li>WordPress</li>
                  <li>Squarespace</li>
                  <li>UI/UX Design</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
