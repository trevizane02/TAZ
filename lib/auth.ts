import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';

// Hash da senha: tazadmin2024
// Para mudar a senha, gere um novo hash com: bcrypt.hashSync('sua-nova-senha', 12)
const ADMIN_PASSWORD_HASH = '$2b$12$kvCCLsJvQ4lPbB7VFW5z3.5o3hFx4PenDuLfJy69IPwKv/0hL6zwu';

export async function verifyPassword(password: string): Promise<boolean> {
  return bcrypt.compare(password, ADMIN_PASSWORD_HASH);
}

export async function createSession() {
  const cookieStore = await cookies();
  cookieStore.set('admin-session', 'authenticated', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7, // 7 dias
    path: '/',
  });
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete('admin-session');
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get('admin-session');
  return session?.value === 'authenticated';
}
