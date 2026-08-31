import React from 'react';
import { ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';

interface HeaderProps {
  onScrollToForm: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onScrollToForm }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-800 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Netpeak Logo and Tagline */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-3 group" aria-label="Netpeak Agency">
            <img 
              src="/netpeak_blue.png" 
              alt="Netpeak" 
              className="h-7 sm:h-8 w-auto object-contain" 
            />
            <div className="hidden sm:block border-l border-slate-700 pl-3">
              <span className="text-[11px] uppercase font-bold tracking-wider text-[#5BACEA]">
                Retention Practice
              </span>
            </div>
          </a>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onScrollToForm}
            className="inline-flex items-center justify-center gap-2 px-4.5 py-2.5 rounded-lg bg-[#FF5223] hover:bg-[#e6461a] text-white text-sm font-semibold shadow-sm transition-all active:scale-[0.98] cursor-pointer"
          >
            <span>Записатися на аудит</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </header>
  );
};
