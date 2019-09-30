import { TranslateFunction, __ } from 'common/i18n/i18n';

export interface IMenuRouteLink {
    to: string;
    text: TranslateFunction;
    additional?: JSX.Element;
    source?: 'external';
}

export interface IMenuRoute {
    title: TranslateFunction;
    links: IMenuRouteLink[];
    columnType?: 'get_in_touch' | 'hide_in_footer';
}

const cryptoCurrencies: IMenuRouteLink[] = [
    {
        to: '/bitcoin-wallet',
        text: __('Bitcoin'),
    },
    {
        to: '/bitcoincash-wallet',
        text: __('Bitcoin Cash'),
    },
    {
        to: '/cardano-wallet',
        text: __('Cardano'),
    },
    {
        to: '/dash-wallet',
        text: __('Dash'),
    },
    {
        to: '/dogecoin-wallet',
        text: __('Dogecoin'),
    },

    {
        to: '/eos-wallet',
        text: __('EOS'),
    },
    {
        to: '/ethereum-wallet',
        text: __('Ethereum'),
    },
    {
        to: '/iota-wallet',
        text: __('IOTA'),
    },
    {
        to: '/litecoin-wallet',
        text: __('Litecoin'),
    },
    {
        to: '/monero-wallet',
        text: __('Monero'),
    },
    {
        to: '/neo-wallet',
        text: __('NEO'),
    },
    {
        to: '/ripple-wallet',
        text: __('Ripple'),
    },
    {
        to: '/stellar-wallet',
        text: __('Stellar'),
    },
    {
        to: '/tron-wallet',
        text: __('Tron'),
    },
    {
        to: '/zcash-wallet',
        text: __('Zcash'),
    },
];

export const menuRoutes: IMenuRoute[] = [
    {
        title: __('Product'),
        links: [
            {
                to: '/ios-wallet',
                text: __('Plark for iOS'),
            },
            {
                to: '/android-wallet',
                text: __('Plark for Android (coming soon)'),
            },
            {
                to: '/bitcoin-wallet',
                text: __('Plark for Bitcoin'),
            },
            {
                to: '/mobile-wallet',
                text: __('Mobile Wallet'),
            },
        ],
    },
    {
        title: __('Company'),
        links: [
            {
                to: '/about-us',
                text: __('About us'),
            },
            {
                to: '/contact-us',
                text: __('Contact us'),
            },
            // {
            //     to: '/carriers',
            //     text: __('Carriers'),
            // },
        ],
    },
    {
        title: __('Learn'),
        links: [
            {
                to: 'https://community.plark.io',
                text: __('Community'),
                source: 'external',
            },
            {
                to: '/blog',
                text: __('Blog'),
            },
            {
                to: '/faq',
                text: __('FAQs'),
            },
        ],
    },
    {
        title: __('Cryptocurrencies'),
        links: cryptoCurrencies,
        columnType: 'hide_in_footer',
    },
    {
        title: __('Social'),
        links: [
            {
                to: 'https://t.me/PlarkWallet',
                text: __('Telegram'),
                source: 'external',
            },
            {
                to: 'https://www.facebook.com/plark.io/',
                text: __('Facebook'),
                source: 'external',
            },
            {
                to: 'https://twitter.com/PlarkWallet',
                text: __('Twitter'),
                source: 'external',
            },
            {
                to: 'https://www.reddit.com/r/plark',
                text: __('Reddit'),
                source: 'external',
            },
            {
                to: 'https://github.com/plark-app',
                text: __('GitHub'),
                source: 'external',
            },
            {
                to: 'https://www.producthunt.com/posts/plark-crypto-wallet',
                text: __('Product Hunt'),
                source: 'external',
            },
        ],
    },
    {
        title: __('Get in touch'),
        links: [
            {
                to: 'mailto:info@plark.io',
                text: __('info@plark.io'),
                source: 'external',
            },
        ],
        columnType: 'get_in_touch',
    },
];
