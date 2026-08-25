# Direção visual — Vitor Oliveira (Nutrichef)

Nutricionista clínico recém-formado em São Paulo (Bela Vista), CRN-3
94088/P, marca pessoal "Nutrichef" (fonte real: Instagram
@vitor_nutrichef). Posicionamento próprio, extraído das falas do cliente:
"nutrição com propósito, respeito, ciência e afeto", unindo formação
técnica em nutrição a técnica culinária — não é um consultório clínico
frio nem um perfil fitness genérico de dieta restritiva.

- **Paleta:** verde-pinho profundo (`pine`) como acento/âncora + creme
  pergaminho (`cream`) de fundo + tomate/coral (`tomato`) como único
  contraste quente para CTA — referência direta ao verde e ao ícone de
  tomate da logo real do Nutrichef. Nenhum outro projeto da pasta usa essa
  dupla verde-pinho/tomate (os projetos odontológicos usam
  rosa/vinho, areia/terracota, dourado/rosa ou terracota/oliva).
- **Tipografia:** Bricolage Grotesque (display, grotesca contemporânea,
  personalidade "food-tech/editorial moderno") + DM Sans (corpo) —
  combinação inédita na pasta, deliberadamente não-serifada para fugir do
  "elegante clássico" dos consultórios odontológicos vizinhos.
- **Layout:** hero com retrato real emoldurado em blob orgânico assimétrico
  (não diagonal, não círculo perfeito) e selo "Nutrichef" flutuante; seção
  de filosofia com citação real do cliente centralizada; "como funciona"
  como bloco de cor sólido (verde-pinho) com passos numerados em linha do
  tempo alternada; serviços em bento grid assimétrico (2 cards simples +
  1 card grande com fotos reais das marmitas embutidas), com CTA inline no
  próprio grid em vez de uma faixa de CTA separada.
- **Assinatura visual:** `PlateMark` — traço SVG autoral de prato/talher
  com pontilhado de "temperos" ao lado, desenhado do zero para o nicho
  (nutrição + culinária), animado ao entrar em viewport. Não reaproveita o
  arco "sorriso" de `dra-larissa-pauletti` nem os padrões geométricos dos
  outros projetos.
- **Fotos e conteúdo:** retrato e fotos de marmitas são reais, extraídos do
  perfil público @vitor_nutrichef a pedido do próprio cliente (mensagem do
  usuário: "extraia do instagram"). Nenhum depoimento foi inventado — a
  seção de prova social foi propositalmente omitida até existirem
  depoimentos reais de clientes para usar.
- **Seção "Avaliação nutricional":** adicionada a pedido do cliente (print
  de WhatsApp, 25/08/2026) pedindo destaque para antropometria e
  bioimpedância como métodos de avaliação, além de "planos e pacotes"
  das marmitas. Implementada como `AvaliacaoNutricional.tsx`, entre "Como
  funciona" e "Serviços" — dois cards (Antropometria, Bioimpedância) no
  mesmo vocabulário visual dos cards de Serviços. O pedido de "planos e
  pacotes" das marmitas foi tratado como uma frase de reforço no card
  "Marmitas Nutrichef" em `Servicos.tsx` (não como seção própria), porque o
  cliente ainda não passou os pacotes/preços reais — evitar inventar
  planos específicos até existir essa informação.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
