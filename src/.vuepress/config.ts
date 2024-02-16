import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme.js";
import { baiduTongjiPlugin } from "./plugins/baiduTongji.js";
import markdownItDeflist from "markdown-it-deflist";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Zotero 中文小组",
      description: "Zotero 非官方中文维护小组",
    },
  },
  bundler: viteBundler(),
  theme,

  markdown: {
    headers: {
      level: [2, 3, 4, 5],
    },
  },
  extendsMarkdown: (md) => {
    md.use(markdownItDeflist);
  },

  plugins: [
    baiduTongjiPlugin({
      keys:
        process.env.CONTEXT === "production"
          ? [
              "fc5b45ae006a231c1d5cff4610df7267", // lin
              "fc904ee59939c7c2284063619b0ef533", // northword
            ]
          : [],
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
