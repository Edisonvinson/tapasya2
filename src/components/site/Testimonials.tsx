import { Star } from "lucide-react";
import { TESTIMONIALS, GOOGLE_REVIEWS_URL } from "@/lib/data";
import { useReveal } from "@/hooks/use-reveal";

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section id="reviews" className="py-24 md:py-32 bg-charcoal text-cream overflow-hidden">
      <div ref={ref} className="fade-up max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">What Our Guests Say</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6 text-cream">
            Trusted by Travelers in Thekkady
          </h2>
          <p className="mt-5 text-cream/65 leading-relaxed">
            Real words from real guests — sourced from our Google Reviews.
          </p>
        </div>
      </div>

      <div className="mt-14 relative">
        <div className="flex gap-6 animate-[scroll_50s_linear_infinite] hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <article
              key={i}
              className="shrink-0 w-[88vw] sm:w-[420px] bg-cream/[0.04] border border-cream/10 p-8 backdrop-blur-sm"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-5 text-cream/85 leading-relaxed text-[15px] line-clamp-[8]">
                "{t.text}"
              </p>
              <div className="mt-6 pt-5 border-t border-cream/10">
                <p className="font-serif text-lg text-cream">{t.name}</p>
                <p className="text-xs text-cream/50 mt-1">{t.meta}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-cream/40">
                    {t.when}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-gold">
                    via Google Reviews
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="text-center mt-14">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center px-7 py-3.5 border border-gold text-gold text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-charcoal transition"
        >
          Read All Reviews on Google →
        </a>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }
      `}</style>
    </section>
  );
}
