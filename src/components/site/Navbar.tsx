import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { WHATSAPP_BASE } from "@/lib/data";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-white shadow-[0_1px_12px_rgba(0,0,0,0.06)]" : "bg-transparent"
      }`}
      style={scrolled ? { borderBottom: "1px solid #b89b64" } : undefined}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-20 md:h-24">
        {/* Logo file: transparent background, gold on dark */}
        <a href="#home" className="flex items-center">
          <img
            src="/logo.png"
            alt="Tapasya Spa & Wellness"
            className={`transition-all duration-500 ${
              scrolled ? "h-[38px] md:h-[48px]" : "h-[42px] md:h-[56px]"
            } ${scrolled ? "" : "drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"}`}
          />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium tracking-wide transition-colors"
              style={{ color: scrolled ? "#1a1a1a" : "#ffffff", textShadow: scrolled ? "none" : "0 2px 8px rgba(0,0,0,0.4)" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center px-5 py-2.5 text-[14px] font-semibold tracking-[0.06em] uppercase border-2 rounded-sm transition-all duration-300"
            style={{
              borderColor: scrolled ? "#ab8c4a" : "#ffffff",
              color: scrolled ? "#ab8c4a" : "#ffffff",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = scrolled ? "#ab8c4a" : "#ffffff";
              e.currentTarget.style.color = scrolled ? "#ffffff" : "#0e3c2c";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = scrolled ? "#ab8c4a" : "#ffffff";
            }}
          >
            Book Now
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2"
            style={{ color: scrolled ? "#1a1a1a" : "#ffffff" }}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t" style={{ borderColor: "#b89b64" }}>
          <div className="flex flex-col px-6 py-6 gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[16px]"
                style={{ color: "#1a1a1a" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center px-5 py-3 text-[14px] font-semibold uppercase tracking-[0.06em] border-2 rounded-sm"
              style={{ borderColor: "#ab8c4a", color: "#ab8c4a" }}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
