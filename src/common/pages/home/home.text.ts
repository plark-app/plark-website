import { __, TranslateFunction } from 'common/i18n';

export const preIntroTitle = __('Safest multi-currency crypto wallet');
export const introTitle = __('Someone should have done this already.');

export const platformTitle = __('Available on iOS & Google Chrome');
export const download: Record<string, TranslateFunction> = {
    apple: __('Download for iOS'),
    android: __('Download for Android'),
    chrome: __('Download for Chrome'),
    firefox: __('Download for Firefox'),
};

export const ceoCitation = __(
    'We make it easy to purchase bitcoin using a variety of methods, including credit card, in-person purchases at a bitcoin ATM, or a store.',
);
