export const SITE_NAME = "Saia's Super Meat Market";
export const SITE_SHORT = "Saia's";
export const SITE_LEGAL = "Saia's Super Meat Market";
export const SITE_URL = "https://www.saiassupermeatmarket.com";
export const TITLE = "Saia's Super Meat Market | Mandeville Meat & Fried Chicken";
export const DESCRIPTION =
  "Meat market in Mandeville since 1977. Fresh-cut beef, famous fried chicken, po-boys, homemade chicken salad, wine. 2225 Florida St. (985) 626-9724.";

export const CHICKEN_TITLE = "Chicken King fried chicken in Mandeville | Saia's";
export const CHICKEN_DESCRIPTION =
  "Tuesday Chicken King Special at Saia's Super Meat Market: 8 pieces of fried chicken, rolls, potato logs, onion rings, $24.99. 2225 Florida St, Mandeville. (985) 626-9724.";

export const CITY_TITLE = "Meat market in Mandeville | Saia's Super Meat Market";
export const CITY_DESCRIPTION =
  "Old-tyme meat market in Mandeville on Florida Street: butcher counter, fried chicken, po-boys, chicken salad, wine. Open since 1977. Call (985) 626-9724.";

export const ABOUT_TITLE = "About Saia's Super Meat Market | Mandeville since 1977";
export const ABOUT_DESCRIPTION =
  "Saia's Super Meat Market has been a Northshore staple since 1977. Family-owned butcher, deli, and wine shop at 2225 Florida St, Mandeville. Famous cow statue since 1979.";

export const CONTACT_TITLE = "Contact Saia's Super Meat Market | Mandeville butcher";
export const CONTACT_DESCRIPTION =
  "Call Saia's Super Meat Market at (985) 626-9724. 2225 Florida Street, Mandeville, LA 70448. Catering, Chicken King, butcher counter. Facebook @SaiasMeatMarket.";

export const NAP = {
  name: SITE_NAME,
  street: "2225 Florida St",
  city: "Mandeville",
  region: "LA",
  postal: "70448",
  phone: "(985) 626-9724",
  phoneHref: "tel:+19856269724",
  phoneE164: "+19856269724",
  phoneAlt: "(985) 626-3877",
  lat: 30.3658348,
  lng: -90.0651015,
} as const;

export const MAPS_HREF =
  "https://www.google.com/maps/search/?api=1&query=Saia%27s+Super+Meat+Market+2225+Florida+St+Mandeville+LA+70448";

export const OSM_HREF = "https://www.openstreetmap.org/?mlat=30.3658348&mlon=-90.0651015#map=18/30.36583/-90.06510";

export const MANAGER = {
  name: "Natalie Lott",
  role: "Manager",
  note: "Named as Saia's manager in NOLA.com coverage of the 2023 cow statue recovery.",
} as const;

export const FORMER_OWNER = {
  name: "Vincent Saia",
  note: "Former owner. NOLA.com reports he bought the cow from a defunct steakhouse chain in 1979 and told Lott it is a beef steer.",
} as const;

export const SOCIAL = [
  { label: "Facebook", href: "https://www.facebook.com/SaiasMeatMarket" },
  { label: "Instagram", href: "https://www.instagram.com/saias_super_meat_market/" },
  { label: "Yelp", href: "https://www.yelp.com/biz/saias-super-meat-market-mandeville" },
] as const;

export const YELP_REVIEWS = {
  rating: "3.7",
  count: "72",
  href: "https://www.yelp.com/biz/saias-super-meat-market-mandeville",
} as const;

