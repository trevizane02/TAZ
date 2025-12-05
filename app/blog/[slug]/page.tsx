import { getAllPosts, getPostBySlug } from '@/lib/blog';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag as TagIcon, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  return {
    title: `${post.meta.title} | Blog TAZ` ,
    description: post.meta.excerpt
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { meta, html } = await getPostBySlug(params.slug);
  
  // Estimar tempo de leitura (média de 200 palavras por minuto)
  const wordCount = html.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white dark:from-navy dark:via-navy/95 dark:to-navy">
      {/* Header com Breadcrumb */}
      <div className="border-b border-gray-200 dark:border-white/10 bg-white/50 dark:bg-navy/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-navy dark:hover:text-blue transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Blog
          </Link>
        </div>
      </div>

      {/* Hero Section com Imagem de Capa */}
      <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-navy to-blue overflow-hidden">
        {meta.coverImage && (
          <Image
            src={meta.coverImage}
            alt={meta.title}
            fill
            className="object-cover opacity-30"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent" />
        
        {/* Conteúdo do Hero */}
        <div className="relative h-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col justify-end pb-12">
          {/* Tag */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              <TagIcon className="w-4 h-4" />
              {meta.tag}
            </span>
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {meta.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="text-sm">{meta.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">
                {new Date(meta.date).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric'
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{readTime} min de leitura</span>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo do Artigo */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Excerpt/Resumo */}
        {meta.excerpt && (
          <div className="mb-12 p-6 bg-gradient-to-r from-blue/5 to-navy/5 dark:from-blue/10 dark:to-navy/10 border-l-4 border-blue rounded-r-lg">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic">
              {meta.excerpt}
            </p>
          </div>
        )}

        {/* Conteúdo Principal com Estilos Aprimorados */}
        <div 
          className="blog-content prose prose-lg md:prose-xl dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:text-navy dark:prose-headings:text-white
            prose-h1:text-4xl prose-h1:mt-8 prose-h1:mb-6
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-blue/30
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
            prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-[1.8] prose-p:mb-6 prose-p:text-base
            prose-strong:text-navy dark:prose-strong:text-blue prose-strong:font-bold
            prose-em:text-gray-700 dark:prose-em:text-gray-300 prose-em:not-italic
            prose-a:text-blue prose-a:no-underline hover:prose-a:underline prose-a:font-medium
            prose-blockquote:border-l-4 prose-blockquote:border-blue prose-blockquote:bg-blue/5 dark:prose-blockquote:bg-blue/10 
            prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
            prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300
            prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-blue prose-code:text-sm
            prose-pre:bg-gray-900 dark:prose-pre:bg-gray-950 prose-pre:shadow-xl prose-pre:p-4
            prose-ul:my-6 prose-ul:space-y-3 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-6 prose-ol:space-y-3 prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:leading-relaxed prose-li:text-base
            prose-img:rounded-2xl prose-img:shadow-2xl prose-img:my-8 prose-img:w-full
            prose-hr:border-gray-300 dark:prose-hr:border-white/10 prose-hr:my-12
          "
          dangerouslySetInnerHTML={{ __html: html }} 
        />

        {/* Seção de Ação no Final */}
        <div className="mt-16 p-8 bg-gradient-to-br from-navy to-blue rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Precisa de Serviços de Ferry Flight?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            A Texas Aviation Zap oferece serviços profissionais de ferry flight com segurança e eficiência.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-navy px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Entre em Contato
          </Link>
        </div>

        {/* Compartilhar / Voltar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-navy dark:hover:text-blue transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Ver todos os posts
          </Link>
        </div>
      </article>
    </div>
  );
}
