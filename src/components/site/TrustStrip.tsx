import { SprayCan, Leaf, BadgeCheck, ShowerHead } from "lucide-react";

const items = [
  { Icon: SprayCan, label: "Hygienic Facilities" },
  { Icon: Leaf, label: "High Quality Essential Oils" },
  { Icon: BadgeCheck, label: "Certified Therapists" },
  { Icon: ShowerHead, label: "Ensuite Shower" },
];

export function TrustStrip() {
  return (
    <section className="bg-gold text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        {items.map(({ Icon, label }) => (
          <div key={label} className="flex flex-col items-center text-center gap-3">
            <Icon size={32} strokeWidth={1.4} />
            <p className="text-xs md:text-sm tracking-[0.18em] uppercase">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
