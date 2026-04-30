import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";

// Below-the-fold sections — lazy loaded to shrink initial JS for mobile
const About = lazy(() => import("@/components/site/About").then((m) => ({ default: m.About })));
const Signature = lazy(() => import("@/components/site/Signature").then((m) => ({ default: m.Signature })));
const Services = lazy(() => import("@/components/site/Services").then((m) => ({ default: m.Services })));
const Testimonials = lazy(() => import("@/components/site/Testimonials").then((m) => ({ default: m.Testimonials })));
const Contact = lazy(() => import("@/components/site/Contact").then((m) => ({ default: m.Contact })));
const Footer = lazy(() => import("@/components/site/Footer").then((m) => ({ default: m.Footer })));
const WhatsAppWidget = lazy(() =>
  import("@/components/site/WhatsAppWidget").then((m) => ({ default: m.WhatsAppWidget })),
);

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
      <Suspense fallback={<div style={{ minHeight: 400 }} />}>
        <About />
        <Signature />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
        <WhatsAppWidget />
      </Suspense>
    </main>
  );
}
