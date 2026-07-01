import { EXPERTISE_ITEMS } from '@/lib/expertise';

const baseUrl = 'https://me.toinfinite.dev';

export default function sitemap() {
    const staticRoutes = ['', '/about', '/expertise', '/contact'];
    const expertiseRoutes = EXPERTISE_ITEMS.map((item) => `/expertise/${item.slug}`);

    return [...staticRoutes, ...expertiseRoutes].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));
}