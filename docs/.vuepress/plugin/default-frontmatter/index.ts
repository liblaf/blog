import path from "path";
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

    if (dirname === ".") {
      // https://v2.vuepress.vuejs.org/reference/frontmatter.html
      if (basename !== "README.md") {
        options.frontmatter.permalinkPattern = ":slug";
      }
      // https://theme-hope.vuejs.press/config/frontmatter/info.html
      options.frontmatter.article = false;
      options.frontmatter.timeline = false;
      // https://theme-hope.vuejs.press/config/frontmatter/layout.html
      options.frontmatter.index = false;
    } else if (basename === "README.md") {
      // https://theme-hope.vuejs.press/config/frontmatter/info.html
      options.frontmatter.article = false;
      options.frontmatter.timeline = false;
      // https://theme-hope.vuejs.press/config/frontmatter/layout.html
      options.frontmatter.index = false;
      options.frontmatter.dir = {
        link: true,
      };
    } else {
      // https://v2.vuepress.vuejs.org/reference/frontmatter.html
      const pattern: RegExp = /(\d{4})-(\d{2})-(\d{2})/;
      const match_result = basename.match(pattern);
      if (match_result) {
        options.frontmatter.date = new Date(match_result[0]);
      }
      options.frontmatter.permalinkPattern = path.join(
        path.join(
          ...dirname.split(path.sep).filter((item) => !item.match(/\d{4}/)),
        ),
        ":year",
        ":month",
        ":day",
        ":slug",
      );
      // https://theme-hope.vuejs.press/config/frontmatter/info.html
      options.frontmatter.isOriginal = true;
      options.frontmatter.category = ["Other"];
      options.frontmatter.tag = ["Other"];
    }
  },
});

export default default_frontmatter_plugin;
