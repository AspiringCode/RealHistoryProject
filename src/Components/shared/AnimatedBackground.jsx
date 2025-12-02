import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground({ intensity = 'medium', children }) {
    const shapes = {
        low: 3,
        medium: 5,
        high: 7
    };

    const shapeCount = shapes[intensity] || shapes.medium;

    const generateShapes = () => {
        const shapeElements = [];
        for (let i = 0; i < shapeCount; i++) {
            const size = Math.random() * 400 + 200;
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const isGold = Math.random() > 0.5;
            const animationDuration = 20 + Math.random() * 20;
            const delay = Math.random() * -10;

            shapeElements.push(
                <motion.div
                    key={i}
                    className={`absolute rounded-full blur-3xl ${isGold ? 'bg-gold-muted/10' : 'bg-blue-500/10'
                        }`}
                    style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        top: `${top}%`,
                        left: `${left}%`,
                    }}
                    animate={{
                        x: [0, 30, -20, 0],
                        y: [0, -30, 20, 0],
                        scale: [1, 1.1, 0.9, 1],
                        rotate: [0, 120, 240, 360],
                    }}
                    transition={{
                        duration: animationDuration,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: delay,
                    }}
                />
            );
        }
        return shapeElements;
    };

    return (
        <div className="relative w-full">
            {/* Animated Background Layer */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                {generateShapes()}
            </div>

            {/* Content */}
            {children}
        </div>
    );
}
