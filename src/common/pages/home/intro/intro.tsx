import React from 'react';
import { useI18n } from 'slim-i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegramPlane, faTwitter, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import Section from 'common/components/section';
import NavLink from 'common/components/nav-link';
import PlatformDropDown from './platform-dropdown';

import styles from './intro.scss';
import * as text from '../home.text';


export default () => {
    const i18n = useI18n();

    return (
        <Section contentClassName={styles.introSectionContent} className={styles.introSection}>
            <div className={styles.introTopic}>
                <h2 className={styles.introPreTitle}>{text.preIntroTitle(i18n)}</h2>
                <h1 className={styles.introTitle}>{text.introTitle(i18n)}</h1>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <PlatformDropDown />
            </div>

            <div className={styles.introFooter}>
                <div>
                    <a href="https://github.com/plark-app" className={styles.introFooterSocial} target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://t.me/plark-app" className={styles.introFooterSocial} target="_blank">
                        <FontAwesomeIcon icon={faTelegramPlane} />
                    </a>
                    <a href="https://twitter.com/plark" className={styles.introFooterSocial} target="_blank">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://fb.com/plark" className={styles.introFooterSocial} target="_blank">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>
                </div>

                <div>
                    <NavLink to="/terms"
                             title="Terms & conditions"
                             className={styles.introFooterLink}
                    >{i18n.gettext('Terms & conditions')}</NavLink>

                    <NavLink to="/privacy"
                             title="Privacy Policy"
                             className={styles.introFooterLink}
                    >{i18n.gettext('Privacy Policy')}</NavLink>
                </div>
            </div>
        </Section>
    );
};
