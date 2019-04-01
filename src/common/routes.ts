import { ITranslationsAdapter } from 'slim-i18n';
import { RouteDescriptor, makeRoutePath, makeRouteLoadFunction } from 'common/utils/router';
import { PageSeoConfig, SitemapOption } from 'common/utils/seo';

export const routes: RouteDescriptor[] = [
    {
        id: 'home',
        exact: true,
        rawPath: '/',
        path: makeRoutePath('/'),
        load: makeRouteLoadFunction('home'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            title: i18n.gettext('Manage crypto currency with easy | Plark'),
            description: i18n.gettext('Manage crypto currency with easy | Plark'),
            canonicalLink: 'https://plark.io',
            path: '/',
        }),
        getSitemapOption: (): SitemapOption => ({
            path: '/',
            priority: 1,
        }),
    },
    {
        id: 'privacy-policy',
        exact: true,
        rawPath: '/privacy',
        path: makeRoutePath('/privacy'),
        load: makeRouteLoadFunction('privacy-policy'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            title: i18n.gettext('Privacy Policy | Plark'),
            description: i18n.gettext('Privacy Policy | Plark'),
            canonicalLink: 'https://plark.io/privacy',
            path: '/privacy',
        }),
        getSitemapOption: (): SitemapOption => ({
            path: '/privacy',
            priority: 0.8,
        }),
    },
    {
        id: 'terms-of-use',
        exact: true,
        rawPath: '/terms',
        path: makeRoutePath('/terms'),
        load: makeRouteLoadFunction('terms-of-use'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            title: i18n.gettext('Terms & Conditions | Plark'),
            description: i18n.gettext('Terms & Conditions | Plark'),
            canonicalLink: 'https://plark.io/terms',
            path: '/terms',
        }),
        getSitemapOption: (): SitemapOption => ({
            path: '/terms',
            priority: 0.8,
        }),
    },
    {
        id: 'no-match',
        path: makeRoutePath(''),
        load: makeRouteLoadFunction('no-match'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            title: i18n.gettext('Error 404. Page not found'),
            description: i18n.gettext('Error 404. Page not found'),
            path: '',
        }),
    },
];
