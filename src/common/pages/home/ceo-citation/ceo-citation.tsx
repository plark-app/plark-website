import React from 'react';
import { useI18n } from 'slim-i18n';
import Section from 'common/components/section';
import StoreBadge, { BadgeContainer } from 'common/components/store-badge';
import PlatformList from 'common/utils/install-platforms';
import Topic from 'common/components/topic';
import styles from '../home.scss';
import * as text from '../home.text';

export default () => {
    const i18n = useI18n();

    return (
        <Section className={styles.ceo} contentClassName={styles.ceoContent}>
            <Topic titleText={text.ceoCitation(i18n)} isCenter maxWidth={600} />
            <div className={styles.ceoSeparator} />

            <div className={styles.ceoPerson}>
                <h4 className={styles.ceoPersonName}>Yehor Melnykov</h4>
                <p className={styles.ceoPersonPosition}>CEO Plark LLC.</p>
            </div>


            <BadgeContainer className={styles.ceoPlatforms}>
                <StoreBadge platform={PlatformList.apple} height={50} />
                <StoreBadge platform={PlatformList.chrome} height={50} />
            </BadgeContainer>
        </Section>
    );
};