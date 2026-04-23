import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { WHATSAPP_BASE } from "@/lib/data";
import { useReveal } from "@/hooks/use-reveal";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="py-14 md:py-14" style={{ backgroundColor: "#f2ede4" }}>
      <div ref={ref} className="fade-up max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <span className="eyebrow">Find Us</span>
          <h2 className="font-serif text-[28px] md:text-[40px] mt-2 leading-[1.1] font-bold" style={{ color: "#0e3c2c" }}>
            Come Visit Us in Kumily
          </h2>

          <ul className="mt-6 space-y-5">
            <li className="flex gap-4">
              <MapPin className="shrink-0 mt-1" size={20} strokeWidth={1.5} style={{ color: "#ab8c4a" }} />
              <div>
                <p className="text-[17px]" style={{ color: "#1a1a1a" }}>
                  J575+5J7, Valiyakandam, Chelimada,
                  <br /> Thekkady, Kumily, Kerala 685509
                </p>
                <p className="text-[13px] mt-2" style={{ color: "#4a4a3a" }}>
                  250m from Elephant Camp · 850m from Periyar Boat Ticket Counter
                </p>
              </div>
            </li>
            <li>
              <a href="tel:+917511193223" className="flex gap-4 items-center text-[17px] transition" style={{ color: "#1a1a1a" }}>
                <Phone className="shrink-0" size={20} strokeWidth={1.5} style={{ color: "#ab8c4a" }} />
                +91 75111 93223
              </a>
            </li>
            <li>
              <a href="mailto:Thetapasyaspa@gmail.com" className="flex gap-4 items-center text-[17px] transition" style={{ color: "#1a1a1a" }}>
                <Mail className="shrink-0" size={20} strokeWidth={1.5} style={{ color: "#ab8c4a" }} />
                Thetapasyaspa@gmail.com
              </a>
            </li>
            <li className="flex gap-4 items-center text-[17px]" style={{ color: "#1a1a1a" }}>
              <Globe className="shrink-0" size={20} strokeWidth={1.5} style={{ color: "#ab8c4a" }} />
              www.tapasyaspa.com
            </li>
          </ul>

          <div className="flex flex-wrap gap-4 mt-7">
            <a
              href="tel:+917511193223"
              className="inline-flex items-center px-6 py-3 text-white text-[14px] font-semibold uppercase tracking-[0.06em] rounded-sm hover:opacity-90 transition"
              style={{ backgroundColor: "#0e3c2c" }}
            >
              Call Now
            </a>
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 text-white text-[14px] font-semibold uppercase tracking-[0.06em] rounded-sm hover:opacity-90 transition"
              style={{ backgroundColor: "#ab8c4a" }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="aspect-square w-full overflow-hidden border rounded-sm" style={{ borderColor: "#b89b64" }}>
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
