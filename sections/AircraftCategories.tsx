'use client';

import { SectionTitle } from '@/components/SectionTitle';
import { useLanguage } from '@/contexts/LanguageContext';

export function AircraftCategories() {
  const { t } = useLanguage();
  
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <SectionTitle title={t.aircrafts.title} subtitle={t.aircrafts.subtitle} />
      <div className="grid gap-8 lg:grid-cols-5">
        {t.aircrafts.items.map((cat, index) => (
          <div key={index} className="flex flex-col justify-between rounded-3xl border border-black/5 bg-white/80 p-6 shadow">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-steel">{t.aircrafts.category}</p>
              <h3 className="text-xl font-heading text-navy mt-2">{cat.title}</h3>
              <p className="text-sm text-ink/70 mt-3">{cat.description}</p>
            </div>
            <span className="mt-4 text-xs text-steel">{t.aircrafts.tagline}</span>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
