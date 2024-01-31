import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./theme.js";
import frontmatter from "./plugins/frontmatter/index.js";

const __dirname: string = getDirname(import.meta.url);

// https://vuejs.press/reference/config.html
export default defineUserConfig({
  // Site Config
  lang: "en-US",
  title: "Blog",
  description: "My Blog",

  // Theme Config
  theme: theme,

  // Markdown Config
  markdown: {
    linkify: true,
    typographer: true,
  },

  // Plugin Config
  plugins: [frontmatter()],

  // Theme Presets
  // https://theme-hope.vuejs.press/guide/advanced/presets.html
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },
});
