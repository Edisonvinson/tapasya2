import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { ALL_SERVICES, waBook, WHATSAPP_BASE } from "@/lib/data";
import { useReveal } from "@/hooks/use-reveal";

function priceLine(d: { min: number; price: number }[]) {
  return d
    .map((x) => `${x.min} min — ₹${x.price.toLocaleString()}`)
    .join("  /  ");
}

export function Services() {
  const ref = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="services" className="py-24 md:py-32">
      <div ref={ref} className="fade-up max-w-5xl mx-auto px-6 md:px-10">
        <div className="text-center">
          <span className="eyebrow">All Treatments</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6">
            Every Body Deserves Care
          </h2>
        </div>

        <div className="mt-14 border-t border-border">
          {ALL_SERVICES.map((s, idx) => {
            const isOpen = open === idx;
            return (
              <div key={s.name} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <div className="flex items-baseline gap-4 md:gap-8 flex-wrap">
                    <span className="text-xs text-gold tabular-nums">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl text-charcoal group-hover:text-gold transition-colors">
                      {s.name}
                    </h3>
                  </div>
                  <span className="shrink-0 text-gold">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-8 pl-0 md:pl-16 grid md:grid-cols-[1fr_auto] gap-6 md:gap-12 items-end">
                    <div>
                      <p className="text-warm-grey text-sm md:text-[15px] leading-relaxed max-w-2xl">
                        {s.desc}
                      </p>
                      <p className="mt-3 text-xs uppercase tracking-[0.18em] text-charcoal">
                        {priceLine(s.durations)}
                      </p>
                    </div>
                    <a
                      href={waBook(s.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center px-5 py-3 border border-gold text-gold text-xs uppercase tracking-[0.18em] hover:bg-gold hover:text-white transition"
                    >
                      Book This Treatment
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Special package */}
        <div className="mt-16 border border-gold p-8 md:p-12 relative">
          <div className="absolute top-0 left-8 -translate-y-1/2 bg-background px-4">
            <span className="eyebrow">Kumily Vacation Exclusive</span>
          </div>
          <h3 className="font-serif text-3xl md:text-4xl text-charcoal mt-2">
            The Ultimate Spa Holiday
          </h3>
          <p className="mt-4 text-warm-grey leading-relaxed max-w-2xl">
            Choose a massage (Hot Stone or Warm Bamboo) paired with a skin treatment (Almond, Salt,
            or Sugar Scrub) for a complete restorative session.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            <div className="bg-secondary/40 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Single</p>
              <p className="font-serif text-2xl mt-2 text-charcoal">
                120 min — ₹5,000
                <br />
                <span className="text-warm-grey/70 text-lg">150 min — ₹6,000</span>
              </p>
            </div>
            <div className="bg-secondary/40 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Couple</p>
              <p className="font-serif text-2xl mt-2 text-charcoal">
                120 min — ₹9,500
                <br />
                <span className="text-warm-grey/70 text-lg">150 min — ₹12,000</span>
              </p>
            </div>
          </div>

          <a
            href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hi, I'd like to book the Kumily Vacation Exclusive package")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center mt-8 px-7 py-3.5 bg-gold text-white text-xs uppercase tracking-[0.2em] hover:bg-gold/90 transition"
          >
            Book This Package →
          </a>
        </div>
      </div>
    </section>
  );
}
