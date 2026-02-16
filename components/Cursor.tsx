'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 6,
            y: mousePosition.y - 6,
            height: 12,
            width: 12,
            backgroundColor: "#FA3D8C",
            border: "none",
            mixBlendMode: "normal" as const,
        },
        hover: {
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            height: 48,
            width: 48,
            backgroundColor: "transparent",
            border: "2px solid #FA3D8C",
            mixBlendMode: "normal" as const,
        }
    };

    // Add event listeners for hover effects on links/buttons
    useEffect(() => {
        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).closest('a') || (e.target as HTMLElement).closest('button')) {
                setCursorVariant("hover");
            } else {
                setCursorVariant("default");
            }
        };
        document.addEventListener('mouseover', handleMouseOver);
        return () => document.removeEventListener('mouseover', handleMouseOver);
    }, []);


    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
            variants={variants}
            animate={cursorVariant}
            transition={{
                type: "spring",
                stiffness: 800,
                damping: 35,
                mass: 0.5
            }}
        />
    );
}
