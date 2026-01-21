"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import React from "react";

export const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      id="about"
      className="py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Headline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-section font-bold leading-tight text-white mb-8">
              Designing the
              <br />
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Future of Web
              </span>
            </h2>

            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: "100px" } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-white mb-8"
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="border-l-2 border-gray-600 pl-8">
              <p className="text-body text-gray-light leading-relaxed font-serif mb-6">
                I'm a passionate creative developer with over 5 years of
                experience crafting digital experiences that push the boundaries
                of what's possible on the web. My work sits at the intersection
                of art and technology.
              </p>

              <p className="text-body text-gray-light leading-relaxed font-serif mb-8">
                From interactive installations to cutting-edge web applications,
                I specialize in creating immersive experiences that captivate
                and inspire. Every project is an opportunity to explore new
                technologies and creative possibilities.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-white font-semibold mb-3">Frontend</h3>
                  <ul className="text-gray-light space-y-1 text-sm">
                    <li>React / Next.js</li>
                    <li>Three.js / WebGL</li>
                    <li>Framer Motion</li>
                    <li>TypeScript</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-3">Creative</h3>
                  <ul className="text-gray-light space-y-1 text-sm">
                    <li>3D Modeling</li>
                    <li>Motion Graphics</li>
                    <li>UI/UX Design</li>
                    <li>Creative Coding</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
