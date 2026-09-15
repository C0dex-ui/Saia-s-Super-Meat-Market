import { useState } from "react";
import { NAP, RESERVE_OPTIONS } from "@/lib/saias";

export function LeadForm({
  variant = "contact",
}: {
  variant?: "contact" | "appointment" | "hero";
}) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className="ld-lead-done">
        Thank you. This form is a callback request, not an online order. Call {NAP.phone} so the counter can confirm
        chicken, catering, or a butcher cut.
      </p>
    );
  }

  return (
    <form
      className="ld-form"
      suppressHydrationWarning
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="ld-form-row">
        <label>
          <span>Name</span>
          <input className="ld-input" name="name" required autoComplete="name" suppressHydrationWarning />
        </label>
        <label>
          <span>Phone</span>
          <input className="ld-input" name="phone" type="tel" required autoComplete="tel" suppressHydrationWarning />
        </label>
      </div>
      <label>
        <span>What are you writing about</span>
        <select className="ld-input" name="need" defaultValue="" required suppressHydrationWarning>
          <option value="" disabled>
            Chicken, po-boys, butcher, or catering
          </option>
          {RESERVE_OPTIONS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>Note</span>
        <textarea
          className="ld-input"
          name="note"
          rows={3}
          placeholder="Party size, Tuesday Chicken King, or a cut from the butcher"
          suppressHydrationWarning
        />
      </label>
      <button type="submit" className="ld-btn">
        {variant === "hero" ? "Send to the counter" : "Request a call"}
      </button>
    </form>
  );
}
