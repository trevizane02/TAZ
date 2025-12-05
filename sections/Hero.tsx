'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative w-full h-screen min-h-[600px] sm:min-h-[700px] overflow-hidden">
      {/* Vídeo de Fundo - Ajustado para cobrir toda a tela sem cortes */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <video 
          className="absolute inset-0 w-full h-full object-cover" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/imagens/Videohero/videohero.mp4" type="video/mp4" />
        </video>
        {/* Overlay escuro sofisticado */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-[#001662]/70" />
        {/* Overlay vermelho sutil */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-navy/40" />
      </div>

      {/* Efeitos visuais decorativos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grade sutil */}
        <div className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Círculos decorativos animados */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-32 -right-32 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-accent/20 blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-32 -left-32 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-navy/30 blur-3xl"
        />
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 flex h-full items-center w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl space-y-6 sm:space-y-8"
          >
            {/* Badge superior */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/90">
                {t.hero.badge}
              </span>
            </motion.div>

            {/* Título principal com animação espetacular */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] text-white"
            >
              <span className="block">{t.hero.title1}</span>
              <span className="block bg-gradient-to-r from-white via-red-100 to-accent bg-clip-text text-transparent">
                {t.hero.title2}
              </span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed font-light"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* Stats em linha */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 sm:gap-8 pt-2 sm:pt-4"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">150+</div>
                  <div className="text-xs sm:text-sm text-white/70">{t.hero.stat1}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">99.8%</div>
                  <div className="text-xs sm:text-sm text-white/70">{t.hero.stat2}</div>
                </div>
              </div>
            </motion.div>

            {/* Botões CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6"
            >
              <Link 
                href="/contact" 
                className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-blue-600 text-white font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:bg-blue-700 text-center"
              >
                <span className="relative z-10">{t.hero.cta1}</span>
              </Link>
              <Link
                href="/services"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white/30 backdrop-blur-sm text-white font-bold text-base sm:text-lg hover:bg-white/10 hover:border-white/60 transition-all duration-300 text-center"
              >
                {t.hero.cta2}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll - Oculto em mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden sm:block absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs uppercase tracking-widest">{t.hero.scroll}</span>
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
