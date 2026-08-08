import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Francisco Roque — Senior Quality Engineer",
    short_name: "Francisco Roque",
    description:
      "Senior Quality Engineer specialising in test automation and performance engineering.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
  };
}
