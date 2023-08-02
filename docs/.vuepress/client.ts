import { defineClientConfig } from "@vuepress/client";
import { defineRevealConfig } from "vuepress-plugin-md-enhance/client";
import "vuepress-theme-hope/presets/bounce-icon.scss";

defineRevealConfig({
  height: 900,
  width: 1600,
});

export default defineClientConfig();
