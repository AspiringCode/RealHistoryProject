import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Sparkles, Gift, Gem } from 'lucide-react';
import PageLayout from '../Components/shared/PageLayout';

const FORTUNES = [
    "History repeats itself, first as tragedy, second as farce. - Karl Marx",
    "The only thing new in the world is the history you do not know. - Harry S. Truman",
    "Those who cannot remember the past are condemned to repeat it. - George Santayana",
    "Peace is not the absence of war, but the presence of justice. - Harrison Ford (as President Marshall)",
    "Diplomacy is the art of letting someone else have your way. - Daniele Vare",
    "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. - Charles Darwin",
    "The more you know about the past, the better prepared you are for the future. - Theodore Roosevelt"
];

export default function SecretFortune() {
    const [code, setCode] = useState('');
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [fortune, setFortune] = useState('');
    const [error, setError] = useState(false);

    const handleUnlock = (e) => {
        e.preventDefault();
        if (code === '133232') {
            setIsUnlocked(true);
            setFortune(FORTUNES[Math.floor(Math.random() * FORTUNES.length)]);
            setError(false);
        } else {
            setError(true);
            setTimeout(() => setError(false), 500);
        }
    };

    return (
        <PageLayout
            title="Hidden Treasure"
            subtitle="Enter the secret code to reveal the treasure."
        >
            <div className="flex flex-col items-center justify-center min-h-[50vh]">
                <AnimatePresence mode="wait">
                    {!isUnlocked ? (
                        <motion.div
                            key="lock-screen"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                            className="w-full max-w-md"
                        >
                            <div className="glass-card-dark-strong p-8 rounded-2xl shadow-2xl border border-white/10 text-center">
                                <div className="mb-6 flex justify-center">
                                    <div className={`p-4 rounded-full ${error ? 'bg-red-500/20 text-red-400' : 'bg-gold-bright/20 text-gold-bright'} transition-colors duration-300`}>
                                        <Lock className="w-12 h-12" />
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold text-slate-100 mb-2 font-serif">Restricted Access</h2>
                                <p className="text-slate-400 mb-8 text-sm">Enter the 6-digit security clearance code.</p>

                                <form onSubmit={handleUnlock} className="space-y-6">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            maxLength={6}
                                            value={code}
                                            onChange={(e) => setCode(e.target.value.replace(/[^0-9]/g, ''))}
                                            className={`w-full bg-slate-900/50 border ${error ? 'border-red-500' : 'border-slate-600 focus:border-gold-bright'} rounded-xl px-4 py-4 text-center text-3xl tracking-[0.5em] font-mono text-white placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-gold-bright/20 transition-all`}
                                            placeholder="000000"
                                        />
                                        {error && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="absolute -bottom-6 left-0 right-0 text-red-400 text-xs font-bold"
                                            >
                                                ACCESS DENIED
                                            </motion.p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-gold-muted to-gold-bright text-midnight font-bold py-3 rounded-xl hover:shadow-glow-gold transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        Open Treasure Chest
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="fortune-screen"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="w-full max-w-2xl text-center"
                        >
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                className="inline-block mb-8"
                            >
                                <div className="p-6 rounded-full bg-gradient-to-br from-gold-bright to-gold-muted shadow-glow-gold">
                                    <Gem className="w-16 h-16 text-midnight" />
                                </div>
                            </motion.div>

                            <div className="glass-card-dark-strong p-12 rounded-2xl shadow-2xl border border-gold-bright/30 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-bright to-transparent opacity-50"></div>

                                <h3 className="text-gold-bright font-serif text-xl mb-6 uppercase tracking-widest opacity-80">Treasure Found</h3>

                                <motion.div
                                    initial={{ opacity: 0, filter: 'blur(5px)' }}
                                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                >
                                    <p className="text-2xl md:text-3xl font-serif text-slate-100 leading-relaxed italic">
                                        "{fortune}"
                                    </p>
                                </motion.div>
                            </div>

                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5 }}
                                onClick={() => { setIsUnlocked(false); setCode(''); }}
                                className="mt-8 text-slate-400 hover:text-gold-bright transition-colors text-sm flex items-center justify-center gap-2 mx-auto"
                            >
                                <Lock className="w-4 h-4" /> Close Chest
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </PageLayout>
    );
}
