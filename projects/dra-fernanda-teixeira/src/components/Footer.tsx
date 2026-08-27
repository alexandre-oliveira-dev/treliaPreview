import { CONTACT } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-ink py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 text-center text-sm text-ivory/60 sm:flex-row sm:justify-between sm:px-8 sm:text-left">
        <p>
          {CONTACT.displayName} · {CONTACT.role}
        </p>
        <p>
          {CONTACT.addressLine1}, {CONTACT.addressLine2}
        </p>
      </div>
    </footer>
  );
}
