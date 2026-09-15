import { createFileRoute } from "@tanstack/react-router";
import { toHome } from "@/lib/home-only";

export const Route = createFileRoute("/doctors/$slug")({
  beforeLoad: () => toHome("about"),
  component: () => null,
});
