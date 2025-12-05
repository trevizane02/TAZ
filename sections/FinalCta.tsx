'use client';

import Link from 'next/link';
import { COMPANY } from '@/data/site';
import { useLanguage } from '@/contexts/LanguageContext';

export function FinalCta() {
  const { t } = useLanguage();
  
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <div className="rounded-[32px] border border-black/5 bg-gradient-to-r from-navy via-ink to-black text-white p-10 text-center shadow-[0_40px_80px_rgba(0,0,0,0.3)]">
        <p className="text-xs uppercase tracking-[0.5em] text-white/60">{t.finalCta.badge}</p>
        <h3 className="text-3xl sm:text-4xl font-heading mt-3">{t.finalCta.title}</h3>
        <p className="text-white/70 mt-3 max-w-2xl mx-auto">
          {t.finalCta.subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link href="/contact" className="px-6 py-3 rounded-full bg-white text-ink font-semibold hover:bg-accent hover:text-white">
            {t.finalCta.cta}
          </Link>
          <a href={`tel:${COMPANY.phone}`} className="px-6 py-3 rounded-full border border-white/40 text-white/80">
            {COMPANY.phone}
          </a>
          <a href={`mailto:${COMPANY.email}`} className="px-6 py-3 rounded-full border border-white/40 text-white/80">
            {COMPANY.email}
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
