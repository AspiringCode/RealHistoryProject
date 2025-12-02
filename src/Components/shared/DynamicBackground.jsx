import React, { useCallback, useEffect, useState } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import vintageMap from '../../assets/backgrounds/vintage-map.png';

export default function DynamicBackground() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-midnight">
            {/* Layer 1: The Hidden Image (Revealed by Spotlight) */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40 transition-opacity duration-1000"
                style={{
                    backgroundImage: `url(${vintageMap})`,
                    maskImage: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 80%)`,
                    WebkitMaskImage: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 80%)`
                }}
            />

            {/* Layer 2: The Dark Overlay (Base Background) */}
            <div className="absolute inset-0 bg-gradient-to-b from-midnight via-black to-midnight opacity-95" />

            {/* Layer 2.5: Vignette (Darken Edges) */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

            {/* Layer 3: Floating Particles (Atoms/Dust) */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: { enable: false },
                    fpsLimit: 60,
                    particles: {
                        color: {
                            value: "#f59e0b", // Amber/Gold
                        },
                        links: {
                            color: "#f59e0b",
                            distance: 150,
                            enable: true,
                            opacity: 0.1, // Very subtle links
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: true,
                            speed: 0.5, // Slow, floating movement
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 40, // Not too crowded
                        },
                        opacity: {
                            value: 0.3,
                            animation: {
                                enable: true,
                                speed: 1,
                                minimumValue: 0.1,
                                sync: false
                            }
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 3 },
                        },
                    },
                    detectRetina: true,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "grab" // Particles connect to cursor
                            },
                        },
                        modes: {
                            grab: {
                                distance: 200,
                                links: {
                                    opacity: 0.3
                                }
                            }
                        }
                    }
                }}
                className="absolute inset-0"
            />
        </div>
    );
}
