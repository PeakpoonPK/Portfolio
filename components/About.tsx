'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { School } from 'lucide-react';

type Education = {
    degree: string;
    school: string;
    year: string;
    scholarship?: string;
};



type Experience = {
    role: string;
    company: string;
    year: string;
    description: string[];
};

type AboutData = {
    bio: string;
    details: string;
    education: Education[];
    experience: Experience[];
};

export default function About() {
    const [data] = useState<AboutData>({
        bio: "Cheerful professional transitioning from veterinarian to tech, focused on Frontend & UX/UI.",
        details: "Frontend × UX/UI | Intuitive & usable design.",
        education: [
            {
                degree: "Doctor of Veterinary Medicine",
                school: "Mahidol University",
                year: "2015 - 2020",
                scholarship: "ODOS Scholarship"
            },
            {
                degree: "High School",
                school: "Princess Chulabhorn Science High School Phetchaburi Thailand",
                year: "2009 - 2014",
                scholarship: "MWIT Scholarship"
            }
        ],
        experience: [
            {
                role: "Frontend Developer and UX/UI Designer",
                company: "Genovation Company",
                year: "Apr 2025 - Present",
                description: [
                    "Developed React/Next.js applications in a fast-paced startup.",
                    "Accelerated project timeline by 50% via system design optimizations.",
                    "Improved team productivity by 20% through code standards.",
                    "Led cross-functional feature education meetings."
                ]
            },
            {
                role: "Junior Full-Stack Developer",
                company: "Siamrajathanee Public Company Limited",
                year: "Feb 2024 - Apr 2025",
                description: [
                    "Developed 'Flow' document approval system using Next.js & Node.js.",
                    "Built core features/UX/UI from front to back.",
                    "Led internal & cross-functional team communication."
                ]
            },
            {
                role: "Student",
                company: "Full Stack Code Camp 15th, Software park Thailand",
                year: "Jul 2023 - Dec 2023",
                description: [
                    "Intensive full-stack development training.",
                    "Frequent peer reviewer for Frontend tasks."
                ]
            },
            {
                role: "Senior Practitioner",
                company: "Bangkok-Non Animal Hospital, Main Branch",
                year: "2021 - 2023",
                description: [
                    "Lead Practitioner for OPD/IPD & Emergency Anesthetist.",
                    "Supervised & trained junior clinicians on hospital standards."
                ]
            },
            {
                role: "Internship Program",
                company: "Kasetsart Veterinary Teaching Hospital",
                year: "2020 - 2021",
                description: [
                    "Selected by Neurology Professor in CCU unit to shadow her operation.",
                ]
            }
        ]
    });

    return (
        <section id="about" className="py-24 bg-brand-dark border-t border-brand-secondary/20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div>
                        <h2 className="text-sm font-bold text-brand-primary tracking-widest uppercase mb-6">About Us</h2>
                        <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                            {data ? data.bio : "Loading..."}
                        </h3>
                    </div>
                    <div className="flex flex-col justify-between">
                        <p className="text-gray-400 text-lg leading-relaxed">
                            {data ? data.details : "Loading..."}
                        </p>

                    </div>
                </motion.div>

                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-12 bg-white/5 rounded-2xl p-8 border border-white/10"
                >
                    <h2 className="text-xl font-bold text-white mb-8 flex items-center">
                        <School className="w-6 h-6 mr-3 text-brand-primary" />
                        Education
                    </h2>
                    <div className="grid grid-cols-1 gap-8">
                        {data.education.map((edu, index) => (
                            <div key={index} className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-6 last:border-0 last:pb-0">
                                <div>
                                    <h4 className="text-2xl font-bold text-white">{edu.degree}</h4>
                                    <p className="text-gray-300 mt-1 text-lg">{edu.school}</p>
                                    {edu.scholarship && (
                                        <div className="flex items-center mt-2 text-brand-primary">
                                            <span className="text-sm font-medium bg-brand-primary/10 px-3 py-1 rounded-full">{edu.scholarship}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <span className="text-white/60 font-mono text-sm">{edu.year}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent my-16 opacity-50"></div>

                {/* Experience Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h2 className="text-sm font-bold text-brand-primary tracking-widest uppercase mb-12">Work Experience & Timeline</h2>
                    <div className="relative border-l-2 border-brand-primary/20 ml-3 md:ml-6 space-y-12">
                        {data.experience.map((exp, index) => (
                            <div key={index} className="relative pl-8 md:pl-12">
                                {/* Dot indicator */}
                                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-primary"></div>

                                <div className="flex flex-col md:flex-row justify-between mb-4">
                                    <div>
                                        <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
                                        <p className="text-brand-primary text-lg">{exp.company}</p>
                                    </div>
                                    <div className="mt-2 md:mt-0">
                                        <span className="text-gray-500 font-mono text-sm">{exp.year}</span>
                                    </div>
                                </div>
                                <ul className="list-disc list-inside space-y-1 text-gray-400">
                                    {exp.description.map((desc, i) => (
                                        <li key={i} className="text-sm leading-relaxed pl-2 -indent-2 marker:text-brand-primary/50">{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
