import moment from 'moment';
import React from 'react';
import { Col } from 'reactstrap';
import { useI18n } from 'slim-i18n';
import { NavLink, Socials } from 'common/components';
import { NavigationColumn } from './navigation-column';
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
                        <NavLink className={styles.mainLink} to="#">
                            {i18n.gettext('product')}
                        </NavLink>
                        <NavLink className={styles.mainLink} to="#">
                            {i18n.gettext('resources')}
                        </NavLink>
                        <NavLink className={styles.mainLink} to="#">
                            {i18n.gettext('learn')}
                        </NavLink>
                        <NavLink className={styles.mainLink} to="#">
                            {i18n.gettext('social')}
                        </NavLink>
                        <NavLink to="#" className={styles.mainLink}>
                            {i18n.gettext('contact')}
                        </NavLink>
                    </NavigationColumn>

                    <NavigationColumn title={i18n.gettext('sweden')}>
                        <span className={styles.mainText}>Banérgatan 10</span>
                        <span className={styles.mainText}>115 23 Stockholm</span>
                        <span className={styles.mainText}>Sweden</span>
                    </NavigationColumn>
                </div>

                <div className={styles.navSideColumn}>
                    <NavigationColumn title={i18n.gettext('enquiries')}>
                        <a href="mailto:hello@plark.io" className={styles.mainLink} target="_blank">
                            hello@plark.io
                        </a>
                    </NavigationColumn>

                    <NavigationColumn title={i18n.gettext('support')}>
                        <a href="mailto:support@plark.io" className={styles.mainLink} target="_blank">
                            support@plark.io
                        </a>
                    </NavigationColumn>

                    <NavigationColumn title={i18n.gettext('cyprus')}>
                        <span className={styles.mainText}>Tseriou, 136, 2nd floor</span>
                        <span className={styles.mainText}>Strovolos, 2045</span>
                        <span className={styles.mainText}>Nicosia</span>
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
