import { useEffect, useRef, useState } from "react";

const CLIP = "/saias/hero.mp4";
const POSTER = "/saias/store.jpg";

export function SaiasHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduce(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const el = videoRef.current;
    if (!el) return;
    const play = () => {
      const p = el.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };
    el.addEventListener("loadeddata", play);
    el.addEventListener("canplay", play);
    play();
    const unlock = () => play();
    document.addEventListener("click", unlock, { once: true });
    document.addEventListener("touchstart", unlock, { once: true });
    return () => {
      el.removeEventListener("loadeddata", play);
      el.removeEventListener("canplay", play);
      document.removeEventListener("click", unlock);
      document.removeEventListener("touchstart", unlock);
    };
  }, [reduce]);

  return (
    <>
      <img
        src={POSTER}
        alt="Saia's Super Meat Market storefront on Florida Street in Mandeville with the shop truck in the lot"
        width={960}
        height={520}
        fetchPriority="high"
      />
      {reduce ? null : (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={POSTER}
          aria-hidden="true"
        >
          <source src={CLIP} type="video/mp4" />
        </video>
      )}
    </>
  );
}
