import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppWidget } from "@/components/site/WhatsAppWidget";
import { waBook, slugify } from "@/lib/data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Treatments — Tapasya Spa & Wellness, Kumily" },
      {
        name: "description",
        content:
          "Full menu of Tapasya Spa & Wellness treatments in Kumily, Thekkady — Signature, Balinese, Lomi Lomi, Deep Tissue, Thai, Swedish, Hot Stone, Bamboo, Aromatherapy, Reflexology, Body Scrub & Facials.",
      },
      { property: "og:title", content: "Services & Treatments — Tapasya Spa & Wellness" },
      {
        property: "og:description",
        content:
          "Signature, Global, Wellness, and Skin Radiance treatments at Kumily's trusted spa.",
      },
    ],
  }),
  component: ServicesPage,
});

type Treatment = {
  name: string;
  priceLine: string;
  description: string;
  inclusions?: string;
  bestFor?: string;
  features?: string;
  benefits?: string;
  products?: string;
  techniques?: string;
  recommended?: string;
};

type Category = {
  id: string;
  title: string;
  focus: string;
  treatments: Treatment[];
};

const CATEGORIES: Category[] = [
  {
    id: "signature-and-fusion",
    title: "Signature & Fusion Treatments",
    focus: "Unique experiences exclusive to Tapasya.",
    treatments: [
      {
        name: "Tapasya Signature Massage",
        priceLine: "₹3,750 (45 Min) · Price inclusive of all taxes",
        description:
          "Experience a masterfully choreographed therapy where our experts blend premium aroma oils for a full-body journey. Using a skillful combination of short and long strokes, this treatment targets deep-seated stress while restoring your body's natural energy flow. From the detailed foot reflexology to the calming head and face massage, every minute is designed to improve circulation and provide total rejuvenation.",
        inclusions:
          "60-min Signature Massage, 15-min Foot Scrub, Refreshing Shower, and Signature Detox Tea.",
        bestFor: "Total relaxation, improving blood flow, and restoring energy balance.",
      },
      {
        name: "Tapasya Balinese Massage",
        priceLine: "₹2,900 (60 Min) | ₹3,400 (90 Min) · Prices inclusive of all taxes",
        description:
          "Experience a world-class fusion of traditional dry Thai stretching and the soothing flow of a medium-pressure oil massage. This unique therapy is specifically designed to provide the new energy your body needs after a long journey. By focusing on vital pressure points, our therapists help rebalance your internal energy while the oil-based strokes melt away muscle tension. It is the ideal choice for those who want the invigorating benefits of a Thai massage combined with the relaxation of an aromatic oil therapy.",
        inclusions:
          "Fusion Balinese Massage (Dry + Oil), Signature Aroma Oil, and access to a relaxing hot shower.",
        bestFor: "Balancing energy levels, deep muscle relaxation, and total body revitalization.",
      },
      {
        name: "Hawaiian Lomi Lomi Massage",
        priceLine: "₹2,900 (60 Min) | ₹3,400 (90 Min) · Prices inclusive of all taxes",
        description:
          "Lomi Lomi is a sacred Hawaiian bodywork technique that translates to \"loving hands.\" Known for its unique, flowing rhythmic strokes that mimic the gentle ebbs and flows of ocean waves, this massage provides a deeply nurturing experience. Our therapists utilize long, continuous forearm strokes, kneading, and gentle stretching to release tension throughout the entire body. Infused with pure Coconut or Macadamia oils, this therapy not only calms the mind but leaves your skin deeply nourished and silky smooth.",
        inclusions:
          "Traditional Lomi Lomi session, Nourishing Coconut/Macadamia oil blend, and a Refreshing Hot Shower.",
        features:
          "Uses intuitive, rhythmic strokes to harmonize the body's energy and improve skin elasticity.",
        bestFor:
          "Deep emotional relaxation, intense skin nourishment, and those seeking a unique, rhythmic massage experience.",
      },
    ],
  },
  {
    id: "global-therapeutic",
    title: "Global Therapeutic Massages",
    focus: "Proven international techniques for specific body needs.",
    treatments: [
      {
        name: "Sports Massage / Deep Tissue",
        priceLine: "₹2,750 (60 Min) | ₹3,200 (90 Min) · Prices inclusive of all taxes",
        description:
          "Engineered specifically for gym professionals, athletes, and trekkers, this therapy goes beyond relaxation to provide structural relief. Our therapists utilize deep, concentrated strokes to loosen stiff muscle fibers and improve localized blood flow. By applying targeted pressure to key joints and incorporating passive stretches, this treatment creates a perfect wellness balance, effectively preventing lactic acid buildup after intensive physical activity or long treks.",
        inclusions: "Deep Tissue Massage, Foot Reflexology, Refreshing Shower, and Signature Detox Tea.",
        bestFor: "Muscle recovery, joint flexibility, and relief from chronic physical tension.",
      },
      {
        name: "Traditional Thai Massage",
        priceLine: "₹3,000 (60 Min) | ₹3,500 (90 Min) · Prices inclusive of all taxes",
        description:
          "This ancient healing art is a completely dry, oil-free therapy designed to unlock your body's hidden flexibility. Our expert therapists perform a sequence of rhythmic stretches and pulls, moving your body into guided yoga positions to achieve a deep, invigorating acupressure effect. It is the perfect treatment to realign your posture and release joint tension after a long journey.",
        inclusions:
          "Thai Massage session, traditional Foot Ritual, complete Foot Care, Refreshing Shower, and Signature Detox Tea.",
        bestFor: "Improving range of motion, relieving back pain, and increasing overall energy levels.",
      },
      {
        name: "Swedish Massage",
        priceLine: "₹2,600 (60 Min) | ₹3,100 (90 Min) · Prices inclusive of all taxes",
        description:
          "Recognized as the foundation of Western spa therapy and widely popular across Europe, the Swedish massage is our top recommendation for spa beginners. This session utilizes long, gliding strokes and gentle kneading to melt away surface tension. Infused with therapeutic essential oils, this massage is specifically designed to comfort sore muscles, calm the nervous system, and rejuvenate the mind after a long day of travel.",
        inclusions:
          "Classic Swedish Massage, selection of therapeutic oils, and access to a relaxing hot shower.",
        bestFor: "Stress relief, beginners, and those seeking a gentle yet effective full-body refresh.",
      },
      {
        name: "Hot Stone Healing Therapy",
        priceLine: "₹3,500 (60 Min) | ₹4,000 (90 Min) · Prices inclusive of all taxes",
        description:
          "This luxurious thermal therapy is the ultimate comfort for cold weather. Polished volcanic stones are heated to a precise temperature and strategically placed on key energy centers—including the spine, palms, and feet—to radiate warmth deep into the muscle tissue. Our therapists then use the heated stones as an extension of their hands, utilizing Swedish techniques like long strokes, kneading, and circular movements to melt away deep-seated tension and restore your body's natural rhythm.",
        inclusions:
          "Targeted placement on 7 key zones (Spine, Stomach, Face, Chest, Palms, Feet & Toes), Heated Stone Massage, and Relaxing Shower.",
        techniques: "Effleurage (Long strokes), Kneading, Vibration, and Thermal Point Therapy.",
        bestFor: "Chronic pain relief, improving circulation, and deep relaxation in cool climates.",
      },
      {
        name: "Warm Bamboo Therapy",
        priceLine: "₹5,200 (60 Min) | ₹6,000 (90 Min) · Prices inclusive of all taxes",
        description:
          "This unique and powerful therapy represents the perfect marriage of Swedish relaxation and Deep Tissue precision. Using hollow bamboo stalks of various sizes, heated to a soothing temperature, our therapists roll and knead the muscles to reach depths that hands alone cannot achieve. Infused with professional-grade lotions and essential oils, the warm bamboo acts as a deep-tissue tool to instantly dissolve stubborn knots, improve lymphatic drainage, and leave you with a profound sense of lightness.",
        inclusions:
          "Heated Bamboo Session, selection of Therapeutic Essential Oils, Deep Tissue manipulation, and Refreshing Shower.",
        features: "Uses bamboo stalks of different diameters to target specific muscle groups with precision.",
        bestFor: "Releasing deep muscle tension, physical detoxification, and those who enjoy intense thermal relief.",
      },
    ],
  },
  {
    id: "wellness-and-holistic",
    title: "Wellness & Holistic Healing",
    focus: "Emotional well-being and targeted relief.",
    treatments: [
      {
        name: "Aromatherapy Healing Massage",
        priceLine: "₹2,700 (60 Min) | ₹3,100 (90 Min) · Prices inclusive of all taxes",
        description:
          "This delicate therapy is designed for those seeking deep emotional and physical relaxation. By incorporating pure, therapeutic-grade essential oils, our therapists use gentle strokes, rhythmic kneading, and precise pressure point manipulation to release stress. Whether you choose the calming properties of Lavender, the refreshing energy of Peppermint, or the soothing touch of Chamomile, this treatment works in harmony with your senses to promote a profound sense of well-being and inner peace.",
        inclusions:
          "Professional Aromatherapy session, choice of premium essential oils (Lavender, Peppermint, or Chamomile), and Signature Detox Tea.",
        benefits: "Instant mood enhancement, emotional healing, pain relief, and enhanced blood circulation.",
        bestFor: "Stress management, sleep improvement, and gentle full-body rejuvenation.",
      },
      {
        name: "Tapasya Foot Fix (Reflexology)",
        priceLine: "₹1,500 (30 Min) · Price inclusive of all taxes",
        description:
          "In a land of treks and jungle safaris, your feet carry the weight of your adventure. Tapasya Foot Fix is a specialized reflexology session that goes beyond a simple rub. By stimulating specific pressure points throughout the foot, this ancient therapy triggers a healing response throughout the entire body. It is an essential treatment for restoring vital energy and finding relief after a long day of exploring Kumily's natural beauty.",
        inclusions: "30-minute intensive Reflexology session, aromatic foot soak, and refreshing finish.",
        recommended:
          "Relieving swollen or tired feet, improving blood circulation, and aiding digestive health.",
      },
    ],
  },
  {
    id: "body-and-skin",
    title: "Body Scrubs & Skin Radiance",
    focus: "Exfoliation and professional skincare.",
    treatments: [
      {
        name: "Tapasya Body Scrub & Wrap",
        priceLine: "₹3,000 (60 Min) · Price inclusive of all taxes",
        description:
          "This dual-action treatment is the ultimate secret to soft, glowing skin. Choose between a Superfine Sea Salt or Organic Sugar base, expertly mixed with our signature aromatic essential oils. Our therapists perform a deep exfoliation to remove toxins and dead skin cells, followed by a nourishing wrap that locks in moisture. This session is designed to hydrate the deepest layers of your skin, leaving it feeling silk-smooth and completely refreshed.",
        inclusions: "Choice of Sea Salt or Sugar Scrub, Mineral-rich Body Wrap, and moisturizing finish.",
        bestFor: "Deep detoxification, skin hydration, and achieving a healthy \"holiday glow.\"",
      },
      {
        name: "Advanced Radiance Facial",
        priceLine: "₹2,500 (45 Min) · Price inclusive of all taxes",
        description:
          "Specifically designed to combat tanned and uneven skin tones, this advanced facial treatment uses oxygenating elements to restore instant radiance to your complexion. We exclusively utilize professional-grade O3+ D-TAN technology, enriched with Blueberry and Cranberry extracts, to target deep pigmentation and help eliminate the appearance of scars. It is the perfect clinical-grade refresh for travelers looking to brighten their skin and repair environmental damage.",
        inclusions:
          "Professional skin analysis, O3+ D-TAN Blueberry/Cranberry treatment, and pore-refining finish.",
        products: "Genuine O3+ professional skincare range.",
        bestFor: "Tan removal, evening out skin tone, and eliminating pigmentation/scars.",
      },
    ],
  },
];

