import { CONTACT } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-ink px-6 py-8 text-center sm:px-10">
      <p className="font-body text-sm text-blush/60">
        {CONTACT.name} · {CONTACT.role} · {CONTACT.address.city}
      </p>
    </footer>
  );
}
