import React from 'react';
import cn from 'classnames';
import scrollTo from 'animated-scroll-to';
import { Section, DownloadCell } from 'common/components';
import ArrowDownSvg from 'resources/svgs/arrow-down.component.svg';
import styles from './intro.scss';

type IntroProps = {
    title: string;
    subtitle: string;
    subtitleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
    sectionClassName?: string;
    contentClassName?: string;
    topicClassName?: string;
    noDownload?: boolean;
    noPartners?: boolean;
};

export default function IntroSection(props: IntroProps): JSX.Element {
    const { subtitleTag = 'h2', noDownload } = props;

    const onClickArrow = React.useCallback(() => {
        scrollTo(window.innerHeight, {
            speed: 400,
        });
    }, []);

    const topicClassName = cn(styles.introTopic, props.topicClassName);

    return (
        <Section className={cn(styles.introSection, props.sectionClassName)}
                 contentClassName={cn(styles.introSectionContent, props.contentClassName)}
                 withLeftPadding
        >
            <IntroPhoneSection />

            <div className={topicClassName}>
                <h3 className={styles.introTopicShit}>{props.title}</h3>
                {React.createElement(subtitleTag, { className: styles.introTopicTitle }, props.subtitle)}
                {!noDownload && <DownloadCell />}
            </div>

            <ArrowDownSvg className={styles.introArrow} onClick={onClickArrow} />
        </Section>
    );
}


function IntroPhoneSection(): JSX.Element {
    return <div className={styles.introPhoneSection}>
        <img alt="Main screen"
             title="cryptocurrency mobile wallet"
             src="/img/main-screen.png"
             className={styles.introPhoneSectionImage}
        />
    </div>;
}