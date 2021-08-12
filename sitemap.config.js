module.exports = {
  siteUrl: "https://litmuschaos.io/",
  changefreq: "weekly",
  generateRobotsTxt: true,
  exclude: ["/404"],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: path === "/" ? 1.0 : 0.8,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined
    }
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/"
      }
    ]
  }
}
