/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.photoboothwithshan.com.au",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["/thankyou", "/pay", "/quickquote"],
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
    ]);

    if (keyPages.has(path)) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }

    if (path.startsWith("/blog/")) {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      };
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
