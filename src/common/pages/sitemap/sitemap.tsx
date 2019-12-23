import React from 'react';
import { useI18n } from 'slim-i18n';

import { Footer, Header, NavLink, Section, Topic, IMenuRoute, IMenuRouteLink, menuRoutes } from 'common/components';
import styles from './sitemap.scss';

export default function SitemapPage(): JSX.Element {
    const i18n = useI18n();

    return (
        <>
            <Header isWhite={true} />

            <Section withLeftPadding>
                <Topic className={styles.sitemapTopic} titleText={i18n.gettext('Sitemap')} titleTag="h1" />

                <div className={styles.container}>
                    {menuRoutes.map((route: IMenuRoute, i: number) => {
                        if (route.columnType === 'get_in_touch') {
                            return null;
                        }
                        return (
                            <div key={i} className={styles.containerColumn}>
                                <h3 className={styles.containerColumnTitle}>{route.title(i18n)}</h3>
                                <div className={styles.containerColumnLinks}>
                                    {route.links.map((link: IMenuRouteLink, j: number) => {
                                        return (
                                            <div key={j} className={styles.containerColumnItem}>
                                                {link.source === 'external' ? (
                                                    <a
                                                        href={link.to}
                                                        className={styles.containerColumnLink}
                                                        target={'_blank'}
                                                    >
                                                        {link.text(i18n)}
                                                        {link.additional && link.additional}
                                                    </a>
                                                ) : (
                                                    <NavLink
                                                        to={link.to}
                                                        className={styles.containerColumnLink}
                                                    >
                                                        {link.text(i18n)}
                                                    </NavLink>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Section>

            <Footer />
        </>
    );
}
