import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { About } from "@/components/site/About";

// Below-the-fold sections — lazy loaded, each in its own Suspense boundary
// so they appear independently as soon as each chunk arrives (no head-of-line blocking).
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

const Fallback = ({ h = 400 }: { h?: number }) => <div style={{ minHeight: h }} />;

function Index() {
  // Warm up below-the-fold chunks right after first paint so they're ready by scroll.
  useEffect(() => {
    const idle =
      (window as unknown as { requestIdleCallback?: (cb: () => void) => void }).requestIdleCallback ??
      ((cb: () => void) => setTimeout(cb, 200));
    idle(() => {
      void import("@/components/site/Signature");
      void import("@/components/site/Services");
      void import("@/components/site/Testimonials");
      void import("@/components/site/Contact");
      void import("@/components/site/Footer");
      void import("@/components/site/WhatsAppWidget");
    });
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Suspense fallback={<Fallback h={500} />}>
        <Signature />
      </Suspense>
      <TrustStrip />
      <Suspense fallback={<Fallback h={600} />}>
        <Services />
      </Suspense>
      <Suspense fallback={<Fallback h={500} />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<Fallback h={500} />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<Fallback h={300} />}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <WhatsAppWidget />
      </Suspense>
    </main>
  );
}
