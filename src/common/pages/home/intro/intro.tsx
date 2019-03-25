import React from 'react';
import { useI18n } from 'slim-i18n'
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import Section from 'common/components/section';
import NavLink from 'common/components/nav-link';
import PlatformDropDown from './platform-dropdown';

import styles from './intro.scss';

export { styles };

import * as text from '../home.text';

type IntroProps = {
    hideContent?: boolean;
}

export default ({ hideContent = false }: IntroProps) => {
    const i18n = useI18n();

    return (
        <section className={cn(styles.introSection, hideContent ? styles.isHide : undefined)}>
            <div className={styles.introTopic}>
                <h2 className={styles.introPreTitle}>{text.preIntroTitle(i18n)}</h2>
                <h1 className={styles.introTitle}>{text.introTitle(i18n)}</h1>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <PlatformDropDown />
            </div>

            <Section className={styles.introFooter} contentClassName={styles.introFooterContent}>
                <div>
                    <a href="https://github.com/plark-app" className={styles.introFooterSocial} target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://t.me/plark-app" className={styles.introFooterSocial} target="_blank">
                        <FontAwesomeIcon icon={faTelegramPlane} />
                    </a>
                </div>

                <div>
                    <NavLink to="/terms"
                             title={i18n.gettext('Terms & conditions')}
                             className={styles.introFooterLink}
                    >{i18n.gettext('Terms & conditions')}</NavLink>

                    <NavLink to="/privacy"
                             title={i18n.gettext('Privacy Policy')}
                             className={styles.introFooterLink}
                    >{i18n.gettext('Privacy Policy')}</NavLink>
                </div>
            </Section>
        </section>
    );
};
