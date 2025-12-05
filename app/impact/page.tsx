'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function ImpactPage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-16">
      <header className="text-center space-y-4">
        <p className="text-accent uppercase tracking-[0.5em] text-xs">{t.impactPage.badge}</p>
        <h1 className="text-4xl font-heading text-navy dark:text-white">{t.impactPage.title}</h1>
        <p className="text-ink/70 dark:text-gray-300 max-w-3xl mx-auto">
          {t.impactPage.description}
        </p>
      </header>
      <section className="grid gap-8 md:grid-cols-3">
        {t.impactPage.steps.map((step, index) => (
          <div key={index} className="p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-800 shadow">
            <h2 className="text-xl font-heading text-navy dark:text-white">{step.title}</h2>
            <p className="text-ink/70 dark:text-gray-300 mt-3">{step.text}</p>
          </div>
        ))}
      </section>
      <section className="rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-800 shadow p-10">
        <h2 className="text-2xl font-heading text-navy dark:text-white">{t.impactPage.impactTitle}</h2>
        <ul className="list-disc pl-6 text-ink/70 dark:text-gray-300 mt-4 space-y-2">
          {t.impactPage.impactItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
