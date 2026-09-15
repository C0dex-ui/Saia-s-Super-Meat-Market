import type { CSSProperties } from "react";
import { MENU, SOCIAL } from "@/lib/saias";

export function InternalLinks() {
  return (
    <nav aria-label="On this site" className="ld-links">
      <div className="ld-wrap ld-links-grid">
        <div data-slide="up">
          <p className="ld-kicker">The house</p>
          <ul>
            <li>
              <a href="/mandeville">Meat market in Mandeville</a>
            </li>
            <li>
              <a href="/about">Since 1977</a>
            </li>
            <li>
              <a href="/#reviews">Yelp notes</a>
            </li>
            <li>
              <a href="/contact">Call the counter</a>
            </li>
          </ul>
        </div>
        <div data-slide="up" style={{ "--d": "90ms" } as CSSProperties}>
          <p className="ld-kicker">The board</p>
          <ul>
            {MENU.map((s) => (
              <li key={s.slug}>
                <a href={s.slug === "chicken" ? "/chicken-king" : "/#kitchen"}>{s.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div data-slide="up" style={{ "--d": "180ms" } as CSSProperties}>
          <p className="ld-kicker">Florida Street</p>
          <ul>
            <li>
              <a href="/#visit">2225 Florida St</a>
            </li>
            <li>
              <a href="/#visit">Hours</a>
            </li>
            <li>
              <a href={SOCIAL[0].href} rel="noreferrer" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href={SOCIAL[2].href} rel="noreferrer" target="_blank">
                Yelp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
