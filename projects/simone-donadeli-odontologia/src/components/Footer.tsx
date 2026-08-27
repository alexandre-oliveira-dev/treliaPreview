import { CONTACT } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-stone/10 bg-ink-950 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 text-center text-sm text-stone/60 sm:flex-row sm:justify-between sm:px-8 sm:text-left">
        <p>
          {CONTACT.name} · {CONTACT.cro}
        </p>
        <p>{CONTACT.addressLine1}, {CONTACT.addressLine2}</p>
      </div>
    </footer>
  );
}
