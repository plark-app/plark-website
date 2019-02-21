import React from 'react';
import { useI18n } from 'slim-i18n';
import Section from 'common/components/section';

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


            <div className={styles.introFooter}>
                <span style={{ color: 'white' }}>Social link</span>
            </div>
        </Section>
    );
};
