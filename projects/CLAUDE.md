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

## Identidade visual — cada projeto tem que ser diferente

Problema recorrente: os projetos estão saindo parecidos entre si (mesmo hero,
mesma grade de seções, mesma paleta "azul corporativo genérico"). Isso é
proibido. Cada projeto é para um cliente/nicho diferente e precisa de uma
direção visual própria — layouts devem parecer feitos por designers
diferentes, não copiados de um template.

Antes de codar qualquer seção, decidir e declarar (num comentário curto no
início do `layout.tsx` ou README do projeto) a direção visual escolhida:

1. **Paleta de cor própria** — nunca reaproveitar a paleta de outro projeto da
   pasta. Fugir do azul/branco genérico "SaaS corporativo" como padrão
   automático; escolher cores que conversem com o nicho do cliente (ex.:
   odontologia pode ir por tons clínicos e confiáveis OU por algo mais quente
   e humano — decidir, não usar o piloto automático). Usar 1 cor de destaque
   forte (accent), não 3 tons pastéis sem hierarquia.
2. **Par de tipografia própria** — escolher uma combinação de fontes (via
   `next/font`, Google Fonts ou variável) diferente da usada nos outros
   projetos da pasta. Varie entre serifada/sans, peso, e personalidade
   (editorial, técnica, orgânica, etc.) conforme o cliente.
3. **Arquitetura de layout diferente por projeto** — não repetir a mesma
   sequência "hero centralizado → 3 cards → depoimentos → CTA" em todo
   projeto. Variar deliberadamente:
   - Estrutura do hero (split assimétrico, full-bleed com imagem, hero com
     vídeo/pattern, hero tipográfico sem imagem, etc.)
   - Grid das seções (assimétrico, bento grid, alternância
     esquerda/direita, scroll horizontal, cards com tamanhos variados).
   - Forma dos elementos (retos vs. arredondados vs. orgânicos/blob),
     uso de bordas, sombras, glassmorphism — escolher um vocabulário visual
     coerente e não misturar tudo.
4. **Um elemento de assinatura visual** por projeto — algo que ninguém vai
   confundir com outro site: um padrão gráfico, uma ilustração/ícone custom,
   um tipo de transição de scroll específico, um jeito diferente de mostrar
   prova social, etc.
5. **Referências, não templates** — pode olhar projetos existentes na pasta
   para convenções de código (estrutura de pastas, como configurar `motion`,
   SEO), mas NUNCA copiar a composição visual (mesma disposição de seções,
   mesmas proporções, mesmo esquema de cor) de um projeto para o outro. Ao
   iniciar um projeto novo, invocar a skill `frontend-design` para calibrar
   direção estética antes de escrever componentes.
6. **Checklist de "não ficou clichê"** antes de considerar a landing page
   pronta: se você tirasse a logo/texto do cliente, ainda daria para saber
   que é um projeto diferente dos outros da pasta só pelo visual? Se a
   resposta for não, redesenhar.

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
   (pode usar um projeto existente como referência de estrutura de pastas e
   configuração, ex.: `marinho-freitas` — mas só a parte técnica; o visual
   tem que ser autoral, ver seção "Identidade visual" acima).
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
