import moment from 'moment';
import React from 'react';
import { Col } from 'reactstrap';
import { useI18n } from 'slim-i18n';
import { NavLink, Socials, NavigationColumn } from 'common/components';
import cnmStyles from 'common/styles/common.scss';
import styles from './dark-footer.scss';

export function NavigationSide(): JSX.Element {
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
        <Col className={styles.navSide} lg={4} sm={8}>
            <div className={styles.footerStart}>
                <div className={styles.navSideColumn}>
                    <NavigationColumn title={i18n.gettext('sitemap')}>
                        <NavLink className={cnmStyles.mainLink} to="/ios-wallet">
                            {i18n.gettext('Plark for iOS')}
                        </NavLink>
                        <NavLink className={cnmStyles.mainLink} to="/mobile-wallet">
                            {i18n.gettext('Mobile Wallet')}
                        </NavLink>
                        <NavLink className={cnmStyles.mainLink} to="/bitcoin-wallet">
                            {i18n.gettext('Bitcoin Wallet')}
                        </NavLink>
                        <NavLink className={cnmStyles.mainLink} to="/litecoin-wallet">
                            {i18n.gettext('Litecoin Wallet')}
                        </NavLink>
                    </NavigationColumn>

                    <NavigationColumn title={i18n.gettext('trending topics')}>
                        <NavLink className={cnmStyles.mainLink} to="/android-wallet">
                            {i18n.gettext('Plark for Android')}
                        </NavLink>
                        <NavLink className={cnmStyles.mainLink} to="/ripple-wallet">
                            {i18n.gettext('Ripple Wallet')}
                        </NavLink>
                        <NavLink className={cnmStyles.mainLink} to="/dogecoin-wallet">
                            {i18n.gettext('Dogecoin Wallet')}
                        </NavLink>
                        <NavLink className={cnmStyles.mainLink} to="/monero-wallet">
                            {i18n.gettext('Monero Wallet')}
                        </NavLink>
                        <NavLink className={cnmStyles.mainLink} to="/iota-wallet">
                            {i18n.gettext('IOTA Wallet')}
                        </NavLink>
                        <NavLink className={cnmStyles.mainLink} to="/zcash-wallet">
                            {i18n.gettext('Zcash Wallet')}
                        </NavLink>
                    </NavigationColumn>
                </div>

                <div className={styles.navSideColumn}>
                    <NavigationColumn title={i18n.gettext('enquiries')}>
                        <a href="mailto:hello@plark.io" className={cnmStyles.mainLink} target="_blank">
                            hello@plark.io
                        </a>
                    </NavigationColumn>

                    <NavigationColumn title={i18n.gettext('support')}>
                        <a href="mailto:support@plark.io" className={cnmStyles.mainLink} target="_blank">
                            support@plark.io
                        </a>
                    </NavigationColumn>

                    <NavigationColumn title={i18n.gettext('cyprus')}>
                        <span className={cnmStyles.mainText}>Tseriou, 136, 2nd floor</span>
                        <span className={cnmStyles.mainText}>Strovolos, 2045</span>
                        <span className={cnmStyles.mainText}>Nicosia</span>
                    </NavigationColumn>
                </div>
            </div>

            <div className={styles.footerEnd}>
                <Socials
                    titleMode
                    className={styles.bottomSocial}
                    linkClassName={styles.bottomSocialLink}
                />

                <span className={styles.bottomCopyright} style={{ display: 'none' }}>
                    plark @ {copyrightYears}
                </span>
            </div>
        </Col>
    );
}
