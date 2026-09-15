import { createFileRoute } from "@tanstack/react-router";
import { toHome } from "@/lib/home-only";

export const Route = createFileRoute("/appointment")({
  beforeLoad: () => toHome("book"),
  component: () => null,
});
