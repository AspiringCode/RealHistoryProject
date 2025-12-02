import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import DynamicBackground from './DynamicBackground';

export default function PageLayout({ children, title, subtitle }) {
    return (
        <div className="min-h-screen relative">
            <DynamicBackground />
            <Navbar />
            <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        {title && (
                            <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-100 mb-6 gold-glow-text">
                                {title}
                            </h1>
                        )}
                        {subtitle && (
                            <p className="text-xl text-slate-300 max-w-4xl leading-relaxed border-l-4 border-gold-bright/40 pl-6 bg-gradient-to-r from-glass-light to-transparent py-4 rounded-r-xl">
                                {subtitle}
                            </p>
                        )}
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {children}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
