import { Instagram, Facebook, MessageCircle, Mail } from "lucide-react";
import { ALL_SERVICES, WHATSAPP_BASE, slugify } from "@/lib/data";

export function Footer() {
  const firstHalf = ALL_SERVICES.slice(0, 6);
  const secondHalf = ALL_SERVICES.slice(6, 12);

  // Map footer service names → exact treatment slugs on /services page
  const NAME_TO_SLUG: Record<string, string> = {
    "Tapasya Signature Massage": slugify("Tapasya Signature Massage"),
    "Sports Massage / Deep Tissue": slugify("Sports Massage / Deep Tissue"),
    "Thai Traditional Massage": slugify("Traditional Thai Massage"),
    "Tapasya Body Scrub & Wrap": slugify("Tapasya Body Scrub & Wrap"),
    "Swedish Massage": slugify("Swedish Massage"),
    "Tapasya Balinese": slugify("Tapasya Balinese Massage"),
    "Tapasya Foot Fix": slugify("Tapasya Foot Fix (Reflexology)"),
    "Hot Stone Massage": slugify("Hot Stone Healing Therapy"),
    "Bamboo Massage": slugify("Warm Bamboo Therapy"),
    "Facials": slugify("Advanced Radiance Facial"),
    "Aromatherapy Massage": slugify("Aromatherapy Healing Massage"),
    "Lomi Lomi Massage": slugify("Hawaiian Lomi Lomi Massage"),
  };
  const linkFor = (name: string) => `/services#${NAME_TO_SLUG[name] ?? slugify(name)}`;

  return (
    <footer className="text-white" style={{ backgroundColor: "#00846d" }}>
      <div
        className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-[1.8fr_1.2fr_1.2fr_1.4fr] gap-10 md:gap-10 items-start"
      >
        {/* Column 1 — Brand */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/logo-white.png"
            alt="Tapasya Spa & Wellness"
            loading="lazy"
            decoding="async"
            className="h-[160px] md:h-[180px] w-auto block -my-6 md:-my-8 -ml-2 md:-ml-4"
          />
          <p
            className="mt-1 text-center md:text-left"
            style={{ fontSize: 15, lineHeight: 1.7, color: "#ffffff" }}
          >
            Kumily's trusted spa for Western, Ayurvedic & Asian therapies.
          </p>
        </div>

        {/* Column 2 — Services (first half) */}
        <div className="services-column">
          <p
            className="column-header uppercase"
            style={{
              fontSize: 12,
              letterSpacing: "0.22em",
              fontWeight: 700,
              color: "#ffe9b8",
              marginBottom: 18,
            }}
          >
            Services
          </p>
          <ul className="space-y-1">
            {firstHalf.map((s) => (
              <li key={s.name}>
                <a
                  href={linkFor(s.name)}
                  className="transition hover:text-white"
                  style={{ fontSize: 15, lineHeight: 2, color: "rgba(255,255,255,0.88)" }}
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Services (second half), no header */}
        <div className="services-column">
          <div aria-hidden style={{ height: 30, marginBottom: 0 }} className="hidden md:block" />
          <ul className="space-y-1">
            {secondHalf.map((s) => (
              <li key={s.name}>
                <a
                  href={linkFor(s.name)}
                  className="transition hover:text-white"
                  style={{ fontSize: 15, lineHeight: 2, color: "rgba(255,255,255,0.88)" }}
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Connect */}
        <div>
          <p
            className="column-header uppercase"
            style={{
              fontSize: 12,
              letterSpacing: "0.22em",
              fontWeight: 700,
              color: "#ffe9b8",
              marginBottom: 18,
            }}
          >
            Connect
          </p>
          <div className="flex gap-3 mb-5">
            {[
              { Icon: Instagram, href: "#" },
              { Icon: Facebook, href: "#" },
              { Icon: MessageCircle, href: WHATSAPP_BASE },
              { Icon: Mail, href: "mailto:tapasyawellnessspa@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="w-10 h-10 border flex items-center justify-center transition rounded-sm hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.6)", color: "#ffffff" }}
              >
                <Icon size={16} strokeWidth={1.5} />
              </a>
            ))}
          </div>
          <a
            href="mailto:tapasyawellnessspa@gmail.com"
            className="transition hover:text-white"
            style={{ fontSize: 15, color: "rgba(255,255,255,0.92)" }}
          >
            tapasyawellnessspa@gmail.com
          </a>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
        <div
          className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row gap-3 justify-between"
          style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}
        >
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 13 }}>
            © 2025 Tapasya Spa & Wellness. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition" style={{ color: "rgba(255,255,255,0.8)" }}>
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition" style={{ color: "rgba(255,255,255,0.8)" }}>
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
