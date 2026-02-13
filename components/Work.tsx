'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type Project = {
    id: number;
    title: string;
    category: string;
    image: string;
};

export default function Work() {
    const [projects] = useState<Project[]>([
        { id: 1, title: 'Neon Dreams', category: 'Web Design', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop' },
        { id: 2, title: 'Abstract Flow', category: 'Development', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop' },
        { id: 3, title: 'Digital Wave', category: 'Branding', image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2535&auto=format&fit=crop' },
    ]);

    return (
        <section id="work" className="py-24 bg-brand-dark">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-sm font-bold text-brand-primary tracking-widest uppercase mb-4">Selected Work</h2>
                    <h3 className="text-4xl md:text-6xl font-serif">Featured Projects</h3>
                </div>

                <div className="flex flex-col space-y-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="group relative cursor-pointer"
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative overflow-hidden aspect-video md:aspect-[2/1] rounded-lg">
                                <div className="absolute inset-0 bg-brand-secondary/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>

                            <div className="absolute -bottom-10 md:bottom-10 left-0 md:left-10 z-20">
                                <h4 className="text-5xl md:text-8xl font-bold text-white opacity-80 group-hover:opacity-100 group-hover:text-brand-primary transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    {String(index + 1).padStart(2, '0')}
                                </h4>
                            </div>

                            <div className="mt-6 md:mt-0 md:absolute md:top-10 md:right-10 text-right z-20">
                                <h3 className="text-3xl font-bold text-white group-hover:text-brand-accent transition-colors">{project.title}</h3>
                                <p className="text-gray-400">{project.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
