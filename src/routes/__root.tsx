import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { NotFoundPage } from "@/components/not-found";
import { DESCRIPTION, NAP, TITLE } from "@/lib/saias";
import appCss from "../styles.css?url";
import saiasCss from "../styles-saias.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#b42318" },
      { name: "geo.region", content: "US-LA" },
      { name: "geo.placename", content: "Mandeville" },
      { name: "geo.position", content: `${NAP.lat};${NAP.lng}` },
      { name: "ICBM", content: `${NAP.lat}, ${NAP.lng}` },
    ],
    links: [
      { rel: "canonical", href: "https://www.saiassupermeatmarket.com/" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48.png" },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: saiasCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap",
      },
    ],
  }),
  notFoundComponent: NotFoundPage,
  component: () => (
    <AuthProvider>
      <PreviewHostBridge />
      <HeadContent />
      <Outlet />
      <Scripts />
    </AuthProvider>
  ),
});
