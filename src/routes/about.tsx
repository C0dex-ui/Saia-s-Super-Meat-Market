import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { aboutGraph, pageHead } from "@/lib/seo";
import { ABOUT_DESCRIPTION, ABOUT_TITLE, FORMER_OWNER, MANAGER, NAP, SITE_NAME } from "@/lib/saias";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => pageHead(ABOUT_TITLE, ABOUT_DESCRIPTION, "/about", "About Saia's Super Meat Market since 1977"),
});

function About() {
  return (
    <SiteShell active="About" graph={aboutGraph()}>
      <article className="ld-inner">
        <div className="ld-wrap ld-legal" style={{ maxWidth: "46rem" }} data-slide="up">
          <p className="ld-kicker">Since 1977</p>
          <h1>About Saia's Super Meat Market</h1>
          <p>
            {SITE_NAME} has been a Northshore staple since 1977, per Visit the Northshore: neighborhood grocery, deli,
            butcher counter, and hot food kitchen. Family-owned. Address {NAP.street}, {NAP.city}, {NAP.region}{" "}
            {NAP.postal}. Superpages lists 42 years in business on a later snapshot — the tourism board still uses
            1977 as the open year.
          </p>
          <h2>The cow, 1979</h2>
          <p>
            NOLA.com, June 6, 2023: {FORMER_OWNER.name} bought the fiberglass cow from a defunct steakhouse chain in
            1979. He told manager {MANAGER.name} the figure is a beef steer. It has stood in the Florida Street lot
            since the late 1970s, about a dozen feet tall, on a trailer. In May 2023 students rolled it to the
            Mandeville lakefront. Police returned it the same day. The shop did not press charges. A Facebook post
            signed “Alan here” thanked the Saia's Cow Sightings group.
          </p>
          <h2>Who is named in public</h2>
          <p>
            {MANAGER.name} is named as manager in NOLA.com. {FORMER_OWNER.name} is named as former owner. Facebook
            posts from the shop have been signed Alan. D&B directories list a president; this page does not treat
            that as a verified owner bio. Uncle Willie is named on Instagram as the Chicken King.
          </p>
          <h2>What the shop says about itself</h2>
          <p>
            Facebook: fine meats, hand-crafted sausages, fresh ground beef never frozen, famous fried chicken, homemade
            chicken salad, po-boys, wine and spirits, catering finger sandwiches. Hashtags the shop uses include
            #saiassupermeatmarket and #meatmeatsaias.
          </p>
          <p>
            This website is not the shop’s Facebook. Hours, Tuesday boxes, and cancellations still post there. Call{" "}
            {NAP.phone}.
          </p>
          <div className="ld-actions">
            <a className="ld-btn" href="/#book">
              Write the counter
            </a>
            <a className="ld-btn ld-btn-ghost" href="/contact">
              Contact
            </a>
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
