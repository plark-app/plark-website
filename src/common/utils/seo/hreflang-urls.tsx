import React from 'react';
import { SEO_HOST } from './utils';

export const getHrefLangUrls = (path: string) => [
    <link key="en-us" rel="alternate" href={`${SEO_HOST}${path}`} hrefLang="en-us" />,
    <link key="uk-ua" rel="alternate" href={`${SEO_HOST}/uk-ua${path}`} hrefLang="uk-ua" />,
    <link key="es-es" rel="alternate" href={`${SEO_HOST}/es-es${path}`} hrefLang="es-es" />,
    <link key="ru-ru" rel="alternate" href={`${SEO_HOST}/ru-ru${path}`} hrefLang="ru-ru" />,
];
