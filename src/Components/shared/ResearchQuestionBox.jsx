import React from 'react';
import { Search } from 'lucide-react';

export default function ResearchQuestionBox({ question }) {
  return (
    <div className="glass-card-dark-strong rounded-2xl p-8 relative overflow-hidden h-full group hover:bg-white/5 transition-all duration-300">
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-orange-500 rounded-full text-white shadow-lg shadow-orange-500/20">
            <Search className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-orange-500 tracking-wide uppercase">
            Research Question
          </h3>
        </div>

        <p className="text-xl md:text-2xl text-white font-serif leading-relaxed">
          {question}
        </p>
      </div>
    </div>
  );
}