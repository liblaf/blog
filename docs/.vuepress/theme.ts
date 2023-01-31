import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar";
import plugins from "./plugins";
import sidebar from "./sidebar";

export default hopeTheme({
  // Theme Basic Options
  hostname: "https://blog.liblaf.me",
  author: {
    name: "Qin Li",
    url: "https://liblaf.me",
    email: "liblaf@outlook.com",
  },

  // Theme Feature Options
  // Theme Feature Options > Blog Options
  blog: {
    name: "Qin Li",
    avatar: "https://assets.liblaf.me/avatar/jpg/qiqi.jpg",
    description: "Life blooms like a flower",
    intro: "https://blog.liblaf.me/me/",
    medias: {
      BiliBili: "https://space.bilibili.com/225600506",
      Email: "mailto:liblaf@outlook.com",
      GitHub: "https://github.com/liblaf",
      Steam: "https://steamcommunity.com/id/liblaf/",
    },
    roundAvatar: true,
    articleInfo: ["Category", "Date", "Tag", "ReadingTime", "PageView"],
  },

  // Theme Layout Options
  // Theme Layout Options > Navbar Config
  navbar: navbar,
  logo: "https://assets.liblaf.me/favicon/png/b.png",
  repo: "https://github.com/liblaf/blog",
  // Theme Layout Options > Sidebar Config
  sidebar: sidebar,
  headerDepth: 4,
  // Theme Layout Options > Title
  pageInfo: ["Date", "Category", "Tag", "ReadingTime", "PageView"],
  // Theme Layout Options > Meta
  editLinkPattern: ":repo/blob/:branch/:path",
  docsRepo: "https://github.com/liblaf/blog",
  docsDir: "docs",
  // Theme Layout Options > Footer
  displayFooter: true,

  // Theme Appearance Options
  iconAssets: "iconfont",
  fullscreen: true,

  blogLocales: { slides: "Slides" },

  // Plugin Config
  plugins: plugins,
});
