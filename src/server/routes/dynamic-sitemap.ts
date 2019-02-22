import { Request, Response } from 'express';
import moment from 'moment';
import sm from 'sitemap';

import { routes } from 'common/routes';
import { SEO_HOST, SitemapUrlOption } from 'common/utils/seo';
import { CommonRouteDescriptor, getSitemapLinks } from 'common/utils/router';

export default async function dynamicSitemap(_req: Request, res: Response) {
    const sitemapUrlOptions: SitemapUrlOption[] = [];

    const now = moment().format('YYYY-MM-DD');

    routes.forEach((route: CommonRouteDescriptor) => {
        if (!route.getSitemapOption) {
            return;
        }

        const { path, lastmod, changefreq, priority } = route.getSitemapOption();

        sitemapUrlOptions.push({
            url: path,
            priority: priority || 0.5,
            changefreq: changefreq || 'monthly',
            lastmod: lastmod || now,
            links: getSitemapLinks(path),
        } as SitemapUrlOption);
    });

    const sitemap = sm.createSitemap({
        hostname: SEO_HOST,
        urls: sitemapUrlOptions,
    });

    res.setHeader('Content-Type', 'application/xml');
    res.send(sitemap.toString());
}