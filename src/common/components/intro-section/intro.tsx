import React from 'react';
import { compose } from 'recompose';
import { Section, DownloadCell, PartnerList } from 'common/components';
import withWindow, { WithWindowProps } from 'common/components/with-window';

import styles from './intro.scss';

type IntroOuterProps = {
    title: string;
    subtitle: string;
    subtitleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
}
type IntroInnerProps = IntroOuterProps & WithWindowProps;

function IntroSection(props: IntroInnerProps): JSX.Element {
    const { subtitleTag = 'h2' } = props;

    return (
        <>
            <Section className={styles.introSection} contentClassName={styles.introSectionContent}>
                <div className={styles.introTopic}>
                    <h3 className={styles.introTopicShit}>{props.title}</h3>
                    {React.createElement(subtitleTag, { className: styles.introTopicTitle }, props.subtitle)}
                    <DownloadCell />
                </div>
                <PartnerList isSmall className={styles.partnersList} itemClassName={styles.partnersItem} />
            </Section>
            {props.dimensions.width < 768 && (
                <div className={styles.introPhoneSection}>
                    <img src="/img/main-screen.png" alt={''} />
                </div>
            )}
        </>
    );
}

export default compose<IntroInnerProps, IntroOuterProps>(withWindow)(IntroSection);
