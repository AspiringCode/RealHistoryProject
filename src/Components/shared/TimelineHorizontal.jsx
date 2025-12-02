import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TimelineHorizontal({ events }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="w-full py-20 px-4">
      <div className="relative max-w-6xl mx-auto">
        {/* Timeline line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-slate-700 -translate-y-1/2 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-muted to-transparent opacity-50" />
        </div>

        {/* Events */}
        <div className="relative flex justify-between items-center">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center group"
              style={{ width: `${100 / events.length}%` }}
              onMouseEnter={() => setSelectedEvent(index)}
              onMouseLeave={() => setSelectedEvent(null)}
            >
              {/* Year (Above) */}
              <motion.div
                className={`mb-6 font-bold font-mono text-sm transition-colors duration-300 ${selectedEvent === index ? 'text-gold-muted scale-110' : 'text-slate-500'
                  }`}
                animate={{ y: selectedEvent === index ? -5 : 0 }}
              >
                {event.year}
              </motion.div>

              {/* Dot */}
              <div className="relative z-10 cursor-pointer">
                <motion.div
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${selectedEvent === index
                      ? 'bg-midnight border-gold-muted scale-150 shadow-[0_0_15px_rgba(197,160,89,0.5)]'
                      : 'bg-slate-800 border-slate-600 group-hover:border-gold-muted/50'
                    }`}
                />
                {/* Pulse effect for active state */}
                {selectedEvent === index && (
                  <motion.div
                    layoutId="pulse"
                    className="absolute inset-0 -inset-3 bg-gold-muted/20 rounded-full z-0"
                    initial={{ scale: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  />
                )}
              </div>

              {/* Label (Below) */}
              <div className="mt-6 text-center absolute top-8 w-32">
                <p className={`text-xs font-bold transition-colors duration-300 uppercase tracking-wider ${selectedEvent === index ? 'text-slate-200' : 'text-slate-600'
                  }`}>
                  {event.label}
                </p>
              </div>

              {/* Tooltip / Card */}
              <AnimatePresence>
                {selectedEvent === index && event.description && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-28 left-1/2 -translate-x-1/2 w-72 bg-midnight/90 backdrop-blur-xl rounded-xl shadow-2xl p-6 z-50 border border-gold-muted/20 text-center"
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-midnight border-t border-l border-gold-muted/20 rotate-45"></div>
                    <h4 className="text-gold-muted font-bold mb-3 text-sm uppercase tracking-wider">{event.label}</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{event.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}