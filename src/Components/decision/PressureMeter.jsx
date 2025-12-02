import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function PressureMeter() {
  const [hoveredFactor, setHoveredFactor] = useState(null);

  const factors = [
    {
      id: 1,
      label: 'Proxy Attacks',
      value: 75,
      color: 'bg-red-500',
      description: 'Hamas and Hezbollah attacks escalating, threatening Israeli security'
    },
    {
      id: 2,
      label: 'Rising Enrichment',
      value: 90,
      color: 'bg-orange-500',
      description: 'Iran enriching uranium to 60%, approaching weapons-grade levels'
    },
    {
      id: 3,
      label: 'UN/IAEA Pressure',
      value: 65,
      color: 'bg-yellow-500',
      description: 'International community demanding action on nuclear violations'
    },
    {
      id: 4,
      label: 'Israeli Lobbying',
      value: 95,
      color: 'bg-purple-500',
      description: 'Netanyahu presenting "slideshow diplomacy" to convince Trump'
    }
  ];

  return (
    <div className="bg-glass backdrop-blur-md rounded-2xl p-8 shadow-xl border border-glass-border">
      <h3 className="text-xl font-bold text-slate-100 mb-8 text-center font-serif">
        Pressure Factors Leading to Decision
      </h3>

      <div className="space-y-8">
        {factors.map((factor) => (
          <div
            key={factor.id}
            onMouseEnter={() => setHoveredFactor(factor.id)}
            onMouseLeave={() => setHoveredFactor(null)}
            className="cursor-pointer group"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="font-semibold text-slate-300 group-hover:text-white transition-colors">{factor.label}</span>
              <span className="text-sm text-slate-400 font-mono">{factor.value}%</span>
            </div>

            <div className="h-4 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <motion.div
                className={`h-full ${factor.color} flex items-center justify-end pr-3 relative`}
                initial={{ width: 0 }}
                animate={{ width: `${factor.value}%` }}
                transition={{ duration: 1, delay: factor.id * 0.2 }}
              >
                <div className="absolute inset-0 bg-white/20"></div>
              </motion.div>
            </div>

            {hoveredFactor === factor.id && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="text-sm text-slate-400 mt-3 pl-3 border-l-2 border-gold-muted"
              >
                {factor.description}
              </motion.p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 pt-6 border-t border-white/10">
        <div className="flex items-center justify-between">
          <span className="text-slate-400 font-semibold text-sm uppercase tracking-wider">Decision Point Reached</span>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
            <span className="text-red-400 font-bold text-sm uppercase tracking-wider">Operation Authorized</span>
          </div>
        </div>
      </div>
    </div>
  );
}