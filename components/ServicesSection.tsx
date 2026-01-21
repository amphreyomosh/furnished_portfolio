"use client";

import { motion } from "framer-motion";
import React from "react";
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
  return (
    <section id="services" className="py-24 px-6 bg-dark/50 backdrop-blur">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-xl text-gray-light max-w-2xl mx-auto">
            Comprehensive solutions tailored to your needs, from initial concept
            to final deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl group-hover:blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />

                <div className="relative p-8 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-purple-500/50 transition-all duration-300">
                  <Icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
