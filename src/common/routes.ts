import { ISitemapItemOptionsLoose } from 'sitemap';
import { ITranslationsAdapter } from 'slim-i18n';
import { RouteDescriptor, makeRoutePath, makeRouteLoadFunction } from 'common/utils/router';
import { PageSeoConfig } from 'common/utils/seo';

export const routes: RouteDescriptor[] = [
    {
        id: 'home',
        exact: true,
        rawPath: '/',
        path: makeRoutePath('/'),
        load: makeRouteLoadFunction('home'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            pageName: i18n.gettext('Home'),
            title: i18n.gettext('The friendliest multi-currency crypto wallet.'),
            description: i18n.gettext(
                'We won’t scream how good we are. We won’t beg you to install our application. We do our job. No need to convince — use Plark.',
            ),
            canonicalLink: 'https://plark.io',
            path: '/',
        }),
        getSitemapOption: (): ISitemapItemOptionsLoose => ({
            url: '/',
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
            pageName: i18n.gettext('Mobile Wallet'),
            title: i18n.gettext('Best mobile crypto wallet? Well, Plark.'),
            description: i18n.gettext(
                'No name, no email address, no phone number - you remain completely anonymous. We hide all complexity from your sight to make the stream fresh.',
            ),
            canonicalLink: 'https://plark.io/mobile-wallet',
            path: '/mobile-wallet',
        }),
        getSitemapOption: (): ISitemapItemOptionsLoose => ({
            url: '/mobile-wallet',
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
            pageName: i18n.gettext('iOS Wallet'),
            title: i18n.gettext('Best iOS crypto wallet? Well, Plark.'),
            description: i18n.gettext(
                'There is nothing you need to provide — no name, no phone number, no email. A few taps and you are ready. No complexity at all, we make the flow benign and slight for you.',
            ),
            canonicalLink: 'https://plark.io/ios-wallet',
            path: '/ios-wallet',
        }),
        getSitemapOption: (): ISitemapItemOptionsLoose => ({
            url: '/ios-wallet',
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
            pageName: i18n.gettext('Android Wallet'),
            title: i18n.gettext('Best Android crypto wallet? Well, Plark.'),
            description: i18n.gettext(
                'For real. No regular registration is needed. It will take you about 30 seconds to get in. No need to provide us with your name, phone number or even email.',
            ),
            canonicalLink: 'https://plark.io/android-wallet',
            path: '/android-wallet',
        }),
        getSitemapOption: (): ISitemapItemOptionsLoose => ({
            url: '/android-wallet',
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
            pageName: i18n.gettext('Bitcoin Wallet'),
            title: i18n.gettext('The Best Bitcoin Wallet? Well, Plark.'),
            description: i18n.gettext(
                'When it comes to application usage, we want our users to feel comfortable. That’s why we’ we eliminated all the points that may bother you in any way.',
            ),
            canonicalLink: 'https://plark.io/bitcoin-wallet',
            path: '/bitcoin-wallet',
        }),
        getSitemapOption: (): ISitemapItemOptionsLoose => ({
            url: '/bitcoin-wallet',
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
            pageName: i18n.gettext('Litecoin Wallet'),
            title: i18n.gettext('Litecoin wallet for iOS? Plark.'),
            description: i18n.gettext(
                'Plark team has created a cross-functional application to fulfill all the needs for all cryptocurrency users. Get through the friendliest flow you have ever seen before. Try it, and you will probably call Plark the best wallet for Litecoin.',
            ),
            canonicalLink: 'https://plark.io/litecoin-wallet',
            path: '/litecoin-wallet',
        }),
        getSitemapOption: (): ISitemapItemOptionsLoose => ({
            url: '/litecoin-wallet',
            priority: 0.9,
        }),
    },
    {
        id: 'neo-wallet',
        exact: true,
        rawPath: '/neo-wallet',
        path: makeRoutePath('/neo-wallet'),
        load: makeRouteLoadFunction('neo-wallet'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            pageName: i18n.gettext('NEO Wallet'),
            title: i18n.gettext('NEO wallet for iOS? Plark.'),
            description: i18n.gettext(
                'Plark team has created a cross-functional application to fulfill all the needs for all cryptocurrency users. Get through the friendliest flow you have ever seen before. Try it, and you will probably call Plark the best wallet for Neo.',
            ),
            canonicalLink: 'https://plark.io/neo-wallet',
            path: '/neo-wallet',
        }),
        getSitemapOption: (): ISitemapItemOptionsLoose => ({
            url: '/neo-wallet',
            priority: 0.8,
        }),
    },
    {
        id: 'stellar-wallet',
        exact: true,
        rawPath: '/stellar-wallet',
        path: makeRoutePath('/stellar-wallet'),
        load: makeRouteLoadFunction('stellar-wallet'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            pageName: i18n.gettext('Stellar Wallet'),
            title: i18n.gettext('Stellar wallet for iOS? Plark.'),
            description: i18n.gettext(
                'Plark team has created a cross-functional application to fulfill all the needs for all cryptocurrency users. Get through the friendliest flow you have ever seen before. Try it, and you will probably call Plark the best wallet for stellar.',
            ),
            canonicalLink: 'https://plark.io/stellar-wallet',
            path: '/stellar-wallet',
        }),
        getSitemapOption: (): ISitemapItemOptionsLoose => ({
            url: '/stellar-wallet',
            priority: 0.7,
        }),
    },
    {
        id: 'eos-wallet',
        exact: true,
        rawPath: '/eos-wallet',
        path: makeRoutePath('/eos-wallet'),
        load: makeRouteLoadFunction('eos-wallet'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            pageName: i18n.gettext('EOS Wallet'),
            title: i18n.gettext('EOS wallet for iOS? Plark.'),
            description: i18n.gettext(
                'Plark team has created a cross-functional application to fulfill all the needs for all cryptocurrency users. Get through the friendliest flow you have ever seen before. Try it, and you will probably call Plark the best wallet for eos.',
            ),
            canonicalLink: 'https://plark.io/eos-wallet',
            path: '/eos-wallet',
        }),
        getSitemapOption: (): ISitemapItemOptionsLoose => ({
            url: '/eos-wallet',
            priority: 0.7,
        }),
    },
    {
        id: 'ripple-wallet',
        exact: true,
        rawPath: '/ripple-wallet',
        path: makeRoutePath('/ripple-wallet'),
        load: makeRouteLoadFunction('ripple-wallet'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            pageName: i18n.gettext('Ripple Wallet'),
            title: i18n.gettext('Ripple wallet for iOS? Plark.'),
            description: i18n.gettext(
                'Plark team has created a cross-functional application to fulfill all the needs for all cryptocurrency users. Get through the friendliest flow you have ever seen before. Try it, and you will probably call Plark the best wallet for ripple.',
            ),
            canonicalLink: 'https://plark.io/ripple-wallet',
            path: '/ripple-wallet',
        }),
        getSitemapOption: (): ISitemapItemOptionsLoose => ({
            url: '/ripple-wallet',
            priority: 0.8,
        }),
    },
    {
        id: 'zcash-wallet',
        exact: true,
        rawPath: '/zcash-wallet',
        path: makeRoutePath('/zcash-wallet'),
        load: makeRouteLoadFunction('zcash-wallet'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            pageName: i18n.gettext('Zcash Wallet'),
            title: i18n.gettext('Zcash wallet for iOS? Plark.'),
            description: i18n.gettext(
                'Plark team has created a cross-functional application to fulfill all the needs for all cryptocurrency users. Get through the friendliest flow you have ever seen before. Try it, and you will probably call Plark the best wallet for zcash.',
            ),
            canonicalLink: 'https://plark.io/zcash-wallet',
            path: '/zcash-wallet',
        }),
        getSitemapOption: (): ISitemapItemOptionsLoose => ({
            url: '/zcash-wallet',
            priority: 0.7,
        }),
    },
    {
        id: 'ethereum-wallet',
        exact: true,
        rawPath: '/ethereum-wallet',
        path: makeRoutePath('/ethereum-wallet'),
        load: makeRouteLoadFunction('ethereum-wallet'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            pageName: i18n.gettext('Ethereum Wallet'),
            title: i18n.gettext('Ethereum wallet for iOS? Plark.'),
            description: i18n.gettext(
                'Plark team has created a cross-functional application to fulfill all the needs for all cryptocurrency users. Get through the friendliest flow you have ever seen before. Try it, and you will probably call Plark the best wallet for ethereum.',
            ),
            canonicalLink: 'https://plark.io/ethereum-wallet',
            path: '/ethereum-wallet',
        }),
        getSitemapOption: (): ISitemapItemOptionsLoose => ({
            url: '/ethereum-wallet',
            priority: 0.9,
        }),
    },
    {
        id: 'dash-wallet',
        exact: true,
        rawPath: '/dash-wallet',
        path: makeRoutePath('/dash-wallet'),
        load: makeRouteLoadFunction('dash-wallet'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            pageName: i18n.gettext('Dash Wallet'),
            title: i18n.gettext('Dash wallet for iOS? Plark.'),
            description: i18n.gettext(
                'Plark team has created a cross-functional application to fulfill all the needs for all cryptocurrency users. Get through the friendliest flow you have ever seen before. Try it, and you will probably call Plark the best wallet for dash.',
            ),
            canonicalLink: 'https://plark.io/dash-wallet',
            path: '/dash-wallet',
        }),
        getSitemapOption: (): ISitemapItemOptionsLoose => ({
            url: '/dash-wallet',
            priority: 0.9,
        }),
    },
    {
        id: 'bitcoincash-wallet',
        exact: true,
        rawPath: '/bitcoincash-wallet',
        path: makeRoutePath('/bitcoincash-wallet'),
        load: makeRouteLoadFunction('bitcoincash-wallet'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            pageName: i18n.gettext('Bitcoin Cash Wallet'),
            title: i18n.gettext('Bitcoin Cash wallet for iOS? Plark.'),
            description: i18n.gettext(
                'Plark team has created a cross-functional application to fulfill all the needs for all cryptocurrency users. Get through the friendliest flow you have ever seen before. Try it, and you will probably call Plark the best wallet for bitcoincash.',
            ),
            canonicalLink: 'https://plark.io/bitcoincash-wallet',
            path: '/bitcoincash-wallet',
        }),
        getSitemapOption: (): ISitemapItemOptionsLoose => ({
            url: '/bitcoincash-wallet',
            priority: 0.9,
        }),
    },
    {
        id: 'tron-wallet',
        exact: true,
        rawPath: '/tron-wallet',
        path: makeRoutePath('/tron-wallet'),
        load: makeRouteLoadFunction('tron-wallet'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            pageName: i18n.gettext('Tron Wallet'),
            title: i18n.gettext('Tron wallet for iOS? Plark.'),
            description: i18n.gettext(
                'Plark team has created a cross-functional application to fulfill all the needs for all cryptocurrency users. Get through the friendliest flow you have ever seen before. Try it, and you will probably call Plark the best wallet for tron.',
            ),
            canonicalLink: 'https://plark.io/tron-wallet',
            path: '/tron-wallet',
        }),
        getSitemapOption: (): ISitemapItemOptionsLoose => ({
            url: '/tron-wallet',
            priority: 0.8,
        }),
    },
    {
        id: 'dogecoin-wallet',
        exact: true,
        rawPath: '/dogecoin-wallet',
        path: makeRoutePath('/dogecoin-wallet'),
        load: makeRouteLoadFunction('dogecoin-wallet'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            pageName: i18n.gettext('Dogecoin Wallet'),
            title: i18n.gettext('Dogecoin wallet for iOS? Plark.'),
            description: i18n.gettext(
                'Plark team has created a cross-functional application to fulfill all the needs for all cryptocurrency users. Get through the friendliest flow you have ever seen before. Try it, and you will probably call Plark the best wallet for dogecoin.',
            ),
            canonicalLink: 'https://plark.io/dogecoin-wallet',
            path: '/dogecoin-wallet',
        }),
        getSitemapOption: (): ISitemapItemOptionsLoose => ({
            url: '/dogecoin-wallet',
            priority: 0.8,
        }),
    },
    {
        id: 'cardano-wallet',
        exact: true,
        rawPath: '/cardano-wallet',
        path: makeRoutePath('/cardano-wallet'),
        load: makeRouteLoadFunction('cardano-wallet'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            pageName: i18n.gettext('Cardano Wallet'),
            title: i18n.gettext('Cardano wallet for iOS? Plark.'),
            description: i18n.gettext(
                'Plark team has created a cross-functional application to fulfill all the needs for all cryptocurrency users. Get through the friendliest flow you have ever seen before. Try it, and you will probably call Plark the best wallet for cardano.',
            ),
            canonicalLink: 'https://plark.io/cardano-wallet',
            path: '/cardano-wallet',
        }),
        getSitemapOption: (): ISitemapItemOptionsLoose => ({
            url: '/cardano-wallet',
            priority: 0.9,
        }),
    },
    {
        id: 'iota-wallet',
        exact: true,
        rawPath: '/iota-wallet',
        path: makeRoutePath('/iota-wallet'),
        load: makeRouteLoadFunction('iota-wallet'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            pageName: i18n.gettext('IOTA Wallet'),
            title: i18n.gettext('IOTA wallet for iOS? Plark.'),
            description: i18n.gettext(
                'Plark team has created a cross-functional application to fulfill all the needs for all cryptocurrency users. Get through the friendliest flow you have ever seen before. Try it, and you will probably call Plark the best wallet for iota.',
            ),
            canonicalLink: 'https://plark.io/iota-wallet',
            path: '/iota-wallet',
        }),
        getSitemapOption: (): ISitemapItemOptionsLoose => ({
            url: '/iota-wallet',
            priority: 0.9,
        }),
    },
    {
        id: 'monero-wallet',
        exact: true,
        rawPath: '/monero-wallet',
        path: makeRoutePath('/monero-wallet'),
        load: makeRouteLoadFunction('monero-wallet'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            pageName: i18n.gettext('Monero Wallet'),
            title: i18n.gettext('Monero wallet for iOS? Plark.'),
            description: i18n.gettext(
                'Plark team has created a cross-functional application to fulfill all the needs for all cryptocurrency users. Get through the friendliest flow you have ever seen before. Try it, and you will probably call Plark the best wallet for monero.',
            ),
            canonicalLink: 'https://plark.io/monero-wallet',
            path: '/monero-wallet',
        }),
        getSitemapOption: (): ISitemapItemOptionsLoose => ({
            url: '/monero-wallet',
            priority: 0.7,
        }),
    },
    {
        id: 'contact-us',
        exact: true,
        rawPath: '/contact-us',
        path: makeRoutePath('/contact-us'),
        load: makeRouteLoadFunction('contact-us'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            pageName: i18n.gettext('Contact us'),
            title: i18n.gettext('Stay in touch with a Plark team'),
            description: i18n.gettext('Stay in touch. Plark Staff will never ask for personal information, including a 12-word phrase.'),
            canonicalLink: 'https://plark.io/contact-us',
            path: '/contact-us',
        }),
        getSitemapOption: (): ISitemapItemOptionsLoose => ({
            url: '/contact-us',
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
            pageName: i18n.gettext('About us'),
            title: i18n.gettext('We make crypto simpler for you and his name is Plark'),
            description: i18n.gettext('Add your credit or debit card and purchase Bitcoin, Litecoin, Ethereum, and Dash right away. The feature, which best crypto wallet should have.'),
            canonicalLink: 'https://plark.io/about-us',
            path: '/about-us',
        }),
        getSitemapOption: (): ISitemapItemOptionsLoose => ({
            url: '/about-us',
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
            pageName: i18n.gettext('FAQ'),
            title: i18n.gettext('Frequently Asked Questions'),
            description: i18n.gettext('How can I send cryptocurrency? What is cryptocurrency address? Popular frequently asked questions. Ask your question and get a quick answer on Plark.io.'),
            canonicalLink: 'https://plark.io/faq',
            path: '/faq',
        }),
        getSitemapOption: (): ISitemapItemOptionsLoose => ({
            url: '/faq',
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
            pageName: i18n.gettext('Privacy Policy'),
            title: i18n.gettext('Privacy Policy'),
            description: i18n.gettext('Privacy Policy of Plark.io'),
            canonicalLink: 'https://plark.io/privacy',
            path: '/privacy',
        }),
        getSitemapOption: (): ISitemapItemOptionsLoose => ({
            url: '/privacy',
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
            pageName: i18n.gettext('Terms & Conditions'),
            title: i18n.gettext('Terms & Conditions'),
            description: i18n.gettext('Terms & Conditions of Plark.io'),
            canonicalLink: 'https://plark.io/terms',
            path: '/terms',
        }),
        getSitemapOption: (): ISitemapItemOptionsLoose => ({
            url: '/terms',
            priority: 0.8,
        }),
    },
    {
        id: 'sitemap',
        exact: true,
        rawPath: '/sitemap',
        path: makeRoutePath('/sitemap'),
        load: makeRouteLoadFunction('sitemap'),
        getSeoConfig: (i18n: ITranslationsAdapter): PageSeoConfig => ({
            title: i18n.gettext('Plark Sitemap'),
            description: i18n.gettext('Plark Sitemap'),
            canonicalLink: 'https://plark.io/sitemap',
            path: '/sitemap',
        }),
        getSitemapOption: (): ISitemapItemOptionsLoose => ({
            url: '/sitemap',
            priority: 0.5,
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
