import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { LeadForm } from "@/components/lead-form";
import { cityGraph, pageHead } from "@/lib/seo";
import { CITY_DESCRIPTION, CITY_TITLE, MAPS_HREF, NAP, SITE_NAME } from "@/lib/saias";

export const Route = createFileRoute("/mandeville")({
  component: Mandeville,
  head: () => pageHead(CITY_TITLE, CITY_DESCRIPTION, "/mandeville", "Meat market in Mandeville on Florida Street"),
});

function Mandeville() {
  return (
    <SiteShell active="Mandeville" graph={cityGraph()}>
      <article className="ld-inner">
        <div className="ld-wrap ld-legal" style={{ maxWidth: "46rem" }} data-slide="up">
          <p className="ld-kicker">St. Tammany Parish</p>
          <h1>Meat market in Mandeville</h1>
          <p>
            {SITE_NAME} is a meat market in Mandeville at {NAP.street}, {NAP.region} {NAP.postal}. Yahoo lists the cross
            streets as Oak Street and Carroll Street.
          </p>
          <p>
            Visit the Northshore: family-owned since 1977, old-school grocery with deli, butcher, and hot kitchen. The
            iconic cow statue in the lot is the Florida Street landmark. NOLA.com: about a dozen feet tall, on a
            trailer, bought in 1979.
          </p>
          <h2>Who the meat market in Mandeville serves</h2>
          <p>
            Facebook: “Proudly serving the Northshore since 1977.” This is one shop on Florida Street in Mandeville — not
            a second-location list.
          </p>
          <h2>What to get</h2>
          <p>
            Butcher: Instagram names ribeyes and filets; Facebook names chuck roasts, steaks, hand-crafted sausage, and
            ground beef never frozen. Kitchen: fried chicken, po-boys, homemade chicken salad. Wine and spirits on the
            same floor. Visit the Northshore also names seafood dinners, boudin, crawfish pies, and hushpuppies. Tuesday
            is Chicken King, $24.99.
          </p>
          <h2>Parking and access</h2>
          <p>
            Superpages: lot parking, free, wheelchair accessible. Apple Maps: parking lot, good for kids, Apple Pay and
            contactless. TripAdvisor lists takeout. There is no second Saia's Super Meat Market on this website.
          </p>
          <a className="sm-map" href={MAPS_HREF} rel="noreferrer" target="_blank">
            <img src="/saias/map.jpg" alt="Map of the meat market in Mandeville at 2225 Florida Street" width={1100} height={900} loading="lazy" />
            <span>{NAP.street}, {NAP.city} · directions</span>
          </a>
          <div className="ld-actions">
            <a className="ld-btn" href={NAP.phoneHref}>
              Call {NAP.phone}
            </a>
            <a className="ld-btn ld-btn-ghost" href="/#book">
              Write the counter
            </a>
          </div>
          <div id="book" style={{ marginTop: "2rem" }}>
            <LeadForm />
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
