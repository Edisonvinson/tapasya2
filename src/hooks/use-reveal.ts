import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If section is already in (or near) the viewport on mount, reveal immediately —
    // avoids the "section appears blank for a beat" feel on fast scroll / late mount.
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || 800;
    if (rect.top < vh * 1.1) {
      el.classList.add("in");
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "200px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}
