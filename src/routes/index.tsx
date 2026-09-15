import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone } from "@phosphor-icons/react";
import type { CSSProperties } from "react";
import { SiteShell } from "@/components/site-shell";
import { LeadForm } from "@/components/lead-form";
import { FaqList } from "@/components/faq-list";
import { YelpBadge, YelpGrid } from "@/components/ld-yelp";
import { InternalLinks } from "@/components/internal-links";
import { SaiasHeroVideo } from "@/components/saias-hero-video";
import { seoGraph, seoHead } from "@/lib/seo";
import {
  CHICKEN_KING,
  DEPARTMENTS,
  FACTS,
  FAQS,
  HOURS,
  HOURS_NOTE,
  MAPS_HREF,
  MENU,
  NAP,
  OSM_EMBED,
  SITE_NAME,
} from "@/lib/saias";

export const Route = createFileRoute("/")({
  component: Home,
  head: seoHead,
});

function Home() {
  return (
    <SiteShell active="Home" graph={seoGraph()}>
      <Hero />
      <Ticker />
      <Intro />
      <King />
      <Butcher />
      <Kitchen />
      <Cow />
      <Reviews />
      <Visit />
      <InternalLinks />
    </SiteShell>
  );
}

function Hero() {
  return (
    <section id="top" className="sm-hero">
      <SaiasHeroVideo />
      <div className="ld-wrap sm-hero-copy">
        <p className="sm-stamp">Since 1977 · Florida Street</p>
        <p className="ld-kicker">Meat market in Mandeville</p>
        <h1>Saia's Super Meat Market</h1>
        <p className="ld-lead">
          Old-tyme meat market in Mandeville: butcher counter, famous fried chicken, po-boys, homemade chicken salad,
          wine and spirits. {NAP.street}. Call {NAP.phone}.
        </p>
        <div className="ld-actions">
          <a className="ld-btn" href={NAP.phoneHref}>
            Call {NAP.phone}
          </a>
          <a className="ld-btn ld-btn-ghost" href="/#book">
            Write the counter
          </a>
        </div>
        <div className="sm-y-hero">
          <YelpBadge />
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const line = "Fresh ground beef · Famous fried chicken · Po-boys · Chicken salad · Wine & spirits · #meatmeatsaias · ";
  return (
    <div className="ld-ticker" aria-hidden="true">
      <div className="ld-ticker-track">
        <span>
          {line}
          {line}
        </span>
        <span>
          {line}
          {line}
        </span>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <section className="sm-intro" id="butcher">
      <div className="ld-wrap sm-intro-grid">
        <div data-slide="left">
          <p className="ld-kicker">Mandeville since 1977</p>
          <h2>Butcher. Deli. Wine. One Florida Street floor.</h2>
          <p>
            {SITE_NAME} has been a Northshore staple since 1977: neighborhood grocery, full-service deli, butcher
            counter, and hot food kitchen. Family-owned. {NAP.street}, {NAP.city}, {NAP.region} {NAP.postal}.
          </p>
          <p>
            Old-tyme meat market with a serious wine and spirits wall. Fine meats, hand-crafted sausages, fresh ground
            beef never frozen, world-famous fried chicken, and po-boys.
          </p>
          <p>
            Call the counter at {NAP.phone}.
          </p>
          <ul className="sm-facts">
            {FACTS.map((f) => (
              <li key={f.k}>
                <b>{f.k}</b>
                <span>{f.v}</span>
              </li>
            ))}
          </ul>
        </div>
        <figure className="sm-figure" data-slide="right">
          <img
            src="/saias/steaks.jpg"
            alt="Hand-cut steaks at the meat market in Mandeville butcher counter"
            width={960}
            height={720}
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}

function King() {
  return (
    <section className="sm-king" id="chicken">
      <div className="ld-wrap sm-king-grid">
        <div data-slide="left">
          <p className="ld-kicker">Every Tuesday</p>
          <h2>{CHICKEN_KING.name}. {CHICKEN_KING.price}.</h2>
          <p className="sm-king-price">{CHICKEN_KING.price}</p>
          <p>
            Every Tuesday, {CHICKEN_KING.who} puts up the Chicken King Special: {CHICKEN_KING.items}, all for{" "}
            {CHICKEN_KING.price}. Call {NAP.phone} to hold a box.
          </p>
          <ul>
            <li>8 pieces mixed or dark fried chicken</li>
            <li>2 dinner rolls</li>
            <li>Large potato logs</li>
            <li>Small onion rings</li>
          </ul>
          <div className="ld-actions">
            <a className="ld-btn" href="/#book">
              Chicken King box
            </a>
            <a className="ld-btn" href={NAP.phoneHref}>
              Call for a box
            </a>
          </div>
        </div>
        <figure className="sm-figure" data-slide="right">
          <img
            src="/saias/chicken.jpg"
            alt="Famous fried chicken for the Chicken King Special in Mandeville"
            width={960}
            height={720}
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}

function Butcher() {
  return (
    <section className="sm-butcher">
      <div className="ld-wrap">
        <div data-slide="left">
          <p className="ld-kicker">Three counters</p>
          <h2>What the meat market in Mandeville actually sells.</h2>
          <p>
            Three counters on one Florida Street floor: the butcher, the hot kitchen, and wine & spirits. Famous fried
            chicken, homemade chicken salad, homemade sausage, chuck roasts, steaks, po-boys. Seafood dinners, boudin,
            crawfish pies, hushpuppies, and family-size chicken boxes too. The published Tuesday price is {CHICKEN_KING.price}.
          </p>
        </div>
        <div className="sm-depts">
          {DEPARTMENTS.map((d, i) => (
            <a
              key={d.slug}
              className="sm-dept"
              href={`/#${d.slug === "butcher" ? "butcher" : d.slug === "kitchen" ? "kitchen" : "visit"}`}
              data-slide="up"
              style={{ "--d": `${i * 90}ms` } as CSSProperties}
            >
              <span className="sm-shot">
                <img src={d.img} alt={d.imgAlt} width={960} height={600} loading="lazy" />
              </span>
              <div>
                <h3>{d.name}</h3>
                <p>{d.note}</p>
                <span className="sm-promo">Call {NAP.phone}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Kitchen() {
  return (
    <section className="sm-kitchen" id="kitchen">
      <div className="ld-wrap">
        <div data-slide="left">
          <p className="ld-kicker">Hot kitchen</p>
          <h2>Fried chicken, po-boys, chicken salad.</h2>
          <p>
            Lunch off the hot line: fried chicken, homemade chicken salad, po-boys. Roast beef, shrimp, catfish, and
            smoked sausage on French bread. Tuesday is Chicken King.
          </p>
        </div>
        <ul className="sm-plates">
          {MENU.map((m, i) => (
            <li key={m.slug} data-slide="up" style={{ "--d": `${i * 70}ms` } as CSSProperties}>
              <a href={m.slug === "chicken" ? "/#chicken" : "/#book"}>
                <span className="sm-shot">
                  <img src={m.img} alt={m.imgAlt} width={960} height={720} loading="lazy" />
                </span>
                <h3>{m.name}</h3>
                <p>{m.note}</p>
                <span className="sm-promo">{m.slug === "chicken" ? "Chicken King · $24.99" : `Call ${NAP.phone}`}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Cow() {
  return (
    <section className="sm-cow" id="cow">
      <div className="ld-wrap sm-cow-grid">
        <div data-slide="left">
          <p className="ld-kicker">The cow</p>
          <h2>A dozen feet of fiberglass on Florida Street since 1979.</h2>
          <p>
            The giant fiberglass cow has stood in the Saia's lot since 1979. Former owner Vincent Saia bought it from a
            defunct steakhouse chain. He told manager Natalie Lott the figure is a beef steer — about a dozen feet tall,
            on a trailer, so Florida Street can still find the shop.
          </p>
          <p>
            In May 2023 students rolled it to the Mandeville lakefront. Police brought it home the same day. The shop
            did not press charges. It had been taken once before, years earlier. The cow once wore a LARGE SHRIMP POBOY
            8.99 sign on its belly — a historical price, not today’s menu.
          </p>
        </div>
        <figure className="sm-figure" data-slide="right">
          <img
            src="/saias/cow.jpg"
            alt="Holstein cow statue associated with Saia's Super Meat Market in Mandeville"
            width={1200}
            height={674}
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="ld-reviews" id="reviews">
      <div className="ld-wrap" data-slide="up">
        <YelpGrid />
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="sm-visit" id="visit">
      <div className="ld-wrap">
        <div className="sm-visit-head" data-slide="up">
          <div>
            <p className="ld-kicker">Find the cow</p>
            <h2>2225 Florida Street</h2>
            <p>
              Between Oak Street and Carroll Street in {NAP.city}. {HOURS_NOTE}
            </p>
          </div>
          <a className="ld-btn" href={NAP.phoneHref}>
            <Phone className="size-4" weight="fill" /> {NAP.phone}
          </a>
        </div>

        <div className="sm-visit-grid">
          <div className="sm-visit-place">
            <div className="sm-map" data-slide="left">
              <iframe
                title="Map of Saia's Super Meat Market at 2225 Florida Street, Mandeville"
                src={OSM_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a className="sm-map-chip" href={MAPS_HREF} rel="noreferrer" target="_blank">
                <MapPin className="size-4" weight="fill" />
                {NAP.street} · Directions
              </a>
            </div>
            <div className="sm-hours-board" data-slide="up">
              <p className="sm-hours-title">Hours</p>
              <ul className="sm-hours">
                {HOURS.map((h) => (
                  <li key={h.days}>
                    <span>{h.days}</span>
                    <b>{h.time}</b>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="sm-form-card" id="book" data-slide="right">
            <p className="ld-kicker">Write the counter</p>
            <h2>Chicken, catering, or a cut.</h2>
            <p>Callback only — not an order. For Chicken King or a party tray, call {NAP.phone}.</p>
            <LeadForm />
          </div>
        </div>

        <div className="sm-visit-faq" data-slide="up">
          <p className="ld-kicker">Before you ride in</p>
          <FaqList items={FAQS} />
        </div>
      </div>
    </section>
  );
}
