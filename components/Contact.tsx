'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

const EMAILJS_SERVICE_ID = 'service_d155ze1';
const EMAILJS_TEMPLATE_ID = 'template_y3utyae';
const EMAILJS_PUBLIC_KEY = 'pKyV8hHLnKHPw-eYA';

type FormState = 'idle' | 'sending' | 'success' | 'error';

const inputClass =
    'w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/30 text-lg ' +
    'focus:outline-none focus:border-brand-primary transition-colors duration-300 resize-none';

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    const [formState, setFormState] = useState<FormState>('idle');
    const [focused, setFocused] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;
        setFormState('sending');
        try {
            await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
            setFormState('success');
            formRef.current.reset();
        } catch {
            setFormState('error');
        }
    };

    const handleReset = () => {
        setFormState('idle');
        if (formRef.current) formRef.current.reset();
    };

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
    } as const;

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
    } as const;

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="relative bg-brand-dark overflow-hidden flex items-center"
        >
            <div
                className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10"
                style={{ background: 'radial-gradient(circle, #FA3D8C 0%, #2D0A31 60%, transparent 100%)', filter: 'blur(80px)' }}
            />
            <div
                className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-8"
                style={{ background: 'radial-gradient(circle, #2D0A31 0%, transparent 70%)', filter: 'blur(60px)' }}
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 py-32">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start"
                >
                    <div>
                        <motion.p variants={itemVariants} className="text-brand-primary text-sm tracking-[0.3em] uppercase mb-6 font-medium">
                            CONTACT
                        </motion.p>

                        <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-bold font-serif leading-[1] text-white mb-8">
                            Let&apos;s
                            <br />
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #FA3D8C 0%, #FF007F 50%, #ff6ab0 100%)' }}>
                                Work
                            </span>
                            <br />
                            Together.
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-white/50 text-lg leading-relaxed max-w-sm mb-12">
                            Available for full-time roles. Drop me a message — I reply within 24 hours.
                        </motion.p>

                        <motion.div variants={itemVariants} className="space-y-5">
                            <div className="flex items-center gap-4 text-white/60">
                                <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                                    <EmailOutlinedIcon sx={{ fontSize: 18 }} />
                                </span>
                                <span className="text-sm tracking-wide select-all">panchiwa.komol@gmail.com</span>
                            </div>

                            <div className="flex items-center gap-4 text-white/60">
                                <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                                    <PhoneOutlinedIcon sx={{ fontSize: 18 }} />
                                </span>
                                <span className="text-sm tracking-wide select-all">094-546-4807</span>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div variants={itemVariants}>
                        {formState === 'success' ? (
                            <motion.div
                                key="success-card"
                                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-3xl border border-white/10"
                                style={{ background: 'linear-gradient(135deg, rgba(250,61,140,0.07) 0%, rgba(45,10,49,0.3) 100%)' }}
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.15 }}
                                    className="w-24 h-24 rounded-full flex items-center justify-center mb-8"
                                    style={{ background: 'linear-gradient(135deg, #FA3D8C, #FF007F)' }}
                                >
                                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </motion.div>

                                <motion.h3
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-3xl font-bold text-white mb-3"
                                >
                                    Message Sent!
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-white/50 text-base leading-relaxed max-w-xs mb-10"
                                >
                                    Thanks for reaching out. I&apos;ll get back to you within 24 hours. 🙌
                                </motion.p>

                                <motion.button
                                    type="button"
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={handleReset}
                                    className="relative group overflow-hidden rounded-full border border-brand-primary/50 py-4 px-10 text-brand-primary text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:text-white"
                                >
                                    <span
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                                        style={{ background: 'linear-gradient(135deg, #FA3D8C 0%, #FF007F 100%)' }}
                                    />
                                    <span className="relative z-10">↩ Send Another Message</span>
                                </motion.button>
                            </motion.div>

                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="from_name"
                                        required
                                        placeholder="Your Name"
                                        onFocus={() => setFocused('name')}
                                        onBlur={() => setFocused(null)}
                                        className={inputClass}
                                    />
                                    <div className="absolute bottom-0 left-0 h-[1px] bg-brand-primary transition-all duration-500"
                                        style={{ width: focused === 'name' ? '100%' : '0%' }} />
                                </div>

                                <div className="relative">
                                    <input
                                        type="email"
                                        name="reply_to"
                                        required
                                        placeholder="Your Email"
                                        onFocus={() => setFocused('email')}
                                        onBlur={() => setFocused(null)}
                                        className={inputClass}
                                    />
                                    <div className="absolute bottom-0 left-0 h-[1px] bg-brand-primary transition-all duration-500"
                                        style={{ width: focused === 'email' ? '100%' : '0%' }} />
                                </div>

                                <div className="relative">
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        placeholder="Title / Subject"
                                        onFocus={() => setFocused('subject')}
                                        onBlur={() => setFocused(null)}
                                        className={inputClass}
                                    />
                                    <div className="absolute bottom-0 left-0 h-[1px] bg-brand-primary transition-all duration-500"
                                        style={{ width: focused === 'subject' ? '100%' : '0%' }} />
                                </div>

                                <div className="relative">
                                    <textarea
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="Tell me about your project…"
                                        onFocus={() => setFocused('message')}
                                        onBlur={() => setFocused(null)}
                                        className={inputClass}
                                    />
                                    <div className="absolute bottom-0 left-0 h-[1px] bg-brand-primary transition-all duration-500"
                                        style={{ width: focused === 'message' ? '100%' : '0%' }} />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={formState === 'sending'}
                                    whileHover={{ scale: formState !== 'sending' ? 1.02 : 1 }}
                                    whileTap={{ scale: formState !== 'sending' ? 0.98 : 1 }}
                                    className="relative w-full group overflow-hidden rounded-full py-5 px-8 font-semibold text-white text-base tracking-wider uppercase transition-all duration-500 disabled:opacity-60"
                                    style={{
                                        background: formState === 'error'
                                            ? 'linear-gradient(135deg,#ef4444,#dc2626)'
                                            : 'linear-gradient(135deg, #FA3D8C 0%, #FF007F 100%)',
                                    }}
                                >
                                    <span className="absolute inset-0 bg-white/10 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 skew-x-12" />
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        {formState === 'sending' && (
                                            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                            </svg>
                                        )}
                                        {formState === 'idle' && 'Send Message ✉'}
                                        {formState === 'sending' && 'Sending…'}
                                        {formState === 'error' && '↺ Try Again'}
                                    </span>
                                </motion.button>

                                {formState === 'error' && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-400 text-sm text-center"
                                    >
                                        Something went wrong. Please email me directly at{' '}
                                        <a href="mailto:panchiwa.komol@gmail.com" className="underline hover:text-red-300">
                                            panchiwa.komol@gmail.com
                                        </a>
                                    </motion.p>
                                )}
                            </form>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
