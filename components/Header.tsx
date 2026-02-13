'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 w-full z-40 bg-brand-dark/80 backdrop-blur-md border-b border-brand-secondary/30">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold font-serif text-white hover:text-brand-primary transition-colors duration-300">
                    PORTFOLIO<span className="text-brand-primary">.</span>
                </Link>
                <nav className="hidden md:flex space-x-8">
                    <Link href="#about" className="text-gray-300 hover:text-brand-accent transition-colors duration-300 uppercase tracking-widest text-sm">About</Link>
                    <Link href="#work" className="text-gray-300 hover:text-brand-accent transition-colors duration-300 uppercase tracking-widest text-sm">Work</Link>
                    <Link href="#contact" className="text-gray-300 hover:text-brand-accent transition-colors duration-300 uppercase tracking-widest text-sm">Contact</Link>
                </nav>
            </div>
        </header>
    );
}
