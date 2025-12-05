'use client';

import { SectionTitle } from '@/components/SectionTitle';
import { useLanguage } from '@/contexts/LanguageContext';

export function ProcessSection() {
  const { t } = useLanguage();
  
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <SectionTitle title={t.process.title} subtitle={t.process.subtitle} />
      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="relative grid md:grid-cols-5 gap-8">
          {t.process.items.map((step, index) => (
            <div key={index} className="p-6 rounded-3xl border border-black/5 bg-white shadow">
              <span className="text-accent text-4xl font-heading">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="text-lg font-heading text-navy mt-2">{step.title}</h3>
              <p className="text-sm text-ink/70 mt-3">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
