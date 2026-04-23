import { ArrowUpRight } from "lucide-react";
import { SIGNATURE, waBook } from "@/lib/data";
import { useReveal } from "@/hooks/use-reveal";

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

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {SIGNATURE.map((s) => {
            const d = s.durations;
            const dur = d.length > 1 ? `${d[0].min} / ${d[1].min} Min` : `${d[0].min} Min`;
            const price = d.length > 1
              ? `From ₹${d[0].price.toLocaleString()}`
              : `₹${d[0].price.toLocaleString()}`;
            return (
              <article
                key={s.name}
                className="bg-white group border border-transparent hover:border-gold-light transition-colors rounded-sm overflow-hidden"
                style={{ boxShadow: "0 2px 12px rgba(14,60,44,0.06)" }}
              >
                {/* Use essential oil bottle image, hot stone image, or bamboo illustration here — no body/skin photos */}
                <div
                  className="aspect-[16/9]"
                  style={{ background: "linear-gradient(135deg, #f2ede4 0%, #b89b64 100%)" }}
                />
                <div className="p-7">
                  <div className="flex items-center gap-3 text-[12px] tracking-[0.18em] uppercase font-semibold" style={{ color: "#ab8c4a" }}>
                    <span>{dur}</span>
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "#ab8c4a" }} />
                    <span className="text-[16px] font-bold tracking-normal">{price}</span>
                  </div>
                  <h3 className="font-serif text-[20px] mt-3 font-semibold" style={{ color: "#0e3c2c" }}>{s.name}</h3>
                  <p className="mt-3 text-[15px] leading-[1.65]" style={{ color: "#4a4a3a" }}>{s.desc}</p>
                  <a
                    href={waBook(s.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 mt-5 text-[15px] font-semibold border-b pb-1 transition-colors"
                    style={{ color: "#0e3c2c", borderColor: "#ab8c4a" }}
                  >
                    Book Now <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href="#services"
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
