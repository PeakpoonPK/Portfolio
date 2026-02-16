'use client';

import { motion } from 'framer-motion';

const skills = [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Axios", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg", invert: true },
    { name: "fp-ts", icon: null },
    { name: "UX/UI", icon: null },
    { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg", invert: true }
];

// Duplicate for marquee effect
const allSkills = [...skills, ...skills];

const SkillsCard = ({ skill, mobile = false }: { skill: any, mobile?: boolean }) => (
    <div className={`flex flex-col items-center justify-center space-y-4 group/item ${mobile ? 'min-w-[80px]' : 'min-w-[100px]'} select-none`}>
        <div className={`${mobile ? 'w-14 h-14' : 'w-16 h-16 md:w-20 md:h-20'} bg-white/5 rounded-2xl flex items-center justify-center p-4 border border-white/10 group-hover/item:border-brand-primary/50 group-hover/item:bg-white/10 transition-all duration-300 backdrop-blur-sm`}>
            {skill.icon ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={skill.icon}
                    alt={skill.name}
                    className={`w-full h-full object-contain transition-all duration-300 ${skill.invert ? 'invert opacity-80 group-hover/item:opacity-100' : 'opacity-90 group-hover/item:opacity-100'}`}
                />
            ) : (
                <span className={`${mobile ? 'text-lg' : 'text-xl'} font-bold text-white/40 group-hover/item:text-brand-primary transition-colors`}>
                    {skill.name.substring(0, 2)}
                </span>
            )}
        </div>
        {!mobile && (
            <span className="text-white/40 text-sm font-medium group-hover/item:text-brand-primary transition-colors">
                {skill.name}
            </span>
        )}
    </div>
);

export default function Skills() {
    return (
        <section className="py-24 bg-brand-dark border-t border-brand-secondary/20 overflow-hidden relative">
            {/* Background Elements */}


            <div className="max-w-7xl mx-auto px-6 mb-2">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-sm font-bold text-brand-primary tracking-widest uppercase mb-4">Core Competencies</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">Tools & Technologies</h3>
                </motion.div>

                {/* Desktop View (Single Row) */}
                <div className="hidden md:flex overflow-hidden relative w-full group">
                    <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-brand-dark to-transparent z-10"></div>
                    <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-brand-dark to-transparent z-10"></div>

                    <motion.div
                        className="flex space-x-12 whitespace-nowrap"
                        animate={{ x: [0, -1035] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 25,
                        }}
                        style={{ width: "max-content" }}
                    >
                        {[...allSkills, ...allSkills].map((skill, index) => (
                            <SkillsCard key={`desktop-${index}`} skill={skill} />
                        ))}
                    </motion.div>
                </div>

                {/* Mobile View (Two Rows) */}
                <div className="flex flex-col md:hidden space-y-6 overflow-hidden relative w-full">
                    <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-brand-dark to-transparent z-10"></div>
                    <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-brand-dark to-transparent z-10"></div>

                    {/* Row 1: Scroll Left */}
                    <motion.div
                        className="flex space-x-8 whitespace-nowrap"
                        animate={{ x: [0, -1035] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 20,
                        }}
                        style={{ width: "max-content" }}
                    >
                        {[...allSkills, ...allSkills].map((skill, index) => (
                            <SkillsCard key={`mobile-row1-${index}`} skill={skill} mobile />
                        ))}
                    </motion.div>

                    {/* Row 2: Scroll Right */}
                    <motion.div
                        className="flex space-x-8 whitespace-nowrap"
                        animate={{ x: [-1035, 0] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 25,
                        }}
                        style={{ width: "max-content" }}
                    >
                        {[...allSkills, ...allSkills].map((skill, index) => (
                            <SkillsCard key={`mobile-row2-${index}`} skill={skill} mobile />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
