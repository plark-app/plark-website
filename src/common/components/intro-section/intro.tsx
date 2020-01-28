import React from 'react';
import cn from 'classnames';
import scrollTo from 'animated-scroll-to';
import { Section, DownloadCell, IPhoneScreen } from 'common/components';
import { Col } from 'reactstrap';
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

    id?: string;
};

export default function IntroSection(props: IntroProps): JSX.Element {
    const { subtitleTag = 'h2', noDownload, withPhone = false } = props;

    const onClickArrow = React.useCallback(() => {
        const toHeight = window.innerWidth > 1280 ? 750 : window.innerHeight;


        scrollTo(toHeight, {
            speed: 400,
        });
    }, []);

    const topicClassName = cn(styles.introTopic, props.topicClassName);

    return (
        <Section
            id={props.id}
            withLeftPadding
            className={cn(styles.introSection, props.sectionClassName)}
            contentClassName={cn(styles.introSectionContent, props.contentClassName)}
            outerContent={<ArrowDownSvg className={styles.introArrow} onClick={onClickArrow} />}
        >
            <IntroPhoneSection
                showDesktop={withPhone}
            />

            <Col lg={4}>
                <div className={topicClassName}>
                    <h3 className={styles.introTopicShit}>{props.title}</h3>
                    {React.createElement(subtitleTag, { className: styles.introTopicTitle }, props.subtitle)}
                </div>

                {!noDownload && <DownloadCell />}
            </Col>
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
