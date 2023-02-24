import { defineUserConfig } from "vuepress";

import { docsearchPlugin } from "@vuepress/plugin-docsearch";

import default_frontmatter_plugin from "./plugins/plugin-default-frontmatter";
import theme from "./theme";

export default defineUserConfig({
  // Site Config
  title: "Blog",
  description: "Life blooms like a flower",

  // Theme Config
  theme: theme,

  // Build Config
  shouldPrefetch: false,

  // Markdown Config
  markdown: {
    typographer: true,
    headers: {
      level: [2, 3, 4],
    },
    toc: {
      level: [2, 3, 4],
    },
  },

  // Plugin Config
  plugins: [
    docsearchPlugin({
      apiKey: "ba8dc65c428ac921826d498f0ed3f08f",
      indexName: "liblafme",
      appId: "308ESY57KZ",
    }),
    default_frontmatter_plugin,
  ],
});
