import { createFileRoute } from "@tanstack/react-router";
import { toHome } from "@/lib/home-only";

export const Route = createFileRoute("/about")({
  beforeLoad: () => toHome("butcher"),
  component: () => null,
});
