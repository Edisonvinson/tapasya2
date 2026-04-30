import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WHATSAPP_BASE } from "@/lib/data";
import hero1 from "@/assets/hero-1.webp";
import hero2 from "@/assets/hero-2.webp";
import hero3 from "@/assets/hero-3.webp";

const slides = [
  {
    image: hero1,
    eyebrow: "Tapasya",
    headline: "The Best Spa\nExperience in Kumily",
    sub: "Relax, unwind, and enjoy a rejuvenating spa experience at Tapasya. Leave feeling lighter, refreshed, and at ease.",
    cta: { label: "Learn More", href: WHATSAPP_BASE, external: true },
  },
  {
    image: hero2,
    eyebrow: "Tapasya",
    headline: "Prioritize Your\nWellbeing",
    sub: "The pace of travel and daily life can take a toll on your body and mind. At Tapasya, we offer a space where you can slow down, relax, and feel refreshed.",
    cta: { label: "Learn More", href: "/services", external: false },
  },
  {
    image: hero3,
    eyebrow: "Tapasya",
    headline: "Skin care that\ngoes deeper",
    sub: "From sea salt scrubs to body wraps and targeted facials, give your skin the care it needs to feel fresh and renewed during your stay in Kumily. Relax, unwind, and leave with a natural, healthy glow.",
    cta: { label: "Learn More", href: WHATSAPP_BASE, external: true },
  },
];

export function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 5500);
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
      className="w-full bg-white pt-3 md:pt-4 pb-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: 28,
            minHeight: "min(560px, 70vh)",
          }}
        >
          {/* Slides */}
          {slides.map((sl, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                i === idx ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {/* Background image */}
              <img
                src={sl.image}
                alt={sl.headline}
                width={1400}
                height={600}
                loading={idx === 0 ? "eager" : "lazy"}
                decoding={idx === 0 ? "sync" : "async"}
                // @ts-expect-error fetchpriority is a valid HTML attribute
                fetchpriority={idx === 0 ? "high" : "low"}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Green overlay gradient — strong on left, fades right */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0,132,109,0.95) 0%, rgba(0,132,109,0.78) 35%, rgba(0,132,109,0.18) 65%, rgba(0,132,109,0) 85%)",
                }}
              />
            </div>
          ))}

          {/* Content */}
          <div className="relative z-10 flex items-center min-h-[560px] md:min-h-[600px]">
            <div className="px-7 md:px-14 py-14 md:py-20 max-w-2xl">
              <h1 className="font-serif text-white text-[40px] md:text-[64px] lg:text-[72px] leading-[1.05] font-bold whitespace-pre-line">
                {slides[i].headline}
              </h1>
              <p className="text-white/90 text-[15px] md:text-[16px] mt-6 max-w-md leading-[1.65]">
                {slides[i].sub}
              </p>
              <a
                href={slides[i].cta.href}
                {...(slides[i].cta.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="inline-flex items-center mt-8 px-8 py-4 bg-white text-[14px] font-semibold transition hover:bg-white/90"
                style={{ color: "#00846d", borderRadius: 999 }}
              >
                {slides[i].cta.label}
              </a>
            </div>
          </div>

          {/* Arrow controls */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/25 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition"
          >
            <ChevronLeft size={22} strokeWidth={2} />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/25 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition"
          >
            <ChevronRight size={22} strokeWidth={2} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === idx ? "w-8 bg-white" : "w-2 bg-white/50"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
