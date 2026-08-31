import React from 'react';
import { ArrowRight, UserPlus, ShoppingBag, Repeat, HeartHandshake, Zap } from 'lucide-react';
import { AUDIT_STAGES } from '../data';

interface ChecklistSectionProps {
  onScrollToForm: () => void;
}

export const ChecklistSection: React.FC<ChecklistSectionProps> = ({ onScrollToForm }) => {
  const getStageIcon = (step: number) => {
    switch (step) {
      case 1: return <UserPlus className="w-5 h-5 text-[#5BACEA]" />;
      case 2: return <ShoppingBag className="w-5 h-5 text-[#5BACEA]" />;
      case 3: return <Repeat className="w-5 h-5 text-[#5BACEA]" />;
      case 4: return <HeartHandshake className="w-5 h-5 text-[#5BACEA]" />;
      default: return <Zap className="w-5 h-5 text-[#5BACEA]" />;
    }
  };

  return (
    <section id="checklist" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Чек-лист 45-хвилинного аудиту: які етапи воронки ми розберемо під час зустрічі
          </h2>

          <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-base text-center">
            Жодної теорії — тільки пошук конкретних вузьких місць у вашій воронці Retention-маркетингу.
          </div>
        </div>

        {/* 4 Stages Journey Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUDIT_STAGES.map((stage) => (
            <div 
              key={stage.step}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-[#5BACEA] hover:bg-white transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Step badge */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#5BACEA]/15 flex items-center justify-center">
                      {getStageIcon(stage.step)}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#5BACEA]">
                      Етап {stage.step}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-200/70 text-slate-700">
                    0{stage.step}/04
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {stage.title}
                </h3>

                {/* Main description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
