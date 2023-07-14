import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import plugins from "./plugins";
import sidebar from "./sidebar";

// Theme Config
// https://theme-hope.vuejs.press/config/theme/
export default hopeTheme({
  // Theme Basic Options
  // https://theme-hope.vuejs.press/config/theme/basic.html
  hostname: "https://blog.liblaf.me",
  author: {
    name: "liblaf",
    url: "https://liblaf.me",
    email: "i@liblaf.me",
  },
  favicon: "https://assets.liblaf.me/favicon/ico/b.ico",

  // Theme Feature Options
  // https://theme-hope.vuejs.press/config/theme/feature.html
  // Theme Feature Options > Blog Options
  blog: {
    name: "liblaf",
    avatar: "https://assets.liblaf.me/avatar/jpg/qiqi.jpg",
    description: "Life blooms like a flower",
    intro: "https://liblaf.me",
    medias: {
      BiliBili: "https://space.bilibili.com/225600506",
      Email: "mailto:i@liblaf.me",
      GitHub: "https://github.com/liblaf",
      Steam: "https://steamcommunity.com/id/liblaf/",
    },
    roundAvatar: true,
    articleInfo: ["Category", "Date", "Tag", "ReadingTime", "Word"],
  },

  // Theme Layout Options
  // https://theme-hope.vuejs.press/config/theme/layout.html
  // Theme Layout Options > Navbar Config
  navbar: navbar,
  logo: "https://assets.liblaf.me/favicon/png/b.png",
  repo: "https://github.com/liblaf/web-blog",
  // Theme Layout Options > Sidebar Config
  sidebar: sidebar,
  sidebarSorter: ["readme", "order", "date", "filename"],
  headerDepth: 4,
  // Theme Layout Options > Title
  pageInfo: ["Date", "Category", "Tag", "ReadingTime", "Word"],
  // Theme Layout Options > Meta
  docsRepo: "https://github.com/liblaf/web-blog",
  docsDir: "docs",
  // Theme Layout Options > Footer
  displayFooter: true,

  // Theme Appearance Options
  // https://theme-hope.vuejs.press/config/theme/appearance.html
  iconAssets: "iconfont",
  fullscreen: true,

  blogLocales: { slides: "Slides" },

  // Plugin Config
  // https://theme-hope.vuejs.press/config/plugins/intro.html
  plugins: plugins,
});
