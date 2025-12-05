import { NextRequest, NextResponse } from 'next/server';
import { verifyPassword, createSession } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    
    if (!password) {
      return NextResponse.json(
        { success: false, message: 'Senha é obrigatória' },
        { status: 400 }
      );
    }

    const isValid = await verifyPassword(password);
    
    if (isValid) {
      await createSession();
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, message: 'Senha incorreta' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Erro na autenticação:', error);
    return NextResponse.json(
      { success: false, message: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}