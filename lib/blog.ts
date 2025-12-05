import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

// Configurar marked para respeitar quebras de linha e processar markdown corretamente
marked.setOptions({
  breaks: true, // Respeita quebras de linha simples
  gfm: true, // GitHub Flavored Markdown
  mangle: false, // Não embaralhar emails
});

const postsDir = path.join(process.cwd(), 'content', 'blog');

export type BlogMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tag?: string;
  coverImage?: string;
  author?: string;
};

export type BlogPost = BlogMeta & {
  content?: string;
};

export async function getAllPosts(): Promise<BlogMeta[]> {
  const files = await fs.promises.readdir(postsDir);
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8');
      const { data } = matter(raw);
      return {
        slug: file.replace(/\.md$/, ''),
        title: data.title || 'Post sem título',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        tag: data.tag || 'Blog',
        coverImage: data.coverImage || '/imagens/blog/default-cover.jpg',
        author: data.author || 'TAZ Team'
      } as BlogMeta;
    })
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDir, `${slug}.md`);
  const raw = await fs.promises.readFile(fullPath, 'utf-8');
  const { data, content } = matter(raw);
  const html = await marked.parse(content);
  return {
    meta: {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      tag: data.tag || 'Blog',
      coverImage: data.coverImage || '/imagens/blog/default-cover.jpg',
      author: data.author || 'TAZ Team'
    },
    html
  };
}
