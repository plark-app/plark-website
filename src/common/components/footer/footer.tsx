import React from 'react';
import { useI18n } from 'slim-i18n';
import Section from 'common/components/section';
import StoreBadge, { BadgeContainer } from 'common/components/store-badge';
import PlatformList from 'common/utils/install-platforms';
import Subscribe from './subscribe';
import PlarkLogo from './plark-logo.component.svg';
import styles from './footer.scss';
import { NavLink } from 'react-router-dom';


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
                        <BadgeContainer className={styles.platformsContainer}>
                            <StoreBadge platform={PlatformList.apple} darkBg={true} />
                            <StoreBadge platform={PlatformList.chrome} darkBg={true} />
                            <StoreBadge platform={PlatformList.firefox} darkBg={true} />
                        </BadgeContainer>
                    </div>
                </div>

                <nav className={styles.nav}>
                    <NavLink to="/" className={styles.navLink}>{i18n.gettext('Home')}</NavLink>
                    <NavLink to="/card" className={styles.navLink}>{i18n.gettext('The Card')}</NavLink>
                    <NavLink to="/company" className={styles.navLink}>{i18n.gettext('The Company')}</NavLink>

                    <a href="https://medium.com/plark" target="_blank" className={styles.navLink}>
                        {i18n.gettext('The Blog')}
                    </a>

                    <a href="https://instagram.com/plark" target="_blank" className={styles.navLink}>
                        {i18n.gettext('Instagram')}
                    </a>

                    <a href="https://twitter.com/plark" target="_blank" className={styles.navLink}>
                        {i18n.gettext('Twitter')}
                    </a>
                    <a href="https://fb.com/plark" target="_blank" className={styles.navLink}>
                        {i18n.gettext('Facebook')}
                    </a>
                </nav>

                <nav className={styles.navigation}>
                    <NavLink to="/faq" className={styles.navLink}>
                        {i18n.gettext('FAQ')}
                    </NavLink>

                    <NavLink to="/support" className={styles.navLink}>
                        {i18n.gettext('Support')}
                    </NavLink>

                    <NavLink to="/careers" className={styles.navLink}>
                        {i18n.gettext('Careers')}
                    </NavLink>

                    <NavLink to="/contact-us" className={styles.navLink}>
                        {i18n.gettext('Contact Us')}
                    </NavLink>

                    <NavLink to="/privacy" className={styles.navLink}>
                        {i18n.gettext('Privacy Policy')}
                    </NavLink>

                    <NavLink to="/terms" className={styles.navLink}>
                        {i18n.gettext('Terms of Use')}
                    </NavLink>

                    <NavLink to="/cardholder-agreement" className={styles.navLink}>
                        {i18n.gettext('Cardholder Agreement')}
                    </NavLink>
                </nav>
            </div>
        </Section>
    );
};
