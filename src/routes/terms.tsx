import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { NAP, SITE_NAME } from "@/lib/saias";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () => ({
    meta: [
      { title: `Terms | ${SITE_NAME}` },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function Terms() {
  return (
    <SiteShell active="Pages">
      <article className="ld-wrap ld-legal" data-slide="up">
        <h1>Terms</h1>
        <p>
          This website describes {SITE_NAME} at {NAP.street}, {NAP.city}. It is not an online store. Prices other than
          the published Tuesday Chicken King Special of $24.99 should be confirmed at the counter. Hours on this site
          follow the Yelp listing and may change.
        </p>
        <p>
          Callbacks from the form are requests, not reservations. Call {NAP.phone} to confirm chicken, catering, or a
          butcher cut.
        </p>
      </article>
    </SiteShell>
  );
}
