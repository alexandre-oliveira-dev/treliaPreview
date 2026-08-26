import { LeafMark } from "./LeafMark";

export function Footer() {
  return (
    <footer className="bg-sand py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-center sm:flex-row sm:px-8 sm:text-left">
        <span className="flex items-center gap-2 font-display text-lg text-bark">
          <LeafMark size={16} className="text-olive" />
          Jéssica Dias
        </span>
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-bark-mute">
          Jéssica Dias · Nutrição · Curitiba - PR
        </p>
      </div>
    </footer>
  );
}
