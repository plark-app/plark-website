import React from 'react';
import moment from 'moment';
import cn from 'classnames';
import { useI18n } from 'slim-i18n';
import PlatformList from 'common/utils/install-platforms';
import { Section, StoreBadge, NavLink, menuRoutes, IMenuRoute, IMenuRouteLink, Socials } from 'common/components';
import PlarkLogo from 'resources/svgs/plark-logo.component.svg';
import FooterColumn from './footer-column.component';

import styles from './footer.scss';

export default function Footer(): JSX.Element {
    const i18n = useI18n();

    const [copyrightYears] = React.useState(() => {
        const needYear = '2018';
        const currentYear = moment().format('Y');

        if (currentYear === needYear) {
            return currentYear;
        }

        return needYear + ' - ' + currentYear;
    });

    return (
        <footer>
            <Section className={styles.footer} contentClassName={styles.footerContent}>
                <div className={styles.footerMain}>
                    {menuRoutes.map((column: IMenuRoute, i: number) => {
                        if (column.columnType === 'hide_in_footer') {
                            return null;
                        }
                        return (
                            <FooterColumn
                                title={column.title(i18n)}
                                key={i}
                                opened={column.columnType === 'get_in_touch'}
                            >
                                <>
                                    <ColumnLinks links={column.links} />
                                    {column.columnType === 'get_in_touch' && <Socials className={styles.footerSocial} />}
                                </>
                            </FooterColumn>
                        );
                    })}
                </div>

                <div className={styles.footerSecond}>
                    <PlarkLogo height={25} className={styles.footerLogo} />
                    <div className={styles.footerSecondStoreContainer}>
                        <StoreBadge
                            className={styles.footerBadge}
                            platform={PlatformList.apple}
                            height={40}
                            alt={i18n.gettext('Install cryptocurrency wallet from App Store')}
                            title={i18n.gettext('Plark cryptocurrency wallet in App Store')}
                        />
                    </div>
                </div>
            </Section>

            <Section className={styles.bottomBar} contentClassName={styles.bottomBarContent}>
                <nav className={styles.bottomBarNav}>
                    <span className={styles.navLink}>Plark @ {copyrightYears}</span>
                    <NavLink to="/privacy" className={styles.navLink}>
                        {i18n.gettext('Privacy')}
                    </NavLink>

                    <NavLink to="/terms" className={styles.navLink}>
                        {i18n.gettext('Terms')}
                    </NavLink>

                    <NavLink to="/sitemap" className={styles.navLink}>
                        {i18n.gettext('Sitemap')}
                    </NavLink>
                </nav>

                <nav className={styles.bottomBarNav}>
                    <NavLink to="/" className={styles.navLink}>
                        English (United States)
                    </NavLink>
                    <NavLink to="/uk-ua" className={styles.navLink}>
                        Українська
                    </NavLink>
                    <NavLink to="/ru-ru" className={styles.navLink}>
                        Русский
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
                        <div key={i}>
                            <a key={i}
                               href={link.to}
                               className={styles.navLink}
                               target={link.noBlank ? undefined : '_blank'}
                               rel={link.rel}
                            >
                                {link.text(i18n)}
                                {link.additional && link.additional}
                            </a>
                        </div>
                    );
                }

                return (
                    <div key={i}>
                        <NavLink key={i} to={link.to} className={styles.navLink}>
                            <span className={styles.navLinkContent}>{link.text(i18n)}</span>
                            {link.comingSoon ? (
                                <span className={cn(styles.navLinkContent, styles.navLinkSoon)}>(coming soon)</span>
                            ) : undefined}
                        </NavLink>
                    </div>
                );
            })}
        </>
    );
}
