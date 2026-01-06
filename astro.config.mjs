import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://wranglerdev.github.io",

  integrations: [
    expressiveCode({
      themes: ["github-light", "github-dark-dimmed"],
      styleOverrides: {
        borderRadius: "0.5rem",
        borderWidth: "1px",
      },
      defaultProps: {
        wrap: true,
        preserveIndent: true,
      },
    }),
    mdx(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
