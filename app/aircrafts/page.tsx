'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function AircraftsPage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      <header className="text-center space-y-3">
        <p className="text-accent uppercase tracking-[0.3em] text-xs">{t.aircraftsPage.subtitle}</p>
        <h1 className="text-4xl font-semibold text-navy dark:text-white">{t.aircraftsPage.title}</h1>
        <p className="text-ink/70 dark:text-gray-300 max-w-3xl mx-auto">
          {t.aircraftsPage.description}
        </p>
      </header>
      <div className="space-y-8">
        {t.aircraftsPage.items.map((type, index) => (
          <article key={index} className="p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-800 space-y-4 shadow-sm">
            <h2 className="text-3xl font-semibold text-navy dark:text-white">{type.title}</h2>
            <p className="text-ink/70 dark:text-gray-300">{type.description}</p>
            <div>
              <p className="text-ink dark:text-white font-semibold mb-2">{type.useCases}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
