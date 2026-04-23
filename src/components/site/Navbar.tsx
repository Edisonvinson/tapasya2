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
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_24px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-20 md:h-24">
        <a href="#home" className="flex items-center">
          <img
            src="/logo.png"
            alt="Tapasya Spa & Wellness"
            className={`transition-all duration-500 ${
              scrolled ? "h-10 md:h-12" : "h-12 md:h-14"
            } ${scrolled ? "" : "drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"}`}
          />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide transition-colors hover:text-gold ${
                scrolled ? "text-charcoal" : "text-cream drop-shadow-md"
              }`}
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
            className={`hidden md:inline-flex items-center px-5 py-2.5 text-sm tracking-wider uppercase border transition-all duration-300 ${
              scrolled
                ? "border-gold text-gold hover:bg-gold hover:text-white"
                : "border-cream text-cream hover:bg-cream hover:text-charcoal"
            }`}
          >
            Book Now
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden p-2 ${scrolled ? "text-charcoal" : "text-cream"}`}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t border-border">
          <div className="flex flex-col px-6 py-6 gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-charcoal text-base"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center px-5 py-3 text-sm uppercase tracking-wider border border-gold text-gold"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
