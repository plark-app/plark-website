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
        <Section className={cn(styles.introSection, props.sectionClassName)}
                 contentClassName={cn(styles.introSectionContent, props.contentClassName)}
                 withLeftPadding
        >
            <IntroPhoneSection showDesktop={withPhone} isVideo />

            <div className={topicClassName}>
                <h3 className={styles.introTopicShit}>{props.title}</h3>
                {React.createElement(subtitleTag, { className: styles.introTopicTitle }, props.subtitle)}
                {!noDownload && <DownloadCell />}
            </div>

            <ArrowDownSvg className={styles.introArrow} onClick={onClickArrow} />
        </Section>
    );
}


type IntroPhoneSectionProps = {
    showDesktop?: boolean;
    isVideo?: boolean;
};

function IntroPhoneSection(props: IntroPhoneSectionProps): JSX.Element {

    const videoRef = React.useRef<HTMLVideoElement>();
    React.useEffect(() => {
        if (!props.isVideo) {
            return;
        }

        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.muted = false;
                videoRef.current.play();
            }
        }, 500);
    }, [props.isVideo]);

    if (props.isVideo) {
        return (
            <div className={cn(styles.introPhoneSection, props.showDesktop && styles.iShowDesktop)}>
                <div className={cn(styles.videoWrapper, styles.introPhoneSectionImage)}>
                    <img alt="Main screen"
                         title="cryptocurrency mobile wallet"
                         src="/img/iphone-frame-left.png"
                         className={styles.videoFrame}
                    />
                    <video width="400"
                           controls={false}
                           autoPlay
                           loop
                           className={styles.videoVideo}
                           ref={videoRef as any}
                    >
                        <source src="/videos/iphone.mp4" type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                </div>
            </div>
        );
    }

    return <div className={cn(styles.introPhoneSection, props.showDesktop && styles.iShowDesktop)}>
        <img alt="Main screen"
             title="cryptocurrency mobile wallet"
             src="/img/main-screen.png"
             className={styles.introPhoneSectionImage}
        />
    </div>;
}
