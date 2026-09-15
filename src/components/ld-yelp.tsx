import { YELP_QUOTES, YELP_REVIEWS } from "@/lib/saias";

const STAR = "M12 2.4l2.47 6.36h6.68l-5.4 3.93 2.06 6.35L12 15.9l-5.81 3.14 2.06-6.35-5.4-3.93h6.68z";

function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  const gap = Math.round(size * 0.14);
  const width = size * 5 + gap * 4;
  const gid = `yhalf-${size}-${String(rating).replace(".", "")}`;
  return (
    <svg
      className="ld-y-stars"
      width={width}
      height={size}
      viewBox={`0 0 ${width} ${size}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gid} x1="0" x2="1" y1="0" y2="0">
          <stop offset="50%" stopColor="#d32323" />
          <stop offset="50%" stopColor="#d9cbb0" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = rating - i;
        const cls = fill >= 0.75 ? "is-on" : fill <= 0.25 ? "is-off" : "";
        return (
          <path
            key={i}
            className={cls}
            fill={cls ? undefined : `url(#${gid})`}
            transform={`translate(${i * (size + gap)} 0) scale(${size / 24})`}
            d={STAR}
          />
        );
      })}
    </svg>
  );
}

export function YelpBadge() {
  return (
    <a className="ld-y-badge" href={YELP_REVIEWS.href} rel="noreferrer" target="_blank">
      <span className="ld-y-mark" aria-hidden="true">
        Y
      </span>
      <span>
        <b>
          Yelp · {YELP_REVIEWS.rating} <Stars rating={Number(YELP_REVIEWS.rating)} size={14} />
        </b>
        <em>{YELP_REVIEWS.count} reviews</em>
      </span>
    </a>
  );
}

export function YelpGrid() {
  return (
    <div className="ld-ti">
      <div className="ld-ti-head">
        <div>
          <p className="ld-kicker">Yelp</p>
          <p>Saia's Super Meat Market · Mandeville</p>
        </div>
        <div className="ld-ti-score">
          <div className="ld-ti-rating">
            <b>{YELP_REVIEWS.rating}</b>
            <Stars rating={Number(YELP_REVIEWS.rating)} />
          </div>
          <span>{YELP_REVIEWS.count} reviews</span>
        </div>
        <a className="ld-ti-write" href={YELP_REVIEWS.href} rel="noreferrer" target="_blank">
          Read on Yelp
        </a>
      </div>
      <div className="ld-ti-cards">
        {YELP_QUOTES.map((q) => (
          <article key={q.name} className="ld-ti-card">
            <header>
              <b>{q.name}</b>
              <time>{q.when}</time>
            </header>
            <Stars rating={q.stars} size={14} />
            <p>{q.quote}</p>
            <small>Named Yelp note</small>
          </article>
        ))}
      </div>
      <div className="ld-ti-foot">
        <span>Quotes keep the names they were published under. Yelp lists {YELP_REVIEWS.rating} from {YELP_REVIEWS.count} reviews. This page does not invent a star aggregate.</span>
        <a href={YELP_REVIEWS.href} rel="noreferrer" target="_blank">
          Open the listing
        </a>
      </div>
    </div>
  );
}
