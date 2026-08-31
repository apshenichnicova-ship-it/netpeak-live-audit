import React from 'react';
import { Video, FileText, CheckCircle, Calendar, ArrowRight, Shield, MonitorPlay } from 'lucide-react';
import { PROCESS_STEPS } from '../data';

interface HowItWorksSectionProps {
  onScrollToForm: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onScrollToForm }) => {
  const getStepIcon = (num: number) => {
    switch (num) {
      case 1: return <Calendar className="w-6 h-6 text-[#5BACEA]" />;
      case 2: return <MonitorPlay className="w-6 h-6 text-[#FF5223]" />;
      case 3: return <FileText className="w-6 h-6 text-emerald-500" />;
      default: return <CheckCircle className="w-6 h-6 text-[#5BACEA]" />;
    }
  };

  return (
    <section id="process" className="py-20 bg-[#0F172A] text-white border-b border-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            3 кроки до виявлення прихованих точок росту вашого Retention
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            45 хвилин у прямому ефірі — і ви отримуєте чітку карту вузьких місць та точок росту у ваших CRM-комунікаціях.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div 
              key={step.stepNumber}
              className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-7 border border-slate-700/80 hover:border-[#5BACEA]/60 transition-all flex flex-col justify-between relative group"
            >
              {/* Connector line for desktop */}
              {idx < 2 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                  <ArrowRight className="w-8 h-8 opacity-40 group-hover:opacity-100 group-hover:text-[#5BACEA] transition-all" />
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-700/60">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center shadow-inner">
                    {getStepIcon(step.stepNumber)}
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-[#5BACEA]/15 text-[#5BACEA] text-xs font-mono font-bold">
                      {step.duration}
                    </span>
                    <div className="text-[11px] text-slate-400 font-semibold mt-1">
                      {step.tag}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#5BACEA] transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Button Block */}
        <div className="mt-14 text-center">
          <button
            onClick={onScrollToForm}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#FF5223] hover:bg-[#e6461a] active:scale-[0.99] text-white font-bold text-base shadow-lg transition-all cursor-pointer"
          >
            <span>Записатися на аудит</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
