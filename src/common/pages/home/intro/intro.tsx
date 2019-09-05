import React from 'react';
import { Section, DownloadCell, PartnerList } from 'common/components';

import styles from './intro.scss';

export { styles };

// import * as text from '../home.text';

type IntroBlockProps = {
    title: string;
    subtitle: string;
};

export default function IntroBlock(props: IntroBlockProps): JSX.Element {
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
                <PartnerList isSmall />
            </Section>
        </>
    );
}
