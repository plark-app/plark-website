import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { History } from 'history';

import { ITranslationsAdapter, TranslationsProvider } from 'slim-i18n';

export type RenderParams = {
    rootElement: Element | null;
    history: History;
    i18n: ITranslationsAdapter;
    AppComponent: React.ComponentType;
};

export function render(params: RenderParams): void {
    const { rootElement, history, i18n, AppComponent } = params;

    if (process.env.NODE_ENV !== 'production') {
        ReactDOM.render(
            <Router history={history}>
                <HelmetProvider>
                    <TranslationsProvider value={i18n}>
                        <AppComponent />
                    </TranslationsProvider>
                </HelmetProvider>
            </Router>,
            rootElement,
        );
    } else {
        ReactDOM.hydrate(
            <Router history={history}>
                <HelmetProvider>
                    <TranslationsProvider value={i18n}>
                        <AppComponent />
                    </TranslationsProvider>
                </HelmetProvider>
            </Router>,
            rootElement,
        );
    }
}
