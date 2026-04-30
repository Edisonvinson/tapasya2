import { useEffect, useRef, useState } from "react";
import { Menu, X, Search, Calendar } from "lucide-react";
import { WHATSAPP_BASE } from "@/lib/data";
import { ALL_SERVICES, slugify } from "@/lib/data";

const links = [
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
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

  const matches = query.trim().length > 0
    ? ALL_SERVICES.filter((s) => s.name.toLowerCase().includes(query.toLowerCase())).slice(0, 6)
    : [];

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,132,109,0.08)]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-24 md:h-28">
        {/* Logo */}
        <a href="/#home" className="flex items-center shrink-0 py-2">
          <img
            src="/logo.png"
            alt="Tapasya Spa & Wellness"
            width={180}
            height={72}
            decoding="async"
            className="h-[68px] md:h-[80px] w-auto"
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
            aria-label="Search services"
            onClick={() => setSearchOpen((v) => !v)}
            className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#f5ece0] transition"
            style={{ color: "#00846d" }}
          >
            <Search size={18} strokeWidth={1.8} />
          </button>
          <a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 pl-3 pr-5 py-2 rounded-full text-[13px] font-semibold text-white transition hover:opacity-90"
            style={{ backgroundColor: "#00846d" }}
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
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2"
            style={{ color: "#00846d" }}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Expandable search */}
      <div
        className={`hidden md:block overflow-hidden transition-all duration-300 ease-out border-b ${
          searchOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        style={{ borderColor: "#ece5d8", backgroundColor: "#ffffff" }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5">
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "#00846d" }} />
            <input
              ref={searchRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services…"
              className="w-full pl-12 pr-4 py-3 text-[15px] outline-none rounded-full"
              style={{ backgroundColor: "#f5ece0", color: "#1a1a1a" }}
            />
          </div>
          {matches.length > 0 && (
            <ul className="mt-3 bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid #ece5d8" }}>
              {matches.map((s) => (
                <li key={s.name}>
                  <a
                    href={`/services#${slugify(s.name)}`}
                    onClick={() => { setSearchOpen(false); setQuery(""); }}
                    className="block px-5 py-3 text-[14px] hover:bg-[#f5ece0] transition"
                    style={{ color: "#1a1a1a" }}
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t" style={{ borderColor: "#ece5d8" }}>
          <div className="flex flex-col px-6 py-6 gap-5">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "#00846d" }} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services…"
                className="w-full pl-12 pr-4 py-3 text-[15px] outline-none rounded-full"
                style={{ backgroundColor: "#f5ece0", color: "#1a1a1a" }}
              />
            </div>
            {matches.length > 0 && (
              <ul className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid #ece5d8" }}>
                {matches.map((s) => (
                  <li key={s.name}>
                    <a
                      href={`/services#${slugify(s.name)}`}
                      onClick={() => { setOpen(false); setQuery(""); }}
                      className="block px-5 py-3 text-[14px]"
                      style={{ color: "#1a1a1a" }}
                    >
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
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
              style={{ backgroundColor: "#00846d" }}
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
