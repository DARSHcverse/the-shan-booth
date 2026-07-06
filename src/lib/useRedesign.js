import { useEffect } from "react";

/**
 * Shared behaviour for the redesigned pages:
 *  - reveal-on-scroll (adds `.rd-in` to `.rd-reveal` elements as they enter view)
 *  - respects prefers-reduced-motion (shows everything immediately)
 * Scoped to the current page; no globals touched.
 */
export function useRedesignReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".rd-reveal"));
    if (els.length === 0) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("rd-in"));
      return;
    }

    els.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 70}ms`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("rd-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/**
 * White is the default. Navy is opt-in and remembered in localStorage.
 * Sets `data-rd-theme` on <html> so the scoped `.rd` tokens flip.
 * Returns [isDark, toggle].
 */
export function useRedesignTheme() {
  useEffect(() => {
    try {
      const saved = localStorage.getItem("rd-theme");
      if (saved === "dark") {
        document.documentElement.setAttribute("data-rd-theme", "dark");
      }
    } catch (_) {}
  }, []);

  const toggle = () => {
    const isDark =
      document.documentElement.getAttribute("data-rd-theme") === "dark";
    const next = isDark ? "light" : "dark";
    if (next === "dark") {
      document.documentElement.setAttribute("data-rd-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-rd-theme");
    }
    try {
      localStorage.setItem("rd-theme", next);
    } catch (_) {}
  };

  return toggle;
}
