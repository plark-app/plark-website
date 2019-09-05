import React from 'react';
import { Section, DownloadCell, PartnerList } from 'common/components';
import styles from './intro.scss';

type IntroBlockProps = {
    title: string;
    subtitle: string;
};

export default function IntroSection(props: IntroBlockProps): JSX.Element {
    return (
        <>
            <Section className={styles.introSection} contentClassName={styles.introSectionContent}>
                <div className={styles.introTopic}>
                    <h3 className={styles.introTopicShit}>{props.title}</h3>
                    <h2 className={styles.introTopicTitle}>{props.subtitle}</h2>

                    <DownloadCell />
                </div>
            </Section>

            <Section className={styles.partnersSection} contentClassName={styles.partnersContent}>
                <PartnerList
                    isSmall
                    className={styles.partnersList}
                    itemClassName={styles.partnersItem}
                />
            </Section>
        </>
    );
}
