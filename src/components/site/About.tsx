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
    <section id="about" className="section-pad" style={{ backgroundColor: "#f5f1ea" }}>
      <div ref={ref} className="fade-up max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <span className="eyebrow">Who We Are</span>
          <h2 className="font-serif text-[36px] md:text-[52px] mt-4 leading-[1.05] font-bold" style={{ color: "#0f3d2e" }}>
            A Spa Built<br />Around Your Comfort
          </h2>
          <div className="mt-6 space-y-4 leading-[1.8] text-[16px]" style={{ color: "#4a4a3a" }}>
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
            style={{ opacity: 0.1 }}
          />
          <div className="relative grid sm:grid-cols-2 gap-5 w-full">
            {reasons.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="card-soft p-7"
              >
                <div className="w-12 h-12 flex items-center justify-center" style={{ backgroundColor: "#f5f1ea", color: "#c6a46c", borderRadius: 12 }}>
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[20px] font-semibold mt-5" style={{ color: "#0f3d2e" }}>{title}</h3>
                <p className="mt-2 text-[14px] leading-[1.65]" style={{ color: "#6b6b66" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
