'use client';

import { COMPANY } from '@/data/site';
import { SectionTitle } from '@/components/SectionTitle';
import { useLanguage } from '@/contexts/LanguageContext';

export function AboutSnippet() {
  const { t } = useLanguage();
  
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <SectionTitle title={t.about.title} subtitle={t.about.subtitle} />
      <div className="grid gap-10 md:grid-cols-2">
        <div className="p-8 rounded-3xl border border-black/5 bg-white shadow">
          <h3 className="text-2xl font-heading text-navy">{t.about.card1Title}</h3>
          <p className="text-ink/70 mt-4">
            {t.about.card1Text}
          </p>
        </div>
        <div className="p-8 rounded-3xl border border-black/5 bg-white shadow">
          <h3 className="text-2xl font-heading text-navy">{t.about.card2Title}</h3>
          <p className="text-ink/70 mt-4">
            {t.about.card2Text}
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
