import Icons from 'common/components/icons';

export type PlatformType
    = 'apple'
    | 'android'
    | 'chrome'
    | 'firefox'
    | 'opera'
    | 'safari';

export type Platform = {
    key: PlatformType;
    name: string;
    icon: any;
    url: string;
    badge: string;
};

export default {
    apple: {
        key: 'apple',
        name: 'AppStore',
        icon: Icons.Apple as any,
        url: 'https://dl.plark.io/app/website-appstore',
        badge: '/img/store/app-store.svg',
    },
    chrome: {
        key: 'chrome',
        name: 'Chrome',
        icon: Icons.Chrome as any,
        url: 'https://chrome.google.com/webstore/detail/plark/jgboighcjegimmmjkclbniaddfakallg',
        badge: '/img/store/chrome-web-store.svg',
    },
} as Record<PlatformType, Platform>;
