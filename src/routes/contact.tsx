import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { LeadForm } from "@/components/lead-form";
import { contactGraph, pageHead } from "@/lib/seo";
import { CONTACT_DESCRIPTION, CONTACT_TITLE, HOURS, HOURS_NOTE, MAPS_HREF, NAP, SOCIAL } from "@/lib/saias";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => pageHead(CONTACT_TITLE, CONTACT_DESCRIPTION, "/contact", "Contact Saia's Super Meat Market in Mandeville"),
});

function Contact() {
  return (
    <SiteShell active="Contact" graph={contactGraph()}>
      <article className="ld-inner">
        <div className="ld-wrap sm-visit-grid">
          <div data-slide="left">
            <p className="ld-kicker">Florida Street</p>
            <h1>Contact Saia's Super Meat Market</h1>
            <p>
              {NAP.street}, {NAP.city}, {NAP.region} {NAP.postal}. Call {NAP.phone}. Yelp still lists {NAP.phoneAlt}.
              This site uses the number Facebook and Instagram posts print.
            </p>
            <p>{HOURS_NOTE}</p>
            <ul className="sm-hours">
              {HOURS.map((h) => (
                <li key={h.days}>
                  <span>{h.days}</span>
                  <b>{h.time}</b>
                </li>
              ))}
            </ul>
            <p>
              {SOCIAL.map((s, i) => (
                <span key={s.href}>
                  {i ? " · " : null}
                  <a href={s.href} rel="noreferrer" target="_blank">
                    {s.label}
                  </a>
                </span>
              ))}
            </p>
            <a className="sm-map" href={MAPS_HREF} rel="noreferrer" target="_blank">
              <img src="/saias/map.jpg" alt="Map to Saia's Super Meat Market, 2225 Florida St, Mandeville" width={1100} height={900} loading="lazy" />
              <span>Directions</span>
            </a>
          </div>
          <div id="book" data-slide="right">
            <p className="ld-kicker">Callback</p>
            <h2>Write the counter</h2>
            <LeadForm />
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
