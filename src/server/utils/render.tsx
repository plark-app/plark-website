import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, StaticRouterContext } from 'react-router';
import cssnano from 'cssnano';
import { logger } from 'server/utils/logger';
import { flush } from 'isomorphic-styles/lib/loader/collect-styles';
import { TranslationsProvider, ITranslationsAdapter } from 'slim-i18n';

export type ServerRenderingContext = {
    components: Record<string, React.ComponentType>;
    redirectUrl?: string;
    statusCode?: number;
} & StaticRouterContext;

export type RenderParams = {
    location: string;
    context: ServerRenderingContext;
    i18n: ITranslationsAdapter;
    AppComponent: React.ComponentType;
};

export type RenderResult = {
    markup: string;
    criticalCss?: string;
};

export async function render(params: RenderParams): Promise<RenderResult> {
    const { location, context, i18n, AppComponent } = params;

    ReactDOMServer.renderToString(
        <StaticRouter location={location} context={context}>
            <TranslationsProvider value={i18n}>
                <AppComponent />
            </TranslationsProvider>
        </StaticRouter>,
    );

    await loadDependencies(context);

    const markup = ReactDOMServer.renderToString(
        <StaticRouter location={location} context={context}>
            <TranslationsProvider value={i18n}>
                <AppComponent />
            </TranslationsProvider>
        </StaticRouter>,
    );

    let criticalCss = flush(1024 * 70);
    logger.debug(`Critical CSS size: ${criticalCss.length}, location: ${location}`);
    criticalCss = await compressCss(criticalCss);
    logger.debug(`Compressed Critical CSS size: ${criticalCss.length}`);

    return { markup, criticalCss };
}

async function loadDependencies(context: ServerRenderingContext): Promise<void> {
    const keys = Object.keys(context.components);
    const promises = keys.map((key: string) => context.components[key]);
    const resolved = await Promise.all(promises);
    resolved.forEach((result: React.ComponentType, i: number) => (context.components[keys[i]] = result));
}

async function compressCss(css: string): Promise<string> {
    return new Promise((res: (str: string) => void, rej: (err: Error) => void) => {
        // tslint:disable-next-line:no-any
        cssnano.process(css, { from: undefined }).then((r: any) => res(r.toString()), rej);
    });
}
