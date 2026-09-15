import { createFileRoute } from "@tanstack/react-router";
import { toHome } from "@/lib/home-only";

export const Route = createFileRoute("/terms")({
  beforeLoad: () => toHome("legal"),
  component: () => null,
});
