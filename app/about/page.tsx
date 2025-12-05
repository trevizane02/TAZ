'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-16">
      <header className="text-center space-y-4">
        <p className="text-accent uppercase tracking-[0.5em] text-xs">{t.aboutPage.subtitle}</p>
        <h1 className="text-4xl font-heading text-navy dark:text-white">{t.aboutPage.title}</h1>
        <p className="text-ink/70 dark:text-gray-300 max-w-3xl mx-auto">
          {t.aboutPage.description}
        </p>
      </header>
      <section className="grid gap-8 md:grid-cols-2">
        <div className="p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-800 shadow">
          <h2 className="text-2xl font-heading text-navy dark:text-white">Timeline</h2>
          <ul className="mt-4 space-y-4">
            {t.aboutPage.timeline.map((item, index) => (
              <li key={index} className="flex gap-4">
                <span className="text-accent font-heading">{item.year}</span>
                <p className="text-ink/70 dark:text-gray-300">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-800 shadow">
          <h2 className="text-2xl font-heading text-navy dark:text-white">{t.aboutPage.pillarsTitle}</h2>
          <ul className="mt-4 grid grid-cols-1 gap-3 text-ink/70 dark:text-gray-300">
            {t.aboutPage.pillars.map((pillar, index) => (
              <li key={index} className="p-4 rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-gray-700">
                <p className="font-semibold text-navy dark:text-white">{pillar.title}</p>
                <p className="text-sm mt-1">{pillar.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
