import React from 'react';
import { ArrowDownRight, Layers, MailX, UserMinus, DollarSign, Sparkles, TrendingDown } from 'lucide-react';
import { BOTTLENECKS } from '../data';

interface BottlenecksSectionProps {
  onScrollToForm: () => void;
}

export const BottlenecksSection: React.FC<BottlenecksSectionProps> = ({ onScrollToForm }) => {
  const getIcon = (num: number) => {
    switch (num) {
      case 1: return <UserMinus className="w-5 h-5 text-[#FF5223]" />;
      case 2: return <ArrowDownRight className="w-5 h-5 text-[#FF5223]" />;
      case 3: return <DollarSign className="w-5 h-5 text-[#FF5223]" />;
      case 4: return <Layers className="w-5 h-5 text-[#FF5223]" />;
      case 5: return <MailX className="w-5 h-5 text-[#FF5223]" />;
      default: return <TrendingDown className="w-5 h-5 text-[#FF5223]" />;
    }
  };

  return (
    <section id="bottlenecks" className="py-20 bg-[#F1F5F9] text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            6 вузьких місць воронки, через які ваш E-commerce втрачає повторні продажі
          </h2>

          {/* Main Message Callout */}
          <div className="mt-5 p-4 rounded-xl bg-white border border-slate-200 border-l-4 border-l-[#FF5223] shadow-sm text-slate-700 text-base leading-relaxed text-center">
            Зростання CAC нищить маржинальність: якщо ви не бачите вузькі місця у воронці та не контролюєте логіку каскадів, ваш Retention-канал працює на межі збитковості або просто стоїть на місці.
          </div>
        </div>

        {/* 6 Bottlenecks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BOTTLENECKS.map((item) => (
            <div 
              key={item.number}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#5BACEA]/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                  {getIcon(item.number)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2.5 leading-snug group-hover:text-[#5BACEA] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Diagnosis Suggestion */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0F172A] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-sm font-bold text-[#5BACEA] flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4" />
              Бажаєте виявити конкретні витоки у вашому проєкті?
            </div>
            <div className="text-xs sm:text-sm text-slate-300">
              Retention-спеціаліст перевірить ваші форми, тригери та відправки під час 45-хвилинного розбору
            </div>
          </div>
          <button
            onClick={onScrollToForm}
            className="shrink-0 px-5 py-2.5 rounded-lg bg-[#5BACEA] hover:bg-[#469fd8] text-slate-950 text-sm font-bold transition-all active:scale-[0.98] cursor-pointer"
          >
            Записатися на аудит
          </button>
        </div>

      </div>
    </section>
  );
};
