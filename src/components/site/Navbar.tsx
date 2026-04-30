import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { WHATSAPP_BASE } from "@/lib/data";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/#contact" },
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
        scrolled ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(15,61,46,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-20">
        <a href="/#home" className="flex items-center">
          <img
            src="/logo.png"
            alt="Tapasya Spa & Wellness"
            width={144}
            height={48}
            decoding="async"
            className="transition-all duration-500 h-[48px] md:h-[44px] w-auto bg-white"
            style={{ borderRadius: 8 }}
          />
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] font-medium tracking-wide transition-colors hover:opacity-70"
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
            className="hidden md:inline-flex items-center px-6 py-2.5 text-[13px] font-semibold tracking-[0.05em] uppercase border-[1.5px] transition-all duration-300"
            style={{
              borderColor: scrolled ? "#c6a46c" : "#ffffff",
              color: scrolled ? "#c6a46c" : "#ffffff",
              backgroundColor: "transparent",
              borderRadius: 999,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = scrolled ? "#c6a46c" : "#ffffff";
              e.currentTarget.style.color = scrolled ? "#ffffff" : "#0f3d2e";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = scrolled ? "#c6a46c" : "#ffffff";
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
