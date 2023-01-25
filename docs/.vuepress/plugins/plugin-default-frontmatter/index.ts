import path from "node:path";
import { App, PageOptions, PluginFunction, PluginObject } from "vuepress";

const default_frontmatter_plugin: PluginFunction = (
  app: App,
): PluginObject => ({
  name: "vuepress-plugin-default-frontmatter",

  extendsPageOptions: (options: PageOptions, app: App) => {
    if (!options.filePath) {
      return;
    }

    const relative: string = path.relative(app.dir.source(), options.filePath);
    const dirname: string = path.dirname(relative);
    const basename: string = path.basename(relative);

    options.frontmatter = options.frontmatter ?? {};
    options.frontmatter.lastUpdated = true;
    options.frontmatter.contributors = true;
    options.frontmatter.editLink = true;

    if (dirname === ".") {
      options.frontmatter.article = false;
      options.frontmatter.index = false;
      options.frontmatter.timeline = false;
      if (basename !== "README.md") {
        options.frontmatter.permalinkPattern = ":slug";
      }
    } else if (basename === "README.md") {
      options.frontmatter.article = false;
      options.frontmatter.index = false;
      options.frontmatter.timeline = false;
      options.frontmatter.dir = {
        link: true,
      };
    } else {
      // regular article
      options.frontmatter.category = ["Uncategorized"];
      options.frontmatter.tag = ["Untagged"];
      options.frontmatter.isOriginal = true;

      const pattern: RegExp = /(\d{4})-(\d{2})-(\d{2})/;
      const match_result = basename.match(pattern);
      if (match_result) {
        options.frontmatter.date = new Date(match_result[0]);
      }

      options.frontmatter.permalinkPattern = path.join(
        dirname,
        ":year",
        ":month",
        ":day",
        ":slug",
      );
    }
  },
});

export default default_frontmatter_plugin;
