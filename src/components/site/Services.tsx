import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { ALL_SERVICES, waBook } from "@/lib/data";
import { useReveal } from "@/hooks/use-reveal";

function priceLine(d: { min: number; price: number }[]) {
  return d.map((x) => `${x.min} min — ₹${x.price.toLocaleString()}`).join("  /  ");
}

export function Services() {
  const ref = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="services" className="section-pad" style={{ backgroundColor: "#f5f1ea" }}>
      <div ref={ref} className="fade-up max-w-5xl mx-auto px-6 md:px-10">
        <div className="text-center">
          <span className="eyebrow">All Treatments</span>
          <h2 className="font-serif text-[36px] md:text-[52px] mt-4 leading-[1.05] font-bold" style={{ color: "#00846d" }}>
            Every Body Deserves Care
          </h2>
        </div>

        <div className="mt-14 bg-white" style={{ borderRadius: 16, boxShadow: "0 4px 24px -8px rgba(15,61,46,0.08)" }}>
          {ALL_SERVICES.map((s, idx) => {
            const isOpen = open === idx;
            const isLast = idx === ALL_SERVICES.length - 1;
            return (
              <div
                key={s.name}
                className="transition-all"
                style={{
                  borderBottom: isLast ? "none" : "1px solid #ece5d8",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-6 px-6 md:px-8 py-6 text-left group"
                >
                  <div className="flex items-baseline gap-4 md:gap-6 flex-wrap">
                    <span className="text-xs tabular-nums font-semibold" style={{ color: "#c6a46c" }}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-[20px] md:text-[24px] font-semibold transition-colors" style={{ color: isOpen ? "#00846d" : "#1a1a1a" }}>
                      {s.name}
                    </h3>
                  </div>
                  <span className="shrink-0 w-9 h-9 flex items-center justify-center transition" style={{ color: isOpen ? "#ffffff" : "#c6a46c", backgroundColor: isOpen ? "#c6a46c" : "transparent", border: isOpen ? "none" : "1.5px solid #c6a46c", borderRadius: 999 }}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-7 px-6 md:px-8 md:pl-[5.5rem] grid md:grid-cols-[1fr_auto] gap-6 md:gap-12 items-end">
                    <div>
                      <p className="text-[15px] leading-[1.7] max-w-2xl" style={{ color: "#6b6b66" }}>
                        {s.desc}
                      </p>
                      <p className="mt-4 text-[12px] uppercase tracking-[0.2em] font-semibold" style={{ color: "#00846d" }}>
                        {priceLine(s.durations)}
                      </p>
                    </div>
                    <a
                      href={waBook(s.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 text-white text-[12px] font-semibold uppercase tracking-[0.05em] hover:opacity-90 transition"
                      style={{ backgroundColor: "#c6a46c", borderRadius: 999 }}
                    >
                      Book This Treatment
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
