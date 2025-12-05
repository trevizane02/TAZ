'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-16">
      <header className="text-center space-y-4">
        <p className="text-accent uppercase tracking-[0.5em] text-xs">{t.servicesPage.subtitle}</p>
        <h1 className="text-4xl font-heading text-navy dark:text-white">{t.servicesPage.title}</h1>
        <p className="text-ink/70 dark:text-gray-300 max-w-3xl mx-auto">
          {t.servicesPage.description}
        </p>
      </header>
      <div className="grid gap-8 md:grid-cols-2">
        {t.servicesPage.items.map((service, index) => (
          <article key={index} className="p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-800 shadow">
            <p className="text-xs uppercase tracking-[0.3em] text-steel dark:text-gray-400">{service.subtitle}</p>
            <h2 className="text-2xl font-heading text-navy dark:text-white mt-3">{service.title}</h2>
            <p className="text-ink/70 dark:text-gray-300 mt-4">{service.description}</p>
          </article>
        ))}
      </div>
      <div className="text-center">
        <Link href="/contact" className="px-6 py-3 rounded-full bg-navy dark:bg-accent text-white font-semibold hover:bg-accent dark:hover:bg-navy transition-colors">
          {t.servicesPage.cta}
        </Link>
      </div>
    </div>
  );
}
