import React from 'react';
import { useI18n } from 'slim-i18n'
import cn from 'classnames';
import Icons from 'common/components/icons';
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
                <div className={styles.introFooterSocialBox}>
                    <a href="https://github.com/plark-app" className={styles.introFooterSocial} target="_blank">
                        <Icons.Github height={16} />
                    </a>
                    <a href="https://t.me/plark-app" className={styles.introFooterSocial} target="_blank">
                        <Icons.Telegram height={16} />
                    </a>
                </div>

                <div>
                    <NavLink to="/terms"
                             title={i18n.gettext('Terms & Conditions')}
                             className={styles.introFooterLink}
                    >{i18n.gettext('Terms & Conditions')}</NavLink>

                    <NavLink to="/privacy"
                             title={i18n.gettext('Privacy Policy')}
                             className={styles.introFooterLink}
                    >{i18n.gettext('Privacy Policy')}</NavLink>
                </div>
            </Section>
        </section>
    );
};
