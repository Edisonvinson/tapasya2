import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WHATSAPP_BASE } from "@/lib/data";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    headline: "Prioritize Your Wellbeing",
    sub: "The pace of travel and daily life can take a toll on your body and mind. At Tapasya, we offer a space where you can slow down, relax, and feel refreshed.",
    cta: { label: "Book Your Spa Now", href: WHATSAPP_BASE, external: true },
  },
  {
    image: hero2,
    headline: "Skin Care That Goes Deeper",
    sub: "From sea salt scrubs to body wraps and targeted facials — our skin treatments are designed to cleanse, hydrate, and restore your skin's natural glow during your time in Kumily.",
    cta: { label: "Explore Treatments", href: "#services", external: false },
  },
  {
    image: hero3,
    headline: "First in Kumily — Hot Stone & Warm Bamboo",
    sub: "Specially suited for Kumily's cool climate, our hot stone and warm bamboo therapies bring deep warmth and tension relief to every session.",
    cta: { label: "Book Your Spa Now", href: WHATSAPP_BASE, external: true },
  },
];

export function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, [paused]);

  const next = () => setI((v) => (v + 1) % slides.length);
  const prev = () => setI((v) => (v - 1 + slides.length) % slides.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#0e3c2c" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 min-h-[88vh] flex items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: text */}
          <div className="relative order-1">
            <span className="eyebrow" style={{ color: "#b89b64" }}>
              Tapasya · Kumily
            </span>
            <div className="relative mt-4 min-h-[280px] md:min-h-[320px]">
              {slides.map((sl, idx) => (
                <div
                  key={idx}
                  className={`transition-opacity duration-700 ${
                    i === idx
                      ? "opacity-100 relative"
                      : "opacity-0 absolute inset-0 pointer-events-none"
                  }`}
                >
                  <h1 className="font-serif text-white text-[34px] md:text-[52px] lg:text-[60px] leading-[1.15] font-bold">
                    {sl.headline}
                  </h1>
                  <p className="text-white/90 text-base md:text-lg mt-4 max-w-xl leading-[1.7]">
                    {sl.sub}
                  </p>
                  <a
                    href={sl.cta.href}
                    {...(sl.cta.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="inline-flex items-center gap-2 mt-6 px-7 py-3 bg-gold text-white text-[15px] font-semibold uppercase tracking-[0.04em] hover:bg-gold-muted transition-colors rounded-sm"
                  >
                    {sl.cta.label} <span aria-hidden>→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right: circular image */}
          <div className="order-2 flex justify-center md:justify-end">
            <div
              className="relative"
              style={{
                width: "min(82vw, 420px)",
                height: "min(82vw, 420px)",
              }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: "0 30px 80px -20px rgba(0,0,0,0.5)",
                  border: "1px solid rgba(184,155,100,0.35)",
                }}
              />
              {slides.map((sl, idx) => (
                <img
                  key={idx}
                  src={sl.image}
                  alt={sl.headline}
                  className={`absolute inset-0 w-full h-full rounded-full transition-opacity duration-700 ${
                    i === idx ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ objectFit: "cover" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 p-3 text-white/80 hover:text-white transition"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 p-3 text-white/80 hover:text-white transition"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-[2px] transition-all duration-500 ${
              i === idx ? "w-12 bg-gold" : "w-6 bg-white/50"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
