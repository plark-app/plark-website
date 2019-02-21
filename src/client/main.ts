import 'babel-polyfill';

import createBrowserHistory from 'history/createBrowserHistory';
import { requestIdleCallback } from 'idle-callback';
import { getActiveRoute, RouteDescriptor, getRouteLocale } from 'common/utils/router';
import { routes } from 'common/routes';
import App from 'common/app';
import I18N from 'common/i18n';
import { render } from './render';

(async () => {
    const rootElement = document.getElementById('app');
    const currentPath = window.location.pathname;
    const activeRoute: RouteDescriptor | null = getActiveRoute(currentPath, routes);
    if (activeRoute === null) {
        console.error('Nothing match');
        return;
    }

    window.__initData.components = {
        [activeRoute.id]: await activeRoute.load(),
    };

    // handle i18n language init
    const i18nInstance = new I18N();
    const locale = getRouteLocale(currentPath);
    await i18nInstance.setLanguage(locale);

    // handle navigation change language
    const history = createBrowserHistory();

    i18nInstance.onLanguageChanged(() => {
        requestIdleCallback(() =>
            render({
                rootElement: rootElement,
                history: history,
                i18n: i18nInstance.getI18n(),
                AppComponent: App,
            }),
        );
    });

    render({
        rootElement: rootElement,
        history: history,
        i18n: i18nInstance.getI18n(),
        AppComponent: App,
    });
})();
