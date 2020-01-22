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
                    <FooterColumn title={i18n.gettext('Product')}>
                        <NavLink to="/ios-wallet" className={styles.navLink}>
                            {i18n.gettext('Plark for iOS')}
                        </NavLink>
                        <NavLink to="/android-wallet" className={styles.navLink}>
                            {i18n.gettext('Plark for Android')} <span style={{ fontSize: 10 }}>(coming soon)</span>
                        </NavLink>
                        <NavLink to="/bitcoin-wallet" className={styles.navLink}>
                            {i18n.gettext('Plark for Bitcoin')}
                        </NavLink>
                        <NavLink to="/mobile-wallet" className={styles.navLink}>
                            {i18n.gettext('Mobile Wallet')}
                        </NavLink>
                    </FooterColumn>

                    <FooterColumn title={i18n.gettext('Company')}>
                        <NavLink to="/about-us" className={styles.navLink}>
                            {i18n.gettext('About us')}
                        </NavLink>
                        <NavLink to="/contact-us" className={styles.navLink}>
                            {i18n.gettext('Contact Us')}
                        </NavLink>
                        {/*<NavLink to="/carriers" className={styles.navLink}>*/}
                        {/*    {i18n.gettext('Carriers')}*/}
                        {/*</NavLink>*/}
                    </FooterColumn>

                    <FooterColumn title={i18n.gettext('Learn')}>
                        <a href="https://community.plark.io" className={styles.navLink}>
                            {i18n.gettext('Community')}
                        </a>
                        <a href="/blog" className={styles.navLink}>
                            {i18n.gettext('Blog')}
                        </a>
                        <NavLink to="/faq" className={styles.navLink}>
                            {i18n.gettext('FAQs')}
                        </NavLink>
                    </FooterColumn>

                    <FooterColumn title={i18n.gettext('Social')}>
                        <a href="https://t.me/PlarkWallet" target="_blank" className={styles.navLink}>
                            Telegram
                        </a>
                        <a href="https://www.facebook.com/plark.io/" target="_blank" className={styles.navLink}>
                            Facebook
                        </a>
                        <a href="https://twitter.com/PlarkWallet" target="_blank" className={styles.navLink}>
                            Twitter
                        </a>
                        <a href="https://www.reddit.com/r/plark" target="_blank" className={styles.navLink}>
                            Reddit
                        </a>
                        <a href="https://github.com/plark-app" target="_blank" className={styles.navLink}>
                            GitHub
                        </a>
                        <a
                            href="https://www.producthunt.com/posts/plark-crypto-wallet"
                            target="_blank"
                            className={styles.navLink}
                        >
                            Product Hunt
                        </a>
                    </FooterColumn>

                    <FooterColumn title={i18n.gettext('Get in touch')} style={{ width: '170px' }}>
                        <a href="mailto:hi@plark.io" target="_blank" className={styles.navLink}>
                            hi@plark.io
                        </a>
                        <Socials />
                    </FooterColumn>
                </div>

                <div className={styles.footerSecond}>
                    <PlarkLogo height={25} className={styles.footerLogo} />
                    <div className={styles.footerSecondStoreContainer}>
                        <StoreBadge
                            className={styles.footerBadge}
                            platform={PlatformList.apple}
                            height={40}
                            alt="Install cryptocurrency wallet from App Store"
                            title="Plark cryptocurrency wallet in App Store"
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
