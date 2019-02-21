declare module 'sitemap' {
    export interface Sitemap {
        toString(): string;
    }

    export type SitemapOptions = {
        hostname?: string;
        cacheTime?: number;
        xslUrl?: string;
        xmlNs?: string;
        urls: any[];
    };

    interface SitemapGenerator {
        createSitemap(option: SitemapOptions): Sitemap;
    }

    const sitemapGenerator: SitemapGenerator;

    export default sitemapGenerator;
}
