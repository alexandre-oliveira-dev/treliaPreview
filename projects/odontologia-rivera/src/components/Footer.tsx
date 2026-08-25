import { CONTACT } from "@/lib/contact";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-ink-950/10 bg-linen py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2.5">
          <Logo className="h-8 w-8" />
          <span className="font-display italic text-lg text-ink-950">
            Odontologia Rivera
          </span>
        </div>
        <p className="text-xs text-ink-600">
          © {new Date().getFullYear()} {CONTACT.dentistName} ·{" "}
          {CONTACT.cro} · Curitiba, PR
        </p>
      </div>
    </footer>
  );
}
