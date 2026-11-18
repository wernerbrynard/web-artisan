module.exports = {
    siteUrl: 'https://webartisan.co.za',
    generateRobotsTxt: false,
    // Icons are generated routes, not pages, so keep them out of the sitemap.
    exclude: ['/icon.svg', '/apple-icon.png'],
    changefreq: 'weekly',
    priority: 0.7,
    generateIndexSitemap: false, 
    sitemapSize: 5000, 
};