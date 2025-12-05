import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: 'Blog | Insights em Ferry Flight'
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  
  return (
    <div className="w-full">
      {/* Hero Section - Estilo Free Bird */}
      <section className="relative w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-32 bg-gradient-to-br from-navy via-[#001662] to-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/90">
                Conhecimento TAZ
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Blog <span className="text-accent">& Insights</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 font-light max-w-3xl mx-auto">
              Inteligência operacional em ferry flight e entrega de aeronaves
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Posts */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="h-full rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-800 shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  {/* Imagem de Capa */}
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-accent/10 to-navy/10">
                    <img 
                      src={post.coverImage} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Tag overlay */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-accent text-white text-xs font-semibold uppercase tracking-wider">
                        {post.tag}
                      </span>
                    </div>
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-ink/50 dark:text-gray-400">
                      <span>{new Date(post.date).toLocaleDateString('pt-BR', { 
                        day: '2-digit', 
                        month: 'long', 
                        year: 'numeric' 
                      })}</span>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>
                    
                    <h2 className="text-xl sm:text-2xl font-bold text-navy dark:text-white group-hover:text-accent dark:group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-ink/70 dark:text-gray-300 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="pt-2">
                      <span className="text-accent font-semibold inline-flex items-center gap-2">
                        Ler artigo
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Mensagem quando não há posts */}
          {posts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-ink/50 dark:text-gray-400">Nenhum post publicado ainda.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
