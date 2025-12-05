'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FreeBirdPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-32 bg-gradient-to-br from-navy via-[#001662] to-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/90">
                {t.freebirdPage.badge}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t.freebirdPage.title} <span className="text-accent">{t.freebirdPage.titleAccent}</span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light max-w-3xl mx-auto">
              {t.freebirdPage.subtitle}
            </p>
            
            <p className="text-lg sm:text-xl text-accent font-semibold">
              {t.freebirdPage.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Missão Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-start"
          >
            {/* Coluna Esquerda: Medalha + Texto */}
            <div className="space-y-8 order-2 md:order-1">
              {/* Medalha */}
              <div className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-48 h-48 md:w-64 md:h-64"
                >
                  <img 
                    src="/imagens/logo/freebird-medalha.png" 
                    alt="Medalha Free Bird" 
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </div>

              {/* Texto */}
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-navy dark:text-white">
                  {t.freebirdPage.sectionTitle}
                </h2>
                <div className="space-y-4 text-ink/80 dark:text-white/80 leading-relaxed">
                  <p>
                    {t.freebirdPage.paragraph1}
                  </p>
                  <p className="font-semibold text-accent text-lg">
                    {t.freebirdPage.paragraph2}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Coluna Direita: Carrossel */}
            <div className="relative order-1 md:order-2">
              {/* Carrossel de imagens */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="flex snap-x snap-mandatory overflow-x-auto gap-0 scrollbar-hide">
                  {[
                    '/imagens/freebird/imagem1.jpg',
                    '/imagens/freebird/imagem2.jpg',
                    '/imagens/freebird/imagem3.jpg',
                    '/imagens/freebird/imagem4.jpg'
                  ].map((image, index) => (
                    <div key={index} className="min-w-full snap-center">
                      <div className="aspect-[4/5] bg-gradient-to-br from-accent/10 to-navy/10 dark:from-accent/20 dark:to-navy/20 flex items-center justify-center">
                        <img 
                          src={image} 
                          alt={`Free Bird ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Indicadores de navegação */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {[0, 1, 2, 3].map((index) => (
                    <div key={index} className="w-2 h-2 rounded-full bg-white/50 backdrop-blur-sm" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-center text-ink/50 dark:text-gray-400 mt-4">
                {t.freebirdPage.carouselCaption}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-slate-50 to-white dark:from-navy/50 dark:to-navy">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy dark:text-white">
              {t.freebirdPage.statsTitle}
            </h2>
            
            <p className="text-lg text-ink/80 dark:text-white/80 max-w-3xl mx-auto leading-relaxed">
              {t.freebirdPage.statsDescription}
            </p>
            
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-lg">
                <div className="text-5xl font-bold text-accent mb-2">1:1</div>
                <div className="text-sm uppercase tracking-wider text-ink/60 dark:text-white/60">{t.freebirdPage.stat1}</div>
              </div>
              <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-lg">
                <div className="text-5xl font-bold text-accent mb-2">∞</div>
                <div className="text-sm uppercase tracking-wider text-ink/60 dark:text-white/60">{t.freebirdPage.stat2}</div>
              </div>
              <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-lg">
                <div className="text-5xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm uppercase tracking-wider text-ink/60 dark:text-white/60">{t.freebirdPage.stat3}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-accent">{t.freebirdPage.methodologyBadge}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy dark:text-white">
                {t.freebirdPage.methodologyTitle}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-white to-slate-50 dark:from-white/5 dark:to-transparent border border-black/5 dark:border-white/10 shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-red-700 flex items-center justify-center text-white font-bold text-2xl mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-white mb-3">{t.freebirdPage.method1Title}</h3>
                <p className="text-ink/70 dark:text-white/70 leading-relaxed">
                  {t.freebirdPage.method1Text}
                </p>
              </div>
              
              <div className="p-8 rounded-3xl bg-gradient-to-br from-white to-slate-50 dark:from-white/5 dark:to-transparent border border-black/5 dark:border-white/10 shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-red-700 flex items-center justify-center text-white font-bold text-2xl mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-white mb-3">{t.freebirdPage.method2Title}</h3>
                <p className="text-ink/70 dark:text-white/70 leading-relaxed">
                  {t.freebirdPage.method2Text}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impacto Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50 dark:from-navy dark:to-navy/95">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-accent">{t.freebirdPage.impactBadge}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy dark:text-white">
                {t.freebirdPage.impactTitle}
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.freebirdPage.impacts.map((impact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-lg flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-navy dark:text-white font-medium">{impact}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Como Apoiar Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-accent">{t.freebirdPage.supportBadge}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy dark:text-white">
                {t.freebirdPage.supportTitle}
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {t.freebirdPage.support.map((way, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-8 rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-red-700 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                    <p className="text-navy dark:text-white font-medium leading-relaxed pt-2">{way}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gradient-to-br from-navy via-[#001662] to-navy">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-light text-white/90 italic leading-relaxed">
              {t.freebirdPage.quote}
            </blockquote>
            <div className="space-y-2">
              <p className="text-accent font-bold text-lg">{t.freebirdPage.quoteAuthor}</p>
              <p className="text-white/60 text-sm">{t.freebirdPage.quoteRole}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[32px] border border-accent/20 bg-gradient-to-br from-white to-slate-50 dark:from-white/5 dark:to-transparent p-12 sm:p-16 text-center space-y-8 shadow-2xl"
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy dark:text-white">
                {t.freebirdPage.ctaTitle}
              </h2>
              <p className="text-lg text-ink/80 dark:text-white/80 max-w-3xl mx-auto leading-relaxed">
                {t.freebirdPage.ctaDescription} <span className="text-accent font-bold">{t.freebirdPage.ctaHighlight}</span>.
              </p>
              <p className="text-xl font-semibold text-accent">
                {t.freebirdPage.ctaTagline}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                {t.freebirdPage.ctaButton1}
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 rounded-full border-2 border-accent text-accent dark:text-accent font-bold text-lg hover:bg-accent hover:text-white transition-all duration-300"
              >
                {t.freebirdPage.ctaButton2}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
