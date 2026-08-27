# Direção visual — Consultório Marly Caroline & Gabrielle Brianêz

Consultório odontológico compartilhado por duas dentistas no bairro Aeroporto,
Barretos-SP: Dra. Marly Caroline P.Z.Cital e Dra. Gabrielle Taveira Brianêz
(cirurgiã-dentista, pós-graduada em Endodontia, CROSP 119.595). Sem site
próprio hoje.

**Restrição real de conteúdo:** o Instagram da Dra. Gabrielle
(@dragabrielletbrianez) não tem nenhuma foto profissional/clínica — é um
perfil pessoal (fotos de família, filhos, corrida, vôlei). Não há foto
profissional de nenhuma das duas dentistas nem do consultório disponível.
Decisão (override de R11/CLAUDE.md "sempre foto real"): em vez de usar uma
foto de família de forma inadequada para um site comercial, ou inventar uma
foto que não existe, a direção visual é **tipográfica/gráfica**, sem
depender de fotografia — motivo de assinatura supre esse papel. O
`opengraph-image.tsx` também é 100% tipográfico/gráfico por esse motivo (não
existe foto real utilizável para compor o preview).
Não foi possível achar informação sobre especialidade/CRO da Dra. Marly
Caroline — ela aparece apenas pelo nome informado pelo usuário; não inventar
credenciais para ela.

- **Paleta:** papel quase-branco (`--paper` #F7F4EE) + tinta índigo-marinho
  quase-preta (`--ink` #16213A / `--ink-700` #33415E) + coral technical-accent
  (`--coral` #E8593A / `--coral-dark` #C24327) como único acento forte, sobre
  um azul-pó de apoio (`--indigo-tint` #E7ECF6) para superfícies. Fora da
  família de todos os irmãos odontológicos: nada de rosa/blush/vinho
  (`dra-alessandra-todesco`), areia/terracota (`dra-larissa-pauletti`,
  `odontologia-rivera`), dourado/rosa (`dra-marianina-munoz`), roxo/magenta
  (`dra-gabriela-fordelone`) nem pedra/petróleo (`simone-donadeli-odontologia`)
  — aqui o contraste é índigo-marinho versus coral sobre papel, não sobre
  fundo colorido quente.
- **Tipografia:** Space Grotesk (display, geométrica técnica, com
  personalidade de rótulo/plano) + IBM Plex Sans (corpo, humanista técnica,
  reforça o conceito "diagrama clínico") — combinação inédita na pasta, sem
  nenhuma serifa editorial (deliberado: é a única direção "blueprint/técnica"
  da pasta, todas as outras usam serifa editorial ou grotesco humanizado).
- **Layout:** sem hero fotográfico — hero é um "quadro técnico" com headline
  grande + diagrama SVG de corte de canal radicular (referência direta à
  Endodontia) com anotações estilo desenho técnico (linhas de cota, marcas de
  canto tipo enquadramento de câmera, rótulos "Fig. 01" onde fizer sentido
  informativo, não decorativo). Seção "quem cuida de você" é um duo-card lado
  a lado (não retrato único, já que são duas profissionais) com iniciais
  grandes em vez de foto. Especialidades em lista técnica horizontal com
  linhas de cota, não grade de ícones genérica.
- **Assinatura visual:** motivo de "linhas de cota + marcas de canto" (SVG,
  estilo anotação de desenho técnico/blueprint) usado como moldura dos
  duo-cards, divisor de seção e fundo sutil do hero — nenhum outro projeto da
  pasta usa vocabulário técnico-diagramático (os irmãos usam blob orgânico,
  facetas de pedra, linha triangular dourada, arco de sorriso ou corte
  diagonal).
- **Motion:** linhas de cota "desenhando" (stroke-dashoffset) no load do
  hero, reveals `whileInView` por seção, hover/tap em cards e botões;
  `prefers-reduced-motion` respeitado (linhas aparecem completas, sem
  desenho).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
