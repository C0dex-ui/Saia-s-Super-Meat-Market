import { NAP } from "@/lib/saias";

export function StickyCta() {
  return (
    <div className="ld-sticky lg:hidden">
      <a href={NAP.phoneHref}>Call {NAP.phone}</a>
    </div>
  );
}
