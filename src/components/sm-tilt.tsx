import { useLayoutEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

const CARDS =
  ".sm-dept, .sm-plates a, .sm-figure, .sm-hours-board, .ld-ti-card, .sm-facts li";
const BUTTONS = ".ld-btn, .ld-btn-ghost, .ld-sticky a";
const CHIPS = ".ld-logo, .ld-y-badge, .ld-nav a, .ld-head .ld-btn";

function maxFor(el: Element) {
  if (el.matches(BUTTONS)) return 9;
  if (el.matches(CHIPS)) return 6;
  return 12;
}

export function TiltMount() {
  const key = useRouterState({ select: (s) => s.location.pathname });

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const nodes = Array.from(document.querySelectorAll<HTMLElement>(`${CARDS}, ${BUTTONS}, ${CHIPS}`)).filter(
      (el) => !el.closest(".sm-map, .sm-form-card, .ld-faq-item, .sm-visit-faq"),
    );
    const clean: Array<() => void> = [];

    for (const el of nodes) {
      const max = maxFor(el);
      let frame = 0;
      let live = false;

      const reset = () => {
        live = false;
        el.classList.remove("is-tilting");
        el.style.setProperty("--tilt-x", "0deg");
        el.style.setProperty("--tilt-y", "0deg");
        el.style.setProperty("--shine-x", "50%");
        el.style.setProperty("--shine-y", "20%");
        el.style.setProperty("--lift", "0px");
      };

      const move = (e: PointerEvent) => {
        const x = e.clientX;
        const y = e.clientY;
        live = true;
        el.classList.add("is-tilting");
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          if (!live) return;
          const r = el.getBoundingClientRect();
          if (!r.width || !r.height) return;
          const px = (x - r.left) / r.width;
          const py = (y - r.top) / r.height;
          el.style.setProperty("--tilt-x", `${((0.5 - py) * max * 2).toFixed(2)}deg`);
          el.style.setProperty("--tilt-y", `${((px - 0.5) * max * 2).toFixed(2)}deg`);
          el.style.setProperty("--shine-x", `${(px * 100).toFixed(1)}%`);
          el.style.setProperty("--shine-y", `${(py * 100).toFixed(1)}%`);
          el.style.setProperty("--lift", "-10px");
        });
      };

      el.setAttribute("data-tilt-on", "");
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", reset);
      el.addEventListener("pointercancel", reset);
      clean.push(() => {
        cancelAnimationFrame(frame);
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerleave", reset);
        el.removeEventListener("pointercancel", reset);
        el.removeAttribute("data-tilt-on");
        reset();
      });
    }

    return () => clean.forEach((fn) => fn());
  }, [key]);

  return null;
}
