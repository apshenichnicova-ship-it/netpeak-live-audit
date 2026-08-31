import React from 'react';

interface FooterProps {
  onScrollToForm: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToForm }) => {
  return (
    <footer className="bg-[#090D16] text-slate-400 py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Netpeak Logo */}
        <div className="flex items-center gap-3">
          <img 
            src="/netpeak_blue.png" 
            alt="Netpeak" 
            className="h-8 sm:h-9 w-auto object-contain" 
          />
        </div>

        {/* Action Button */}
        <button
          onClick={onScrollToForm}
          className="px-6 py-3 rounded-xl bg-[#FF5223] hover:bg-[#e6461a] active:scale-[0.99] text-white text-sm font-bold shadow-md transition-all cursor-pointer"
        >
          Записатися на аудит
        </button>

      </div>
    </footer>
  );
};
