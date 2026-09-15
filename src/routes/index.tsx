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
            Visit the Northshore lists {SITE_NAME} as a Northshore staple since 1977: old-school neighborhood grocery
            with a full-service deli, butcher counter, and hot food kitchen. Family-owned. {NAP.street}, {NAP.city},{" "}
            {NAP.region} {NAP.postal}.
          </p>
          <p>
            Instagram: “Old Tyme meat market with the BEST wine and spirits selection in Mandeville! World Famous Fried
            Chicken and Po-Boys!” Facebook: fine meats, hand-crafted sausages, fresh ground beef never frozen.
          </p>
          <p>
            The shop sits at {NAP.street}, {NAP.city}. Facebook and Instagram posts print {NAP.phone}. Superpages lists
            the same main number. Yelp still lists {NAP.phoneAlt}. Call the number on the shop’s own posts.
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
            Instagram: “Chicken King Special Tuesday.” {CHICKEN_KING.items}. {CHICKEN_KING.who} is named as the Chicken
            King. Facebook repeats the same $24.99 box. Call {NAP.phone} to hold an order.
          </p>
          <ul>
            <li>8 pieces mixed or dark fried chicken</li>
            <li>2 dinner rolls</li>
            <li>Large potato logs</li>
            <li>Small onion rings</li>
          </ul>
          <div className="ld-actions">
            <a className="ld-btn" href="/chicken-king">
              Chicken King page
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
            Facebook names the standing board: famous fried chicken, homemade chicken salad, homemade sausage, fresh-cut
            chuck roasts, steaks. Tourism copy adds seafood dinners, boudin, crawfish pies, hushpuppies, and family-size
            chicken boxes. This page does not invent a price list beyond the Tuesday $24.99 box the shop publishes.
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
            Facebook lunch posts: fried chicken, homemade chicken salad, po-boys. TripAdvisor (Saia's Deli, 33 reviews,
            4.3) calls it part butcher, part liquor store, part takeout, and names shrimp, roast beef, catfish, and smoked
            sausage po-boys plus fried chicken. Yelp reviewers in 2026 still lead with roast beef po-boys and the Chicken
            King.
          </p>
        </div>
        <ul className="sm-plates">
          {MENU.map((m, i) => (
            <li key={m.slug} data-slide="up" style={{ "--d": `${i * 70}ms` } as CSSProperties}>
              <a href={m.slug === "chicken" ? "/chicken-king" : "/#book"}>
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
            NOLA.com, May–June 2023: the giant fiberglass cow in the Saia's parking lot was rolled to the Mandeville
            lakefront in a school-year prank and returned the same day. Manager Natalie Lott said the former owner
            bought it from a defunct steakhouse chain in 1979. Vincent Saia told her the figure is a beef steer. It had
            been taken once before, years earlier.
          </p>
          <p>
            The St. Tammany Parish Sheriff’s Office: “this ain't her first rodeo.” A Facebook group, Saia's Cow
            Sightings, filled with cut-and-paste photos. A shop post signed “Alan here” thanked Jessie Whiteman for
            starting the group. The cow once wore a LARGE SHRIMP POBOY 8.99 sign on its belly — a historical price, not
            a current menu.
          </p>
          <p>
            {SITE_NAME} did not press charges. The statue sits on a trailer in the lot so Florida Street traffic can
            still find the meat market in Mandeville.
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
            <a className="sm-map" href={MAPS_HREF} rel="noreferrer" target="_blank" data-slide="left">
              <img
                src="/saias/map.jpg"
                alt="OpenStreetMap of Saia's Super Meat Market on Florida Street in Mandeville"
                width={768}
                height={768}
                loading="lazy"
              />
              <span className="sm-map-chip">
                <MapPin className="size-4" weight="fill" />
                {NAP.street} · Directions
              </span>
            </a>
            <div className="sm-hours-board" data-slide="up">
              <p className="sm-hours-title">Hours · Yelp listing</p>
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
