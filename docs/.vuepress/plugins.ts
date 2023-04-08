import { PluginsOptions } from "vuepress-theme-hope";
import { Page } from "vuepress";

// Plugin Config
// https://theme-hope.vuejs.press/config/plugins/intro.html
const plugins: PluginsOptions = {
  // Blog Plugin Config
  // https://theme-hope.vuejs.press/config/plugins/blog.html
  blog: {
    type: [
      {
        key: "slide",
        filter: (page: Page): boolean => {
          return page.frontmatter.layout === "Slide";
        },
        frontmatter: (localePath: string) => {
          return { title: "Slides" };
        },
      },
    ],
  },

  // Comment Plugin Config
  // https://theme-hope.vuejs.press/config/plugins/comment.html
  comment: {
    provider: "Waline",
    serverURL: "https://waline.liblaf.me",
    dark: "auto",
    reaction: true,
  },

  // MdEnhance Plugin Config
  // https://theme-hope.vuejs.press/config/plugins/md-enhance.html
  mdEnhance: {
    sup: true,
    sub: true,
    footnote: true,
    imgLazyload: true,
    mark: true,
    figure: true,
    imgSize: true,
    tasklist: true,
    mathjax: {
      tex: {
        packages: [
          "base",
          "action",
          "ams",
          "amscd",
          "bbox",
          "boldsymbol",
          "braket",
          "bussproofs",
          "cancel",
          "cases",
          "centernot",
          "color",
          "colortbl",
          "empheq",
          "enclose",
          "extpfeil",
          "gensymb",
          "html",
          "mathtools",
          "mhchem",
          "newcommand",
          "noerrors",
          "noundefined",
          "upgreek",
          "unicode",
          "verb",
          "configmacros",
          "tagformat",
          "textcomp",
          "textmacros",

          "physics",
        ],
        tags: "ams",
        tagIndent: "0.8em",
      },
    },
    mermaid: true,
    presentation: { plugins: ["highlight", "math", "search", "notes", "zoom"] },
  },
};

export default plugins;
