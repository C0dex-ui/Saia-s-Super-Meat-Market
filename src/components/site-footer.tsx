import { MapPin, Phone } from "@phosphor-icons/react";
import { HOURS_SHORT, MENU, NAP, NAV, SITE_LEGAL, SITE_NAME, SOCIAL } from "@/lib/saias";

export function SiteFooter() {
  return (
    <footer className="ld-foot">
      <div className="ld-wrap ld-foot-grid">
        <div>
          <a href="/" className="ld-logo" aria-label="Saia's Super Meat Market">
            <img src="/saias/logo.jpg" alt="" width={56} height={56} />
            <span className="ld-logo-text">
              <b>Saia's</b>
              <span>Since 1977 · Mandeville</span>
            </span>
          </a>
          <p>
            Old-tyme meat market at {NAP.street}, {NAP.city}. Butcher counter, famous fried chicken, po-boys, homemade
            chicken salad, wine and spirits.
          </p>
        </div>
        <div>
          <p className="ld-foot-h">On this site</p>
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="ld-foot-h">The counter</p>
          <ul>
            {MENU.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <a href={s.slug === "chicken" ? "/chicken-king" : "/#kitchen"}>{s.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="ld-foot-h">Florida Street</p>
          <p>
            <MapPin className="size-4" weight="fill" /> {NAP.street}, {NAP.city}, {NAP.region} {NAP.postal}
          </p>
          <p>
            <Phone className="size-4" weight="fill" /> {NAP.phone}
          </p>
          <p>{HOURS_SHORT}.</p>
          <p>Facebook: proudly serving the Northshore since 1977.</p>
          <p className="ld-foot-social">
            {SOCIAL.map((s) => (
              <a key={s.href} href={s.href} rel="noreferrer" target="_blank">
                {s.label}
              </a>
            ))}
          </p>
        </div>
      </div>
      <div className="ld-wrap ld-copy">
        © {new Date().getFullYear()} {SITE_LEGAL}.{" "}
        <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a>
        {" · "}
        {SITE_NAME}
      </div>
    </footer>
  );
}
