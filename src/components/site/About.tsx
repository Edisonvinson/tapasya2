import { Map, Hourglass, Sprout, MapPin } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const reasons = [
  {
    Icon: Map,
    title: "Multi-Therapy Expertise",
    desc: "Western, Ayurvedic, and Asian treatments under one roof, tailored to your needs.",
  },
  {
    Icon: Hourglass,
    title: "15+ Years Combined Experience",
    desc: "Skilled therapists who ensure a personalized and comfortable experience for every guest.",
  },
  {
    Icon: Sprout,
    title: "Premium Products",
    desc: "High-quality essential oils and certified skincare products used in every session.",
  },
  {
    Icon: MapPin,
    title: "Heart of Kumily",
    desc: "Located close to the Elephant Camp and Periyar boat counter — easy to reach, impossible to forget.",
  },
];

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-24 md:py-32">
      <div ref={ref} className="fade-up max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div>
          <span className="eyebrow">Who We Are</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6 leading-[1.05]">
            A Spa Built Around Your Comfort
          </h2>
          <div className="mt-8 space-y-5 text-warm-grey leading-relaxed text-[15px] md:text-base">
            <p>
              Tapasya Ayurvedic Spa is a wellness destination in Kumily offering a blend of Western,
              Ayurvedic, and Asian massage therapies. Created with a focus on relaxation and care,
              Tapasya provides a space where travelers and guests can step away from stress and
              experience true comfort.
            </p>
            <p>
              We welcome individuals, couples, and tourists looking for a reliable and professional
              spa experience during their stay in Thekkady.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80"
              alt="Tapasya spa interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block w-32 h-32 border border-gold" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-24">
        <p className="font-serif text-2xl md:text-3xl text-charcoal mb-10">Why Choose Tapasya</p>
        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {reasons.map(({ Icon, title, desc }) => (
            <div key={title} className="bg-background p-8 md:p-10 flex gap-5">
              <div className="shrink-0 w-12 h-12 border border-gold flex items-center justify-center text-gold">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-xl text-charcoal">{title}</h3>
                <p className="mt-2 text-sm text-warm-grey leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
