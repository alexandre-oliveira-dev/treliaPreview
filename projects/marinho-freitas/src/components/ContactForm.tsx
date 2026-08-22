"use client";

import { FormEvent, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { areas, whatsappLink } from "@/lib/site";

export function ContactForm() {
  const [started, setStarted] = useState(false);

  const markStarted = () => {
    if (!started) {
      setStarted(true);
      trackEvent("form_start", { form: "contato" });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("nome") || "");
    const area = String(formData.get("area") || "");
    const message = String(formData.get("mensagem") || "");

    const text = `Olá, meu nome é ${name}. Área de interesse: ${area}. ${message}`;
    trackEvent("form_submit", { form: "contato", area });
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} onFocus={markStarted} className="space-y-6">
      <div>
        <label htmlFor="nome" className="text-xs font-medium uppercase tracking-widest text-ink-soft">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          className="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-bronze"
        />
      </div>

      <div>
        <label htmlFor="area" className="text-xs font-medium uppercase tracking-widest text-ink-soft">
          Área de interesse
        </label>
        <select
          id="area"
          name="area"
          required
          defaultValue=""
          className="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-bronze"
        >
          <option value="" disabled>
            Selecione uma área
          </option>
          {areas.map((area) => (
            <option key={area.slug} value={area.name}>
              {area.name}
            </option>
          ))}
          <option value="Outro">Outro assunto</option>
        </select>
      </div>

      <div>
        <label htmlFor="mensagem" className="text-xs font-medium uppercase tracking-widest text-ink-soft">
          Como podemos ajudar?
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          required
          className="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-bronze"
        />
      </div>

      <p className="text-xs leading-relaxed text-body/60">
        Ao enviar, você será direcionado ao WhatsApp do escritório com sua mensagem preenchida.
      </p>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink-soft"
      >
        Enviar mensagem
      </button>
    </form>
  );
}
