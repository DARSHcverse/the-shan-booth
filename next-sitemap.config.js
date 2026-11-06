const fs = require("fs");
const path = require("path");

// Real modified dates for blog posts, read from each post file. Static pages get
// no lastmod: a build-time date changes on every deploy, so Google learns to ignore it.
const POSTS_DIR = path.join(__dirname, "src/components/Blog/posts");
const postDates = Object.fromEntries(
  fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".js") && f !== "index.js")
    .map((f) => {
      const src = fs.readFileSync(path.join(POSTS_DIR, f), "utf8");
      const slug = src.match(/slug:\s*"([^"]+)"/)?.[1];
      const date = src.match(/dateModified:\s*"([^"]+)"/)?.[1] || src.match(/date:\s*"([^"]+)"/)?.[1];
      return [slug, date];
    })
    .filter(([slug, date]) => slug && date)
);

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.photoboothwithshan.com.au",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["/thankyou", "/pay", "/pbseopage"],
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    const keyPages = new Set([
      "/",
      "/photobooths",
      "/packages",
      "/events",
      "/booking",
      "/corporate-events",
      "/photoboothhiregeelong",
      "/blog",
      "/graduation",
      "/christmas",
      "/birthday",
      "/quickquote",
    ]);

    if (keyPages.has(path)) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.9,
      };
    }

    if (path.startsWith("/blog/")) {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.7,
        lastmod: postDates[path.replace("/blog/", "")],
      };
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
    };
  },
};
