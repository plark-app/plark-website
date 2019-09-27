import React from 'react';
import { useI18n } from 'slim-i18n';

import PlatformList from 'common/utils/install-platforms';
import { Section, StoreBadge, NavLink, menuRoutes, IMenuRoute, IMenuRouteLink, Socials } from 'common/components';

import PlarkLogo from 'resources/svgs/plark-logo.component.svg';

import FooterColumn from './footer-column.component';

import styles from './footer.scss';

export default function Footer(): JSX.Element {
    const i18n = useI18n();
    return (
        <footer>
            <Section className={styles.footer} contentClassName={styles.footerContent}>
                <div className={styles.footerMain}>
                    {menuRoutes.map((column: IMenuRoute, i: number) => {
                        return (
                            <FooterColumn
                                title={column.title(i18n)}
                                key={i}
                                opened={column.columnType === 'get_in_touch'}
                            >
                                <>
                                    <ColumnLinks links={column.links} />
                                    {column.columnType === 'get_in_touch' && <Socials />}
                                </>
                            </FooterColumn>
                        );
                    })}
                </div>

                <div className={styles.footerSecond}>
                    <PlarkLogo height={25} className={styles.footerLogo} />
                    <div>
                        <StoreBadge className={styles.footerBadge} platform={PlatformList.apple} height={40} />
                    </div>
                </div>
            </Section>

            <Section className={styles.bottomBar} contentClassName={styles.bottomBarContent}>
                <nav className={styles.bottomBarNav}>
                    <span className={styles.navLink}>Plark @ 2019</span>
                    <NavLink to="/privacy" className={styles.navLink}>
                        {i18n.gettext('Privacy')}
                    </NavLink>

                    <NavLink to="/terms" className={styles.navLink}>
                        {i18n.gettext('Terms')}
                    </NavLink>

                    <a href="/sitemap" className={styles.navLink}>
                        Sitemap
                    </a>
                </nav>

                <nav className={styles.bottomBarNav}>
                    <NavLink to="/" className={styles.navLink}>
                        English (United States)
                    </NavLink>
                </nav>
            </Section>
        </footer>
    );
}

type ColumnLinksProps = {
    links: IMenuRouteLink[];
};

function ColumnLinks({ links }: ColumnLinksProps): JSX.Element {
    const i18n = useI18n();
    return (
        <>
            {links.map((link: IMenuRouteLink, i: number) => {
                if (link.source === 'external') {
                    return (
                        <a key={i} href={link.to} className={styles.navLink} target={'_blank'}>
                            {link.text(i18n)}
                            {link.additional && link.additional}
                        </a>
                    );
                }
                return (
                    <NavLink key={i} to={link.to} className={styles.navLink}>
                        {link.text(i18n)}
                    </NavLink>
                );
            })}
        </>
    );
}
