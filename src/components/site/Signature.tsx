import { ArrowUpRight } from "lucide-react";
import { SIGNATURE, waBook } from "@/lib/data";
import { useReveal } from "@/hooks/use-reveal";

const images = [
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1620733723572-11c53f73a416?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
];

export function Signature() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div ref={ref} className="fade-up max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Our Signature Experiences</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6">Step Into Serenity</h2>
          <p className="mt-5 text-warm-grey leading-relaxed">
            Signature spa therapies designed to relax the body, restore balance, and elevate your spa
            journey in Kumily.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-10">
          {SIGNATURE.map((s, idx) => {
            const d = s.durations;
            const dur =
              d.length > 1 ? `${d[0].min} / ${d[1].min} Min` : `${d[0].min} Min`;
            const price =
              d.length > 1
                ? `From ₹${d[0].price.toLocaleString()}`
                : `₹${d[0].price.toLocaleString()}`;
            return (
              <article key={s.name} className="bg-background group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={images[idx]}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-7 md:p-9">
                  <div className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-gold">
                    <span>{dur}</span>
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    <span>{price}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl mt-3 text-charcoal">{s.name}</h3>
                  <p className="mt-3 text-sm text-warm-grey leading-relaxed">{s.desc}</p>
                  <a
                    href={waBook(s.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-charcoal border-b border-gold pb-1 hover:text-gold transition-colors"
                  >
                    Book Now <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-gold border-b border-gold pb-1"
          >
            Explore All Treatments →
          </a>
        </div>
      </div>
    </section>
  );
}
