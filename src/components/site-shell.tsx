import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { JsonLd } from "@/components/json-ld";
import { StickyCta } from "@/components/sticky-cta";
import { SlideMount } from "@/components/slide-in";
import { TiltMount } from "@/components/sm-tilt";

export type Active = "Home" | "Pages" | "About" | "Chicken King" | "Mandeville" | "Contact";

export function SiteShell({
  active,
  children,
  graph,
}: {
  active: Active;
  children: ReactNode;
  graph?: object;
}) {
  return (
    <div className="ld-page">
      {graph ? <JsonLd data={graph} /> : null}
      <SiteHeader active={active} />
      <SlideMount />
      <TiltMount />
      <main id="main">{children}</main>
      <SiteFooter />
      <StickyCta />
    </div>
  );
}
