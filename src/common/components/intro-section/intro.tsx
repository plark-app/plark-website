import React from 'react';
import cn from 'classnames';
import scrollTo from 'animated-scroll-to';
import { Section, DownloadCell, IPhoneScreen } from 'common/components';
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
    withPhone?: boolean;
};

export default function IntroSection(props: IntroProps): JSX.Element {
    const { subtitleTag = 'h2', noDownload, withPhone = false } = props;

    const onClickArrow = React.useCallback(() => {
        scrollTo(window.innerHeight, {
            speed: 400,
        });
    }, []);

    const topicClassName = cn(styles.introTopic, props.topicClassName);

    return (
        <Section
            className={cn(styles.introSection, props.sectionClassName)}
            contentClassName={cn(styles.introSectionContent, props.contentClassName)}
            withLeftPadding
        >
            <IntroPhoneSection
                showDesktop={withPhone}
            />


            <div>
                <div className={topicClassName}>
                    <h3 className={styles.introTopicShit}>{props.title}</h3>
                    {React.createElement(subtitleTag, { className: styles.introTopicTitle }, props.subtitle)}
                </div>

                {!noDownload && <DownloadCell />}
            </div>

            <ArrowDownSvg className={styles.introArrow} onClick={onClickArrow} />
        </Section>
    );
}


type IntroPhoneSectionProps = {
    showDesktop?: boolean;
};

function IntroPhoneSection(props: IntroPhoneSectionProps): JSX.Element {
    return <div className={cn(styles.introPhoneSection, props.showDesktop && styles.iShowDesktop)}>
        <IPhoneScreen
            src="/videos/iphone.mp4"
            srcType="video/mp4"
            type="video"
            className={styles.introPhoneSectionImage}
        />
    </div>;
}
