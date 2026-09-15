import { createFileRoute } from "@tanstack/react-router";
import { toHome } from "@/lib/home-only";

export const Route = createFileRoute("/mandeville")({
  beforeLoad: () => toHome("visit"),
  component: () => null,
});
