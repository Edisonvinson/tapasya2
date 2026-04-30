import { useEffect, useRef, useState } from "react";
import { WHATSAPP_BASE } from "@/lib/data";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    eyebrow: "Tapasya",
    headline: "Prioritize Your\nWellbeing",
    sub: "The pace of travel and daily life can take a toll on your body and mind. At Tapasya, we offer a space where you can slow down, relax, and feel refreshed.",
    cta: { label: "Learn More", href: WHATSAPP_BASE, external: true },
  },
  {
    image: hero2,
    eyebrow: "Tapasya",
    headline: "Skin Care That\nGoes Deeper",
    sub: "From sea salt scrubs to body wraps and targeted facials — our skin treatments are designed to cleanse, hydrate, and restore your skin's natural glow during your time in Kumily.",
    cta: { label: "Learn More", href: "/services", external: false },
  },
  {
    image: hero3,
    eyebrow: "Tapasya",
    headline: "Hot Stone &\nWarm Bamboo",
    sub: "Specially suited for Kumily's cool climate, our hot stone and warm bamboo therapies bring deep warmth and tension relief to every session.",
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
      className="w-full bg-white pt-4 md:pt-6 pb-2"
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
            backgroundColor: "#F5F5F2",
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
                style={{ objectPosition: "right center" }}
              />
              {/* Off-white overlay — strong on left, fades right */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(245,245,242,0.98) 0%, rgba(245,245,242,0.92) 35%, rgba(245,245,242,0.4) 65%, rgba(245,245,242,0) 90%)",
                }}
              />
            </div>
          ))}

          {/* Content */}
          <div className="relative z-10 flex items-center min-h-[560px] md:min-h-[600px]">
            <div className="px-7 md:px-14 py-14 md:py-20 max-w-2xl">
              <span
                className="font-serif italic text-[22px] md:text-[26px] block mb-4"
                style={{ color: "#00846d" }}
              >
                {slides[i].eyebrow}
              </span>
              <h1 className="font-serif text-[40px] md:text-[64px] lg:text-[72px] leading-[1.05] font-bold whitespace-pre-line" style={{ color: "#0f0f0f" }}>
                {slides[i].headline}
              </h1>
              <p className="text-[15px] md:text-[16px] mt-6 max-w-md leading-[1.65]" style={{ color: "#4a4a4a" }}>
                {slides[i].sub}
              </p>
              <a
                href={slides[i].cta.href}
                {...(slides[i].cta.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="inline-flex items-center mt-8 px-8 py-4 text-white text-[14px] font-semibold transition hover:opacity-90"
                style={{ backgroundColor: "#00846d", borderRadius: 999 }}
              >
                {slides[i].cta.label}
              </a>
            </div>
          </div>

          {/* Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === idx ? "w-8" : "w-2"
                }`}
                style={{ backgroundColor: i === idx ? "#00846d" : "rgba(0,132,109,0.35)" }}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
