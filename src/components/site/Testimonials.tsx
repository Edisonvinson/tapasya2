import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, User } from "lucide-react";
import { TESTIMONIALS, GOOGLE_REVIEWS_URL } from "@/lib/data";
import { useReveal } from "@/hooks/use-reveal";

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const m = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(m.matches);
    update();
    m.addEventListener("change", update);
    return () => m.removeEventListener("change", update);
  }, []);

  const total = TESTIMONIALS.length;
  const next = () => setActive((v) => (v + 1) % total);
  const prev = () => setActive((v) => (v - 1 + total) % total);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 40) prev();
    else if (dx < -40) next();
    touchStartX.current = null;
  };

  // Card width on desktop ~ 50% so two cards visible (center fully + side peeking)
  const cardBasis = isDesktop ? 50 : 100;
  const offset = isDesktop
    ? -(active * cardBasis) + 25 // center the active card
    : -(active * 100);

  return (
    <section id="reviews" className="section-pad overflow-hidden" style={{ backgroundColor: "#faf7f2" }}>
      <div ref={ref} className="fade-up max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow" style={{ color: "#c6a46c" }}>What Our Guests Say</span>
          <h2 className="font-serif text-[36px] md:text-[52px] mt-4 leading-[1.05] font-bold" style={{ color: "#00846d" }}>
            Trusted by Travelers in Thekkady
          </h2>
          <p className="mt-5 text-[16px] leading-[1.8]" style={{ color: "#6b6b66" }}>
            Real words from real guests — sourced from our Google Reviews.
          </p>
        </div>
      </div>

      <div className="mt-10 relative max-w-7xl mx-auto">
        {/* Desktop arrows */}
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 items-center justify-center transition"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "rgba(14,60,44,0.08)",
            border: "1px solid #ab8c4a",
            color: "#ab8c4a",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#ab8c4a";
            e.currentTarget.style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(14,60,44,0.08)";
            e.currentTarget.style.color = "#ab8c4a";
          }}
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 items-center justify-center transition"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "rgba(14,60,44,0.08)",
            border: "1px solid #ab8c4a",
            color: "#ab8c4a",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#ab8c4a";
            e.currentTarget.style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(14,60,44,0.08)";
            e.currentTarget.style.color = "#ab8c4a";
          }}
        >
          <ChevronRight size={22} />
        </button>

        <div
          className="overflow-hidden px-4 md:px-16"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${offset}%)` }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="shrink-0 px-2 md:px-3"
                style={{ flex: `0 0 ${cardBasis}%` }}
              >
                <article
                  className="mx-auto relative"
                  style={{
                    background: "#ffffff",
                    borderRadius: 16,
                    padding: "40px 36px 32px",
                    boxShadow: "0 4px 24px -8px rgba(0,132,109,0.1)",
                    maxWidth: 600,
                  }}
                >
                  <div
                    className="font-serif"
                    style={{ color: "#c6a46c", fontSize: 80, lineHeight: 0.7 }}
                  >
                    “
                  </div>
                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: 1.8,
                      color: "#4a4a3a",
                      marginTop: 12,
                      fontStyle: "italic",
                    }}
                  >
                    {t.text}
                  </p>
                  <div className="flex items-center gap-4 mt-7">
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: "#f5f1ea",
                        color: "#c6a46c",
                      }}
                    >
                      <User size={22} />
                    </div>
                    <div className="flex flex-col">
                      <span style={{ fontWeight: 700, color: "#00846d", fontSize: 15 }}>
                        {t.name}
                      </span>
                      <div className="flex gap-0.5 mt-1" style={{ color: "#c6a46c" }}>
                        {Array.from({ length: 5 }).map((_, k) => (
                          <Star key={k} size={13} fill="currentColor" strokeWidth={0} />
                        ))}
                      </div>
                      <span style={{ color: "#8a6f31", fontSize: 11, marginTop: 2, letterSpacing: "0.05em" }}>
                        via Google Reviews
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to review ${i + 1}`}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: active === i ? "#ab8c4a" : "rgba(184,155,100,0.4)",
                transition: "background 0.2s",
              }}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.05em] border-[1.5px] transition"
          style={{ borderColor: "#c6a46c", color: "#c6a46c", borderRadius: 999 }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#c6a46c";
            e.currentTarget.style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#c6a46c";
          }}
        >
          Read All Reviews on Google →
        </a>
      </div>
    </section>
  );
}