export const NAV = [
  { label: "Butcher", href: "/#butcher" },
  { label: "Chicken King", href: "/chicken-king" },
  { label: "Kitchen", href: "/#kitchen" },
  { label: "The cow", href: "/#cow" },
  { label: "Mandeville", href: "/mandeville" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const HOURS = [
  { days: "Monday", time: "8:00am – 7:00pm", opens: "08:00", closes: "19:00" },
  { days: "Tuesday", time: "8:00am – 7:00pm", opens: "08:00", closes: "19:00" },
  { days: "Wednesday", time: "8:00am – 6:00pm", opens: "08:00", closes: "18:00" },
  { days: "Thursday", time: "8:00am – 7:00pm", opens: "08:00", closes: "19:00" },
  { days: "Friday", time: "8:00am – 7:00pm", opens: "08:00", closes: "19:00" },
  { days: "Saturday", time: "8:00am – 6:00pm", opens: "08:00", closes: "18:00" },
  { days: "Sunday", time: "8:00am – 6:00pm", opens: "08:00", closes: "18:00" },
] as const;

export const HOURS_SHORT = "Yelp lists 8am open, most evenings to 7, Wed/Sat/Sun to 6";
export const HOURS_NOTE =
  "Hours below are the Yelp table. Apple Maps and TripAdvisor list 8pm close on some days. Facebook does not post hours — call the day you come.";

export const AREAS = ["Mandeville"] as const;

export const CHICKEN_KING = {
  name: "Chicken King Special",
  day: "Tuesday",
  price: "$24.99",
  items: "8 pieces mixed or dark fried chicken, 2 dinner rolls, large potato logs, small onion rings",
  who: "Uncle Willie",
} as const;

export const DEPARTMENTS = [
  {
    slug: "butcher",
    name: "Butcher counter",
    img: "/saias/steaks.jpg",
    imgAlt: "Fresh-cut steaks on butcher paper at a meat market in Mandeville",
    note: "Facebook: fine meats, hand-crafted sausages, fresh ground beef made multiple times a day and never frozen. Instagram names ribeyes and filets. Facebook names chuck roasts and steaks.",
  },
  {
    slug: "kitchen",
    name: "Hot kitchen & deli",
    img: "/saias/chicken.jpg",
    imgAlt: "Famous fried chicken from Saia's Super Meat Market in Mandeville",
    note: "Famous fried chicken, homemade chicken salad, po-boys, potato logs, onion rings. Visit the Northshore also names seafood dinners, boudin, crawfish pies, hushpuppies.",
  },
  {
    slug: "wine",
    name: "Wine & spirits",
    img: "/saias/wine.jpg",
    imgAlt: "Wine and spirits shelves at Saia's Super Meat Market in Mandeville",
    note: "Instagram bio: old-tyme meat market with the best wine and spirits selection in Mandeville. Grocery and pantry on the same floor.",
  },
] as const;

export const MENU = [
  {
    slug: "chicken",
    name: "Famous fried chicken",
    img: "/saias/chicken.jpg",
    imgAlt: "Crispy fried chicken from Saia's Super Meat Market",
    note: "Instagram bio: World Famous Fried Chicken. Facebook posts it as a standing kitchen item. Tuesday Chicken King Special is $24.99.",
  },
  {
    slug: "poboy",
    name: "Po-boys",
    img: "/saias/poboy.jpg",
    imgAlt: "Roast beef po-boy from a Mandeville meat market",
    note: "Yelp names roast beef. TripAdvisor names shrimp, roast beef, catfish, and smoked sausage. Instagram: World Famous Fried Chicken and Po-Boys.",
  },
  {
    slug: "salad",
    name: "Homemade chicken salad",
    img: "/saias/salad.jpg",
    imgAlt: "Homemade chicken salad from Saia's Super Meat Market",
    note: "Facebook posts it as a standing item. Catering lists finger sandwiches. Call for party trays.",
  },
  {
    slug: "sausage",
    name: "Sausage & ground beef",
    img: "/saias/sausage.jpg",
    imgAlt: "House sausage and fresh ground beef at Saia's butcher counter",
    note: "Facebook: hand-crafted sausages and fresh ground beef never frozen, ground multiple times a day.",
  },
  {
    slug: "steaks",
    name: "Steaks & roasts",
    img: "/saias/steaks.jpg",
    imgAlt: "Hand-cut steaks at Saia's Super Meat Market butcher counter",
    note: "Instagram: ribeyes and filets. Facebook names chuck roasts and steaks.",
  },
  {
    slug: "shrimp",
    name: "Shrimp po-boy",
    img: "/saias/shrimp.jpg",
    imgAlt: "Shrimp po-boy named on Saia's reviews in Mandeville",
    note: "TripAdvisor names shrimp po-boys. The cow statue once wore a LARGE SHRIMP POBOY sign; that $8.99 price is historical, not current.",
  },
] as const;

export const YELP_QUOTES = [
  {
    name: "Darnell F.",
    when: "Jul 2026",
    stars: 5,
    quote: "If you are looking for a great roast beef poboy, look no farther. Saia's has the best.",
  },
  {
    name: "Jaime G.",
    when: "Jul 2026",
    stars: 5,
    quote: "The butchers are very knowledgeable of the product there. The cashiers are very knowledgeable where all the Islands are located in the store and of course, chicken king, there's no other",
  },
  {
    name: "Joana Marie A.",
    when: "Jul 2026",
    stars: 5,
    quote: "I love their hot and freshly fried chicken!",
  },
  {
    name: "K L.",
    when: "May 2026",
    stars: 4,
    quote: "Coworker's recommendation - they have the best fried chicken! Not sure if it's the best but it's some really good chicken.",
  },
] as const;

export const FAQS = [
  {
    q: "Where is Saia's Super Meat Market?",
    a: "2225 Florida Street, Mandeville, LA 70448, between Oak Street and Carroll Street.",
  },
  {
    q: "What is the phone number?",
    a: "Facebook and Instagram posts print (985) 626-9724. Superpages lists the same main number. Yelp and some directories still list (985) 626-3877. This site uses the number the shop prints on its own posts.",
  },
  {
    q: "What are the hours?",
    a: "Yelp lists Monday, Tuesday, Thursday, Friday 8am–7pm; Wednesday, Saturday, Sunday 8am–6pm. Apple Maps and TripAdvisor list 8pm close on some weekdays. Facebook does not publish a hours table. Call the day you come.",
  },
  {
    q: "What is the Chicken King Special?",
    a: "Instagram and Facebook: Tuesdays, $24.99 for 8 pieces mixed or dark fried chicken, 2 dinner rolls, large potato logs, and small onion rings. Uncle Willie is named as the Chicken King.",
  },
  {
    q: "Does Saia's take cards?",
    a: "Superpages lists Amex, cash, check, debit, Discover, Mastercard, and Visa. Apple Maps lists Apple Pay and contactless. Confirm at the register.",
  },
  {
    q: "Is there catering?",
    a: "Facebook asks hosts to call (985) 626-9724 for catering. Finger sandwiches are named on their posts.",
  },
] as const;

export const RESERVE_OPTIONS = [
  "Fried chicken / Chicken King",
  "Po-boys or chicken salad",
  "Butcher counter / steaks",
  "Catering or party trays",
  "Wine & spirits",
  "Something else",
] as const;

export const FACTS = [
  { k: "1977", v: "Open on the Northshore" },
  { k: "1979", v: "Cow statue bought" },
  { k: "$24.99", v: "Tuesday Chicken King" },
  { k: "3.7", v: "Yelp · 72 reviews" },
] as const;
