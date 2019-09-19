import React from 'react';
import { useI18n } from 'slim-i18n';
import PlarkLogo from 'resources/svgs/plark-logo.component.svg';
import PlatformList from 'common/utils/install-platforms';
import { Section, StoreBadge, NavLink, Socials } from 'common/components';

import FooterColumn from './footer-column.component';

import styles from './footer.scss';

export default function Footer(): JSX.Element {
    const i18n = useI18n();

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

                    <div style={{ width: '170px' }}>
                        <StoreBadge platform={PlatformList.apple} height={40} />
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

                    <a href="/sitemap.xml" className={styles.navLink}>
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
