import { redirect } from "@tanstack/react-router";

/** Leftover inner paths from prior sites return to Saia's hashes. */
export function toHome(hash: string = "top"): never {
  throw redirect({ to: "/", hash });
}
