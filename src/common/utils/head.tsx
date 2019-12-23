import React from 'react';
import { isFragment } from 'react-is';
import Helmet from 'react-helmet';
import { ITranslationsAdapter, useI18n } from 'slim-i18n';
import { RouteHeadRenderFn } from './router/router';
import { DEFAULT_LOCALE } from './locale';
import {
    OpenGraph,
    PageSeoConfig,
    getStructuredData,
    Breadcrumbs,
} from './seo';

const defaultSeoConfig = {
    title: 'The friendliest multi-currency crypto wallet.',
    description: 'We won’t scream how good we are. We won’t beg you to install our application. We do our job. No need to convince — use Plark.',
};

export default function Head({ children: render, getSeoConfig }: HeadProps) {
    const i18n = useI18n();
    const children: React.ReactElement<object>[] = [];
    const seoConfig: PageSeoConfig
        = Object.assign({}, defaultSeoConfig, getSeoConfig ? getSeoConfig(i18n) : {});

    if (render !== undefined) {
        // @ts-ignore
        React.Children.forEach(render({ i18n }), (child: React.ReactChild) => {
            if (typeof child === 'string' || typeof child === 'number') {
                return;
            }

            if (isFragment(child)) {
                children.push(...child.props.children);

                return;
            }

            children.push(child);
        });
    }

    return (
        <>
            <Helmet encodeSpecialCharacters={false} title={seoConfig.title}>
                <html lang={i18n.languageCode} />
                <meta name="Content-Language" content={i18n.languageCode} />
                <meta name="description" content={seoConfig.description} />
                {/*{seoConfig.path !== undefined ? getHrefLangUrls(seoConfig.path) : null}*/}
                {(seoConfig.canonicalLink !== undefined && i18n.language !== DEFAULT_LOCALE)
                    ? <link rel="canonical" href={seoConfig.canonicalLink} />
                    : null
                }
                {seoConfig.robotsRule && <meta name="robots" content={seoConfig.robotsRule} />}

                {React.Children.map(children, (child: React.ReactChild, key: number) => {
                    if (typeof child === 'string' || typeof child === 'number') {
                        return;
                    }

                    return React.cloneElement(child, { key });
                })}

                {getStructuredData({
                    i18n: i18n,
                    description: seoConfig.description as string,
                })}
            </Helmet>

            <OpenGraph title={seoConfig.title} description={seoConfig.description as string} />
            <Breadcrumbs secondItem={seoConfig.pageName} />
        </>
    );
};


export type HeadProps = {
    children?: RouteHeadRenderFn;
    getSeoConfig?: (i18n: ITranslationsAdapter) => PageSeoConfig;
};
