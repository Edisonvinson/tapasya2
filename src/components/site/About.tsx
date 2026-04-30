import { Map, Hourglass, Sprout, MapPin } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_BASE } from "@/lib/data";

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
    <section id="about" className="section-pad bg-white">
      <div ref={ref} className="fade-up max-w-7xl mx-auto px-6 md:px-10">
        {/* Top: title left, paragraph + CTA right */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <div>
            <h2
              className="font-serif text-[44px] md:text-[64px] lg:text-[72px] leading-[1.02] font-bold"
              style={{ color: "#0f0f0f", letterSpacing: "-0.02em" }}
            >
              A Spa Built<br />Around Your<br />Comfort
            </h2>
            <p className="mt-6 text-[15px] md:text-[16px]" style={{ color: "#6b6b66" }}>
              Explore your inner world and find true calm
            </p>
          </div>

          <div className="lg:pt-6">
            <div className="space-y-5 text-[16px] leading-[1.75]" style={{ color: "#3a3a3a" }}>
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
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center mt-8 px-8 py-4 text-white text-[14px] font-semibold transition hover:opacity-90"
              style={{ backgroundColor: "#0f0f0f", borderRadius: 999 }}
            >
              Book Appointment
            </a>
          </div>
        </div>

        {/* Reasons grid below */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map(({ Icon, title, desc }) => (
            <div key={title} className="card-soft p-7">
              <div
                className="w-12 h-12 flex items-center justify-center"
                style={{ backgroundColor: "#f5f1ea", color: "#c6a46c", borderRadius: 12 }}
              >
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-[20px] font-semibold mt-5" style={{ color: "#0f3d2e" }}>
                {title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.65]" style={{ color: "#6b6b66" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
