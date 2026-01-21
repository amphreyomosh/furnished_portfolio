"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Immersive Art Gallery",
    subtitle: "WebGL Experience",
    description:
      "A virtual art gallery built with Three.js featuring interactive 3D environments and dynamic lighting systems.",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
    technologies: ["Three.js", "WebGL", "React", "GSAP"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "AI-Powered Dashboard",
    subtitle: "Data Visualization",
    description:
      "Modern analytics dashboard with real-time data visualization and machine learning insights.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["Next.js", "D3.js", "Python", "TensorFlow"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Interactive Portfolio",
    subtitle: "Creative Showcase",
    description:
      "Award-winning portfolio website featuring custom animations and immersive scroll experiences.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["React", "Framer Motion", "Lenis", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    subtitle: "Full-Stack Solution",
    description:
      "Modern e-commerce platform with advanced filtering, payment integration, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-orange-500 to-red-500",
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="py-32 px-6 bg-dark-light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-light max-w-2xl mx-auto">
            A curated selection of my most impactful work, showcasing the
            intersection of creativity and technical excellence.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
              data-cursor-hover
            >
              <div className="project-card relative overflow-hidden rounded-2xl bg-dark border border-gray-800 hover:border-gray-600 transition-all duration-500">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}
                  />

                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-center text-white">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <ExternalLink className="w-8 h-8" />
                      </motion.div>
                      <p className="font-semibold">View Project</p>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-light font-medium">
                      {project.subtitle}
                    </span>
                    <div className="flex space-x-2">
                      {project.liveUrl && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, "_blank");
                          }}
                          className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                          data-cursor-hover
                        >
                          <ExternalLink className="w-4 h-4 text-white" />
                        </button>
                      )}
                      {project.githubUrl && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, "_blank");
                          }}
                          className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                          data-cursor-hover
                        >
                          <Github className="w-4 h-4 text-white" />
                        </button>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-light text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-dark border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-80">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color} opacity-60`}
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    data-cursor-hover
                  >
                    ×
                  </button>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-light font-medium">
                      {selectedProject.subtitle}
                    </span>
                    <div className="flex space-x-3">
                      {selectedProject.liveUrl && (
                        <button
                          onClick={() =>
                            window.open(selectedProject.liveUrl, "_blank")
                          }
                          className="px-4 py-2 bg-white text-dark rounded-full hover:bg-gray-200 transition-colors font-medium"
                          data-cursor-hover
                        >
                          View Live
                        </button>
                      )}
                      {selectedProject.githubUrl && (
                        <button
                          onClick={() =>
                            window.open(selectedProject.githubUrl, "_blank")
                          }
                          className="px-4 py-2 border border-gray-600 text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
                          data-cursor-hover
                        >
                          View Code
                        </button>
                      )}
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-light leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gray-800 text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
