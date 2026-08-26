export function Footer() {
  return (
    <footer className="bg-paper py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-center sm:flex-row sm:px-8 sm:text-left">
        <span className="font-display text-lg uppercase tracking-wide text-ink">
          Mocelin<span className="text-coral">.</span>
        </span>
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-ink-mute">
          Dra. Débora Mocelin · Nutrição Clínica &amp; Metabólica · Curitiba - PR
        </p>
      </div>
    </footer>
  );
}
