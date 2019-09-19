import React from 'react';
import { useI18n } from 'slim-i18n';
import { routes } from 'common/routes';
import { CommonRouteDescriptor } from 'common/utils/router';
import { Footer, Header, NavLink, Section, Topic } from 'common/components';
import styles from './sitemap.scss';

export default function SitemapPage() {
    const i18n = useI18n();

    return (
        <>
            <Header isWhite={true} />

            <Section>
                <Topic
                    titleText={i18n.gettext('Sitemap')}
                    titleTag="h1"
                />

                <div className={styles.container}>
                    {routes.map((route: CommonRouteDescriptor) => {
                        const seoConfig = route.getSeoConfig && route.getSeoConfig(i18n);

                        if (!seoConfig || !route.getSitemapOption) {
                            return;
                        }

                        return (
                            <div key={route.id} className={styles.link}>
                                <NavLink to={route.path} className={styles.linkUrl}>
                                    {seoConfig.pageName || seoConfig.title}
                                </NavLink>
                                <p className={styles.linkDescription}>{seoConfig.description}</p>
                            </div>
                        );
                    })}
                </div>
            </Section>

            <Footer />
        </>
    );
}
