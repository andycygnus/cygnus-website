import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'

export default async function handler(req, res) {
    // Define the base URL of your site
    const baseUrl = 'https://cygnuspay.com'

    // Define your static and dynamic routes
    const links = [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        { url: '/about', changefreq: 'weekly', priority: 0.8 },
        { url: '/products/terminals', changefreq: 'weekly', priority: 0.8 },
        { url: '/products/pos', changefreq: 'weekly', priority: 0.8 },
        {
            url: '/products/online-ordering',
            changefreq: 'weekly',
            priority: 0.8,
        },
        { url: '/products/mobile-app', changefreq: 'weekly', priority: 0.8 },
        { url: '/products/mobile-app', changefreq: 'weekly', priority: 0.8 },
        { url: '/partners', changefreq: 'weekly', priority: 0.8 },
        { url: '/contact', changefreq: 'weekly', priority: 0.8 },
    ]

    // Create a stream to write to
    const stream = new SitemapStream({ hostname: baseUrl })

    // Convert the stream to a buffer
    const sitemap = await streamToPromise(
        Readable.from(links).pipe(stream)
    ).then((data) => data.toString())

    // Set response headers
    res.setHeader('Content-Type', 'application/xml')
    res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

    // Send the sitemap to the client
    res.status(200).end(sitemap)
}
