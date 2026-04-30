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
    <section className="section-pad" style={{ backgroundColor: "#faf7f2" }}>
      <div ref={ref} className="fade-up max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Our Signature Experiences</span>
          <h2 className="font-serif text-[36px] md:text-[52px] mt-4 leading-[1.05] font-bold" style={{ color: "#00846d" }}>
            Step Into Serenity
          </h2>
          <p className="mt-5 leading-[1.8] text-[16px]" style={{ color: "#6b6b66" }}>
            Signature spa therapies designed to relax the body, restore balance, and elevate your spa
            journey in Kumily.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="card-soft overflow-hidden flex flex-col"
              >
                <div
                  className="overflow-hidden"
                  style={{ aspectRatio: "4 / 5" }}
                >
                  <img
                    src={img}
                    alt={s.name}
                    loading="lazy"
                    decoding="async"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase font-semibold flex-wrap" style={{ color: "#c6a46c" }}>
                    <span>{dur}</span>
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "#c6a46c" }} />
                    <span className="text-[14px] font-bold tracking-normal" style={{ color: "#00846d" }}>{price}</span>
                  </div>
                  <h3 className="font-serif text-[22px] mt-3 font-semibold leading-[1.2]" style={{ color: "#00846d" }}>{s.name}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6] flex-1" style={{ color: "#6b6b66" }}>{s.desc}</p>

                  <div className="flex gap-2 mt-5 flex-wrap">
                    <a
                      href={knowMoreHref(s.name)}
                      className="text-center transition"
                      style={{
                        flex: 1,
                        minWidth: 100,
                        padding: "10px 14px",
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        borderRadius: 999,
                        border: "1.5px solid #00846d",
                        color: "#00846d",
                        background: "transparent",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#00846d";
                        e.currentTarget.style.color = "#ffffff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "#00846d";
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
                        padding: "10px 14px",
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        borderRadius: 999,
                        background: "#c6a46c",
                        color: "#ffffff",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#ab8c4a")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "#c6a46c")}
                    >
                      Book Now <ArrowUpRight size={13} />
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
            style={{ color: "#c6a46c", borderColor: "#c6a46c" }}
          >
            Explore All Treatments →
          </a>
        </div>
      </div>
    </section>
  );
}
