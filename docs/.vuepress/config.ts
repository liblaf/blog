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
      apiKey: "38fc3e3603efeaaf17058055d24d98ee",
      indexName: "liblaf",
      appId: "ELGWQ7KYID",
    }),
    default_frontmatter_plugin,
  ],
});
