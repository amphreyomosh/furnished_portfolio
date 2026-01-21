"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import {
  Code,
  Palette,
  Zap,
  Smartphone,
  Database,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies and best practices. Full-stack development with React, Next.js, and Node.js.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful and intuitive user interfaces with responsive design. Creating engaging digital experiences that users love.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Lightning-fast websites with optimized code, images, and assets. Achieving excellent Core Web Vitals and SEO scores.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Cross-platform mobile applications with React Native and Flutter. Native apps for iOS and Android platforms.",
  },
  {
    icon: Database,
    title: "Backend Solutions",
    description:
      "Scalable backend infrastructure with databases, APIs, and cloud deployment. Secure and efficient server solutions.",
  },
  {
    icon: BarChart3,
    title: "Technical Consulting",
    description:
      "Expert advice on technology stack selection, architecture design, and best practices for your projects.",
  },
];

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-8 lg:py-16 px-6 bg-dark/50 backdrop-blur"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          {/* Right Column - Sticky Title (appears first on mobile) */}
          <div className="lg:order-2 lg:sticky top-0 h-fit">
            <motion.div
              style={{
                opacity,
                scale,
              }}
              className="w-full"
            >
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
                  Services &
                  <br />
                  <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Solutions
                  </span>
                </h2>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="h-1 bg-white mb-8"
                />

                <p className="text-lg text-gray-light leading-relaxed max-w-md">
                  Comprehensive solutions tailored to your needs, from initial
                  concept to final deployment.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Left Column - Cards (appears second on mobile) */}
          <div className="lg:order-1 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl group-hover:blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />

                    <div className="relative p-8 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col">
                      <Icon className="w-14 h-14 text-purple-400 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-base text-gray-light leading-relaxed flex-grow">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
