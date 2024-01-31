import { App, PageOptions, Plugin } from "vuepress";
import { path } from "vuepress/utils";

const DATE_PATTERN: RegExp = /(\d{4})-(\d{2})-(\d{2})/;

export default (): Plugin => ({
  name: "frontmatter",

  extendsPageOptions: (options: PageOptions, app: App): void => {
    if (!options.filePath) {
      return;
    }
    const relative: string = path.relative(app.dir.source(), options.filePath);
    const dirname: string = path.dirname(relative);
    const basename: string = path.basename(relative);
    options.frontmatter = options.frontmatter ?? {};
    if (dirname === ".") {
      options.frontmatter.article = false;
      options.frontmatter.timeline = false;
      options.frontmatter.index = false;
    } else if (basename === "README.md") {
      options.frontmatter.article = false;
      options.frontmatter.timeline = false;
      options.frontmatter.index = false;
      options.frontmatter.dir = {
        link: true,
      };
    } else {
      const match_result: RegExpMatchArray = basename.match(DATE_PATTERN);
      if (match_result) {
        options.frontmatter.date = new Date(match_result[0]);
      }
      options.frontmatter.isOriginal = true;
      options.frontmatter.category = ["Other"];
      options.frontmatter.tag = ["Other"];
    }
  },
});
