'use client';

import { ContactForm } from '@/components/ContactForm';
import { COMPANY } from '@/data/site';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-10">
      <header className="text-center space-y-3">
        <p className="text-accent uppercase tracking-[0.3em] text-xs">{t.contactPage.title}</p>
        <h1 className="text-4xl font-semibold text-navy dark:text-white">{t.contactPage.subtitle}</h1>
        <p className="text-ink/70 dark:text-gray-300 max-w-2xl mx-auto">
          {t.contactPage.description}
        </p>
      </header>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="p-6 rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-800 shadow-sm">
          <h2 className="text-2xl font-semibold text-navy dark:text-white">{t.contactPage.directContact}</h2>
          <p className="text-ink/70 dark:text-gray-300 mt-3">{t.contactPage.phone}: {COMPANY.phone}</p>
          <p className="text-ink/70 dark:text-gray-300">{t.contactPage.email}: {COMPANY.email}</p>
          <p className="text-ink/70 dark:text-gray-300">{t.contactPage.whatsapp}: {COMPANY.whatsapp}</p>
          <p className="text-ink/60 dark:text-gray-400 text-sm mt-4">{t.contactPage.base}: {COMPANY.location} • {t.contactPage.operation}</p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
