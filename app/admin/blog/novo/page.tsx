import { redirect } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';
import BlogEditor from '@/components/admin/BlogEditor';

export default async function NovoPostPage() {
  const authenticated = await isAuthenticated();
  
  if (!authenticated) {
    redirect('/admin/login');
  }

  return <BlogEditor />;
}
