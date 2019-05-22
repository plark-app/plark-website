import React from 'react';
import { useI18n } from 'slim-i18n';
import { NavLink } from 'react-router-dom';
import Section from 'common/components/section';
import StoreBadge, { BadgeContainer } from 'common/components/store-badge';
import PlatformList from 'common/utils/install-platforms';
import Subscribe from './subscribe';
import PlarkLogo from './plark-logo.component.svg';
import styles from './footer.scss';


export default () => {
    const i18n = useI18n();

    return (
        <Section contentClassName={styles.footer}>

            <PlarkLogo height={24} className={styles.footerLogo} />

            <div className={styles.footerMain}>
                <div className={styles.footerTechnical}>
                    <Subscribe />

                    <div className={styles.platforms}>
                        <h4 className={styles.platformsTitle}>{i18n.gettext('Choose your app.')}</h4>

                        <BadgeContainer className={styles.platformsContainer} hideOnMobile={false}>
                            <StoreBadge platform={PlatformList.apple} darkBg={true} />
                            <StoreBadge platform={PlatformList.chrome} darkBg={true} />
                        </BadgeContainer>
                    </div>
                </div>

                <nav className={styles.nav}>
                    <NavLink to="/" className={styles.navLink}>
                        {i18n.gettext('Home')}
                    </NavLink>

                    <NavLink to="/faq" className={styles.navLink}>
                        {i18n.gettext('FAQ')}
                    </NavLink>

                    <NavLink to="/privacy" className={styles.navLink}>
                        {i18n.gettext('Privacy Policy')}
                    </NavLink>

                    <NavLink to="/terms" className={styles.navLink}>
                        {i18n.gettext('Terms & Conditions')}
                    </NavLink>
                </nav>

                <nav className={styles.nav}>
                    <a href="https://medium.com/plark" target="_blank" className={styles.navLink}>
                        {i18n.gettext('The Blog')}
                    </a>

                    <a href="https://www.reddit.com/r/plark" target="_blank" className={styles.navLink}>
                        {i18n.gettext('Reddit')}
                    </a>

                    <a href="https://www.producthunt.com/posts/plark-crypto-wallet" target="_blank" className={styles.navLink}>
                        {i18n.gettext('Product Hunt')}
                    </a>

                    <a href="https://github.com/plark-app" target="_blank" className={styles.navLink}>
                        Github
                    </a>

                    <a href="https://t.me/PlarkWallet" target="_blank" className={styles.navLink}>
                        Telegram
                    </a>
                </nav>
            </div>
        </Section>
    );
};
