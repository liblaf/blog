import { defineClientConfig } from "vuepress/client";
import "vuepress-theme-hope/presets/bounce-icon.scss";
import { defineRevealJsConfig } from "vuepress-plugin-md-enhance/client";

defineRevealJsConfig({
  width: 1920,
  height: 1080,
  plugins: ["KaTeX"],
});

export default defineClientConfig();
