import React from 'react';
import { Info, AlertCircle, CheckCircle, Lightbulb } from 'lucide-react';

export default function CalloutBox({ type = 'info', title, children, className = '' }) {
  const configs = {
    info: {
      icon: Info,
      bgColor: 'bg-blue-900/20',
      borderColor: 'border-blue-400/50',
      iconColor: 'text-blue-400',
      titleColor: 'text-blue-200',
      glowColor: 'shadow-glow-blue'
    },
    warning: {
      icon: AlertCircle,
      bgColor: 'bg-amber-900/20',
      borderColor: 'border-amber-400/50',
      iconColor: 'text-amber-400',
      titleColor: 'text-amber-200',
      glowColor: 'shadow-glow-gold'
    },
    success: {
      icon: CheckCircle,
      bgColor: 'bg-green-900/20',
      borderColor: 'border-green-400/50',
      iconColor: 'text-green-400',
      titleColor: 'text-green-200',
      glowColor: ''
    },
    insight: {
      icon: Lightbulb,
      bgColor: 'bg-orange-900/20',
      borderColor: 'border-orange-400/50',
      iconColor: 'text-orange-400',
      titleColor: 'text-orange-200',
      glowColor: 'shadow-glow-gold'
    }
  };

  const config = configs[type] || configs.info;
  const Icon = config.icon;

  return (
    <div className={`glass-card-dark ${config.bgColor} border-l-4 ${config.borderColor} rounded-r-xl p-6 ${config.glowColor} group hover:scale-[1.01] transition-all duration-300 ${className}`}>
      <div className="flex gap-4">
        <Icon className={`${config.iconColor} w-6 h-6 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300`} />
        <div className="flex-1">
          {title && (
            <h4 className={`${config.titleColor} font-bold mb-3 tracking-wide uppercase text-sm`}>{title}</h4>
          )}
          <div className="text-slate-300 text-sm leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}