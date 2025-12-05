# 📝 Sistema CMS Admin - Guia de Uso

## 🔐 Como Acessar

1. **Acesse a área administrativa:**
   - URL: `http://localhost:3000/admin/login` (desenvolvimento)
   - URL: `https://seudominio.com/admin/login` (produção)

2. **Faça login:**
   - Senha padrão: `tazadmin2024`
   - A sessão dura 7 dias

## ✏️ Como Criar um Novo Post

1. **Acesse o dashboard:**
   - Após fazer login, você será redirecionado para `/admin/blog`
   - Clique no botão **"Novo Post"** no canto superior direito

2. **Preencha os campos:**
   - **Título*** (obrigatório): O título do seu post
   - **Resumo**: Uma breve descrição (aparece nos cards)
   - **Categoria**: Escolha uma categoria (Ferry Flight, Segurança, etc.)
   - **Autor**: Seu nome ou "Texas Aviation Zap"
   - **Imagem de Capa**: Clique para fazer upload (máx. 5MB)
   - **Conteúdo*** (obrigatório): Escreva seu post em Markdown

3. **Como Adicionar Imagens no Conteúdo:**
   - Clique no botão **"Inserir Imagem"** acima do editor de conteúdo
   - Selecione a imagem do seu computador
   - A imagem será automaticamente inserida no texto onde está o cursor
   - Você pode editar a descrição da imagem no código: `![Descrição](url)`
   - Use imagens para ilustrar pontos importantes e melhorar o engajamento

4. **Dicas de Formatação (Markdown):**
   
   **IMPORTANTE:** Deixe sempre uma linha em branco entre parágrafos e títulos!
   
   ```markdown
   # Título Principal (H1)
   
   ## Subtítulo Secundário (H2)
   
   ### Título Menor (H3)
   
   Parágrafo normal. Deixe uma linha em branco antes e depois.
   
   **Texto em negrito** e *texto em itálico*.
   
   - Item de lista
   - Outro item
   - Mais um item
   
   1. Lista numerada
   2. Segundo item
   3. Terceiro item
   
   [Link para site](https://exemplo.com)
   
   ![Descrição da imagem](url-da-imagem)
   
   > Citação ou destaque importante
   > Pode ter várias linhas
   ```
   
   **Dica Principal:** O espaçamento é respeitado! Se você deixar uma linha em branco no editor, ela aparecerá no blog publicado.

5. **Visualize antes de salvar:**
   - Clique no botão **"Preview"** para ver como ficará
   - Clique novamente em **"Editor"** para voltar a editar

6. **Salve o post:**
   - Clique no botão **"Salvar Post"**
   - Você será redirecionado para o dashboard
   - O post aparecerá imediatamente no blog público

## ✏️ Como Editar um Post Existente

1. No dashboard, encontre o post que deseja editar
2. Clique no botão **"Editar"** (ícone de lápis)
3. Faça as alterações necessárias
4. Clique em **"Salvar Post"**

## 👁️ Como Visualizar um Post

1. No dashboard, clique no botão **"Ver"** (ícone de olho)
2. O post será aberto em uma nova aba no blog público

## 🗑️ Como Excluir um Post

1. No dashboard, clique no botão vermelho de **lixeira**
2. Confirme a exclusão
3. O post será removido permanentemente

## 📸 Dicas para Imagens

### Imagem de Capa
- **Formato:** JPG, PNG ou WEBP
- **Tamanho:** Máximo 5MB
- **Dimensões recomendadas:** 1200x630 pixels
- Aparece no topo do artigo e nos cards do blog

### Imagens no Conteúdo
- Use o botão **"Inserir Imagem"** no editor
- As imagens são automaticamente otimizadas
- Adicione descrições significativas para acessibilidade
- Posicione imagens estrategicamente no texto
- Use imagens para:
  - Ilustrar conceitos complexos
  - Mostrar exemplos práticos
  - Quebrar blocos grandes de texto
  - Aumentar o engajamento visual

## 🔒 Segurança

### Como Mudar a Senha

1. Abra o arquivo `/lib/auth.ts`
2. Execute no terminal:
   ```bash
   node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('sua-nova-senha', 12));"
   ```
3. Copie o hash gerado
4. Substitua o valor de `ADMIN_PASSWORD_HASH` no arquivo
5. Salve o arquivo

### Logout

- Clique no botão **"Sair"** no canto superior direito
- Você será desconectado e redirecionado para a tela de login

## 🚨 Solução de Problemas

### "Não consegui fazer login"
- Verifique se está usando a senha correta: `tazadmin2024`
- Limpe o cache do navegador e tente novamente

### "A imagem não aparece"
- Verifique se a imagem tem menos de 5MB
- Use formatos JPG, PNG ou WEBP
- Tente fazer upload novamente

### "Erro ao salvar post"
- Verifique se preencheu o Título e o Conteúdo
- Tente fazer logout e login novamente

## 📱 Compatibilidade

O sistema funciona perfeitamente em:
- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Tablet
- ✅ Mobile

## 💡 Recursos Extras

- **Auto-save de sessão:** Sua sessão dura 7 dias
- **Preview em tempo real:** Veja como ficará antes de publicar
- **Upload rápido:** Arraste e solte imagens
- **Responsivo:** Escreva de qualquer dispositivo
- **Markdown:** Formatação simples e poderosa

## 📞 Suporte

Se tiver alguma dúvida ou problema, entre em contato com o desenvolvedor.

---

**Desenvolvido com ❤️ para Texas Aviation Zap**
