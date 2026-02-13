'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center overflow-hidden bg-brand-dark">
            {/* Background Image with Monochrome & Gradient */}
            <div className="absolute inset-0 z-0 left">
                <div className="absolute inset-0 bg-brand-dark z-10 opacity-30"></div> {/* General darken */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-20 w-[70%]"></div> {/* Left Gradient */}

                {/* User's Image - Assumed saved as /hero-image.jpg */}
                <motion.img
                    src="/hero-image.png"
                    alt="Hero Background"
                    className="w-full h-full object-cover object-[15%] md:object-[30%] lg:object-right filter grayscale contrast-125"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </div>

            {/* Content - Left Aligned */}
            <div className="relative z-30 w-full md:w-2/3 px-6 md:pl-20 flex flex-col justify-center h-full pt-20 md:pt-0">
                <motion.h1
                    className="text-6xl md:text-9xl font-bold font-serif tracking-tighter mb-6 text-white leading-[0.9]"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Front-end <br />
                    <span className="text-gray-500">Developer</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <h2 className="text-2xl md:text-3xl font-light text-brand-primary mb-2"> & UX/UI Designer</h2>
                    <p className="text-gray-400 text-lg max-w-md">
                        Panchiwa Komol
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-10 md:left-20 z-30 hidden md:block"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="flex items-center gap-4 text-gray-500 text-sm tracking-widest uppercase writing-mode-vertical">
                    <span>Scroll</span>
                    <div className="w-10 h-[1px] bg-gray-500"></div>
                </div>
            </motion.div>
        </section>
    );
}
