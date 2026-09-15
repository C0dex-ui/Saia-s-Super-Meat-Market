import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { NAP, SITE_NAME } from "@/lib/saias";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({
    meta: [
      { title: `Privacy Policy | ${SITE_NAME}` },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function Privacy() {
  return (
    <SiteShell active="Pages">
      <article className="ld-wrap ld-legal" data-slide="up">
        <h1>Privacy Policy</h1>
        <p>
          {SITE_NAME} at {NAP.street}, {NAP.city}, {NAP.region} {NAP.postal} does not operate a customer portal on this
          website. The callback form stores nothing on a server. Call {NAP.phone} to discuss records held by the shop.
          Do not send card numbers through the form.
        </p>
        <p>This page does not collect analytics cookies beyond what the host injects. We do not sell email lists.</p>
      </article>
    </SiteShell>
  );
}
