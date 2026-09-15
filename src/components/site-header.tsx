import { useState } from "react";
import { List, Phone, X } from "@phosphor-icons/react";
import { HOURS_SHORT, NAP, NAV } from "@/lib/saias";

export function SiteHeader({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="ld-chrome">
      <div className="ld-topbar">
        <div className="ld-wrap ld-topbar-row">
          <span>{HOURS_SHORT}</span>
          <a href={NAP.phoneHref}>
            <Phone className="size-4" weight="fill" /> {NAP.phone}
          </a>
        </div>
      </div>
      <header className={`ld-head${open ? " is-open" : ""}`}>
        <div className="ld-wrap ld-head-row">
          <a href="/#top" className="ld-logo" aria-label="Saia's Super Meat Market" aria-current={active === "Home" ? "page" : undefined} onClick={close}>
            <img src="/saias/logo.jpg" alt="" width={56} height={56} />
            <span className="ld-logo-text">
              <b>Saia's</b>
              <span>Super Meat Market · Mandeville</span>
            </span>
          </a>
          <nav className="ld-nav" aria-label="Primary">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                aria-current={item.label === active ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a className="ld-btn" href="/#book">
            Call or write
          </a>
          <button
            type="button"
            className="ld-burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" weight="bold" /> : <List className="size-5" weight="bold" />}
          </button>
        </div>
        {open ? (
          <nav className="ld-wrap ld-nav-mobile" aria-label="Mobile">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} onClick={close}>
                {item.label}
              </a>
            ))}
            <a href="/#book" onClick={close}>
              Call or write
            </a>
          </nav>
        ) : null}
      </header>
    </div>
  );
}
