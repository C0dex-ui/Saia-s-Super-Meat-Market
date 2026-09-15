import { CaretDown } from "@phosphor-icons/react";

type Item = { q: string; a: string };

export function FaqList({ items }: { items: readonly Item[] }) {
  return (
    <div className="ld-faq-list">
      {items.map((f, i) => (
        <details key={f.q} className="ld-faq-item" open={i === 0}>
          <summary>
            <h3>{f.q}</h3>
            <CaretDown className="size-4" />
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
