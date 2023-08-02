import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { getDirname, path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import default_frontmatter_plugin from "./plugin/default-frontmatter/index.js";
import theme from "./theme.js";

const dirname = getDirname(import.meta.url);

// https://v2.vuepress.vuejs.org/reference/config.html
export default defineUserConfig({
  // Site Config
  title: "Blog",
  description: "Life blooms like a flower",

  // Theme Config
  theme: theme,

  // Common Config
  permalinkPattern: null,

  // Build Config
  shouldPrefetch: false,

  // Markdown Config
  markdown: {
    linkify: true,
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

  // Theme Presets
  // https://theme-hope.vuejs.press/guide/advanced/presets.html
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      dirname,
      "./components/BlogHero.vue",
    ),
  },
});
