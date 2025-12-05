import { redirect } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';
import { getAllPosts } from '@/lib/blog';
import AdminBlogList from '@/components/admin/AdminBlogList';

export default async function AdminBlogPage() {
  const authenticated = await isAuthenticated();
  
  if (!authenticated) {
    redirect('/admin/login');
  }

  const posts = await getAllPosts();

  return <AdminBlogList initialPosts={posts} />;
}
