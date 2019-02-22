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
        <Section>
            <Topic titleText={text.lastCitation(i18n)}
                   descText={text.lastCitationDesc(i18n)}
                   isCenter
                   maxWidth={600}
            />

            <BadgeContainer className={styles.ceoPlatforms}>
                <StoreBadge platform={PlatformList.apple} height={50} />
                <StoreBadge platform={PlatformList.chrome} height={50} />
                <StoreBadge platform={PlatformList.firefox} height={50} />
            </BadgeContainer>
        </Section>
    );
};