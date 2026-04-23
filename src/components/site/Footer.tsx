import { Instagram, Facebook, MessageCircle, Mail } from "lucide-react";
import { ALL_SERVICES, WHATSAPP_BASE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream/75">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <img src="/logo.png" alt="Tapasya" className="h-14 brightness-0 invert opacity-90" />
          <p className="mt-5 text-sm leading-relaxed">
            Kumily's trusted spa for Western, Ayurvedic & Asian therapies.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-gold mb-5">Navigate</p>
          <ul className="space-y-3 text-sm">
            {[
              ["Home", "#home"],
              ["About Us", "#about"],
              ["Services", "#services"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={h}>
                <a href={h} className="hover:text-gold transition">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-gold mb-5">Treatments</p>
          <ul className="space-y-2.5 text-sm">
            {ALL_SERVICES.map((s) => (
              <li key={s.name}>
                <a href="#services" className="hover:text-gold transition">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-gold mb-5">Connect</p>
          <div className="flex gap-3 mb-5">
            {[
              { Icon: Instagram, href: "#" },
              { Icon: Facebook, href: "#" },
              { Icon: MessageCircle, href: WHATSAPP_BASE },
              { Icon: Mail, href: "mailto:Thetapasyaspa@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="w-10 h-10 border border-cream/20 flex items-center justify-center hover:border-gold hover:text-gold transition"
              >
                <Icon size={16} strokeWidth={1.5} />
              </a>
            ))}
          </div>
          <a
            href="mailto:Thetapasyaspa@gmail.com"
            className="text-sm hover:text-gold transition"
          >
            Thetapasyaspa@gmail.com
          </a>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-cream/50">
          <p>© 2025 Tapasya Spa & Wellness. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
