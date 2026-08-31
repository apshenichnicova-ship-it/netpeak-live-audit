import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, TrendingUp, BarChart3, CheckCircle2, Award, Sparkles, ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../data';

interface CasesCarouselSectionProps {
  onScrollToForm?: () => void;
}

export const CasesCarouselSection: React.FC<CasesCarouselSectionProps> = ({ onScrollToForm }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % CASE_STUDIES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  };

  const currentCase = CASE_STUDIES[currentIndex];

  return (
    <section id="cases" className="py-20 bg-[#F8FAFC] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Факти та цифри про нас
            </h2>
            <p className="text-base text-slate-600 mt-2">
              Реальні показники ROMI, конверсій та масштабування воронки в проєктах клієнтів Netpeak
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3 self-center md:self-end">
            <div className="text-xs font-mono font-semibold text-slate-500 mr-2">
              <span className="text-[#5BACEA] font-bold text-base">{currentIndex + 1}</span> / {CASE_STUDIES.length}
            </div>
            <button
              onClick={prevSlide}
              aria-label="Попередній кейс"
              className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-[#5BACEA] flex items-center justify-center shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Наступний кейс"
              className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-[#5BACEA] flex items-center justify-center shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Slide Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Col: Main Key Metric & Badge */}
            <div className="lg:col-span-5 p-8 lg:p-12 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none"></div>

              <div className="relative z-10 space-y-4">
                {/* Brand Logo Container */}
                <div className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-white shadow-md border border-white/20 mb-2 min-h-[48px] w-fit">
                  {currentCase.logoUrl ? (
                    <img 
                      src={currentCase.logoUrl} 
                      alt={currentCase.client} 
                      className={`object-contain ${
                        currentCase.id === 'owlymate' 
                          ? 'h-9 max-w-[150px] scale-110' 
                          : 'h-7 max-w-[130px]'
                      }`} 
                    />
                  ) : (
                    <span className="text-slate-900 text-xs font-bold uppercase tracking-wider">{currentCase.client}</span>
                  )}
                </div>

                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
                  <span className="text-[#5BACEA]">{currentCase.metric}</span>
                </div>
                <div className="text-base sm:text-lg font-medium text-slate-300">
                  {currentCase.metricLabel}
                </div>
              </div>

            </div>

            {/* Right Col: Detailed Description & Read CTA Link */}
            <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug tracking-tight">
                  {currentCase.title}
                </h3>

                <p className="text-base text-slate-600 leading-relaxed">
                  {currentCase.description}
                </p>
              </div>

              {/* External Case Study Link Button */}
              <div className="pt-6 border-t border-slate-100 flex items-center">
                <a
                  href={currentCase.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#5BACEA] hover:bg-[#4ea0dd] text-slate-950 font-bold text-sm shadow-sm transition-all active:scale-[0.98] group"
                >
                  <span>Ознайомитися з кейсом на Netpeak Blog</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Carousel Thumbnails / Dot Indicators */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {CASE_STUDIES.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between h-20 ${
                currentIndex === idx 
                  ? 'bg-white border-[#5BACEA] shadow-md ring-2 ring-[#5BACEA]/20' 
                  : 'bg-slate-100/80 border-slate-200 hover:bg-white text-slate-500'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                {c.logoUrl ? (
                  <img 
                    src={c.logoUrl} 
                    alt={c.client} 
                    className={`object-contain ${
                      c.id === 'owlymate' ? 'h-6 max-w-[90px] scale-110' : 'h-5 max-w-[80px]'
                    }`} 
                  />
                ) : (
                  <span className="text-xs font-bold text-slate-900">{c.client}</span>
                )}
                <span className="text-[10px] font-mono text-slate-400">0{idx + 1}</span>
              </div>
              <div className="text-sm font-extrabold text-[#5BACEA] truncate">
                {c.metric}
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
