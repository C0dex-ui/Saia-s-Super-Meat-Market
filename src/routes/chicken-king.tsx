import { createFileRoute } from "@tanstack/react-router";
import { toHome } from "@/lib/home-only";

export const Route = createFileRoute("/chicken-king")({
  beforeLoad: () => toHome("chicken"),
  component: () => null,
});
