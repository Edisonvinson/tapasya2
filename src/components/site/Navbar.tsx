import { useEffect, useState } from "react";
import { Menu, X, Search, MapPin } from "lucide-react";
import { WHATSAPP_BASE } from "@/lib/data";

const links = [
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(15,61,46,0.06)]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="/#home" className="flex items-center shrink-0">
          <img
            src="/logo.png"
            alt="Tapasya Spa & Wellness"
            width={120}
            height={48}
            decoding="async"
            className="h-[48px] md:h-[44px] w-auto"
          />
        </a>

        {/* Center pill nav */}
        <nav
          className="hidden md:flex items-center gap-1 px-3 py-2 rounded-full"
          style={{ backgroundColor: "#f5ece0" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-5 py-2 rounded-full text-[14px] font-medium transition-colors hover:bg-white/80"
              style={{ color: "#1a1a1a" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#f5ece0] transition"
            style={{ color: "#0f3d2e" }}
          >
            <Search size={18} strokeWidth={1.8} />
          </button>
          <a
            href="/#contact"
            className="hidden md:inline-flex items-center gap-2 pl-3 pr-5 py-2 rounded-full text-[13px] font-semibold text-white transition hover:opacity-90"
            style={{ backgroundColor: "#0f3d2e" }}
          >
            <span
              className="inline-flex items-center justify-center w-7 h-7 rounded-full"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <MapPin size={13} strokeWidth={2} />
            </span>
            Locations
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2"
            style={{ color: "#0f3d2e" }}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t" style={{ borderColor: "#ece5d8" }}>
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
              className="inline-flex justify-center items-center px-5 py-3 text-[14px] font-semibold uppercase tracking-[0.06em] rounded-full text-white"
              style={{ backgroundColor: "#0f3d2e" }}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
