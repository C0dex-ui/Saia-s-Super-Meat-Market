import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { LeadForm } from "@/components/lead-form";
import { chickenGraph, pageHead } from "@/lib/seo";
import { CHICKEN_DESCRIPTION, CHICKEN_KING, CHICKEN_TITLE, NAP, SITE_NAME } from "@/lib/saias";

export const Route = createFileRoute("/chicken-king")({
  component: ChickenKing,
  head: () => pageHead(CHICKEN_TITLE, CHICKEN_DESCRIPTION, "/chicken-king", "Chicken King fried chicken in Mandeville"),
});

function ChickenKing() {
  return (
    <SiteShell active="Chicken King" graph={chickenGraph()}>
      <article className="ld-inner">
        <div className="ld-wrap ld-legal" style={{ maxWidth: "46rem" }} data-slide="up">
          <p className="ld-kicker">Tuesday at the meat market in Mandeville</p>
          <h1>Chicken King fried chicken in Mandeville</h1>
          <p>
            {SITE_NAME} posts a Tuesday Chicken King Special: {CHICKEN_KING.price} for {CHICKEN_KING.items}. Instagram
            names {CHICKEN_KING.who} as the Chicken King. Facebook repeats the same box and the same price. Call{" "}
            {NAP.phone} to hold pieces.
          </p>
          <figure className="sm-figure" style={{ minHeight: "18rem", margin: "1.4rem 0" }}>
            <img
              src="/saias/chicken.jpg"
              alt="Famous fried chicken from Saia's Super Meat Market in Mandeville"
              width={960}
              height={720}
              loading="lazy"
            />
          </figure>
          <h2>What is in the $24.99 box</h2>
          <p>
            Instagram, in the Chicken King Tuesday post: 8 piece mixed or dark fried chicken, 2 dinner rolls, large
            potato logs, small onion rings. All for {CHICKEN_KING.price}. Facebook and Instagram also post fried chicken
            on other days — Friday posts name Uncle Willie’s fried chicken. The $24.99 bundle is the Tuesday special the
            shop publishes.
          </p>
          <h2>Famous fried chicken, not a secret recipe page</h2>
          <p>
            A January Facebook post quoted a longtime customer: “Just remember — if the Colonel had Saia's fried chicken
            recipe, he would’ve been a General!” That is their copy, not a claim invented here. Yelp 2026 notes from
            Joana Marie A. and K L. name hot, freshly fried chicken. Jaime G. names the Chicken King in the same month.
          </p>
          <h2>Potato logs and onion rings</h2>
          <p>
            The Tuesday box includes large potato logs and small onion rings. Facebook has also named those sides next
            to the fried chicken. Visit the Northshore lists family-size chicken boxes for gatherings and camp trips.
            Party size is a phone call, not an online cart.
          </p>
          <h2>How to order</h2>
          <p>
            Walk the counter at {NAP.street}, {NAP.city}, or call {NAP.phone}. Catering posts also use that number.
            Superpages lists cards; confirm at the register. Hours are the Yelp table on the homepage — Facebook does
            not publish a kitchen-hours grid.
          </p>
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
