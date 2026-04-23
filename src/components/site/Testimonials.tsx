import { Star } from "lucide-react";
import { TESTIMONIALS, GOOGLE_REVIEWS_URL } from "@/lib/data";
import { useReveal } from "@/hooks/use-reveal";

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section id="reviews" className="py-14 md:py-14 overflow-hidden" style={{ backgroundColor: "#f2ede4" }}>
      <div ref={ref} className="fade-up max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">What Our Guests Say</span>
          <h2 className="font-serif text-[28px] md:text-[40px] mt-2 font-bold" style={{ color: "#0e3c2c" }}>
            Trusted by Travelers in Thekkady
          </h2>
          <p className="mt-3 text-[17px] leading-[1.75]" style={{ color: "#1a1a1a" }}>
            Real words from real guests — sourced from our Google Reviews.
          </p>
        </div>
      </div>

      <div className="mt-10 relative">
        <div className="flex gap-4 animate-[scroll_50s_linear_infinite] hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <article
              key={i}
              className="shrink-0 w-[88vw] sm:w-[420px] p-7 rounded-sm"
              style={{
                backgroundColor: "#ffffff",
                borderLeft: "3px solid #ab8c4a",
                boxShadow: "0 2px 12px rgba(14,60,44,0.08)",
              }}
            >
              <div className="flex gap-1" style={{ color: "#ab8c4a" }}>
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 leading-[1.65] text-[15px] italic line-clamp-[8]" style={{ color: "#1a1a1a" }}>
                "{t.text}"
              </p>
              <div className="mt-5 pt-4 border-t" style={{ borderColor: "#e6dfd1" }}>
                <p className="font-bold text-[16px]" style={{ color: "#0e3c2c" }}>{t.name}</p>
                <p className="text-[13px] mt-1" style={{ color: "#7e7038" }}>{t.meta}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[11px] uppercase tracking-[0.18em]" style={{ color: "#4a4a3a" }}>
                    {t.when}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.14em] font-semibold" style={{ color: "#ab8c4a" }}>
                    via Google Reviews
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center px-7 py-3 text-[14px] font-semibold uppercase tracking-[0.06em] rounded-sm border-2 transition"
          style={{ borderColor: "#ab8c4a", color: "#ab8c4a" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#ab8c4a";
            e.currentTarget.style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#ab8c4a";
          }}
        >
          Read All Reviews on Google →
        </a>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 8px)); }
        }
      `}</style>
    </section>
  );
}
