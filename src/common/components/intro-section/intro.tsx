import React from 'react';
import cn from 'classnames';
import scrollTo from 'animated-scroll-to';
import { Section, DownloadCell, useDimensions } from 'common/components';
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
    const dimensions = useDimensions();

    const onClickArrow = React.useCallback(() => {
        scrollTo(window.innerHeight, {
            speed: 400,
        });
    }, []);

    return (
        <>
            {(dimensions.width && dimensions.width < 768) && (
                <div className={styles.introPhoneSection}>
                    <img src="/img/main-screen.png" alt="Main screen" />
                </div>
            )}

            <Section className={cn(styles.introSection, props.sectionClassName)}
                     contentClassName={cn(styles.introSectionContent, props.contentClassName)}
                     withLeftPadding
            >
                <div className={cn(styles.introTopic, props.topicClassName)}>
                    <h3 className={styles.introTopicShit}>{props.title}</h3>
                    {React.createElement(subtitleTag, { className: styles.introTopicTitle }, props.subtitle)}
                    {!noDownload && <DownloadCell />}
                </div>

                <ArrowDownSvg className={styles.introArrow} onClick={onClickArrow} />
            </Section>
        </>
    );
}
