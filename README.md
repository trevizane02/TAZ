# Fly TAZ – Texas Aviation Zap

Projeto criado com Next.js (App Router) + TypeScript + Tailwind + Framer Motion.

## Scripts

```bash
npm install
npm run dev
```

## Estrutura principal

- `app/` – páginas e rotas (home, serviços, about, impact, aircrafts, contact, blog e API stub).
- `components/` – Header, Footer, formulário e utilitários visuais.
- `sections/` – blocos usados na home.
- `data/` – textos editáveis (diferenciais, serviços, tipos de aeronave, contatos etc.).
- `content/blog/` – posts em Markdown com frontmatter (title, date, excerpt, tag).
- `lib/blog.ts` – leitura e parsing dos posts para a listagem e páginas individuais.

## Como editar

- Ajuste `data/site.ts` com contatos oficiais, se necessário.
- Ajuste textos/cópias nas seções em `data/*.ts` ou diretamente nos componentes.
- Adicione novos posts criando arquivos `.md` em `content/blog` seguindo o padrão dos exemplos.
- Customize animações no `Hero` (`sections/Hero.tsx`) usando Framer Motion.
- Formulário de contato (`components/ContactForm.tsx`) envia dados para `/api/contact`; integre com seu serviço de e-mail/CRM dentro desse endpoint.

## Tailwind

Configurações extras (cores, background) estão em `tailwind.config.ts`. Use as classes utilitárias para manter consistência visual.
