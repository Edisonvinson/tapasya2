import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WHATSAPP_BASE } from "@/lib/data";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1920&q=80",
    headline: "Prioritize Your Wellbeing",
    sub: "The pace of travel and daily life can take a toll on your body and mind. At Tapasya, we offer a space where you can slow down, relax, and feel refreshed.",
    cta: { label: "Book Your Spa Now", href: WHATSAPP_BASE, external: true },
  },
  {
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80",
    headline: "Skin Care That Goes Deeper",
    sub: "From sea salt scrubs to body wraps and targeted facials — our skin treatments are designed to cleanse, hydrate, and restore your skin's natural glow during your time in Kumily.",
    cta: { label: "Explore Treatments", href: "#services", external: false },
  },
  {
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1920&q=80",
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <span className="eyebrow !text-gold-soft">Tapasya · Kumily</span>
          {slides.map((s, idx) => (
            <div
              key={idx}
              className={`absolute-none transition-all duration-700 ${
                i === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 hidden"
              }`}
            >
              <h1 className="font-serif text-cream text-5xl md:text-7xl lg:text-8xl leading-[1.05] mt-6">
                {s.headline}
              </h1>
              <p className="text-cream/85 text-base md:text-lg mt-7 max-w-2xl leading-relaxed">
                {s.sub}
              </p>
              <a
                href={s.cta.href}
                {...(s.cta.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="inline-flex items-center gap-2 mt-9 px-7 py-4 bg-gold text-white text-sm uppercase tracking-[0.18em] hover:bg-gold/90 transition-colors"
              >
                {s.cta.label} <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => setI((v) => (v - 1 + slides.length) % slides.length)}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 text-cream/70 hover:text-cream transition"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={() => setI((v) => (v + 1) % slides.length)}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 text-cream/70 hover:text-cream transition"
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
              i === idx ? "w-12 bg-gold" : "w-6 bg-cream/50"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
