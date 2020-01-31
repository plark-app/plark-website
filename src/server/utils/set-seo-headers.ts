import { SEO_HOST } from 'common/utils/seo';
import { getLocales, Locale, DEFAULT_LOCALE } from 'common/utils/locale';

function renderLocaleSegment(locale: string): string {
    if (locale === DEFAULT_LOCALE) {
        return '';
    }

    return '/' + locale;
}

export function setHeaderLinks(path: string, currentLocale: string): string[] | string {
    const linksData: string[] = [];
    linksData.push(`<${SEO_HOST}${renderLocaleSegment(currentLocale)}${path}>; rel="canonical"`);

    getLocales().map((locale: Locale) => {
        if (locale.code !== currentLocale) {
            linksData.push(`<${SEO_HOST}${renderLocaleSegment(locale.code)}${path}>; rel="alternate"; hreflang="${locale.shortCode}"`);
        }
    });

    return linksData;
}
