import { useEffect, useRef, useState } from "react";
import { Menu, X, Search, Calendar } from "lucide-react";
import { WHATSAPP_BASE } from "@/lib/data";

const BRAND_GREEN = "#00846d";

const links = [
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchRef.current?.focus(), 50);
    }
  }, [searchOpen]);

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchRef.current?.value.trim().toLowerCase() ?? "";
    setSearchOpen(false);
    if (!q) return;
    // Simple route: send any query to /services so user can scan treatments
    window.location.href = `/services#${q.replace(/\s+/g, "-")}`;
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 transition-shadow duration-300 bg-white`}
    >
      {/* Top contact strip */}
      <div style={{ backgroundColor: BRAND_GREEN }} className="text-white text-[12px] md:text-[13px]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-9 flex items-center justify-end gap-5">
          <a href="tel:07511193223" className="inline-flex items-center gap-1.5 hover:opacity-90">
            <span aria-hidden>📞</span>
            <span>075111 93223</span>
          </a>
          <a href="mailto:tapasyawellnessspa@gmail.com" className="inline-flex items-center gap-1.5 hover:opacity-90">
            <span aria-hidden>✉️</span>
            <span className="hidden sm:inline">tapasyawellnessspa@gmail.com</span>
            <span className="sm:hidden">Email</span>
          </a>
        </div>
      </div>
      {/* Constrained nav bar matching hero width with rounded edges */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-3 pb-2">
      <div
        className={`flex items-center justify-between h-20 px-5 md:px-7 ${
          scrolled ? "shadow-[0_2px_20px_rgba(15,61,46,0.08)]" : ""
        }`}
        style={{ backgroundColor: "#f5ece0", borderRadius: 28 }}
      >
        {/* Logo on off-white pill so logo background blends nicely */}
        <a href="/#home" className="flex items-center shrink-0">
          <img
            src="/logo.webp"
            alt="Tapasya Spa & Wellness"
            width={180}
            height={72}
            decoding="async"
            fetchPriority="high"
            className="h-[64px] md:h-[68px] w-auto block"
          />
        </a>

        {/* Center nav — transparent, sits on beige header */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-5 py-2 rounded-full text-[14px] font-medium transition-colors hover:bg-white/60"
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
            onClick={() => setSearchOpen((v) => !v)}
            className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/60 transition"
            style={{ color: BRAND_GREEN }}
          >
            {searchOpen ? <X size={18} strokeWidth={1.8} /> : <Search size={18} strokeWidth={1.8} />}
          </button>
          <a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 pl-3 pr-5 py-2 rounded-full text-[13px] font-semibold text-white transition hover:opacity-90"
            style={{ backgroundColor: BRAND_GREEN }}
          >
            <span
              className="inline-flex items-center justify-center w-7 h-7 rounded-full"
              style={{ backgroundColor: "rgba(255,255,255,0.18)" }}
            >
              <Calendar size={13} strokeWidth={2} />
            </span>
            Book Appointment
          </a>
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className="md:hidden p-2"
            style={{ color: BRAND_GREEN }}
          >
            <Search size={22} strokeWidth={1.8} />
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2"
            style={{ color: BRAND_GREEN }}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t" style={{ borderColor: "#e8dcc6", backgroundColor: "#f5ece0" }}>
          <form
            onSubmit={onSearchSubmit}
            className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center gap-3"
          >
            <Search size={18} style={{ color: BRAND_GREEN }} />
            <input
              ref={searchRef}
              type="text"
              placeholder="Search treatments — e.g. balinese, hot stone, facial…"
              className="flex-1 bg-transparent outline-none text-[15px]"
              style={{ color: "#1a1a1a" }}
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-full text-[12px] font-semibold uppercase tracking-[0.06em] text-white"
              style={{ backgroundColor: BRAND_GREEN }}
            >
              Go
            </button>
          </form>
        </div>
      )}

      {open && (
        <div className="md:hidden border-t" style={{ borderColor: "#e8dcc6", backgroundColor: "#f5ece0" }}>
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
              style={{ backgroundColor: BRAND_GREEN }}
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
