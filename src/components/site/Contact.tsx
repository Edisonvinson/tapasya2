import { Phone, Mail, Globe } from "lucide-react";
import { WHATSAPP_BASE } from "@/lib/data";
import { useReveal } from "@/hooks/use-reveal";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="section-pad" style={{ backgroundColor: "#f5f1ea" }}>
      <div ref={ref} className="fade-up max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <span className="eyebrow">Find Us</span>
          <h2 className="font-serif text-[36px] md:text-[52px] mt-4 leading-[1.05] font-bold" style={{ color: "#00846d" }}>
            Come Visit Us<br />in Kumily
          </h2>

          <ul className="mt-8 space-y-5">
            <li>
              <a href="tel:+917511193223" className="flex gap-4 items-center text-[16px] transition" style={{ color: "#1a1a1a" }}>
                <Phone className="shrink-0" size={20} strokeWidth={1.5} style={{ color: "#c6a46c" }} />
                +91 75111 93223
              </a>
            </li>
            <li>
              <a href="mailto:tapasyawellnessspa@gmail.com" className="flex gap-4 items-center text-[16px] transition" style={{ color: "#1a1a1a" }}>
                <Mail className="shrink-0" size={20} strokeWidth={1.5} style={{ color: "#c6a46c" }} />
                tapasyawellnessspa@gmail.com
              </a>
            </li>
            <li className="flex gap-4 items-center text-[16px]" style={{ color: "#1a1a1a" }}>
              <Globe className="shrink-0" size={20} strokeWidth={1.5} style={{ color: "#c6a46c" }} />
              www.tapasyaspa.com
            </li>
          </ul>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="tel:+917511193223"
              className="inline-flex items-center px-7 py-3.5 text-white text-[13px] font-semibold uppercase tracking-[0.05em] hover:opacity-90 transition"
              style={{ backgroundColor: "#00846d", borderRadius: 999 }}
            >
              Call Now
            </a>
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-7 py-3.5 text-white text-[13px] font-semibold uppercase tracking-[0.05em] hover:opacity-90 transition"
              style={{ backgroundColor: "#c6a46c", borderRadius: 999 }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="aspect-square w-full overflow-hidden" style={{ borderRadius: 16, boxShadow: "0 4px 24px -8px rgba(15,61,46,0.12)" }}>
          <iframe
            title="Tapasya Spa Location"
            src="https://www.google.com/maps?q=9.6027,77.1673&z=15&output=embed"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
