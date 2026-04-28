import { Map, Hourglass, Sprout, MapPin } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import aboutIllustration from "@/assets/about-illustration.png";

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
    <section id="about" className="py-14 md:py-14" style={{ backgroundColor: "#f2ede4" }}>
      <div ref={ref} className="fade-up max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <span className="eyebrow">Who We Are</span>
          <h2 className="font-serif text-[28px] md:text-[40px] mt-2 leading-[1.1] font-bold" style={{ color: "#0e3c2c" }}>
            A Spa Built Around Your Comfort
          </h2>
          <div className="mt-3 space-y-4 leading-[1.75] text-[17px]" style={{ color: "#1a1a1a" }}>
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

        <div className="relative min-h-[320px] flex items-center justify-center">
          <img
            src={aboutIllustration}
            alt=""
            aria-hidden
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none"
            style={{ opacity: 0.18 }}
          />
          <div className="relative grid sm:grid-cols-2 gap-5 w-full">
            {reasons.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white p-6 border border-transparent hover:border-gold-light transition-colors rounded-sm"
                style={{ boxShadow: "0 2px 12px rgba(14,60,44,0.06)" }}
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-sm" style={{ backgroundColor: "#f2ede4", color: "#8a6f31" }}>
                  <Icon size={20} strokeWidth={1.6} />
                </div>
                <h3 className="font-serif text-[20px] font-semibold mt-4" style={{ color: "#0e3c2c" }}>{title}</h3>
                <p className="mt-2 text-[15px] leading-[1.65]" style={{ color: "#4a4a3a" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
