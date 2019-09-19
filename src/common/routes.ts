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
            title: i18n.gettext('The friendliest multi-currency crypto wallet.'),
            description: i18n.gettext(
                'We won’t scream how good we are. We won’t beg you to install our application. We do our job. No need to convince — use Plark.',
            ),
            canonicalLink: 'https://plark.io',
            path: '/',
        }),
        getSitemapOption: (): SitemapOption => ({
            path: '/',
            priority: 1,
        }),
    },
    {
        id: 'mobile-wallet',
        exact: true,
        rawPath: '/mobile-wallet',
        path: makeRoutePath('/mobile-wallet'),
        load: makeRouteLoadFunction('mobile-wallet'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            title: i18n.gettext('Best mobile crypto wallet? Well, Plark.'),
            description: i18n.gettext(
                'We won’t scream how good we are. We won’t beg you to install our application. We do our job. No need to convince — use Plark.',
            ),
            canonicalLink: 'https://plark.io/mobile-wallet',
            path: '/mobile-wallet',
        }),
        getSitemapOption: (): SitemapOption => ({
            path: '/mobile-wallet',
            priority: 0.9,
        }),
    },
    {
        id: 'ios-wallet',
        exact: true,
        rawPath: '/ios-wallet',
        path: makeRoutePath('/ios-wallet'),
        load: makeRouteLoadFunction('ios-wallet'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            title: i18n.gettext('Best iOS crypto wallet? Well, Plark.'),
            description: i18n.gettext(
                'We won’t scream how good we are. We won’t beg you to install our application. We do our job. No need to convince — use Plark.',
            ),
            canonicalLink: 'https://plark.io/ios-wallet',
            path: '/ios-wallet',
        }),
        getSitemapOption: (): SitemapOption => ({
            path: '/ios-wallet',
            priority: 0.9,
        }),
    },
    {
        id: 'android-wallet',
        exact: true,
        rawPath: '/android-wallet',
        path: makeRoutePath('/android-wallet'),
        load: makeRouteLoadFunction('android-wallet'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            title: i18n.gettext('Best Android crypto wallet? Well, Plark.'),
            description: i18n.gettext(
                'We won’t scream how good we are. We won’t beg you to install our application. We do our job. No need to convince — use Plark.',
            ),
            canonicalLink: 'https://plark.io/android-wallet',
            path: '/android-wallet',
        }),
        getSitemapOption: (): SitemapOption => ({
            path: '/android-wallet',
            priority: 0.9,
        }),
    },
    {
        id: 'bitcoin-wallet',
        exact: true,
        rawPath: '/bitcoin-wallet',
        path: makeRoutePath('/bitcoin-wallet'),
        load: makeRouteLoadFunction('bitcoin-wallet'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            title: i18n.gettext('The Best Bitcoin Wallet? Well, Plark.'),
            description: i18n.gettext(
                'We won’t scream how good we are. We won’t beg you to install our application. We do our job. No need to convince — use Plark.',
            ),
            canonicalLink: 'https://plark.io/bitcoin-wallet',
            path: '/bitcoin-wallet',
        }),
        getSitemapOption: (): SitemapOption => ({
            path: '/bitcoin-wallet',
            priority: 0.9,
        }),
    },
    {
        id: 'litecoin-wallet',
        exact: true,
        rawPath: '/litecoin-wallet',
        path: makeRoutePath('/litecoin-wallet'),
        load: makeRouteLoadFunction('litecoin-wallet'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            title: i18n.gettext('Litecoin Wallet for iOS? Plark.'),
            description: i18n.gettext(
                'Plark team has created a cross-functional application to fulfill all the needs for all cryptocurrency users. Get through the friendliest flow you have ever seen before. Try it, and you will probably call Plark the best wallet for Litecoin.',
            ),
            canonicalLink: 'https://plark.io/litecoin-wallet',
            path: '/litecoin-wallet',
        }),
        getSitemapOption: (): SitemapOption => ({
            path: '/litecoin-wallet',
            priority: 0.9,
        }),
    },
    {
        id: 'contact-us',
        exact: true,
        rawPath: '/contact-us',
        path: makeRoutePath('/contact-us'),
        load: makeRouteLoadFunction('contact-us'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            title: i18n.gettext('Stay in touch with a Plark team'),
            canonicalLink: 'https://plark.io/contact-us',
            path: '/contact-us',
        }),
        getSitemapOption: (): SitemapOption => ({
            path: '/contact-us',
            priority: 0.8,
        }),
    },
    {
        id: 'about-us',
        exact: true,
        rawPath: '/about-us',
        path: makeRoutePath('/about-us'),
        load: makeRouteLoadFunction('about-us'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            title: i18n.gettext('We make crypto simpler for you and his name is Plark'),
            canonicalLink: 'https://plark.io/about-us',
            path: '/about-us',
        }),
        getSitemapOption: (): SitemapOption => ({
            path: '/about-us',
            priority: 0.8,
        }),
    },
    {
        id: 'faq',
        exact: true,
        rawPath: '/faq',
        path: makeRoutePath('/faq'),
        load: makeRouteLoadFunction('faq'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            title: i18n.gettext('Frequently Asked Questions'),
            canonicalLink: 'https://plark.io/faq',
            path: '/faq',
        }),
        getSitemapOption: (): SitemapOption => ({
            path: '/faq',
            priority: 0.8,
        }),
    },
    {
        id: 'privacy-policy',
        exact: true,
        rawPath: '/privacy',
        path: makeRoutePath('/privacy'),
        load: makeRouteLoadFunction('privacy-policy'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            title: i18n.gettext('Privacy Policy'),
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
            title: i18n.gettext('Terms & Conditions'),
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
