import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDifficulty } from '../../context/DifficultyContext';

export default function HiddenDigit({ digit, position = 'inline', className = '' }) {
    const [revealed, setRevealed] = useState(false);
    const { difficulty } = useDifficulty();

    const positionStyles = {
        'left': 'absolute left-4 top-1/2 -translate-y-1/2 z-50',
        'right': 'absolute right-4 top-1/2 -translate-y-1/2 z-50',
        'bottom': 'absolute bottom-4 left-1/2 -translate-x-1/2 z-50',
        'top': 'absolute top-4 left-1/2 -translate-x-1/2 z-50',
        'inline': 'inline-block relative mx-1 align-middle'
    };

    // Adjust visibility based on difficulty
    const difficultySettings = {
        easy: {
            smokeOpacity: [0.5, 0.8, 0.5],
            smokeBlur: 'blur-md',
            glowIntensity: 0.5
        },
        medium: {
            smokeOpacity: [0.2, 0.4, 0.2],
            smokeBlur: 'blur-sm',
            glowIntensity: 0.3
        },
        hard: {
            smokeOpacity: [0.05, 0.15, 0.05],
            smokeBlur: 'blur-xs',
            glowIntensity: 0.1
        }
    };

    const settings = difficultySettings[difficulty] || difficultySettings.easy;

    return (
        <motion.div
            className={`${positionStyles[position]} ${className} cursor-pointer group`}
            onClick={() => setRevealed(true)}
            whileHover={{ scale: 1.1 }}
        >
            <div className="relative w-12 h-12 flex items-center justify-center">
                {/* Smoke Effect Overlay */}
                {!revealed && (
                    <motion.div
                        className={`absolute inset-0 bg-slate-500/50 ${settings.smokeBlur} rounded-full`}
                        animate={{
                            opacity: settings.smokeOpacity,
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{ opacity: settings.glowIntensity }}
                    >
                        <div
                            className="absolute inset-0 bg-gradient-radial from-slate-400/50 to-transparent opacity-50 animate-pulse"
                            style={{ opacity: settings.glowIntensity }}
                        />
                    </motion.div>
                )}

                {/* The Digit */}
                <motion.span
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    animate={{
                        opacity: revealed ? 1 : 0,
                        filter: revealed ? 'blur(0px)' : 'blur(8px)'
                    }}
                    className="text-3xl font-bold text-red-500 font-mono relative z-10"
                >
                    {digit}
                </motion.span>

                {/* Hint Tooltip on Hover (only if not revealed) */}
                {!revealed && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="sr-only">Click to reveal</span>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
