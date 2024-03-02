export default function robots() { 
    return {
        rules: {
          userAgent: '*',
          allow: '/',
        },
        sitemap: 'https://studio-dev.fr/sitemap.xml',
      }
}