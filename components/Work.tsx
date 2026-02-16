'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, ChevronRight, Smartphone, Monitor } from 'lucide-react';

import { Project, projects } from '../data/projects';

export default function Work() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
    const [filter, setFilter] = useState<'all' | 'web' | 'mobile'>('all');

    // const projects: Project[] array is removed and imported instead

    const filteredProjects = projects.filter(p => filter === 'all' || p.type === filter);

    // Slideshow Logic
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (hoveredProject !== null) {
            interval = setInterval(() => {
                setCurrentImageIndex(prev => {
                    const project = projects.find(p => p.id === hoveredProject);
                    if (!project || project.images.length <= 1) return prev;

                    const currentIndex = prev[hoveredProject] || 0;
                    return {
                        ...prev,
                        [hoveredProject]: (currentIndex + 1) % project.images.length
                    };
                });
            }, 2000); // Change image every 2 seconds
        }
        return () => clearInterval(interval);
    }, [hoveredProject, projects]);

    const handleMouseEnter = (id: number) => setHoveredProject(id);
    const handleMouseLeave = () => {
        setHoveredProject(null);
        setCurrentImageIndex({}); // Reset slideshow
    };

    return (
        <section id="work" className="py-24 bg-brand-dark min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8">
                        <div>
                            <h2 className="text-sm font-bold text-brand-primary tracking-widest uppercase mb-4">Selected Work</h2>
                            <h3 className="text-4xl md:text-6xl font-serif text-white">Projects</h3>
                        </div>

                        {/* Filters */}
                        <div className="flex bg-white/5 p-1 rounded-full border border-white/10">
                            {[
                                { id: 'all', label: 'All Work' },
                                { id: 'web', label: 'Website', icon: Monitor },
                                { id: 'mobile', label: 'Mobile App', icon: Smartphone }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setFilter(item.id as any)}
                                    className={`
                                        flex items-center px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300
                                        ${filter === item.id
                                            ? 'bg-brand-primary text-brand-dark shadow-lg shadow-brand-primary/25'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'}
                                    `}
                                >
                                    {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <motion.div layout className="flex flex-col space-y-24">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                key={project.id}
                                className="group relative cursor-pointer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                onMouseEnter={() => handleMouseEnter(project.id)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className={`
                                    relative overflow-hidden rounded-2xl border border-white/10 bg-white/5
                                    ${project.type === 'mobile' ? 'aspect-video md:aspect-[2/1] bg-[#111]' : 'aspect-video md:aspect-[2/1]'}
                                `}>
                                    <div className="absolute inset-0 bg-brand-secondary/20 group-hover:bg-transparent transition-all duration-500 z-10 pointer-events-none"></div>

                                    {/* Image Slideshow */}
                                    <AnimatePresence mode='wait'>
                                        <motion.img
                                            key={currentImageIndex[project.id] || 0}
                                            src={project.images[currentImageIndex[project.id] || 0]}
                                            alt={project.title}
                                            className={`
                                                w-full h-full transform transition-transform duration-700 ease-in-out
                                                ${project.type === 'mobile' ? 'object-contain scale-90 p-4' : 'object-cover'}
                                            `}
                                            initial={{ opacity: 0.8 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0.8 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </AnimatePresence>
                                </div>

                                <div className="absolute -bottom-6 md:bottom-10 left-0 md:left-10 z-20 pointer-events-none">
                                    <h4 className="text-5xl md:text-8xl font-bold text-white opacity-80 group-hover:opacity-100 group-hover:text-brand-primary transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                        {String(index + 1).padStart(2, '0')}
                                    </h4>
                                </div>

                                <div className="mt-8 md:mt-0 md:absolute md:top-10 md:right-10 text-right z-20 pointer-events-none">
                                    <div className="inline-flex items-center justify-end space-x-2 mb-2">
                                        {project.type === 'mobile' ? <Smartphone className="w-5 h-5 text-brand-primary" /> : <Monitor className="w-5 h-5 text-brand-primary" />}
                                        <h3 className="text-3xl font-bold text-white group-hover:text-brand-primary transition-colors">{project.title}</h3>
                                    </div>
                                    <p className="text-gray-400">{project.category}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 cursor-none">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 100, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 100, scale: 0.9 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative w-full max-w-5xl bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-2xl border border-white/10 max-h-[90vh] flex flex-col"
                        >
                            {/* Header Image */}
                            <div className="relative h-64 md:h-80 w-full overflow-hidden shrink-0 bg-[#050505] flex items-center justify-center">
                                {/* Blurred Background for Mobile */}
                                {selectedProject.type === 'mobile' && (
                                    <div
                                        className="absolute inset-0 opacity-30 bg-cover bg-center blur-xl"
                                        style={{ backgroundImage: `url('${selectedProject.images[0]}')` }}
                                    ></div>
                                )}

                                <img
                                    src={selectedProject.images[0]}
                                    alt={selectedProject.title}
                                    className={`
                                        w-full h-full relative z-10
                                        ${selectedProject.type === 'mobile' ? 'object-contain p-8' : 'object-cover'}
                                    `}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent z-20"></div>

                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-6 right-6 z-30 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-all hover:rotate-90 duration-300 backdrop-blur-md border border-white/10"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="absolute bottom-6 left-6 md:left-12 max-w-2xl z-20">
                                    <div className="flex items-center space-x-4 mb-2">
                                        <span className="px-3 py-1 bg-brand-primary text-brand-dark font-bold rounded-full text-xs uppercase tracking-wide">
                                            {selectedProject.category}
                                        </span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{selectedProject.title}</h2>
                                </div>
                            </div>

                            {/* Scrollable Content */}
                            <div className="overflow-y-auto p-6 md:p-12 space-y-12 scrollbar-hide">
                                {/* Role & Stack Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/5">
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">My Role</h4>
                                        <p className="text-white text-lg font-medium">{selectedProject.role}</p>
                                    </div>
                                    <div className="md:col-span-2">
                                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Tech Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.techStack.map((tech, i) => (
                                                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Problem / Solution / Impact */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="space-y-6 md:col-span-2">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
                                            <p className="text-gray-300 leading-relaxed text-lg">
                                                {selectedProject.description}
                                            </p>
                                        </div>

                                        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-6">
                                            <div>
                                                <h4 className="flex items-center text-brand-primary font-bold mb-2">
                                                    <div className="w-2 h-2 rounded-full bg-brand-primary mr-2"></div>
                                                    The Challenge
                                                </h4>
                                                <p className="text-gray-400 text-sm md:text-base pl-4 border-l border-white/10">
                                                    {selectedProject.problemSolution.problem}
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="flex items-center text-brand-primary font-bold mb-2">
                                                    <div className="w-2 h-2 rounded-full bg-brand-primary mr-2"></div>
                                                    The Solution
                                                </h4>
                                                <p className="text-gray-400 text-sm md:text-base pl-4 border-l border-white/10">
                                                    {selectedProject.problemSolution.solution}
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="flex items-center text-brand-primary font-bold mb-2">
                                                    <div className="w-2 h-2 rounded-full bg-brand-primary mr-2"></div>
                                                    Business Impact
                                                </h4>
                                                <p className="text-gray-400 text-sm md:text-base pl-4 border-l border-white/10">
                                                    {selectedProject.problemSolution.impact}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Key Features & Links */}
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>
                                            <ul className="space-y-3">
                                                {selectedProject.keyFeatures.map((feature, i) => (
                                                    <li key={i} className="flex items-start text-gray-300 text-sm">
                                                        <ChevronRight className="w-4 h-4 text-brand-primary mt-1 mr-2 shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pt-6 border-t border-white/10">
                                            <div className="flex flex-col space-y-3">
                                                {selectedProject.links?.demo && (
                                                    <a href={selectedProject.links.demo} className="flex items-center justify-center w-full py-3 bg-brand-primary text-brand-dark font-bold rounded-xl hover:bg-white transition-colors">
                                                        <ExternalLink className="w-4 h-4 mr-2" />
                                                        Live Demo
                                                    </a>
                                                )}
                                                {selectedProject.links?.github && (
                                                    <a href={selectedProject.links.github} className="flex items-center justify-center w-full py-3 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-colors">
                                                        <Github className="w-4 h-4 mr-2" />
                                                        View Code
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
