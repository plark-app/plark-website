import React from 'react';
import { ITranslationsAdapter } from 'slim-i18n';
import { SEO_HOST } from './utils';

// tslint:disable:no-http-string
export const getStructuredData = (props: OpenGraphProps): React.ReactNode => {
    const { description, i18n } = props;

    const data = {
        '@context': 'http://schema.org',
        '@type': 'Organization',
        name: 'Unicheck',
        description: description,
        image: `${SEO_HOST}/images/${i18n.language}/open-graph.jpg`,
        logo: `${SEO_HOST}/images/logo.png`,
        url: SEO_HOST,
        telephone: '+1 281 912 0548 (US)',
        sameAs: [
            'https://www.facebook.com/Unplag',
            'https://twitter.com/unplag',
            'https://www.linkedin.com/company/4849185',
        ],
        email: 'support@unicheck.com',
    };

    return <script type="application/ld+json">{JSON.stringify(data)}</script>;
};

type OpenGraphProps = {
    description: string;
    i18n: ITranslationsAdapter;
};
