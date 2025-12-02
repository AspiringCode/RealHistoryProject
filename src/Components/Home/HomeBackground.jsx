import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import mapImage from '../../assets/backgrounds/middle-east-gold.png';

export default function HomeBackground() {
    const { scrollYProgress } = useScroll();

    // Create a dynamic gradient mask that reveals more of the map as you scroll
    // The mask starts revealing from the top (0%) and expands to the bottom (100%)
    const maskGradient = useTransform(
        scrollYProgress,
        [0, 0.8], // Map scroll 0-80% to mask reveal
        [
            'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 10%)', // Start: Mostly hidden (just top hint)
            'linear-gradient(to bottom, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%)' // End: Fully visible
        ]
    );

    // Also fade in the opacity slightly for a smoother effect
    const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]); // Start invisible
    const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]); // Subtle zoom out

    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-midnight pointer-events-none">
            {/* Base Background (Dark Blue/Black) */}
            <div className="absolute inset-0 bg-black" />
            <div className="absolute inset-0 bg-midnight/40" />

            {/* The Map with Scroll Reveal Mask */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${mapImage})`,
                    WebkitMaskImage: maskGradient,
                    maskImage: maskGradient,
                    opacity: opacity,
                    scale: scale
                    // Filters removed to restore neon brightness
                }}
            />

            {/* Vignette for focus */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,8,20,0.8)_100%)]" />

            {/* Subtle overlay to ensure text contrast if map is too bright */}
            <div className="absolute inset-0 bg-midnight/30" />
        </div>
    );
}
