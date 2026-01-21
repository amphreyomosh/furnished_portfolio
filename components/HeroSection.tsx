"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import React from "react";

const AnimatedSphere = () => {
  return null;
};

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const opacity = Math.max(0, 1 - scrollY / window.innerHeight);
        heroRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY.current = (e.clientY / window.innerHeight - 0.5) * 2;
      updateParallax();
    };

    const handleMouseLeave = () => {
      mouseX.current = 0;
      mouseY.current = 0;
      updateParallax();
    };

    const updateParallax = () => {
      if (contentRef.current) {
        const depth = 0.25;
        const moveX = mouseX.current * depth * 60;
        const moveY = mouseY.current * depth * 60;

        contentRef.current.style.transform = `
          translateX(${moveX}px)
          translateY(${moveY}px)
          rotateY(${mouseX.current * 8}deg)
          rotateX(${-mouseY.current * 8}deg)
          translateZ(${depth * 100}px)
        `;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-dark"
      style={{ perspective: "1500px" }}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/library/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Hero Content with Parallax */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.08s ease-out",
          willChange: "transform",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold leading-none mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
        >
          Creative
          <br />
          Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-light max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Crafting digital experiences that blend innovative design with
          cutting-edge technology. Specializing in immersive web applications
          and creative solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center space-x-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 md:px-8 md:py-4 bg-gray-800 text-sm md:text-base text-white font-semibold rounded-full hover:bg-gray-200 transition-colors"
            data-cursor-hover
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 md:px-8 md:py-4 border border-white text-sm md:text-base text-white font-semibold rounded-full hover:bg-white hover:text-dark transition-colors"
            data-cursor-hover
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
