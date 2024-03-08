export default function sitemap() {
    return [
        {
            url: 'https://studio-dev.fr/',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://studio-dev.fr/templates',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        }
    ]
}