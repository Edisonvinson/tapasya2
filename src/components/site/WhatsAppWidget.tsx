import { useEffect, useState } from "react";
import { MessageCircle, X, ArrowLeft } from "lucide-react";
import { WHATSAPP_BASE } from "@/lib/data";

type QR = {
  q: string;
  reply: string;
  cta: { label: string; href: string };
};

const QUICK: QR[] = [
  {
    q: "💆 What treatments do you offer?",
    reply:
      "We offer 12+ treatments including Signature Massage, Hot Stone, Bamboo, Thai, Balinese, Swedish, Aromatherapy, Lomi Lomi, Deep Tissue, Foot Fix, Body Scrub & Facials.",
    cta: {
      label: "See All Treatments on WhatsApp →",
      href: `${WHATSAPP_BASE}?text=${encodeURIComponent("Hi, I'd like to know more about your treatments")}`,
    },
  },
  {
    q: "💰 What are your prices?",
    reply:
      "Our prices range from ₹1,500 (Foot Fix, 30 min) to ₹6,000 (Bamboo Massage, 90 min). Couples packages start at ₹9,500.",
    cta: {
      label: "Get Full Price List →",
      href: `${WHATSAPP_BASE}?text=${encodeURIComponent("Hi, can you share the full price list?")}`,
    },
  },
  {
    q: "⏰ What are your timings?",
    reply:
      "Please reach out to us directly and we'll confirm availability for your preferred time 🕐",
    cta: {
      label: "Ask on WhatsApp →",
      href: `${WHATSAPP_BASE}?text=${encodeURIComponent("Hi, what are your working hours?")}`,
    },
  },
  {
    q: "📍 Where are you located?",
    reply:
      "We're at Valiyakandam, Chelimada, Thekkady, Kumily — just 250m from the Elephant Camp and 850m from the Periyar boat counter. 📍",
    cta: {
      label: "Chat with Us →",
      href: `${WHATSAPP_BASE}?text=${encodeURIComponent("Hi, I need directions to Tapasya Spa")}`,
    },
  },
  {
    q: "📅 I want to book an appointment",
    reply: "Great! Tap below and we'll confirm your slot right away 🙌",
    cta: {
      label: "Book on WhatsApp →",
      href: `${WHATSAPP_BASE}?text=${encodeURIComponent("Hi, I'd like to book an appointment at Tapasya Spa")}`,
    },
  },
];

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [bounce, setBounce] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setBounce(true), 4000);
    const t2 = setTimeout(() => setBounce(false), 6000);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed z-50 bottom-0 right-0 md:bottom-24 md:right-6 w-full md:w-[380px] origin-bottom-right transition-all duration-300 ${
          open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="md:rounded-2xl rounded-t-2xl shadow-2xl overflow-hidden border flex flex-col max-h-[80vh]" style={{ backgroundColor: "#faf7f2", borderColor: "#b89b64" }}>
          <div className="p-4 flex items-center gap-3" style={{ backgroundColor: "#0e3c2c", color: "#ffffff" }}>
            <img src="/logo.png" alt="" className="h-[28px] w-auto" />
            <div className="flex-1">
              <p className="font-serif text-[16px] leading-tight text-white">Tapasya Spa & Wellness</p>
              <p className="text-[11px] text-white/75 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Typically replies instantly
              </p>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/75 hover:text-white" aria-label="Close">
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4" style={{ backgroundColor: "#faf7f2" }}>
            <div
              className="bg-white rounded-2xl rounded-tl-sm p-3.5 text-[14px] max-w-[85%] shadow-sm"
              style={{ color: "#1a1a1a", borderLeft: "3px solid #ab8c4a" }}
            >
              👋 Hi! Welcome to Tapasya Spa. How can we help you today?
            </div>

            {active === null ? (
              <div className="mt-4 space-y-2">
                {QUICK.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="block w-full text-left rounded-full px-4 py-2.5 text-[14px] border transition"
                    style={{ backgroundColor: "#f2ede4", borderColor: "#ab8c4a", color: "#0e3c2c" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#ab8c4a";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#f2ede4";
                      e.currentTarget.style.color = "#0e3c2c";
                    }}
                  >
                    {q.q}
                  </button>
                ))}
              </div>
            ) : (
              <>
                <div
                  className="mt-3 ml-auto rounded-2xl rounded-tr-sm p-3.5 text-[14px] max-w-[85%]"
                  style={{ backgroundColor: "rgba(171,140,74,0.15)", color: "#1a1a1a" }}
                >
                  {QUICK[active].q}
                </div>
                <div
                  className="mt-3 rounded-2xl rounded-tl-sm p-3.5 text-[14px] max-w-[88%] shadow-sm"
                  style={{ backgroundColor: "#f2ede4", color: "#1a1a1a", borderLeft: "3px solid #ab8c4a" }}
                >
                  {QUICK[active].reply}
                  <a
                    href={QUICK[active].cta.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block mt-3 text-center text-white text-[13px] font-semibold uppercase tracking-[0.06em] py-2.5 rounded-sm hover:opacity-90"
                    style={{ backgroundColor: "#ab8c4a" }}
                  >
                    {QUICK[active].cta.label}
                  </a>
                </div>
                <button
                  onClick={() => setActive(null)}
                  className="mt-3 inline-flex items-center gap-1 text-[13px] hover:underline"
                  style={{ color: "#7e7038" }}
                >
                  <ArrowLeft size={12} /> Back to questions
                </button>
              </>
            )}
          </div>

          <a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noreferrer"
            className="block bg-[#25D366] text-white text-center text-[14px] font-semibold py-3.5 hover:bg-[#20bd5a] transition"
          >
            Chat directly on WhatsApp →
          </a>
        </div>
      </div>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open WhatsApp chat"
        className={`fixed z-50 bottom-5 right-5 md:bottom-6 md:right-6 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.45)] hover:scale-105 transition-transform ${
          bounce ? "bounce-attn" : ""
        }`}
      >
        {open ? <X size={24} /> : <MessageCircle size={26} fill="currentColor" strokeWidth={0} />}
      </button>
    </>
  );
}
