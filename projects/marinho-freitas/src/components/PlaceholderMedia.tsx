export function PlaceholderMedia({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden bg-ink ${className}`}>
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--color-graphite-soft) 0px, var(--color-graphite-soft) 1px, transparent 1px, transparent 28px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      <p className="relative px-6 text-center text-xs uppercase tracking-[0.2em] text-paper/50">
        {label}
        <br />
        <span className="text-paper/30">Foto profissional a inserir</span>
      </p>
    </div>
  );
}
