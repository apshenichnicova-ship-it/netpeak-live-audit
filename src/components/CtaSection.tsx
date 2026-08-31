import React from 'react';
import { ArrowUp } from 'lucide-react';

interface CtaSectionProps {
  onScrollToForm: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onScrollToForm }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0F172A] via-[#111E38] to-[#0F172A] text-white border-b border-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Забронюйте безкоштовну Live-діагностику вашого Retention
        </h2>

        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
          Забронюйте 45-хвилинну Live-діагностику та отримайте експертний розбір точок входу в Retention (форми підписки, бонусна система, канали комунікації).
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onScrollToForm}
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#FF5223] hover:bg-[#e6461a] active:scale-[0.99] text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Отримати безкоштовний розбір</span>
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
