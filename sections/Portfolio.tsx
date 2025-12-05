'use client';

import { SectionTitle } from '@/components/SectionTitle';
import { useLanguage } from '@/contexts/LanguageContext';

export function Portfolio() {
  const { t } = useLanguage();
  
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <SectionTitle title={t.portfolio.title} subtitle={t.portfolio.subtitle} />
      <div className="relative">
        <div className="flex snap-x snap-mandatory overflow-x-auto gap-8 pb-6">
          {t.portfolio.items.map((item, index) => (
            <div key={index} className="min-w-[85%] md:min-w-[60%] snap-center">
              <div className="rounded-3xl overflow-hidden h-72 shadow-lg bg-gradient-to-br from-navy/10 to-accent/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-navy text-3xl font-bold">{item.model}</p>
                  <p className="text-accent text-xl mt-2">{item.route}</p>
                </div>
              </div>
              <div className="p-6 rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-800 shadow-xl -mt-8 mx-6 relative">
                <p className="text-accent text-sm uppercase tracking-[0.3em]">{item.model}</p>
                <h3 className="text-2xl font-semibold mt-2 text-navy dark:text-white">{item.route}</h3>
                <p className="text-ink/70 dark:text-gray-300 mt-3">{item.highlight}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-center text-ink/50 dark:text-gray-400">{t.portfolio.swipe}</p>
      </div>
      </div>
    </section>
  );
}
