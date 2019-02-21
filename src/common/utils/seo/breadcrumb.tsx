import React from 'react';
import { compose } from 'recompose';
import Helmet from 'react-helmet';
import { withRouter, RouteComponentProps } from 'react-router';
import { withTranslations, WithTranslationsProps } from 'slim-i18n';
import { SEO_HOST } from './utils';

const buildItem = (path: string, name: string) => {
    return {
        '@id': SEO_HOST + path,
        name: name,
    };
};

// tslint:disable:no-http-string
const Breadcrumbs = ({ i18n, secondItem, location }: BreadcrumbProps): JSX.Element => {
    const listItem = [buildItem('/', i18n.gettext('Home'))];
    if (secondItem) {
        listItem.push(buildItem(location.pathname, secondItem));
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
};

type BreadcrumbOuterProps = {
    secondItem?: string;
};
type BreadcrumbProps = BreadcrumbOuterProps & WithTranslationsProps & RouteComponentProps<object>;

export default compose<BreadcrumbProps, BreadcrumbOuterProps>(
    withRouter,
    withTranslations,
)(Breadcrumbs);
