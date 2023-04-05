import { PluginsOptions } from "vuepress-theme-hope";
import { Page } from "vuepress";

const plugins: PluginsOptions = {
  autoCatalog: false,

  blog: {
    type: [
      {
        key: "slide",
        filter: (page: Page): boolean => {
          return page.frontmatter.layout === "Slide";
        },
      },
    ],
  },

  comment: {
    provider: "Waline",
    serverURL: "https://waline.liblaf.me",
    dark: "auto",
    reaction: true,
  },

  mdEnhance: {
    sup: true,
    sub: true,
    footnote: true,
    mark: true,
    figure: true,
    imgLazyload: true,
    imgSize: true,
    tasklist: true,
    mathjax: {
      tex: {
        packages: [
          "action",
          "ams",
          "amscd",
          "base",
          "bbox",
          "boldsymbol",
          "braket",
          "bussproofs",
          "cancel",
          "cases",
          "centernot",
          "color",
          "colortbl",
          "configmacros",
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
          "physics",
          "tagformat",
          "textcomp",
          "textmacros",
          "unicode",
          "upgreek",
          "verb",
        ],
        tags: "ams",
        tagIndent: "0.8em",
      },
    },
    mermaid: true,
    demo: true,
    presentation: { plugins: ["highlight", "math", "search", "notes", "zoom"] },
  },
};

export default plugins;
