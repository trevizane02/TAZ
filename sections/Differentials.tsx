'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/SectionTitle';
import { useLanguage } from '@/contexts/LanguageContext';

export function Differentials() {
  const { t } = useLanguage();
  
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-28 bg-gradient-to-b from-white to-slate-50/50 dark:from-navy dark:to-navy/95">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title={t.differentials.title}
          subtitle={t.differentials.subtitle}
        />
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12 sm:mt-16">
          {t.differentials.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 sm:p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-red-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Ícone */}
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-accent to-red-700 flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg shadow-accent/30 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                {/* Conteúdo */}
                <h3 className="text-lg sm:text-xl font-bold font-heading text-navy dark:text-white mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-ink/70 dark:text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              {/* Decoração de canto */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
