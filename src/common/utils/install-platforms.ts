import { faApple, faChrome, IconDefinition } from '@fortawesome/free-brands-svg-icons';

export type PlatformType
    = 'apple'
    | 'android'
    | 'chrome'
    | 'firefox'
    | 'opera'
    | 'safari';

export type Platform = {
    key: PlatformType;
    icon: IconDefinition;
    url: string;
    badge: string;
};

export default {
    apple: {
        key: 'apple',
        icon: faApple,
        url: 'https://itunes.apple.com/app/id1455862890',
        badge: '/img/store/app-store.svg',
    },
    chrome: {
        key: 'chrome',
        icon: faChrome,
        url: 'https://chrome.google.com/webstore/detail/berrywallet/boidgcdefidhoojfljngigkjffbodjmn',
        badge: '/img/store/chrome-web-store.svg',
    },
} as Record<PlatformType, Platform>;