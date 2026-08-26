import { CONTACT } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="bg-espresso text-paper/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-16">
        <span className="font-display italic text-lg text-paper">
          Sthephany
        </span>
        <p>
          © {new Date().getFullYear()} {CONTACT.fullName} · {CONTACT.city}
        </p>
        <a
          href={CONTACT.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-paper"
        >
          {CONTACT.instagramHandle}
        </a>
      </div>
    </footer>
  );
}
