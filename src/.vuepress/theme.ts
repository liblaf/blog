import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import plugins from "./plugins.js";
import sidebar from "./sidebar.js";

// https://theme-hope.vuejs.press/config/theme/
export default hopeTheme(
  {
    // Theme Basic Config
    hostname: "https://blog.liblaf.me",
    author: {
      name: "liblaf",
      url: "https://liblaf.me",
      email: "i@liblaf.me",
    },
    license: "MIT",
    favicon: "https://assets.liblaf.me/favicon/png/b.png",
    // navbar: navbar,
    // sidebar: sidebar,

    // Theme Feature Config
    // Theme Feature Config > Blog Options
    blog: {
      name: "liblaf",
      avatar: "https://assets.liblaf.me/avatar/png/nahida.png",
      description: "Life blooms like a flower",
      intro: "Too young, too simple",
      medias: {
        Email: "mailto:i@liblaf.me",
        GitHub: "https://github.com/liblaf",
        Bangumi: "https://bgm.tv/user/liblaf",
        BiliBili: "https://space.bilibili.com/225600506",
        Steam: "https://steamcommunity.com/id/liblaf",
      },
      roundAvatar: true,
      articleInfo: ["Category", "Date", "Tag", "ReadingTime", "Word"],
    },

    // Theme Layout Options
    // Theme Layout Options > Navbar Config
    navbar: navbar,
    logo: "https://assets.liblaf.me/favicon/png/b.png",
    repo: "https://github.com/liblaf/blog",
    // Theme Layout Options > Sidebar Config
    sidebar: sidebar,
    sidebarSorter: ["readme", "order", "date", "filename"],
    // Theme Layout Options > Title
    pageInfo: ["Category", "Date", "Tag", "ReadingTime", "Word"],
    // Theme Layout Options > Meta
    docsDir: "src",

    // Theme Appearance Options
    iconAssets: "iconify",
    fullscreen: true,

    // Theme I18n Options
    blogLocales: {
      slide: "Slides",
    },

    // Theme Plugins
    plugins: plugins,
  },
  {
    // Theme Behavior Options
    custom: true,
  },
);
