import { SiteShell } from "@/components/site-shell";
import { SITE_SHORT } from "@/lib/saias";

export function NotFoundPage() {
  return (
    <SiteShell active="Home">
      <section className="ld-wrap ld-legal" style={{ textAlign: "center", marginInline: "auto" }}>
        <p className="ld-kicker">404</p>
        <h1>Page not found</h1>
        <p>That address is not on this {SITE_SHORT} homepage.</p>
        <div className="ld-actions" style={{ justifyContent: "center" }}>
          <a href="/#top" className="ld-btn ld-btn-ghost">
            Home
          </a>
          <a href="/#book" className="ld-btn">
            Call or write
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
