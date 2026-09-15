import { createFileRoute } from "@tanstack/react-router";
import { toHome } from "@/lib/home-only";

export const Route = createFileRoute("/services/")({
  beforeLoad: () => toHome("services"),
  component: () => null,
});
