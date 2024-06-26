const axios = require("axios");

module.exports = {
  siteUrl: 'https://products-nt.vercel.app/',
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/admin/**", "/user/**"],
  transform: async (config, path) => {
    if (path === "/catalog") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 1.0,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }
    return {
      loc: path,
      changefreq: "weekly",
      priority: 0.7,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  additionalPaths: async (config) => {
    const response = await axios.get(`${config.siteUrl}/api/products`);
    const products = response.data.products;

    return products.map((product) => ({
      loc: `/products/${product.id}`,
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
};
