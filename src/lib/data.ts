export const WHATSAPP_NUMBER = "917511193223";
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export function waBook(treatment: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(`Hi, I'd like to book ${treatment} at Tapasya Spa`)}`;
}

export type Service = {
  name: string;
  desc: string;
  durations: { min: number; price: number }[];
};

export const SIGNATURE: Service[] = [
  {
    name: "Tapasya Signature Massage",
    desc: "A complete full-body therapy using aromatic oils and expert techniques to restore energy flow and improve circulation.",
    durations: [{ min: 60, price: 3750 }],
  },
  {
    name: "Sports Massage / Deep Tissue",
    desc: "Designed for muscle recovery and tension relief, using deep pressure techniques to improve mobility and reduce stiffness.",
    durations: [
      { min: 60, price: 2750 },
      { min: 90, price: 3200 },
    ],
  },
  {
    name: "Tapasya Balinese Massage",
    desc: "A unique blend of oil and dry massage focusing on pressure points to balance energy and rejuvenate the body.",
    durations: [
      { min: 60, price: 2900 },
      { min: 90, price: 3400 },
    ],
  },
  {
    name: "Facials",
    desc: "Rejuvenating skin treatments that cleanse, exfoliate, and hydrate — leaving your skin refreshed, glowing, and healthy.",
    durations: [{ min: 45, price: 2500 }],
  },
];

export const ALL_SERVICES: Service[] = [
  {
    name: "Tapasya Signature Massage",
    desc: "Aroma oil full-body massage with foot reflexology, head, face & shoulder massage. Includes foot scrub, shower & detox tea.",
    durations: [{ min: 60, price: 3750 }],
  },
  {
    name: "Sports Massage / Deep Tissue",
    desc: "Deep strokes for stiff muscles, joint pressure & stretches. Includes foot reflexology, shower & detox tea.",
    durations: [
      { min: 60, price: 2750 },
      { min: 90, price: 3200 },
    ],
  },
  {
    name: "Thai Traditional Massage",
    desc: "Dry stretch-based massage using passive yoga positions and acupressure. Includes foot ritual, foot care, shower & detox tea.",
    durations: [
      { min: 60, price: 3000 },
      { min: 90, price: 3500 },
    ],
  },
  {
    name: "Tapasya Body Scrub & Wrap",
    desc: "Sea salt or sugar scrub with aromatic essential oils. Exfoliates and hydrates for soft, smooth skin.",
    durations: [{ min: 60, price: 3000 }],
  },
  {
    name: "Swedish Massage",
    desc: "The foundational Western spa massage. Gentle, soothing, ideal for beginners.",
    durations: [
      { min: 60, price: 2600 },
      { min: 90, price: 3100 },
    ],
  },
  {
    name: "Tapasya Balinese",
    desc: "Medium-pressure oil and dry massage focusing on pressure points to balance energy.",
    durations: [
      { min: 60, price: 2900 },
      { min: 90, price: 3400 },
    ],
  },
  {
    name: "Tapasya Foot Fix",
    desc: "Foot reflexology targeting pressure points for digestive issues, circulation, and tired or swollen feet.",
    durations: [{ min: 30, price: 1500 }],
  },
  {
    name: "Hot Stone Massage",
    desc: "Heated stones placed on spine, chest, stomach, face, palms, and feet. Best suited for Kumily's cool climate.",
    durations: [
      { min: 60, price: 3500 },
      { min: 90, price: 4000 },
    ],
  },
  {
    name: "Bamboo Massage",
    desc: "Warm bamboo sticks of varying sizes with lotion and essential oil. A deep tissue and Swedish hybrid.",
    durations: [
      { min: 60, price: 5200 },
      { min: 90, price: 6000 },
    ],
  },
  {
    name: "Facials",
    desc: "D-TAN treatment for uneven skin tone, pigmentation and scars using O3+ Blueberry & Cranberry range.",
    durations: [{ min: 45, price: 2500 }],
  },
  {
    name: "Aromatherapy Massage",
    desc: "Gentle strokes with lavender, peppermint, and chamomile oils. Promotes relaxation, mood, pain relief, and circulation.",
    durations: [
      { min: 60, price: 2700 },
      { min: 90, price: 3100 },
    ],
  },
  {
    name: "Lomi Lomi Massage",
    desc: "Traditional Hawaiian bodywork with long, flowing ocean-wave strokes using coconut or macadamia oil.",
    durations: [
      { min: 60, price: 2900 },
      { min: 90, price: 3400 },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Louise Marie Letoublon",
    meta: "Local Guide · 12 reviews · 14 photos",
    when: "3 months ago",
    text: "It was one of the best massages I have received — and I live in Indonesia, just for reference! It was great from beginning to end. Extra clean, the therapist was very very good. It's very rare that I leave a review but this one deserves it. I was even able to shower after, and the lemongrass oil used for the massage smelled amazing. Thanks a lot!",
  },
  {
    name: "Uimma Uima",
    meta: "1 review · 2 photos",
    when: "9 months ago",
    text: "Best spa in Thekkady. Very clean and hygiene is maintained. Me and my girlfriends had a great time. We did facials and Swedish massage — very impressive. The staff are well trained and professional. Good hospitality.",
  },
  {
    name: "Ezhil PS",
    meta: "1 review",
    when: "2 months ago",
    text: "You have the best sports therapist, honestly. The therapist was really good. I give 5/5 — the massage was really amazing and I could finally get a peaceful sleep!",
  },
  {
    name: "SenthilKumar Thangaraj",
    meta: "Local Guide · 4 reviews · 15 photos",
    when: "1 month ago",
    text: "This is the original location and the service is very professional. The owner Mr. Alex explained all types of services very humbly, listened to our requirements, and suggested the right treatment based on our needs.",
  },
];

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=tapasya+spa+kumily#lrd=0x22a7d3b0d3f69317:0x7234e2c8baa099a4,1,,,,";
