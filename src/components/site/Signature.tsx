import { ArrowRight } from "lucide-react";
import { SIGNATURE, slugify } from "@/lib/data";
import { useReveal } from "@/hooks/use-reveal";

const CARD_IMAGES: Record<string, string> = {
  "Tapasya Signature Massage": "https://www.graymatterdubai.com/wp-content/uploads/2026/04/Signature-scaled.jpeg",
  "Sports Massage / Deep Tissue": "https://www.graymatterdubai.com/wp-content/uploads/2026/04/Sports-scaled.jpeg",
  "Tapasya Balinese Massage": "https://www.graymatterdubai.com/wp-content/uploads/2026/04/Balinese-scaled.jpeg",
  "Facials": "https://www.graymatterdubai.com/wp-content/uploads/2026/04/Facial-scaled.jpeg",
};

const CARD_TINTS: Record<string, string> = {
  "Tapasya Signature Massage": "#d8efe4",
  "Sports Massage / Deep Tissue": "#fde6d4",
  "Tapasya Balinese Massage": "#f3e6d2",
  "Facials": "#f6dfe1",
};

const CARD_CHIPS: Record<string, [string, string]> = {
  "Tapasya Signature Massage": ["Signature", "Full Body"],
  "Sports Massage / Deep Tissue": ["Deep Tissue", "Recovery"],
  "Tapasya Balinese Massage": ["Balinese", "Oil + Dry"],
  "Facials": ["Skin Care", "Radiance"],
};

const KNOW_MORE_SLUG: Record<string, string> = {
  "Tapasya Signature Massage": slugify("Tapasya Signature Massage"),
  "Sports Massage / Deep Tissue": slugify("Sports Massage / Deep Tissue"),
  "Tapasya Balinese Massage": slugify("Tapasya Balinese Massage"),
  "Facials": slugify("Advanced Radiance Facial"),
};

function knowMoreHref(name: string) {
  return `/services#${KNOW_MORE_SLUG[name] ?? slugify(name)}`;
}

export function Signature() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="section-pad" style={{ backgroundColor: "#faf7f2" }}>
      <div ref={ref} className="fade-up max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Our Signature Experiences</span>
          <h2 className="font-serif text-[32px] md:text-[52px] mt-4 leading-[1.05] font-bold" style={{ color: "#00846d" }}>
            Step Into Serenity
          </h2>
          <p className="mt-5 leading-[1.8] text-[15px] md:text-[16px]" style={{ color: "#6b6b66" }}>
            Signature spa therapies designed to relax the body, restore balance, and elevate your spa
            journey in Kumily.
          </p>
        </div>

        <div className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {SIGNATURE.map((s) => {
            const img = CARD_IMAGES[s.name];
            const tint = CARD_TINTS[s.name] ?? "#f3ebde";
            const chips = CARD_CHIPS[s.name] ?? ["Wellness", "Spa"];
            return (
              <article
                key={s.name}
                className="overflow-hidden flex flex-col"
                style={{
                  backgroundColor: tint,
                  borderRadius: 22,
                  boxShadow: "0 4px 20px -8px rgba(15,61,46,0.10)",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px -10px rgba(15,61,46,0.16)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px -8px rgba(15,61,46,0.10)";
                }}
              >
                {/* Top — chips + dot */}
                <div className="px-5 pt-5 flex items-start justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {chips.map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center px-3 py-1 text-[11px] font-semibold"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.7)",
                          color: "#1a1a1a",
                          borderRadius: 999,
                        }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <span
                    className="w-5 h-5 rounded-full inline-flex items-center justify-center shrink-0"
                    style={{ border: "1.5px solid #00846d" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#00846d" }} />
                  </span>
                </div>

                {/* Title + desc */}
                <div className="px-5 pt-4 pb-5">
                  <h3
                    className="text-[22px] md:text-[24px] font-bold leading-[1.15]"
                    style={{ color: "#1a1a1a", fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {s.name}
                  </h3>
                  <p
                    className="mt-2.5 text-[13.5px] leading-[1.55]"
                    style={{ color: "#4a4a3a" }}
                  >
                    {s.desc}
                  </p>
                </div>

                {/* Image with floating Read More */}
                <div className="relative mt-auto px-3 pb-3">
                  <div
                    className="relative overflow-hidden"
                    style={{ borderRadius: 16, aspectRatio: "4 / 3" }}
                  >
                    <img
                      src={img}
                      alt={s.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    <a
                      href={knowMoreHref(s.name)}
                      className="absolute bottom-3 left-3 inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 text-[12px] font-semibold transition hover:bg-white"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.95)",
                        color: "#1a1a1a",
                        borderRadius: 999,
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      Read More
                      <span
                        className="inline-flex items-center justify-center w-7 h-7 rounded-full"
                        style={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}
                      >
                        <ArrowRight size={13} strokeWidth={2} />
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] font-semibold border-b pb-1.5"
            style={{ color: "#00846d", borderColor: "#00846d" }}
          >
            Explore All Treatments →
          </a>
        </div>
      </div>
    </section>
  );
}
