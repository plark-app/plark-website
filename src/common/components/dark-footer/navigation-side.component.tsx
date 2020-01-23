import React from 'react';
import { useI18n } from 'slim-i18n';
import { NavLink } from 'common/components';
import { NavigationColumn } from './navigation-column';
import styles from './dark-footer.scss';

export function NavigationSide(): JSX.Element {
    const i18n = useI18n();

    return (
        <div className={styles.navSide}>
            <div className={styles.navSideColumn}>
                <NavigationColumn title={i18n.gettext('sitemap')}>
                    <NavLink className={styles.mainLink} to="/ios-wallet">
                        {i18n.gettext('Plark for iOS')}
                    </NavLink>
                    <NavLink to="/android-wallet" className={styles.mainLink}>
                        {i18n.gettext('Plark for Android')} <span style={{ fontSize: 10 }}>(coming soon)</span>
                    </NavLink>
                    <NavLink to="/mobile-wallet" className={styles.mainLink}>
                        {i18n.gettext('Mobile Wallet')}
                    </NavLink>
                    <NavLink to="/bitcoin-wallet" className={styles.mainLink}>
                        {i18n.gettext('Plark for Bitcoin')}
                    </NavLink>
                    <NavLink to="/litecoin-wallet" className={styles.mainLink}>
                        {i18n.gettext('Plark for Litecoin')}
                    </NavLink>

                    <NavLink to="/dogecoin-wallet" className={styles.mainLink}>
                        {i18n.gettext('Dogecoin Wallet')} <span style={{ fontSize: 10 }}>(coming soon)</span>
                    </NavLink>
                    <NavLink to="/ripple-wallet" className={styles.mainLink}>
                        {i18n.gettext('Ripple Wallet')} <span style={{ fontSize: 10 }}>(coming soon)</span>
                    </NavLink>
                    <NavLink to="/monero-wallet" className={styles.mainLink}>
                        {i18n.gettext('Monero Wallet')} <span style={{ fontSize: 10 }}>(coming soon)</span>
                    </NavLink>
                    <NavLink to="/iota-wallet" className={styles.mainLink}>
                        {i18n.gettext('IOTA Wallet')} <span style={{ fontSize: 10 }}>(coming soon)</span>
                    </NavLink>
                    <NavLink to="/zcash-wallet" className={styles.mainLink}>
                        {i18n.gettext('Zcash Wallet')} <span style={{ fontSize: 10 }}>(coming soon)</span>
                    </NavLink>
                </NavigationColumn>
            </div>

            <div className={styles.navSideColumn}>
                <NavigationColumn title={i18n.gettext('support')}>
                    <a href="mailto:support@plark.io" className={styles.mainLink} target="_blank">
                        support@plark.io
                    </a>
                </NavigationColumn>

                <NavigationColumn title={i18n.gettext('сompany')}>
                    <NavLink to="/about-us" className={styles.mainLink}>
                        {i18n.gettext('About us')}
                    </NavLink>
                    <NavLink to="/contact-us" className={styles.mainLink}>
                        {i18n.gettext('Contact us')}
                    </NavLink>
                    <a href="https://community.plark.io" className={styles.mainLink} target="_blank">
                        {i18n.gettext('Community')}
                    </a>
                    <a href="https://plark.io/blog" className={styles.mainLink}>
                        {i18n.gettext('Blog')}
                    </a>
                    <NavLink to="/faq" className={styles.mainLink}>
                        {i18n.gettext('FAQs')}
                    </NavLink>
                </NavigationColumn>
            </div>
        </div>
    );
}
