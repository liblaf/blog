import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar";
import plugins from "./plugins";
import sidebar from "./sidebar";

export default hopeTheme({
  // Theme Basic Options
  hostname: "https://blog.liblaf.me",
  author: {
    name: "liblaf",
    url: "https://liblaf.me",
    email: "i@liblaf.me",
  },

  // Theme Feature Options
  // Theme Feature Options > Blog Options
  blog: {
    name: "liblaf",
    avatar: "https://assets.liblaf.me/avatar/jpg/qiqi.jpg",
    description: "Life blooms like a flower",
    intro: "https://blog.liblaf.me/me/",
    medias: {
      BiliBili: "https://space.bilibili.com/225600506",
      Email: "mailto:i@liblaf.me",
      GitHub: "https://github.com/liblaf",
      Steam: "https://steamcommunity.com/id/liblaf/",
    },
    roundAvatar: true,
    articleInfo: ["Category", "Date", "Tag", "ReadingTime"],
  },

  // Theme Layout Options
  // Theme Layout Options > Navbar Config
  navbar: navbar,
  logo: "https://assets.liblaf.me/favicon/png/b.png",
  repo: "https://github.com/liblaf/web-blog",
  // Theme Layout Options > Sidebar Config
  sidebar: sidebar,
  sidebarSorter: ["readme", "order", "date", "filename"],
  headerDepth: 4,
  // Theme Layout Options > Title
  pageInfo: ["Date", "Category", "Tag", "ReadingTime"],
  // Theme Layout Options > Meta
  editLinkPattern: ":repo/blob/:branch/:path",
  docsRepo: "https://github.com/liblaf/web-blog",
  docsDir: "docs",
  // Theme Layout Options > Footer
  displayFooter: true,

  // Theme Appearance Options
  iconAssets: "iconfont",
  themeColor: {
    default: "#13c2c2",
    purple: "#722ed1",
  },
  fullscreen: true,

  blogLocales: { slide: "Slides" },

  // Plugin Config
  plugins: plugins,
});
