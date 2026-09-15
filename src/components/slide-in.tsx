import { useLayoutEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

function onScreen(el: Element) {
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight || 800;
  return r.height > 0 && r.bottom > 24 && r.top < vh - 24;
}

function rest(el: Element) {
  const done = () => {
    el.classList.add("is-rest");
    el.removeEventListener("animationend", done);
  };
  el.addEventListener("animationend", done);
}

function enter(el: Element) {
  if (el.classList.contains("is-in")) return;
  el.classList.add("is-in");
  rest(el);
}

export function SlideMount() {
  const key = useRouterState({ select: (s) => s.location.pathname });

  useLayoutEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-slide]"));
    if (!nodes.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((el) => {
        el.classList.add("is-in", "is-rest");
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          enter(entry.target);
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );

    for (const el of nodes) {
      if (el.classList.contains("is-in")) continue;
      if (onScreen(el)) enter(el);
      else io.observe(el);
    }

    const safety = window.setTimeout(() => {
      nodes.forEach((el) => enter(el));
    }, 2800);

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, [key]);

  return null;
}
