# Instruções — pasta `/projects`

Esta pasta contém múltiplos projetos independentes de **landing pages**. Cada
subpasta é um projeto próprio (repo/app independente), não um monorepo
compartilhado.

## Stack padrão

- **Framework:** Next.js (App Router). Ver `next.config.ts` e `src/app/`.
- **Gerenciador de pacotes:** sempre `pnpm` (nunca `npm`/`yarn`). Usar
  `pnpm install`, `pnpm dev`, `pnpm build`, `pnpm lint`.
- **Linguagem:** TypeScript.
- **Estilo:** Tailwind CSS v4.
- **Deploy:** Vercel (`vercel deploy --prod` ou script `pnpm deploy`).

## Animações — obrigatório

Toda landing page criada aqui deve usar animações e transições, não telas
estáticas. Padrão do repo: biblioteca `motion` (Framer Motion / `motion/react`).

- Usar `motion` em: entradas de seção (fade/slide on scroll), hover/tap em
  botões e cards, transições entre estados, micro-interações em formulários.
- Preferir `whileInView` para animações on-scroll em vez de listeners manuais
  de scroll.
- Respeitar `prefers-reduced-motion` quando fizer sentido (não travar a
  usabilidade em nome da animação).
- Evitar animação por animação: tem que reforçar hierarquia visual e guiar o
  olhar do usuário, não distrair.

## Estrutura esperada por projeto

```
<projeto>/
  src/
    app/          # rotas (App Router)
    components/
    lib/
  public/
  package.json
  next.config.ts
```

## Ao criar um novo projeto de landing page

1. `pnpm create next-app@latest <nome> --typescript --tailwind --app`
   (ou clonar a estrutura de um projeto existente como referência, ex.:
   `marinho-freitas`).
2. Instalar `motion`: `pnpm add motion`.
3. Confirmar `packageManager` no `package.json` aponta para `pnpm`.
4. Seguir SEO básico: `sitemap.ts`, `robots.ts`, metadata em `layout.tsx`.
5. Garantir responsividade mobile-first (a maioria do tráfego de LP é mobile).

## Convenções gerais

- Cada projeto é independente — não compartilhar dependências ou components
  entre pastas via import relativo cruzado.
- Nomes de pasta em kebab-case ou PascalCase conforme o cliente/projeto
  (seguir o padrão já existente nas pastas irmãs).
- Não commitar `node_modules`, `.next`, `.env*`.
