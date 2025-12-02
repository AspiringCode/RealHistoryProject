import React, { useRef, useState, useEffect } from 'react';
import { Mountain, ArrowDown, AlertTriangle } from 'lucide-react';

export default function DepthVisualizer() {
    const containerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        if (containerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
            const progress = scrollTop / (scrollHeight - clientHeight);
            setScrollProgress(progress);
        }
    };

    return (
        <div className="bg-glass backdrop-blur-md rounded-2xl p-8 shadow-xl border border-glass-border">
            <h3 className="text-xl font-bold text-slate-100 mb-2 text-center font-serif">
                The Depth Problem
            </h3>
            <p className="text-slate-400 text-center text-sm mb-6">
                Scroll down to see why Fordow was so hard to destroy
            </p>

            <div className="relative h-[400px] border border-slate-700 rounded-xl overflow-hidden bg-midnight">
                {/* Scrollable Container */}
                <div
                    ref={containerRef}
                    onScroll={handleScroll}
                    className="h-full overflow-y-auto scroll-smooth relative"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {/* Content Wrapper - 1500px height to represent 150m (10px = 1m) */}
                    <div className="h-[1500px] relative bg-gradient-to-b from-slate-800 via-black to-black">

                        {/* Depth Markers */}
                        {Array.from({ length: 16 }).map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-full border-t border-white/10 flex items-center"
                                style={{ top: `${i * 100}px` }}
                            >
                                <span className="text-white/30 text-xs ml-2 font-mono">{i * 10}m</span>
                            </div>
                        ))}

                        {/* Surface */}
                        <div className="absolute top-0 w-full h-10 bg-slate-700/50 flex items-center justify-center z-10 backdrop-blur-sm border-b border-white/10">
                            <span className="font-bold text-slate-200 text-xs uppercase tracking-widest">Surface Level</span>
                        </div>

                        {/* GBU-28 Limit (30m) */}
                        <div className="absolute top-[300px] w-full flex items-center group">
                            <div className="w-1/2 border-t-2 border-dashed border-red-500/50 group-hover:border-red-500 transition-colors"></div>
                            <div className="bg-red-500/20 border border-red-500/50 text-red-400 text-xs px-2 py-1 rounded mx-2 whitespace-nowrap z-10 backdrop-blur-md">
                                Max Depth: Israeli GBU-28 (30m)
                            </div>
                            <div className="w-1/2 border-t-2 border-dashed border-red-500/50 group-hover:border-red-500 transition-colors"></div>
                        </div>

                        {/* GBU-57 Limit (60m) */}
                        <div className="absolute top-[600px] w-full flex items-center group">
                            <div className="w-1/2 border-t-2 border-dashed border-orange-500/50 group-hover:border-orange-500 transition-colors"></div>
                            <div className="bg-orange-500/20 border border-orange-500/50 text-orange-400 text-xs px-2 py-1 rounded mx-2 whitespace-nowrap z-10 backdrop-blur-md">
                                Max Depth: U.S. GBU-57 MOP (60m)
                            </div>
                            <div className="w-1/2 border-t-2 border-dashed border-orange-500/50 group-hover:border-orange-500 transition-colors"></div>
                        </div>

                        {/* Fordow Facility (90m) */}
                        <div className="absolute top-[900px] left-0 right-0 flex justify-center items-center flex-col">
                            <div className="bg-black/80 border-2 border-red-600/50 p-6 rounded-xl shadow-[0_0_50px_rgba(220,38,38,0.2)] w-3/4 max-w-xs text-center relative backdrop-blur-sm">
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-red-500 animate-bounce">
                                    <ArrowDown className="w-8 h-8" />
                                </div>
                                <Mountain className="w-12 h-12 text-red-500 mx-auto mb-2" />
                                <h4 className="text-white font-bold text-lg uppercase tracking-wider">Fordow Facility</h4>
                                <p className="text-red-400 text-sm font-mono mt-1">Depth: 90 meters</p>
                                <div className="mt-4 text-xs text-slate-500 border-t border-white/10 pt-2">
                                    Protected by mountain rock & reinforced concrete
                                </div>
                            </div>
                        </div>

                        {/* Warning at bottom */}
                        <div className="absolute bottom-10 w-full text-center text-slate-700 px-4">
                            <AlertTriangle className="w-12 h-12 mx-auto mb-2 opacity-20" />
                            <p className="text-xs uppercase tracking-widest opacity-30">Restricted Area</p>
                        </div>

                    </div>
                </div>

                {/* Scroll Indicator Overlay */}
                {scrollProgress < 0.1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gold-muted/90 text-midnight px-4 py-2 rounded-full text-sm font-bold animate-bounce pointer-events-none shadow-lg">
                        Scroll Down ↓
                    </div>
                )}
            </div>
        </div>
    );
}
