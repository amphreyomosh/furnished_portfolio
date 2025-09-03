'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [activeIndex, setActiveIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [currentCarIndex, setCurrentCarIndex] = useState(0);

  useEffect(() => {
    // Generate random image URLs for demonstration
    const randomImages = Array.from({ length: 5 }, (_, i) => `https://picsum.photos/seed/${i}/1200/800`);
    setImages(randomImages);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const cars = [
    {
      image: "https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/5%20Best%20Coding%20Programs%20for%20Aspiring%20Programmers1650304687858345.jpg",
      stats: { speed: 95, acceleration: 88, handling: 75, durability: 70 }
    },
    {
      image: "https://cloudfront.safaribookings.com/blog/2023/07/00-Best_Places_and_Tourist_Attractions_To_Visit_in_and_Around_Mombasa-BW-header1200px.jpg",
      stats: { speed: 85, acceleration: 95, handling: 90, durability: 80 }
    },
    {
      image: "https://cdn.mos.cms.futurecdn.net/LBRvRuei7AzSR2Bp679EwX.jpg",
      stats: { speed: 90, acceleration: 80, handling: 85, durability: 85 }
    },
    {
      image: "https://images.stockcake.com/public/c/d/2/cd206075-9b83-460f-a78f-cc36c2f3de90_large/futuristic-coding-workspace-stockcake.jpg",
      stats: { speed: 80, acceleration: 75, handling: 95, durability: 90 }
    },
    {
      image: "https://www.gsma.com/newsroom/wp-content/uploads//Woman-using-laptop-scaled.jpg",
      stats: { speed: 88, acceleration: 85, handling: 80, durability: 75 }
    },
    {
      image: "https://static.vecteezy.com/system/resources/previews/001/410/877/non_2x/programming-and-coding-futuristic-banner-vector.jpg",
      stats: { speed: 92, acceleration: 90, handling: 78, durability: 82 }
    }
  ];

  const nextCar = () => {
    setCurrentCarIndex((prevIndex) => (prevIndex + 1) % cars.length);
  };

  const previousCar = () => {
    setCurrentCarIndex((prevIndex) => (prevIndex - 1 + cars.length) % cars.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') previousCar();
      if (e.key === 'ArrowRight') nextCar();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const slideTransition = {
    transition: 'transform 0.5s ease-in-out',
  };

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              animate={inView ? { width: '100px' } : {}}
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
                I'm a passionate creative developer with over 5 years of experience crafting 
                digital experiences that push the boundaries of what's possible on the web. 
                My work sits at the intersection of art and technology.
              </p>
              
              <p className="text-body text-gray-light leading-relaxed font-serif mb-8">
                From interactive installations to cutting-edge web applications, I specialize 
                in creating immersive experiences that captivate and inspire. Every project 
                is an opportunity to explore new technologies and creative possibilities.
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

        {/* Car Carousel Section */}
        <div className="relative flex justify-center items-center mt-24 h-96 bg-black" style={{
          perspective: '1200px'
        }}>
          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-0.5 bg-cyan-400 rounded-full opacity-70"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${Math.random() * 3 + 3}s`,
                  animation: 'float 6s linear infinite'
                }}
              />
            ))}
          </div>

          {/* 3D Carousel Container */}
          <div 
            className="relative w-64 h-48 transition-transform duration-600 ease-out"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateY(${-currentCarIndex * 60}deg)`
            }}
          >
            {cars.map((car, index) => (
              <div
                key={index}
                className={`absolute w-60 h-60 bg-white bg-opacity-5 backdrop-blur-lg rounded-3xl border border-white border-opacity-10 
                  flex items-center justify-center cursor-pointer transition-all duration-400 shadow-2xl overflow-hidden
                  ${index === currentCarIndex ? 'scale-110 -translate-y-2' : ''}`}
                style={{
                  transform: `rotateY(${index * 60}deg) translateZ(350px)`,
                  backdropFilter: 'blur(20px)',
                  boxShadow: index === currentCarIndex 
                    ? '0 25px 50px rgba(255, 107, 107, 0.3)' 
                    : '0 20px 40px rgba(0, 0, 0, 0.3)',
                  padding: '4px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform += ' translateY(-15px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 245, 255, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(0, 245, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `rotateY(${index * 60}deg) translateZ(350px) ${index === currentCarIndex ? 'scale(1.1) translateY(-10px)' : ''}`;
                  e.currentTarget.style.boxShadow = index === currentCarIndex 
                    ? '0 25px 50px rgba(255, 107, 107, 0.3)' 
                    : '0 20px 40px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.borderColor = index === currentCarIndex 
                    ? 'rgba(255, 107, 107, 0.5)' 
                    : 'rgba(255, 255, 255, 0.1)';
                }}
              >
                {/* Gradient overlay */}
                <div 
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 rounded-3xl"
                  style={{
                    background: index === currentCarIndex 
                      ? 'linear-gradient(135deg, rgba(255, 107, 107, 0.15), rgba(0, 245, 255, 0.15))'
                      : 'linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(255, 107, 107, 0.1))'
                  }}
                />
                
                {/* Car Image Container */}
                <div 
                  className="w-52 h-52 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center text-8xl relative overflow-hidden border border-white border-opacity-5"
                  style={{ fontSize: '6rem' }}
                >
                  {/* Rotating glow effect */}
                  <div 
                    className="absolute w-full h-full opacity-0 transition-opacity duration-300"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent, rgba(0, 245, 255, 0.1), transparent)',
                      animation: 'rotate 4s linear infinite',
                      width: '100%',
                      height: '100%',
                      border: '4px'
                    }}
                  />
                  <img src={car.image} alt="Car Image" className="w-full h-full object-cover rounded-md" />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-16 absolute bottom-0 w-full">
            <button
              onClick={previousCar}
              className="w-14 h-14 bg-black bg-opacity-8 backdrop-blur-lg border border-white border-opacity-10 
                rounded-full text-white text-2xl flex items-center justify-center cursor-pointer 
                transition-all duration-300 hover:bg-gray-400 hover:bg-opacity-15 hover:border-gray-400 
                hover:border-opacity-30 hover:scale-110 hover:shadow-lg mt-11 mr-2"
            >
              ‹
            </button>
            <button
              onClick={nextCar}
              className="w-14 h-14 bg-black bg-opacity-8 backdrop-blur-lg border border-white border-opacity-10 
                rounded-full text-white text-2xl flex items-center justify-center cursor-pointer 
                transition-all duration-300 hover:bg-gray-400 hover:bg-opacity-15 hover:border-gray-400 
                hover:border-opacity-30 hover:scale-110 hover:shadow-lg mt-11 ml-2"
            >
              ›
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-gray-800"
        >
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '5+', label: 'Years Experience' },
            { number: '20+', label: 'Happy Clients' },
            { number: '∞', label: 'Creative Ideas' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="text-3xl md:text-4xl font-bold text-white mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-light text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .arrow {
          color: black;
          transition: color 0.3s;
        }
        .arrow:hover {
          color: gray;
        }

        @keyframes float {
          0% { transform: translateY(100vh) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-10vh) translateX(100px); opacity: 0; }
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}