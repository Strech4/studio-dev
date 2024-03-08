export default function robots() { 
    return {
        rules: {
          userAgent: '*',
          allow: [
            '/',
            '/templates',
          ],
        },
        sitemap: 'https://studio-dev.fr/sitemap.xml',
      }
}