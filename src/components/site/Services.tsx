import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { ALL_SERVICES, waBook, WHATSAPP_BASE } from "@/lib/data";
import { useReveal } from "@/hooks/use-reveal";

function priceLine(d: { min: number; price: number }[]) {
  return d.map((x) => `${x.min} min — ₹${x.price.toLocaleString()}`).join("  /  ");
}

export function Services() {
  const ref = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="services" className="py-14 md:py-14" style={{ backgroundColor: "#faf7f2" }}>
      <div ref={ref} className="fade-up max-w-5xl mx-auto px-6 md:px-10">
        <div className="text-center">
          <span className="eyebrow">All Treatments</span>
          <h2 className="font-serif text-[28px] md:text-[40px] mt-2 font-bold" style={{ color: "#0e3c2c" }}>
            Every Body Deserves Care
          </h2>
        </div>

        <div className="mt-10 space-y-2">
          {ALL_SERVICES.map((s, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={s.name}
                className="rounded-sm transition-all"
                style={{
                  backgroundColor: isOpen ? "#ffffff" : "#f2ede4",
                  borderLeft: isOpen ? "3px solid #ab8c4a" : "3px solid transparent",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-6 px-5 py-5 text-left group"
                >
                  <div className="flex items-baseline gap-4 md:gap-6 flex-wrap">
                    <span className="text-xs tabular-nums font-semibold" style={{ color: "#ab8c4a" }}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-[20px] md:text-[22px] font-semibold transition-colors" style={{ color: isOpen ? "#0e3c2c" : "#1a1a1a" }}>
                      {s.name}
                    </h3>
                  </div>
                  <span className="shrink-0" style={{ color: "#ab8c4a" }}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-6 px-5 md:pl-16 grid md:grid-cols-[1fr_auto] gap-5 md:gap-12 items-end">
                    <div>
                      <p className="text-[15px] leading-[1.65] max-w-2xl" style={{ color: "#4a4a3a" }}>
                        {s.desc}
                      </p>
                      <p className="mt-3 text-[13px] uppercase tracking-[0.18em] font-semibold" style={{ color: "#0e3c2c" }}>
                        {priceLine(s.durations)}
                      </p>
                    </div>
                    <a
                      href={waBook(s.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center px-5 py-3 text-white text-[13px] font-semibold uppercase tracking-[0.04em] rounded-sm hover:opacity-90 transition"
                      style={{ backgroundColor: "#ab8c4a" }}
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
        <div
          className="mt-10 p-8 md:p-10 relative rounded-sm border text-white"
          style={{ backgroundColor: "#314c30", borderColor: "#b89b64" }}
        >
          <span className="text-[12px] uppercase tracking-[0.18em] font-semibold" style={{ color: "#b89b64" }}>
            Kumily Vacation Exclusive
          </span>
          <h3 className="font-serif text-[28px] md:text-[36px] mt-2 text-white font-bold">
            The Ultimate Spa Holiday
          </h3>
          <p className="mt-3 text-[16px] leading-[1.7] max-w-2xl text-white/90">
            Choose a massage (Hot Stone or Warm Bamboo) paired with a skin treatment (Almond, Salt,
            or Sugar Scrub) for a complete restorative session.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mt-7">
            <div className="p-6 rounded-sm" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
              <p className="text-[12px] uppercase tracking-[0.2em] font-semibold" style={{ color: "#b89b64" }}>Single</p>
              <p className="font-serif text-[24px] mt-2 text-white">
                120 min — ₹5,000
                <br />
                <span className="text-white/70 text-[18px]">150 min — ₹6,000</span>
              </p>
            </div>
            <div className="p-6 rounded-sm" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
              <p className="text-[12px] uppercase tracking-[0.2em] font-semibold" style={{ color: "#b89b64" }}>Couple</p>
              <p className="font-serif text-[24px] mt-2 text-white">
                120 min — ₹9,500
                <br />
                <span className="text-white/70 text-[18px]">150 min — ₹12,000</span>
              </p>
            </div>
          </div>

          <a
            href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hi, I'd like to book the Kumily Vacation Exclusive package")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center mt-7 px-7 py-3 text-white text-[14px] font-semibold uppercase tracking-[0.06em] rounded-sm hover:opacity-90 transition"
            style={{ backgroundColor: "#ab8c4a" }}
          >
            Book This Package →
          </a>
        </div>
      </div>
    </section>
  );
}
