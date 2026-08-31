import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BottlenecksSection } from './components/BottlenecksSection';
import { ChecklistSection } from './components/ChecklistSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { CasesCarouselSection } from './components/CasesCarouselSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaSection } from './components/CtaSection';
import { SpecialistsSection } from './components/SpecialistsSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToForm = () => {
    const formElement = document.getElementById('audit-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Temporary highlight effect
      formElement.classList.add('ring-4', 'ring-[#FF5223]', 'ring-offset-2');
      setTimeout(() => {
        formElement.classList.remove('ring-4', 'ring-[#FF5223]', 'ring-offset-2');
      }, 1500);

      // Focus first input
      const firstInput = formElement.querySelector('input');
      if (firstInput) {
        setTimeout(() => {
          firstInput.focus();
        }, 500);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#5BACEA]/25 selection:text-[#0F172A]">
      {/* Top Header */}
      <Header onScrollToForm={scrollToForm} />

      <main className="flex-1">
        {/* Блок 1: Перший екран (Hero Section) з повною формою запису */}
        <HeroSection />

        {/* Блок 2: Розпізнавання болю • Симптоматика витоку бюджету */}
        <BottlenecksSection onScrollToForm={scrollToForm} />

        {/* Блок 3: Кому потрібна Retention Journey Map • Чек-лист 45-хвилинного аудиту */}
        <ChecklistSection onScrollToForm={scrollToForm} />

        {/* Блок 4: Як це працює • Покроковий процес Live-діагностики */}
        <HowItWorksSection onScrollToForm={scrollToForm} />

        {/* Блок 5: Кейси у форматі карусель з фінансовими результатами (Puma, Ukrarmor, Owlymate, Obstava) */}
        <CasesCarouselSection onScrollToForm={scrollToForm} />

        {/* Блок 6: Відгуки — Досвід C-level у ритейлі */}
        <TestimonialsSection onScrollToForm={scrollToForm} />

        {/* Блок 7 / 8: Фінальний заклик до дії */}
        <CtaSection onScrollToForm={scrollToForm} />

        {/* Блок 8 / 9: Хто проводить консультацію (Retention-експерти з фото) */}
        <SpecialistsSection onScrollToForm={scrollToForm} />
      </main>

      {/* Corporate Footer */}
      <Footer onScrollToForm={scrollToForm} />
    </div>
  );
}
