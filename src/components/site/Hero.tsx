import { useEffect, useState } from "react";
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
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${s.image})` }}
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(14, 60, 44, 0.55)" }} />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <span className="eyebrow text-shadow-hero" style={{ color: "#b89b64" }}>Tapasya · Kumily</span>
          {slides.map((s, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ${
                i === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 hidden"
              }`}
            >
              <h1 className="font-serif text-white text-[34px] md:text-[52px] lg:text-[64px] leading-[1.15] font-bold mt-4 text-shadow-hero">
                {s.headline}
              </h1>
              <p className="text-white text-base md:text-lg mt-3 max-w-2xl leading-[1.7] text-shadow-hero">
                {s.sub}
              </p>
              <a
                href={s.cta.href}
                {...(s.cta.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="inline-flex items-center gap-2 mt-5 px-7 py-3 bg-gold text-white text-[15px] font-semibold uppercase tracking-[0.04em] hover:bg-gold-muted transition-colors rounded-sm"
              >
                {s.cta.label} <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => setI((v) => (v - 1 + slides.length) % slides.length)}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 text-white/80 hover:text-white transition"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={() => setI((v) => (v + 1) % slides.length)}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 text-white/80 hover:text-white transition"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
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
