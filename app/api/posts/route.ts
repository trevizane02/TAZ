import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/blog';
import { isAuthenticated } from '@/lib/auth';

export async function GET() {
  try {
    const posts = await getAllPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Erro ao carregar posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      );
    }

    const postData = await request.json();
    // Aqui você implementaria a criação do post
    // Por enquanto, vamos simular
    
    return NextResponse.json({ success: true, message: 'Post criado com sucesso' });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { error: 'Erro ao criar post' },
      { status: 500 }
    );
  }
}
