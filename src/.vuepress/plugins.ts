import { PluginsOptions } from "vuepress-theme-hope";
import { Page } from "vuepress";
import { path } from "vuepress/utils";

// https://theme-hope.vuejs.press/config/plugins/
export default {
  mdEnhance: {
    gfm: true,
    hint: true,
    breaks: true,
    linkify: true,
    alert: true,
    tabs: true,
    codetabs: true,
    attrs: true,
    sup: true,
    sub: true,
    footnote: true,
    mark: true,
    figure: true,
    imgLazyload: true,
    imgMark: true,
    imgSize: true,
    tasklist: true,
    katex: {
      macros: {
        "\\laplacian": "\\nabla^2",
        "\\pqty": "\\left(#1\\right)",
        "\\qc": ",\\quad",
        "\\qq": "\\quad\\text{#1}\\quad",
      },
    },
    // mathjax: {
    //   tex: {
    //     packages: [
    //       "base",
    //       "action",
    //       "ams",
    //       "amscd",
    //       "bbox",
    //       "boldsymbol",
    //       "braket",
    //       "bussproofs",
    //       "cancel",
    //       "cases",
    //       "centernot",
    //       "color",
    //       "colortbl",
    //       "empheq",
    //       "enclose",
    //       "extpfeil",
    //       "gensymb",
    //       "html",
    //       "mathtools",
    //       "mhchem",
    //       "newcommand",
    //       "noerrors",
    //       "noundefined",
    //       "upgreek",
    //       "unicode",
    //       "verb",
    //       "configmacros",
    //       "tagformat",
    //       "textcomp",
    //       "textmacros",
    //       "physics",
    //     ],
    //     tags: "ams",
    //   },
    // },
    include: true,
    component: true,
    chart: false,
    echarts: false,
    flowchart: false,
    mermaid: true,
    stylize: undefined,
    playground: undefined,
    vuePlayground: false,
    sandpack: false,
    demo: false,
    revealJs: {
      plugins: ["highlight", "math", "search", "notes", "zoom"],
    },
  },

  blog: {
    type: [
      {
        key: "slide",
        filter: (page: Page): boolean => page.frontmatter.layout === "Slide",
        frontmatter: (localePath: string): Record<string, string> => ({
          title: "Slides",
        }),
      },
    ],
  },

  searchPro: {
    indexContent: true,
  },

  catalog: {
    frontmatter: (pathString: string): Record<string, any> => {
      const basename: string = path.basename(pathString);
      return FRONTMATTER[basename] || {};
    },
  },
} satisfies PluginsOptions;

const FRONTMATTER: Record<string, Record<string, any>> = {
  "course-notes": { title: "Course Notes", icon: "material-symbols:notes" },
  "course-work": { title: "Course Work", icon: "material-symbols:assignment" },
  "dev-env": { title: "Dev Env", icon: "mdi:code" },
  csapp: { title: "CSAPP" },
  hpc: { title: "HPC" },
  idea: { title: "Idea", icon: "mdi:idea" },
  latex: { title: "LaTeX", icon: "tabler:tex" },
  linux: { title: "Linux", icon: "mdi:linux" },
  notes: { title: "Notes", icon: "material-symbols:notes" },
  posts: { title: "Posts", icon: "material-symbols:post" },
  research: { title: "Research", icon: "material-symbols:lab-research" },
  slides: { title: "Slides", icon: "icon-park-outline:slide" },
};
