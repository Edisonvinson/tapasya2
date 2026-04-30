import { SprayCan, Leaf, BadgeCheck, ShowerHead } from "lucide-react";

const items = [
  { Icon: SprayCan, label: "Hygienic Facilities" },
  { Icon: Leaf, label: "High Quality Essential Oils" },
  { Icon: BadgeCheck, label: "Certified Therapists" },
  { Icon: ShowerHead, label: "Ensuite Shower" },
];

export function TrustStrip() {
  return (
    <section
      className="text-white"
      style={{ backgroundColor: "#0f3d2e" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map(({ Icon, label }) => (
          <div key={label} className="flex flex-col items-center text-center gap-3">
            <Icon size={30} strokeWidth={1.3} style={{ color: "#c6a46c" }} />
            <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-white/90">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
