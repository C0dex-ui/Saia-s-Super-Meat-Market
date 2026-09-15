import { createFileRoute } from "@tanstack/react-router";
import { NotFoundPage } from "@/components/not-found";
import { SITE_SHORT } from "@/lib/saias";

export const Route = createFileRoute("/$")({
  component: NotFoundPage,
  head: () => ({
    meta: [
      { title: `Page not found | ${SITE_SHORT}` },
      { name: "robots", content: "noindex" },
    ],
  }),
});
