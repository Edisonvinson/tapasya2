import { ArrowUpRight } from "lucide-react";
import { SIGNATURE, waBook, slugify } from "@/lib/data";
import { useReveal } from "@/hooks/use-reveal";

const CARD_IMAGES: Record<string, string> = {
  "Tapasya Signature Massage": "https://www.graymatterdubai.com/wp-content/uploads/2026/04/Signature-scaled.jpeg",
  "Sports Massage / Deep Tissue": "https://www.graymatterdubai.com/wp-content/uploads/2026/04/Sports-scaled.jpeg",
  "Tapasya Balinese Massage": "https://www.graymatterdubai.com/wp-content/uploads/2026/04/Balinese-scaled.jpeg",
  "Facials": "https://www.graymatterdubai.com/wp-content/uploads/2026/04/Facial-scaled.jpeg",
};

// Map signature card names → slugs on the /services page
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
    <section className="py-14 md:py-14" style={{ backgroundColor: "#faf7f2" }}>
      <div ref={ref} className="fade-up max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Our Signature Experiences</span>
          <h2 className="font-serif text-[28px] md:text-[40px] mt-2 font-bold" style={{ color: "#0e3c2c" }}>
            Step Into Serenity
          </h2>
          <p className="mt-3 leading-[1.75] text-[17px]" style={{ color: "#1a1a1a" }}>
            Signature spa therapies designed to relax the body, restore balance, and elevate your spa
            journey in Kumily.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-5">
          {SIGNATURE.map((s) => {
            const d = s.durations;
            const dur = d.length > 1 ? `${d[0].min} / ${d[1].min} Min` : `${d[0].min} Min`;
            const price = d.length > 1
              ? `From ₹${d[0].price.toLocaleString()}`
              : `₹${d[0].price.toLocaleString()}`;
            const img = CARD_IMAGES[s.name];
            return (
              <article
                key={s.name}
                className="bg-white group border border-transparent hover:border-gold-light transition-colors rounded-sm overflow-hidden flex flex-col"
                style={{ boxShadow: "0 2px 12px rgba(14,60,44,0.06)" }}
              >
                <div
                  className="overflow-hidden"
                  style={{ aspectRatio: "3 / 4", borderRadius: "4px 4px 0 0" }}
                >
                  <img
                    src={img}
                    alt={s.name}
                    loading="lazy"
                    decoding="async"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase font-semibold flex-wrap" style={{ color: "#ab8c4a" }}>
                    <span>{dur}</span>
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "#ab8c4a" }} />
                    <span className="text-[15px] font-bold tracking-normal">{price}</span>
                  </div>
                  <h3 className="font-serif text-[19px] mt-3 font-semibold" style={{ color: "#0e3c2c" }}>{s.name}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6] flex-1" style={{ color: "#4a4a3a" }}>{s.desc}</p>

                  <div className="flex gap-2.5 mt-3.5 flex-wrap">
                    <a
                      href={knowMoreHref(s.name)}
                      className="text-center transition"
                      style={{
                        flex: 1,
                        minWidth: 100,
                        padding: "9px 14px",
                        fontSize: 13,
                        fontWeight: 600,
                        borderRadius: 3,
                        border: "1.5px solid #ab8c4a",
                        color: "#ab8c4a",
                        background: "transparent",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#ab8c4a";
                        e.currentTarget.style.color = "#ffffff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "#ab8c4a";
                      }}
                    >
                      Know More
                    </a>
                    <a
                      href={waBook(s.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1 transition"
                      style={{
                        flex: 1,
                        minWidth: 100,
                        padding: "9px 14px",
                        fontSize: 13,
                        fontWeight: 600,
                        borderRadius: 3,
                        background: "#ab8c4a",
                        color: "#ffffff",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#8a6f31")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "#ab8c4a")}
                    >
                      Book Now <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] font-semibold border-b pb-1"
            style={{ color: "#ab8c4a", borderColor: "#ab8c4a" }}
          >
            Explore All Treatments →
          </a>
        </div>
      </div>
    </section>
  );
}
