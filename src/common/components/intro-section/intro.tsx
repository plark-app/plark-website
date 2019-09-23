import React from 'react';
import { Section, DownloadCell, PartnerList } from 'common/components';
import styles from './intro.scss';

type IntroBlockProps = {
    title: string;
    subtitle: string;
    subtitleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
};

export default function IntroSection(props: IntroBlockProps): JSX.Element {
    const { subtitleTag = 'h2' } = props;

    return (
        <>
            <Section className={styles.introSection} contentClassName={styles.introSectionContent}>
                <div className={styles.introTopic}>
                    <h3 className={styles.introTopicShit}>{props.title}</h3>
                    {React.createElement(subtitleTag, { className: styles.introTopicTitle }, props.subtitle)}

                    <DownloadCell />
                </div>
            </Section>

            <Section className={styles.partnersSection} contentClassName={styles.partnersContent}>
                <PartnerList isSmall className={styles.partnersList} itemClassName={styles.partnersItem} />
            </Section>
        </>
    );
}
