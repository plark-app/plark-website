import React from 'react';
import { useI18n } from 'slim-i18n';
import { Section, DownloadCell } from 'common/components';

import styles from './intro.scss';

export { styles };

// import * as text from '../home.text';

export default function IntroBlock(): JSX.Element {
    const i18n = useI18n();

    return (
        <Section className={styles.introSection} contentClassName={styles.introSectionContent}>
            <div className={styles.introTopic}>
                <h3 className={styles.introTopicShit}>
                    {i18n.gettext('No sh*t wallet')}
                </h3>
                <h2 className={styles.introTopicTitle}>
                    {i18n.gettext('Just a friendliest crypto currency wallet app you will use')}
                </h2>

                <DownloadCell />
            </div>
        </Section>
    );
}
