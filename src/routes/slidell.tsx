import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/slidell")({
  beforeLoad: () => {
    throw redirect({ to: "/mandeville" });
  },
  component: () => null,
});
