import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { About } from "@/components/site/About";
import { Signature } from "@/components/site/Signature";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppWidget } from "@/components/site/WhatsAppWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tapasya Spa & Wellness — Kumily, Thekkady" },
      {
        name: "description",
        content:
          "Tapasya Spa & Wellness in Kumily, Thekkady — Western, Ayurvedic & Asian massage therapies. Hot stone, bamboo, Balinese, Thai, facials & more. Book on WhatsApp.",
      },
      { property: "og:title", content: "Tapasya Spa & Wellness — Kumily, Thekkady" },
      {
        property: "og:description",
        content:
          "Kumily's trusted spa for Western, Ayurvedic & Asian therapies. Steps from the Elephant Camp & Periyar boat counter.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <Signature />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
