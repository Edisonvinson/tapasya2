import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppWidget } from "@/components/site/WhatsAppWidget";
import { WHATSAPP_BASE } from "@/lib/data";
import { Phone, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Tapasya Spa & Wellness, Kumily" },
      {
        name: "description",
        content:
          "Learn about Tapasya Spa & Wellness in Kumily, Thekkady — a wellness destination offering Western, Ayurvedic and Asian massage therapies in a calm, professional setting.",
      },
      { property: "og:title", content: "About Us — Tapasya Spa & Wellness" },
      {
        property: "og:description",
        content:
          "A wellness destination in Kumily offering Western, Ayurvedic and Asian therapies for travelers and guests.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section
        style={{ backgroundColor: "#00846d" }}
        className="pt-28 pb-16 md:pt-36 md:pb-20 text-white"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <span
            className="eyebrow"
            style={{ color: "#b89b64", letterSpacing: "0.2em", fontSize: 13 }}
          >
            About Tapasya
          </span>
          <h1
            className="font-serif font-bold mt-3"
            style={{ color: "#ffffff", fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.15 }}
          >
            A Spa Built Around Your Comfort
          </h1>
          <p
            className="mt-5 mx-auto"
            style={{ color: "#d4c9b0", fontSize: 17, lineHeight: 1.8, maxWidth: 720 }}
          >
            Explore your inner world and find true calm at Kumily's trusted wellness destination.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="eyebrow" style={{ color: "#ab8c4a", letterSpacing: "0.2em", fontSize: 13 }}>
              Our Story
            </span>
            <h2
              className="font-serif font-bold mt-3"
              style={{ color: "#00846d", fontSize: "clamp(28px, 3.8vw, 44px)", lineHeight: 1.15 }}
            >
              Where Wellness Meets the Western Ghats
            </h2>
          </div>
          <div className="space-y-5 text-[16px] leading-[1.8]" style={{ color: "#3a3a3a" }}>
            <p>
              Tapasya Ayurvedic Spa is a wellness destination in Kumily offering a blend of Western,
              Ayurvedic, and Asian massage therapies. Created with a focus on relaxation and care,
              Tapasya provides a space where travelers and guests can step away from stress and
              experience true comfort.
            </p>
            <p>
              We welcome individuals, couples, and tourists looking for a reliable and professional
              spa experience during their stay in Thekkady. Every treatment is guided by experienced
              therapists who tailor each session to your needs — whether you're seeking deep muscle
              recovery after a trek, gentle restoration after a long journey, or simply a moment of
              quiet for yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#f5f1ea" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <span className="eyebrow" style={{ color: "#ab8c4a", letterSpacing: "0.2em", fontSize: 13 }}>
              What Guides Us
            </span>
            <h2
              className="font-serif font-bold mt-2"
              style={{ color: "#00846d", fontSize: "clamp(26px, 3.5vw, 40px)", lineHeight: 1.2 }}
            >
              Our Promise to Every Guest
            </h2>
            <div aria-hidden className="mx-auto mt-5" style={{ width: 56, height: 2, backgroundColor: "#ab8c4a" }} />
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Authentic Therapies",
                body: "From traditional Thai stretches to Hawaiian Lomi Lomi and warm bamboo therapy — every technique is delivered the way it was meant to be.",
              },
              {
                title: "Trained Therapists",
                body: "Our team is trained across multiple disciplines to read your body's needs and adapt every session for the best possible outcome.",
              },
              {
                title: "A Calm Sanctuary",
                body: "Quiet rooms, premium oils, and clean facilities — designed to help you slow down the moment you walk in.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-white p-7"
                style={{
                  borderLeft: "3px solid #ab8c4a",
                  boxShadow: "0 2px 16px rgba(14,60,44,0.06)",
                  borderRadius: 4,
                }}
              >
                <h3
                  className="font-serif font-semibold"
                  style={{ color: "#00846d", fontSize: 20, lineHeight: 1.3 }}
                >
                  {v.title}
                </h3>
                <p className="mt-3" style={{ color: "#4a4a3a", fontSize: 15, lineHeight: 1.75 }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit / Contact */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <span className="eyebrow" style={{ color: "#ab8c4a", letterSpacing: "0.2em", fontSize: 13 }}>
              Visit Us
            </span>
            <h2
              className="font-serif font-bold mt-2"
              style={{ color: "#00846d", fontSize: "clamp(26px, 3.5vw, 40px)", lineHeight: 1.2 }}
            >
              Come See Us in Kumily
            </h2>
            <div aria-hidden className="mx-auto mt-5" style={{ width: 56, height: 2, backgroundColor: "#ab8c4a" }} />
          </div>

          <ul className="grid md:grid-cols-3 gap-6 md:gap-8">
            <li className="flex gap-4 items-start p-6" style={{ backgroundColor: "#faf7f2", borderRadius: 6 }}>
              <MapPin className="shrink-0 mt-1" size={22} strokeWidth={1.5} style={{ color: "#c6a46c" }} />
              <div>
                <p style={{ color: "#1a1a1a", fontSize: 15, lineHeight: 1.7 }}>
                  J575+5J7, Valiyakandam, Chelimada,
                  <br /> Thekkady, Kumily, Kerala 685509
                </p>
                <p className="mt-2" style={{ color: "#6b6b66", fontSize: 13 }}>
                  250m from Elephant Camp · 850m from Periyar Boat Ticket Counter
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start p-6" style={{ backgroundColor: "#faf7f2", borderRadius: 6 }}>
              <Phone className="shrink-0 mt-1" size={22} strokeWidth={1.5} style={{ color: "#c6a46c" }} />
              <div>
                <p style={{ color: "#6b6b66", fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600 }}>
                  Call
                </p>
                <a href="tel:+917511193223" className="block mt-1" style={{ color: "#1a1a1a", fontSize: 16 }}>
                  +91 75111 93223
                </a>
              </div>
            </li>
            <li className="flex gap-4 items-start p-6" style={{ backgroundColor: "#faf7f2", borderRadius: 6 }}>
              <Mail className="shrink-0 mt-1" size={22} strokeWidth={1.5} style={{ color: "#c6a46c" }} />
              <div>
                <p style={{ color: "#6b6b66", fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600 }}>
                  Email
                </p>
                <a
                  href="mailto:tapasyawellnessspa@gmail.com"
                  className="block mt-1 break-all"
                  style={{ color: "#1a1a1a", fontSize: 16 }}
                >
                  tapasyawellnessspa@gmail.com
                </a>
              </div>
            </li>
          </ul>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="tel:+917511193223"
              className="inline-flex items-center px-7 py-3.5 text-white text-[13px] font-semibold uppercase tracking-[0.05em] hover:opacity-90 transition"
              style={{ backgroundColor: "#00846d", borderRadius: 999 }}
            >
              Call Now
            </a>
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-7 py-3.5 text-white text-[13px] font-semibold uppercase tracking-[0.05em] hover:opacity-90 transition"
              style={{ backgroundColor: "#c6a46c", borderRadius: 999 }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