function ServicesPage() {
  // Smooth-scroll to hash on load (accounting for sticky navbar)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const el = document.getElementById(hash.slice(1));
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 110;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };
    // Delay to allow layout
    const t = setTimeout(scrollToHash, 80);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      clearTimeout(t);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <main className="bg-background text-foreground" style={{ scrollBehavior: "smooth" }}>
      <Navbar />

      {/* Page header */}
      <section
        id="services-top"
        style={{ backgroundColor: "#0e3c2c" }}
        className="pt-32 pb-16 md:pt-40 md:pb-20 text-white"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <span
            className="eyebrow"
            style={{ color: "#b89b64", letterSpacing: "0.2em", fontSize: 13 }}
          >
            Our Treatments
          </span>
          <h1
            className="font-serif font-bold mt-3"
            style={{ color: "#ffffff", fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 1.15 }}
          >
            Services & Therapies
          </h1>
          <p
            className="mt-5 mx-auto"
            style={{ color: "#d4c9b0", fontSize: 17, lineHeight: 1.8, maxWidth: 720 }}
          >
            From signature fusions to globally proven techniques — every Tapasya treatment is
            designed to restore balance, ease tension, and leave you feeling renewed.
          </p>

          {/* Category jump links */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="transition"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "9px 16px",
                  borderRadius: 3,
                  border: "1.5px solid #b89b64",
                  color: "#b89b64",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#b89b64";
                  e.currentTarget.style.color = "#0e3c2c";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#b89b64";
                }}
              >
                {c.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      {CATEGORIES.map((cat, ci) => (
        <section
          key={cat.id}
          id={cat.id}
          className="py-16 md:py-20"
          style={{
            backgroundColor: ci % 2 === 0 ? "#faf7f2" : "#f5f1eb",
            scrollMarginTop: 110,
          }}
        >
          <div className="max-w-5xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <span
                className="eyebrow"
                style={{ color: "#ab8c4a", letterSpacing: "0.2em", fontSize: 13 }}
              >
                {cat.focus}
              </span>
              <h2
                className="font-serif font-bold mt-2"
                style={{ color: "#0e3c2c", fontSize: "clamp(26px, 3.5vw, 40px)", lineHeight: 1.2 }}
              >
                {cat.title}
              </h2>
              <div
                aria-hidden
                className="mx-auto mt-5"
                style={{ width: 56, height: 2, backgroundColor: "#ab8c4a" }}
              />
            </div>

            <div className="space-y-8">
              {cat.treatments.map((t) => {
                const id = slugify(t.name);
                return (
                  <article
                    key={id}
                    id={id}
                    className="bg-white rounded-sm p-7 md:p-10"
                    style={{
                      boxShadow: "0 2px 16px rgba(14,60,44,0.06)",
                      borderLeft: "3px solid #ab8c4a",
                      scrollMarginTop: 110,
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 mb-4">
                      <h3
                        className="font-serif font-semibold"
                        style={{ color: "#0e3c2c", fontSize: 24, lineHeight: 1.25 }}
                      >
                        {t.name}
                      </h3>
                      <p
                        style={{
                          color: "#ab8c4a",
                          fontSize: 14,
                          fontWeight: 700,
                          letterSpacing: "0.04em",
                          whiteSpace: "nowrap",
                        }}
                        className="md:text-right"
                      >
                        {t.priceLine}
                      </p>
                    </div>

                    <p
                      style={{ color: "#4a4a3a", fontSize: 16, lineHeight: 1.8 }}
                      className="mb-5"
                    >
                      {t.description}
                    </p>

                    <dl className="grid gap-3 mb-6">
                      {t.inclusions && <DetailRow label="Inclusions" value={t.inclusions} />}
                      {t.features && <DetailRow label="Special Features" value={t.features} />}
                      {t.techniques && <DetailRow label="Techniques Used" value={t.techniques} />}
                      {t.benefits && <DetailRow label="Key Benefits" value={t.benefits} />}
                      {t.products && <DetailRow label="Featured Products" value={t.products} />}
                      {t.recommended && <DetailRow label="Recommended For" value={t.recommended} />}
                      {t.bestFor && <DetailRow label="Best For" value={t.bestFor} />}
                    </dl>

                    <a
                      href={waBook(t.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center transition"
                      style={{
                        padding: "11px 22px",
                        fontSize: 13,
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        borderRadius: 3,
                        background: "#ab8c4a",
                        color: "#ffffff",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#8a6f31")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "#ab8c4a")}
                    >
                      Book This Treatment
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <Footer />
      <WhatsAppWidget />
    </main>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-1 md:gap-4">
      <dt
        style={{
          color: "#ab8c4a",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          paddingTop: 2,
        }}
      >
        {label}
      </dt>
      <dd style={{ color: "#1a1a1a", fontSize: 15, lineHeight: 1.7 }}>{value}</dd>
    </div>
  );
}
