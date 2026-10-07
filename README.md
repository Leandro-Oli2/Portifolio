# Portfólio | Leandro Candido

Portfólio pessoal em React + TypeScript + Vite, com tema espacial.

## Rodando

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:5173
npm run build    # gera a versão de produção em /dist
```

## Onde editar

- **Conteúdo (textos, trajetória, skills, projetos, links):** `src/data/perfil.ts`
- **Cores e fontes:** variáveis no topo de `src/styles/global.css`
- **Cada seção:** `src/components/` (um `.tsx` + um `.css` por seção)
- **Imagens e vídeo:** `public/media/`
- **Landing page antiga:** `public/landing/` (servida em `/landing/index.html`)

Para dar a um projeto uma imagem em vez do planeta, adicione o arquivo em
`public/media/` e preencha o campo `imagem` dele em `perfil.ts`.

## Deploy

Funciona direto na Vercel ou Netlify (framework: Vite, build: `npm run build`, saída: `dist`).
