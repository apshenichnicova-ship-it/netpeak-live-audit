import React from 'react';
import { UserCheck, Award, Briefcase, CheckCircle2, Shield, Sparkles } from 'lucide-react';
import { SPECIALISTS } from '../data';

interface SpecialistsSectionProps {
  onScrollToForm: () => void;
}

export const SpecialistsSection: React.FC<SpecialistsSectionProps> = ({ onScrollToForm }) => {
  return (
    <section id="specialists" className="py-20 bg-[#F1F5F9] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Провідні Retention-маркетологи, а не менеджери з продажів
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            З вами працюватимуть спеціалісти, які щодня будують складні Retention-системи для масштабування e-commerce та B2B проєктів на ринках України, ЄС та США.
          </p>
        </div>

        {/* 2 Specialists Detailed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SPECIALISTS.map((expert) => (
            <div 
              key={expert.id}
              className="bg-white rounded-3xl p-7 lg:p-9 border border-slate-200 shadow-md hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Photo & Role Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-slate-100">
                  <div className="relative">
                    <img 
                      src={expert.avatarUrl} 
                      alt={expert.name}
                      referrerPolicy="no-referrer"
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-[#5BACEA]/40 shadow-sm"
                    />
                    <div className="absolute -bottom-2 -right-2 p-1 rounded-full bg-[#5BACEA] text-white">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#5BACEA]/10 text-[#5BACEA] text-xs font-semibold mb-1.5">
                      <Award className="w-3 h-3" />
                      {expert.experience}
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                      {expert.name}
                    </h3>
                    <p className="text-sm font-semibold text-slate-500 mt-0.5">
                      {expert.role}
                    </p>
                  </div>
                </div>

                {/* Bio text */}
                <div className="pt-6">
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {expert.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
