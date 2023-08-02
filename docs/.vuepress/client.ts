import { defineClientConfig } from "@vuepress/client";
import { defineRevealConfig } from "vuepress-plugin-md-enhance/client";

defineRevealConfig({
  height: 900,
  width: 1600,
});

export default defineClientConfig();
