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
      className="text-white border-t border-b"
      style={{ backgroundColor: "#0e3c2c", borderColor: "#ab8c4a" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-7 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map(({ Icon, label }) => (
          <div key={label} className="flex flex-col items-center text-center gap-3">
            <Icon size={32} strokeWidth={1.4} style={{ color: "#b89b64" }} />
            <p className="text-[14px] font-semibold tracking-[0.06em] text-white">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
