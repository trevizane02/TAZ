'use client';

import { useState, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Save,
  Upload,
  Eye,
  EyeOff,
  X,
  Calendar,
  Tag as TagIcon,
  User,
  FileText,
} from 'lucide-react';
import { marked } from 'marked';
import type { BlogPost } from '@/lib/blog';

// Configurar marked
marked.setOptions({
  breaks: true, // Respeita quebras de linha
  gfm: true, // GitHub Flavored Markdown
});

interface BlogEditorProps {
  post?: BlogPost;
}

export default function BlogEditor({ post }: BlogEditorProps) {
  const [title, setTitle] = useState(post?.title || '');
  const [excerpt, setExcerpt] = useState(post?.excerpt || '');
  const [tag, setTag] = useState(post?.tag || 'Ferry Flight');
  const [author, setAuthor] = useState(post?.author || 'Texas Aviation Zap');
  const [coverImage, setCoverImage] = useState(post?.coverImage || '');
  const [content, setContent] = useState(post?.content || '');
  const [showPreview, setShowPreview] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const contentImageInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  // Processar preview do markdown
  const previewHtml = useMemo(() => {
    if (!showPreview) return '';
    return marked.parse(content) as string;
  }, [content, showPreview]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validação
    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecione uma imagem');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('A imagem deve ter menos de 5MB');
      return;
    }

    setUploadingImage(true);

    try {
      const formData = new FormData();
      formData.append('image', file);

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const { url } = await res.json();
        setCoverImage(url);
      } else {
        alert('Erro ao fazer upload da imagem');
      }
    } catch (error) {
      console.error('Erro ao fazer upload:', error);
      alert('Erro ao fazer upload da imagem');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleContentImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecione uma imagem');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('A imagem deve ter menos de 5MB');
      return;
    }

    setUploadingImage(true);

    try {
      const formData = new FormData();
      formData.append('image', file);

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const { url } = await res.json();
        
        // Inserir markdown da imagem no conteúdo
        const imageMarkdown = `\n\n![Descrição da imagem](${url})\n\n`;
        const textarea = textareaRef.current;
        
        if (textarea) {
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;
          const newContent = content.substring(0, start) + imageMarkdown + content.substring(end);
          setContent(newContent);
          
          // Mover cursor para depois da imagem
          setTimeout(() => {
            textarea.focus();
            textarea.setSelectionRange(start + imageMarkdown.length, start + imageMarkdown.length);
          }, 0);
        } else {
          setContent(content + imageMarkdown);
        }

        alert('Imagem inserida! Você pode editar a descrição no texto.');
      } else {
        alert('Erro ao fazer upload da imagem');
      }
    } catch (error) {
      console.error('Erro ao fazer upload:', error);
      alert('Erro ao fazer upload da imagem');
    } finally {
      setUploadingImage(false);
      if (contentImageInputRef.current) {
        contentImageInputRef.current.value = '';
      }
    }
  };

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleSave = async () => {
    if (!title.trim() || !content.trim()) {
      alert('Título e conteúdo são obrigatórios');
      return;
    }

    setSaving(true);

    try {
      const slug = post?.slug || generateSlug(title);
      const date = post?.date || new Date().toISOString().split('T')[0];

      const postData = {
        slug,
        title,
        date,
        excerpt,
        tag,
        author,
        coverImage,
        content,
      };

      const res = await fetch(`/api/admin/posts/${slug}`, {
        method: post ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      });

      if (res.ok) {
        router.push('/admin/blog');
      } else {
        const error = await res.json();
        alert(error.error || 'Erro ao salvar post');
      }
    } catch (error) {
      console.error('Erro ao salvar:', error);
      alert('Erro ao salvar post');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/admin/blog"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-navy dark:hover:text-blue transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar</span>
            </Link>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-navy dark:hover:text-blue transition-colors"
              >
                {showPreview ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                <span className="hidden sm:inline">
                  {showPreview ? 'Editor' : 'Preview'}
                </span>
              </button>

              <button
                onClick={handleSave}
                disabled={saving}
                className="flex items-center gap-2 bg-gradient-to-r from-navy to-blue text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50"
              >
                <Save className="w-5 h-5" />
                <span>{saving ? 'Salvando...' : 'Salvar Post'}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 space-y-6"
        >
          {/* Título */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <FileText className="w-4 h-4" />
              Título *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent dark:bg-gray-900 dark:text-white text-xl font-bold transition-all"
              placeholder="Digite o título do post..."
              required
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <FileText className="w-4 h-4" />
              Resumo
            </label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent dark:bg-gray-900 dark:text-white resize-none transition-all"
              placeholder="Breve resumo do post..."
              rows={3}
            />
          </div>

          {/* Metadata Row */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Tag */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <TagIcon className="w-4 h-4" />
                Categoria
              </label>
              <select
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent dark:bg-gray-900 dark:text-white transition-all"
              >
                <option value="Ferry Flight">Ferry Flight</option>
                <option value="Segurança">Segurança</option>
                <option value="Logística">Logística</option>
                <option value="Manutenção">Manutenção</option>
                <option value="Notícias">Notícias</option>
              </select>
            </div>

            {/* Author */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <User className="w-4 h-4" />
                Autor
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent dark:bg-gray-900 dark:text-white transition-all"
                placeholder="Nome do autor..."
              />
            </div>
          </div>

          {/* Cover Image */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Upload className="w-4 h-4" />
              Imagem de Capa
            </label>

            {coverImage ? (
              <div className="relative group">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={coverImage}
                    alt="Cover preview"
                    fill
                    className="object-cover"
                  />
                </div>
                <button
                  onClick={() => setCoverImage('')}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-12 text-center cursor-pointer hover:border-navy dark:hover:border-blue transition-colors"
              >
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {uploadingImage ? 'Enviando...' : 'Clique para fazer upload'}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  JPG, PNG ou WEBP (máx. 5MB)
                </p>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                <FileText className="w-4 h-4" />
                Conteúdo * {showPreview && '(Preview)'}
              </label>
              
              {!showPreview && (
                <button
                  type="button"
                  onClick={() => contentImageInputRef.current?.click()}
                  disabled={uploadingImage}
                  className="flex items-center gap-2 text-sm bg-blue/10 text-blue px-3 py-1.5 rounded-lg hover:bg-blue/20 transition-colors disabled:opacity-50"
                >
                  <Upload className="w-4 h-4" />
                  {uploadingImage ? 'Enviando...' : 'Inserir Imagem'}
                </button>
              )}
            </div>

            {showPreview ? (
              <div
                className="prose prose-lg md:prose-xl dark:prose-invert max-w-none
                  prose-headings:font-bold prose-headings:text-navy dark:prose-headings:text-white
                  prose-h1:text-4xl prose-h1:mt-8 prose-h1:mb-4
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-white/10
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                  prose-strong:text-navy dark:prose-strong:text-blue prose-strong:font-semibold
                  prose-em:text-gray-600 dark:prose-em:text-gray-400
                  prose-a:text-blue prose-a:no-underline hover:prose-a:underline
                  prose-blockquote:border-l-4 prose-blockquote:border-blue prose-blockquote:bg-blue/5 dark:prose-blockquote:bg-blue/10 
                  prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
                  prose-ul:my-6 prose-ul:space-y-2
                  prose-ol:my-6 prose-ol:space-y-2
                  prose-li:text-gray-700 dark:prose-li:text-gray-300
                  prose-img:rounded-2xl prose-img:shadow-2xl prose-img:my-8
                  p-6 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-900 min-h-[400px]"
                dangerouslySetInnerHTML={{ __html: previewHtml }}
              />
            ) : (
              <textarea
                ref={textareaRef}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent dark:bg-gray-900 dark:text-white resize-none font-mono text-sm transition-all leading-relaxed"
                placeholder="Exemplo de como escrever:

# Título Principal

Primeiro parágrafo do seu artigo. Sempre deixe UMA linha em branco entre títulos e parágrafos.

## Subtítulo da Seção

Outro parágrafo aqui. Use **negrito** para destacar palavras importantes.

### Título Menor

Texto com *itálico* também funciona bem.

- Item de lista 1
- Item de lista 2
- Item de lista 3

![Clique em 'Inserir Imagem' para adicionar fotos]

IMPORTANTE: Sempre deixe uma linha em branco entre:
- Títulos e parágrafos
- Parágrafos e parágrafos
- Listas e textos"
                rows={20}
                required
                style={{ whiteSpace: 'pre-wrap' }}
              />
            )}

            <input
              ref={contentImageInputRef}
              type="file"
              accept="image/*"
              onChange={handleContentImageUpload}
              className="hidden"
            />

            <div className="mt-2 space-y-2">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                📝 <strong>Dicas de Markdown:</strong>
              </p>
              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1 ml-4">
                <li>• <code># Título</code> para título grande (H1)</li>
                <li>• <code>## Subtítulo</code> para subtítulo (H2)</li>
                <li>• <code>**negrito**</code> para <strong>negrito</strong></li>
                <li>• <code>*itálico*</code> para <em>itálico</em></li>
                <li>• Deixe uma linha em branco entre parágrafos</li>
                <li>• Use o botão "Preview" para ver como ficará</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
