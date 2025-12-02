import React from 'react';
import { BookOpen } from 'lucide-react';

export default function ThemeBox() {
  return (
    <div className="glass-card-dark-strong rounded-2xl p-8 h-full hover:bg-white/5 transition-all duration-300">
      <div className="flex items-center gap-3 mb-8">
        <BookOpen className="w-5 h-5 text-orange-500" />
        <h3 className="font-bold text-slate-100 text-lg">At a Glance</h3>
      </div>

      <div className="space-y-8">
        <div className="group">
          <h4 className="text-xs font-bold text-slate-400 mb-3 flex items-center gap-2 uppercase tracking-wider">
            <span className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.5)]"></span>
            Themes
          </h4>
          <ul className="text-sm text-slate-300 space-y-3 ml-4">
            <li className="flex items-start gap-2">
              <span className="font-bold text-slate-100 min-w-[3ch]">PCE:</span>
              <span>Politics and Power</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-slate-100 min-w-[3ch]">WOR:</span>
              <span>America in the World</span>
            </li>
          </ul>
        </div>

        <div className="group">
          <h4 className="text-xs font-bold text-slate-400 mb-3 flex items-center gap-2 uppercase tracking-wider">
            <span className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.5)]"></span>
            Historical Thinking Skills
          </h4>
          <ul className="text-sm text-slate-300 space-y-3 ml-4">
            <li className="flex items-start gap-2">
              <span className="font-bold text-slate-100 min-w-[3ch]">5.B:</span>
              <span>Explain relationships between developments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-slate-100 min-w-[3ch]">6.C:</span>
              <span>Use historical reasoning with evidence</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}