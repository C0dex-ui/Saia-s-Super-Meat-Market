import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/steak-night")({
  beforeLoad: () => {
    throw redirect({ to: "/chicken-king" });
  },
  component: () => null,
});
