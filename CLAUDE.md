# treliaPreview — Pipeline automático de leads

Este repo é o motor de um processo repetitivo: eu (Claude) recebo as
informações de um lead, construo a landing page de amostra sem pausar
para confirmações, e depois que o usuário sobe o projeto na Vercel eu gero
a mensagem de venda para ele mandar pro dono do negócio. O usuário só
participa em dois momentos: (1) manda as infos do lead, (2) avisa que subiu
na Vercel e passa a URL. Todo o resto — decisão de direção visual, código,
build, mensagem — é automático, sem perguntas de confirmação intermediárias.

## Gatilho 1 — "novo lead" / infos de um cliente em potencial

Quando o usuário mandar informações de um lead (nome, nicho/profissão, se já
tem site ou não, redes sociais, diferenciais, localização, etc.), seguir sem
pausar:

1. **Definir nome de pasta** em kebab-case ou PascalCase (seguir o padrão das
   pastas irmãs), sempre dentro de `projects/` — ex.:
   `projects/<nome-do-cliente>-<nicho>`.
2. **Extrair conteúdo real**: se o usuário mandou Instagram/site/rede social
   do lead, usar isso como fonte de fotos, bio, posicionamento e serviços
   reais — nunca inventar depoimentos, preços ou pacotes que não foram
   informados (ver regra equivalente em
   `negociando/vitor-oliveira-nutricionista/AGENTS.md` como referência de
   como registrar isso).
3. **Seguir à risca `projects/CLAUDE.md`**: stack (Next.js + TS + Tailwind
   v4 + pnpm + `motion`), identidade visual autoral e obrigatoriamente
   diferente de todo projeto já existente na pasta (paleta, tipografia,
   arquitetura de layout, elemento de assinatura visual próprios), metatags
   de compartilhamento com foto real, SEO básico, mobile-first.
   - Antes de codar, invocar a skill `frontend-design` para calibrar a
     direção estética (isso substitui pedir confirmação ao usuário — decidir
     e seguir).
   - Registrar a decisão de direção visual num `AGENTS.md` curto na raiz do
     projeto (mesmo formato do `vitor-oliveira-nutricionista`), para simular
     briefing de designer e servir de referência futura.
4. **Se o lead já tem site**: usar isso como contexto de posicionamento
   (não copiar o site dele — a proposta é mostrar algo melhor/diferente).
   Se não tem site: é uma landing page do zero, sem site de referência.
5. **Verificar por execução (R5)**: rodar `pnpm install`, `pnpm build` (ou ao
   menos `pnpm lint` + subir o dev server e checar no browser) antes de
   considerar o projeto pronto. Não reportar como pronto sem ter executado.
6. **Não perguntar nada no meio do caminho** a menos que uma informação seja
   literalmente impossível de inferir (ex.: nenhum nome de cliente foi
   informado). Ambiguidades de gosto/design são decisão minha, seguindo as
   regras de identidade visual.
7. Ao terminar, avisar o usuário em 1-2 frases que o projeto está pronto e
   onde está (`projects/<pasta>`), e que já pode rodar `pnpm dev` ou subir na
   Vercel.

## Gatilho 2 — usuário avisa que subiu na Vercel (com ou sem pedir a mensagem)

Quando o usuário disser algo como "subi na vercel", "linkedin/link: X",
colar uma URL `*.vercel.app`, ou pedir a mensagem de venda:

1. Gerar automaticamente uma **mensagem de venda para WhatsApp**, sem
   precisar que o usuário peça explicitamente — assumir que é o próximo
   passo natural do fluxo.
2. **Tom**: informal, direto, pessoal — como se o próprio usuário estivesse
   mandando manualmente para o dono do negócio. Nada de cara de copy de
   agência ou proposta comercial formal. Curta (poucas linhas), sem emojis
   em excesso, sem gerúndio de vendedor forçado.
3. **Conteúdo da mensagem**:
   - Contextualizar que foi feito um site de amostra para aquele
     negócio específico (citar o nome do negócio/cliente).
   - Deixar claro que é uma demonstração não solicitada (gera curiosidade,
     não soa como spam de agência).
   - Incluir o link da Vercel.
   - Se o lead **não tinha site**: enquadrar como oportunidade de ganhar
     presença online.
   - Se o lead **já tinha site**: enquadrar como "veja como poderia ficar
     melhor/mais moderno" sem atacar diretamente o site atual dele.
   - Call to action leve (ex.: perguntar se ele quer conversar sobre isso),
     sem pressão agressiva.
4. Entregar a mensagem pronta para copiar e colar (bloco de texto único),
   não uma lista de opções — a menos que o usuário peça variações.

## Estado dos projetos

- `projects/` — todos os projetos de landing page (leads e clientes),
  conforme convenções em `projects/CLAUDE.md`.
- `negociando/` — pasta legada de projetos em negociação; novos leads vão
  direto para `projects/` a partir de agora (decisão do usuário
  2026-08-26). Não precisa mover o que já está em `negociando/`.
