import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';
import { createPageUrl } from '../../utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Background', path: createPageUrl('Background') },
        { label: 'Israel & Shadow War', path: createPageUrl('ShadowWar') },
        { label: 'The Decision', path: createPageUrl('Decision') },
        { label: 'Operation & Aftermath', path: createPageUrl('Operation') },
        { label: 'Chain of Events', path: createPageUrl('ChainOfEvents') },
        { label: 'Sources', path: createPageUrl('Sources') },
    ];

    const isActive = (path) => {
        if (path === '/' && location.pathname === '/') return true;
        if (path !== '/' && location.pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`bg-midnight/90 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 ${scrolled ? 'shadow-glass-lg' : 'shadow-glass'
                        }`}
                >
                    <div className="flex justify-between h-16 px-4">
                        {/* Logo / Title */}
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center gap-3 group">
                                <div className="p-2 rounded-lg bg-gradient-to-br from-gold-bright/20 to-transparent group-hover:from-gold-bright/40 transition-all duration-300 group-hover:shadow-glow-gold">
                                    <BookOpen className="h-6 w-6 text-gold-bright" />
                                </div>
                                <span className="font-serif font-bold text-slate-100 text-lg hidden sm:block tracking-wide">
                                    Operation Midnight Hammer
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden xl:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    className="relative px-3 py-2 text-sm font-medium transition-colors group"
                                >
                                    <span className={`relative z-10 transition-all duration-300 ${isActive(item.path) ? 'text-gold-bright font-semibold' : 'text-slate-300 group-hover:text-gold-glow'
                                        }`}>
                                        {item.label}
                                    </span>
                                    {isActive(item.path) && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute inset-0 bg-gradient-to-r from-gold-bright/10 to-gold-muted/5 rounded-lg border border-gold-bright/30 shadow-glow-gold"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex items-center xl:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 p-4 xl:hidden"
                    >
                        <div className="glass-card-strong border-glass-border-strong rounded-2xl p-4 shadow-glass-lg">
                            <div className="space-y-1">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        to={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${isActive(item.path)
                                            ? 'bg-gradient-to-r from-gold-bright/20 to-gold-muted/10 text-gold-bright border border-gold-bright/30 shadow-glow-gold'
                                            : 'text-slate-300 hover:bg-glass-light hover:text-gold-glow border border-transparent'
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
