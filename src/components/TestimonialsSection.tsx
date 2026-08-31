import React from 'react';
import { Quote, MessageSquare, CheckCircle, Building2 } from 'lucide-react';
import { TESTIMONIALS } from '../data';

interface TestimonialsSectionProps {
  onScrollToForm?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onScrollToForm }) => {
  return (
    <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Відгуки про співпрацю від наших партнерів
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Думка топ-менеджерів та засновників бізнесу, які довірили свій Retention команді Netpeak
          </p>
        </div>

        {/* Testimonials 3-Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div 
              key={item.id}
              className="bg-slate-50 rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="p-2 rounded-lg bg-white shadow-xs text-[#5BACEA]">
                    <Quote className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white text-slate-700 border border-slate-200 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    {item.company}
                  </span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  {item.quote}
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#5BACEA]/20 text-slate-900 font-bold flex items-center justify-center text-sm">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{item.author}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="text-xs text-slate-500">
                    {item.position}, {item.company}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
