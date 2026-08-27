# Direção visual — Dra. Fernanda Teixeira (Cirurgiã-Dentista)

Consultório odontológico no bairro Fortaleza, em Barretos-SP (Av. Cinco,
640). Dra. Fernanda Teixeira (Fernanda Rodrigues Teixeira, confirmado via
Instagram @dra.fernandaateixeira) ainda não tem site — landing page de
amostra construída do zero, sem site de referência.

**Nota sobre fonte de conteúdo:** o Instagram não permitiu extração
confiável de bio/serviços/CRO sem login (a página pública não expõe esses
dados a scraping não autenticado). Uma tentativa de leitura assistida
retornou detalhes específicos (nº de CRO, lista de procedimentos) que não
puderam ser confirmados na página crua — por segurança, esses dados
**não foram usados**. O único dado confirmado do perfil foi o nome completo
(via meta tag `og:description`). Todo o restante do texto do site usa
linguagem genérica e correta sobre odontologia de consultório/bairro, sem
números de experiência, quantidade de pacientes, depoimentos ou
procedimentos específicos inventados — conforme instrução do projeto.

Pesquisei os projetos odontológicos irmãos já existentes em `projects/`
para garantir direção visual inédita:
- `dra-alessandra-todesco`: blush/rosa + vinho, Cormorant + Manrope
- `dra-larissa-pauletti`: areia + terracota/clay, Fraunces + Inter
- `dra-marianina-munoz`: carvão + dourado + rosa blush + mármore, Cormorant +
  Montserrat, padrão geométrico triangular
- `marly-gabrielle-odontologia`: papel/índigo-marinho + coral
- `simone-donadeli-odontologia`: pedra/travertino + petróleo profundo,
  Bricolage Grotesque + Karla, motivo facetado
- `odontologia-rivera`: argila terracota + verde-oliva, Fraunces + Nunito Sans

## Decisões

- **Paleta:** marfim/off-white quente inspirado no mármore real da foto do
  consultório (`--ivory` #F7F4EF / `--stone` #EAE3D8) + tinta quase-preta
  neutra (`--ink` #211F1C) + verde-sálvia profundo como único acento forte
  (`--sage` #3B5D4A / `--sage-dark` #294438, contraste ≥4.5:1 sobre claro).
  Deliberadamente sem dourado (evita colidir com `dra-marianina-munoz`, que
  já é mármore + dourado), sem terracota/areia (evita `dra-larissa-pauletti`
  e `odontologia-rivera`), sem petróleo (evita `simone-donadeli-odontologia`)
  e sem vinho/rosa/coral (evita `dra-alessandra-todesco` e
  `marly-gabrielle-odontologia`). Verde-sálvia é inédito na pasta.
- **Tipografia:** Petrona (display serifada, com itálico para destaques) +
  Public Sans (corpo humanista neutro) via `next/font/google` — combinação
  inédita na pasta.
- **Layout:** hero full-bleed com a foto real do consultório ocupando metade
  da tela (sem moldura/card, diferente do `facet-frame` da
  `simone-donadeli-odontologia`), headline pessoal apresentando a Dra.
  Fernanda; seção de diferenciais em bento grid assimétrico (cards de
  tamanhos variados, não grade uniforme 3 iguais); seção "o consultório" com
  a mesma foto real em crop editorial grande (16:9 / 21:9); seção de
  localização com endereço + contato + CTA WhatsApp sobre fundo sálvia
  sólido. Sem depoimentos e sem estatísticas inventadas (não há dado real
  confirmado de anos de experiência ou nº de pacientes).
- **Assinatura visual:** traço SVG orgânico fino (`LeafDivider` /
  `LeafMark`), inspirado no perfil de uma folha/gota — referência sutil a
  "sálvia"/frescor, sem ser um ícone literal de dente (a maioria dos irmãos
  já usa motivos de dente/sorriso). Usado como divisor animado
  (`whileInView` + `pathLength`) entre seções e como marca no cabeçalho.
- **Motion:** entradas `whileInView`/`initial+animate` em todas as seções,
  hover/tap em cards e botões, divisor de folha com animação de traço;
  `prefers-reduced-motion` respeitado em `globals.css`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
