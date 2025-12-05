'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Plane, LogOut, Plus, Edit, Trash2, Eye, Calendar, Tag } from 'lucide-react';
import type { BlogPost } from '@/lib/blog';

interface AdminBlogListProps {
  initialPosts: BlogPost[];
}

export default function AdminBlogList({ initialPosts }: AdminBlogListProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm('Tem certeza que deseja excluir este post?')) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/posts/${slug}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setPosts(posts.filter(p => p.slug !== slug));
      } else {
        alert('Erro ao excluir post');
      }
    } catch (error) {
      console.error('Erro ao excluir post:', error);
      alert('Erro ao excluir post');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Plane className="w-12 h-12 text-navy animate-pulse mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-navy to-blue p-2 rounded-lg">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  TAZ Admin
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Gerenciar Posts do Blog
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/admin/blog/novo"
                className="flex items-center gap-2 bg-gradient-to-r from-navy to-blue text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <Plus className="w-5 h-5" />
                <span className="hidden sm:inline">Novo Post</span>
              </Link>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:inline">Sair</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {posts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 max-w-md mx-auto">
              <Plane className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Nenhum post ainda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Comece criando seu primeiro post do blog
              </p>
              <Link
                href="/admin/blog/novo"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-navy to-blue text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <Plus className="w-5 h-5" />
                Criar Primeiro Post
              </Link>
            </div>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Cover Image */}
                <div className="relative h-48 bg-gradient-to-br from-navy to-blue overflow-hidden">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <Plane className="w-16 h-16 text-white/50" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </span>
                    {post.tag && (
                      <span className="flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {post.tag}
                      </span>
                    )}
                  </div>

                  {/* Actions - Botões de ação do post */}
                  <div className="flex items-center gap-2">
                    {/* Botão Ver - Abre o post no blog */}
                    <Link
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                      title="Ver post publicado"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Ver</span>
                    </Link>

                    {/* Botão Editar - Abre o editor */}
                    <Link
                      href={`/admin/blog/${post.slug}/editar`}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-lg transition-all text-sm font-semibold"
                      title="Editar este post"
                    >
                      <Edit className="w-4 h-4" />
                      <span>Editar</span>
                    </Link>

                    {/* Botão Excluir */}
                    <button
                      onClick={() => handleDelete(post.slug)}
                      className="flex items-center justify-center gap-2 bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 hover:shadow-lg transition-all text-sm font-medium"
                      title="Excluir este post"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
