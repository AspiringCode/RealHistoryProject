import React from 'react';
import { useDifficulty } from '../../context/DifficultyContext';
import { motion } from 'framer-motion';
import { Zap, Shield, Flame } from 'lucide-react';

export default function DifficultySelector() {
    const { difficulty, setDifficulty } = useDifficulty();

    const difficulties = [
        {
            id: 'easy',
            label: 'Easy',
            icon: Shield,
            description: 'Visible hints and clear smoke effects',
            color: 'from-green-500/20 to-green-600/20',
            borderColor: 'border-green-500/40',
            textColor: 'text-green-400',
            hoverColor: 'hover:border-green-400'
        },
        {
            id: 'medium',
            label: 'Medium',
            icon: Zap,
            description: 'Subtle effects and relocated hints',
            color: 'from-yellow-500/20 to-orange-600/20',
            borderColor: 'border-yellow-500/40',
            textColor: 'text-yellow-400',
            hoverColor: 'hover:border-yellow-400'
        },
        {
            id: 'hard',
            label: 'Hard',
            icon: Flame,
            description: 'Minimal visibility and rare hints',
            color: 'from-red-500/20 to-red-600/20',
            borderColor: 'border-red-500/40',
            textColor: 'text-red-400',
            hoverColor: 'hover:border-red-400'
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            className="glass-card-dark rounded-3xl p-6 border border-white/10 shadow-xl mt-6 max-w-2xl"
        >
            <h3 className="text-xl font-bold text-slate-100 mb-4 font-serif">Choose Your Difficulty</h3>
            <div className="grid grid-cols-3 gap-4">
                {difficulties.map((diff) => {
                    const Icon = diff.icon;
                    const isSelected = difficulty === diff.id;

                    return (
                        <button
                            key={diff.id}
                            onClick={() => setDifficulty(diff.id)}
                            className={`
                relative overflow-hidden rounded-xl p-4 
                border-2 transition-all duration-300
                ${isSelected ? `${diff.borderColor} bg-gradient-to-br ${diff.color}` : 'border-white/10 bg-white/5'}
                ${diff.hoverColor} hover:scale-105
              `}
                        >
                            <div className="relative z-10 flex flex-col items-center gap-2">
                                <Icon className={`w-8 h-8 ${isSelected ? diff.textColor : 'text-slate-400'}`} />
                                <span className={`font-bold text-sm ${isSelected ? diff.textColor : 'text-slate-300'}`}>
                                    {diff.label}
                                </span>
                                <p className="text-xs text-slate-400 text-center leading-tight">
                                    {diff.description}
                                </p>
                            </div>
                            {isSelected && (
                                <motion.div
                                    layoutId="difficulty-selector"
                                    className="absolute inset-0 border-2 rounded-xl"
                                    style={{ borderColor: `var(--${diff.id}-color)` }}
                                />
                            )}
                        </button>
                    );
                })}
            </div>
        </motion.div>
    );
}
