import React from 'react';
import { compose } from 'recompose';
import Helmet from 'react-helmet';
import { withRouter, RouteComponentProps } from 'react-router';
import { withTranslations, WithTranslationsProps } from 'slim-i18n';
import { SEO_HOST } from './utils';

type BreadcrumbOuterProps = {
    secondItem?: string;
};

type BreadcrumbProps
    = BreadcrumbOuterProps
    & WithTranslationsProps
    & RouteComponentProps<object>;

const buildItem = (path: string, name: string, position: number) => {
    return {
        '@type': 'ListItem',
        position: position,
        item: {
            '@id': SEO_HOST + path,
            name: name,
        },
    };
};

// tslint:disable:no-http-string
const Breadcrumbs = React.memo(function Breadcrumbs({ i18n, secondItem, location }: BreadcrumbProps): JSX.Element {
    const listItem = [buildItem('/', i18n.gettext('Home'), 1)];
    if (secondItem) {
        listItem.push(buildItem(location.pathname, secondItem, 2));
    }

    const data = {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: listItem,
    };

    return (
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(data)}</script>
        </Helmet>
    );
});

export default compose<BreadcrumbProps, BreadcrumbOuterProps>(
    withRouter,
    withTranslations,
)(Breadcrumbs);
