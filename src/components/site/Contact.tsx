import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { WHATSAPP_BASE } from "@/lib/data";
import { useReveal } from "@/hooks/use-reveal";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="py-24 md:py-32">
      <div ref={ref} className="fade-up max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        <div>
          <span className="eyebrow">Find Us</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6 leading-[1.05]">
            Come Visit Us in Kumily
          </h2>

          <ul className="mt-10 space-y-6">
            <li className="flex gap-4">
              <MapPin className="shrink-0 mt-1 text-gold" size={20} strokeWidth={1.5} />
              <div>
                <p className="text-charcoal">
                  J575+5J7, Valiyakandam, Chelimada,
                  <br /> Thekkady, Kumily, Kerala 685509
                </p>
                <p className="text-xs text-warm-grey mt-2">
                  250m from Elephant Camp · 850m from Periyar Boat Ticket Counter
                </p>
              </div>
            </li>
            <li>
              <a href="tel:+917511193223" className="flex gap-4 items-center text-charcoal hover:text-gold transition">
                <Phone className="shrink-0 text-gold" size={20} strokeWidth={1.5} />
                +91 75111 93223
              </a>
            </li>
            <li>
              <a href="mailto:Thetapasyaspa@gmail.com" className="flex gap-4 items-center text-charcoal hover:text-gold transition">
                <Mail className="shrink-0 text-gold" size={20} strokeWidth={1.5} />
                Thetapasyaspa@gmail.com
              </a>
            </li>
            <li className="flex gap-4 items-center text-charcoal">
              <Globe className="shrink-0 text-gold" size={20} strokeWidth={1.5} />
              www.tapasyaspa.com
            </li>
          </ul>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="tel:+917511193223"
              className="inline-flex items-center px-6 py-3.5 bg-charcoal text-cream text-xs uppercase tracking-[0.2em] hover:bg-charcoal/90 transition"
            >
              Call Now
            </a>
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3.5 bg-gold text-white text-xs uppercase tracking-[0.2em] hover:bg-gold/90 transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="aspect-square w-full overflow-hidden border border-border">
          {/* Replace with Google Maps embed for Tapasya Spa, Valiyakandam, Kumily */}
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
