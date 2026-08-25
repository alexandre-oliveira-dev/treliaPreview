import { CONTACT } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="border-t border-ink-950/10 bg-sand py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <span className="font-display italic text-lg text-ink-950">
          Larissa Pauletti
        </span>
        <p className="text-xs text-ink-600">
          © {new Date().getFullYear()} {CONTACT.name} · {CONTACT.role} ·
          Sorocaba, SP
        </p>
      </div>
    </footer>
  );
}
