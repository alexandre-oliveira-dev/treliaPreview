import Image from "next/image";
import { MessageCircle } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { CONTACT } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="bg-brown-800 text-rose-50/80 py-10">
      <div className="mx-auto max-w-6xl px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.webp"
            alt="Logo"
            width={36}
            height={36}
            className="rounded-full"
          />
          <div>
            <p className="font-display text-rose-50 leading-none">
              {CONTACT.name}
            </p>
            <p className="text-xs text-rose-50/60 mt-1">{CONTACT.role}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href={CONTACT.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />
          </a>
        </div>

        <p className="text-xs text-rose-50/50 text-center md:text-right">
          © {new Date().getFullYear()} {CONTACT.name}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
