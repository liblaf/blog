import { defineClientConfig } from "vuepress/client";
import "vuepress-theme-hope/presets/bounce-icon.scss";
import { defineRevealJsConfig } from "vuepress-plugin-md-enhance/client";

defineRevealJsConfig({
  plugins: ["KaTeX"],
});

export default defineClientConfig();
