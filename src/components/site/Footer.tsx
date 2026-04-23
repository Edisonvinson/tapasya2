import { Instagram, Facebook, MessageCircle, Mail } from "lucide-react";
import { ALL_SERVICES, WHATSAPP_BASE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: "#0e3c2c" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col items-center md:items-start">
          {/* Logo: TAPASYA_FINAL_Logo_jpg.jpeg — use for navbar and footer */}
          <div
            style={{
              background: "#ffffff",
              padding: 6,
              borderRadius: 12,
              display: "inline-block",
            }}
          >
            <img src="/logo.png" alt="Tapasya Spa & Wellness" className="h-[52px] w-auto block" />
          </div>
          <p className="mt-5 text-[15px] leading-relaxed text-white/85 text-center md:text-left">
            Kumily's trusted spa for Western, Ayurvedic & Asian therapies.
          </p>
        </div>

        <div>
          <p className="text-[12px] uppercase tracking-[0.22em] font-semibold mb-5" style={{ color: "#b89b64" }}>Navigate</p>
          <ul className="space-y-3 text-[14px]">
            {[
              ["Home", "#home"],
              ["About Us", "#about"],
              ["Services", "#services"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={h}>
                <a href={h} className="transition hover:text-white" style={{ color: "#b89b64" }}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[12px] uppercase tracking-[0.22em] font-semibold mb-5" style={{ color: "#b89b64" }}>Treatments</p>
          <ul className="space-y-2 text-[14px]">
            {ALL_SERVICES.map((s) => (
              <li key={s.name}>
                <a href="#services" className="transition hover:text-white" style={{ color: "#b89b64" }}>
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[12px] uppercase tracking-[0.22em] font-semibold mb-5" style={{ color: "#b89b64" }}>Connect</p>
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
                className="w-10 h-10 border flex items-center justify-center transition rounded-sm"
                style={{ borderColor: "#b89b64", color: "#b89b64" }}
              >
                <Icon size={16} strokeWidth={1.5} />
              </a>
            ))}
          </div>
          <a
            href="mailto:Thetapasyaspa@gmail.com"
            className="text-[14px] transition hover:text-white"
            style={{ color: "#b89b64" }}
          >
            Thetapasyaspa@gmail.com
          </a>
        </div>
      </div>
      <div className="border-t" style={{ borderColor: "rgba(184,155,100,0.25)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row gap-3 justify-between text-[13px] text-white/60">
          <p>© 2025 Tapasya Spa & Wellness. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
