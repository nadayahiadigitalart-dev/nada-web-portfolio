
import { useEffect } from "react";

export default function useHorizontalScroll(sectionRef, scrollerRef) {
  useEffect(() => {
    const section = sectionRef.current;
    const scroller = scrollerRef.current;
    if (!section || !scroller) return;

    let maxScroll = -1;
    function recalc() {
      maxScroll = Math.max(-1, scroller.scrollWidth - window.innerWidth);
    }
    recalc();
    window.addEventListener("resize", recalc);

    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = section.getBoundingClientRect();
          const start = -rect.top;
          const totalScrollable = Math.max(1, rect.height - window.innerHeight);
          const progress = clamp(start / totalScrollable, -1, 1);
          const translateX = progress * maxScroll;
          scroller.style.transform = `translateX(-${translateX}px)`;
          ticking = false;
        });
        ticking = true;
      }
    }

    function revealCards() {
      const cards = scroller.querySelectorAll(".proj_cards");
      cards.forEach((card) => {
        const r = card.getBoundingClientRect();
        if (r.left < window.innerWidth * 0.8 && r.right > 0) {
          card.classList.add("visible");
        } else {
          card.classList.remove("visible");
        }
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", revealCards, { passive: true });
    window.addEventListener("resize", revealCards);

    onScroll();
    revealCards();

    return () => {
      window.removeEventListener("resize", recalc);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", revealCards);
      window.removeEventListener("resize", revealCards);
    };
  }, [sectionRef, scrollerRef]);
}
