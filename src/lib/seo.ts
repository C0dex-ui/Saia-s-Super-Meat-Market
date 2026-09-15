import {
  ABOUT_DESCRIPTION,
  ABOUT_TITLE,
  CHICKEN_DESCRIPTION,
  CHICKEN_TITLE,
  CITY_DESCRIPTION,
  CITY_TITLE,
  CONTACT_DESCRIPTION,
  CONTACT_TITLE,
  DESCRIPTION,
  FAQS,
  MAPS_HREF,
  MENU,
  NAP,
  SITE_NAME,
  SITE_URL,
  SOCIAL,
  TITLE,
} from "@/lib/saias";

const url = `${SITE_URL}/`;
const image = `${SITE_URL}/saias/store.jpg`;
const logo = `${SITE_URL}/saias/logo.jpg`;

export function seoHead() {
  return pageHead(TITLE, DESCRIPTION, "/", "Saia's Super Meat Market cow statue and storefront in Mandeville");
}

export function pageHead(title: string, description: string, path: string, imageAlt: string, img = image) {
  const canonical = path === "/" ? url : `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index,follow" },
      { name: "author", content: SITE_NAME },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: img },
      { property: "og:image:alt", content: imageAlt },
      { property: "og:image:width", content: "1600" },
      { property: "og:image:height", content: "900" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: img },
      { name: "geo.region", content: "US-LA" },
      { name: "geo.placename", content: "Mandeville" },
      { name: "geo.position", content: `${NAP.lat};${NAP.lng}` },
      { name: "ICBM", content: `${NAP.lat}, ${NAP.lng}` },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: NAP.street,
  addressLocality: NAP.city,
  addressRegion: NAP.region,
  postalCode: NAP.postal,
  addressCountry: "US",
};

function orgAndBiz() {
  const orgId = `${SITE_URL}/#organization`;
  const bizId = `${SITE_URL}/#localbusiness`;
  const logoId = `${SITE_URL}/#logo`;
  return [
    {
      "@type": "Organization",
      "@id": orgId,
      name: SITE_NAME,
      url,
      logo: { "@type": "ImageObject", "@id": logoId, url: logo, contentUrl: logo },
      image: { "@id": logoId },
      telephone: NAP.phoneE164,
      address: postalAddress,
      sameAs: SOCIAL.map((s) => s.href),
    },
    {
      "@type": ["GroceryStore", "ButcherShop", "FoodEstablishment"],
      "@id": bizId,
      name: SITE_NAME,
      url,
      telephone: NAP.phoneE164,
      address: postalAddress,
      geo: { "@type": "GeoCoordinates", latitude: NAP.lat, longitude: NAP.lng },
      hasMap: MAPS_HREF,
      image: image,
      servesCuisine: ["American"],
      priceRange: "$",
      areaServed: { "@type": "City", name: "Mandeville" },
      parentOrganization: { "@id": orgId },
      paymentAccepted: "Cash, Credit Card",
      currenciesAccepted: "USD",
      foundingDate: "1977",
    },
  ];
}

function crumbs(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}${items[items.length - 1]?.path || "/"}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path === "/" ? url : `${SITE_URL}${item.path}`,
    })),
  };
}

export function seoGraph() {
  const orgId = `${SITE_URL}/#organization`;
  const bizId = `${SITE_URL}/#localbusiness`;
  const siteId = `${SITE_URL}/#website`;
  const pageId = `${SITE_URL}/#webpage`;
  const faqId = `${SITE_URL}/#faq`;
  const heroId = `${SITE_URL}/#hero-image`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      ...orgAndBiz(),
      {
        "@type": "WebSite",
        "@id": siteId,
        url,
        name: SITE_NAME,
        publisher: { "@id": orgId },
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url,
        name: TITLE,
        description: DESCRIPTION,
        isPartOf: { "@id": siteId },
        about: { "@id": bizId },
        primaryImageOfPage: { "@id": heroId },
      },
      {
        "@type": "ImageObject",
        "@id": heroId,
        url: image,
        contentUrl: image,
        caption: "Saia's Super Meat Market storefront on Florida Street in Mandeville",
      },
      crumbs([{ name: "Home", path: "/" }]),
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      ...MENU.map((m) => ({
        "@type": "MenuItem",
        "@id": `${SITE_URL}/#${m.slug}`,
        name: m.name,
        description: m.note,
        image: `${SITE_URL}${m.img}`,
      })),
    ],
  };
}

export function steakGraph() {
  return chickenGraph();
}

export function chickenGraph() {
  const bizId = `${SITE_URL}/#localbusiness`;
  const page = `${SITE_URL}/chicken-king`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...orgAndBiz(),
      {
        "@type": "WebPage",
        "@id": `${page}#webpage`,
        url: page,
        name: CHICKEN_TITLE,
        description: CHICKEN_DESCRIPTION,
        about: { "@id": bizId },
      },
      crumbs([
        { name: "Home", path: "/" },
        { name: "Chicken King", path: "/chicken-king" },
      ]),
      {
        "@type": "Service",
        "@id": `${page}#service`,
        name: "Chicken King Special",
        serviceType: "Fried chicken special",
        provider: { "@id": bizId },
        areaServed: { "@type": "City", name: "Mandeville" },
        description: CHICKEN_DESCRIPTION,
      },
    ],
  };
}

export function cityGraph() {
  const bizId = `${SITE_URL}/#localbusiness`;
  const page = `${SITE_URL}/mandeville`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...orgAndBiz(),
      {
        "@type": "WebPage",
        "@id": `${page}#webpage`,
        url: page,
        name: CITY_TITLE,
        description: CITY_DESCRIPTION,
        about: { "@id": bizId },
      },
      crumbs([
        { name: "Home", path: "/" },
        { name: "Mandeville", path: "/mandeville" },
      ]),
    ],
  };
}

export function aboutGraph() {
  const bizId = `${SITE_URL}/#localbusiness`;
  const page = `${SITE_URL}/about`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...orgAndBiz(),
      {
        "@type": "AboutPage",
        "@id": `${page}#webpage`,
        url: page,
        name: ABOUT_TITLE,
        description: ABOUT_DESCRIPTION,
        about: { "@id": bizId },
      },
      crumbs([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    ],
  };
}

export function contactGraph() {
  const bizId = `${SITE_URL}/#localbusiness`;
  const page = `${SITE_URL}/contact`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...orgAndBiz(),
      {
        "@type": "ContactPage",
        "@id": `${page}#webpage`,
        url: page,
        name: CONTACT_TITLE,
        description: CONTACT_DESCRIPTION,
        about: { "@id": bizId },
      },
      crumbs([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
    ],
  };
}
