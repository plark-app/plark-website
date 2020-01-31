import React from 'react';
import _ from 'lodash';
import cn from 'classnames';
import { Col } from 'reactstrap';
import { AppStoreLink, IPhoneScreen, Section, TextBlock } from 'common/components';
import { useI18n } from 'slim-i18n';
import style from './feature-list-section.scss';

export type IPhoneScreenUnit = {
    src: string;
    srcset?: string;
    alt: string;
    title?: string;
};

export type FeatureUnit = {
    title: string;
    content: string;
    textTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';

    wiki?: {
        text: string;
        link?: CommonLink;
    };

    screen: IPhoneScreenUnit;
};

type FeatureListSectionProps = CommonSection & {
    features: Array<FeatureUnit>;
};

export const FeatureListSection = React.memo(function FeatureListSection(props: FeatureListSectionProps): JSX.Element {
    const i18n = useI18n();
    const { id, features } = props;
    const [index, setIndex] = React.useState(0);
    const elRefs = React.useRef(_.times(features.length, () => React.createRef()));

    React.useEffect(() => {
        if (!__isBrowser__) {
            return;
        }

        let animationFrameHandler: number | undefined;
        const offset: number = 100;

        const handleScroll = () => {
            if (typeof window === undefined) {
                return;
            }

            if (animationFrameHandler) {
                cancelAnimationFrame(animationFrameHandler);
            }

            animationFrameHandler = requestAnimationFrame(() => {
                const windowSize = window.outerHeight || document.documentElement.clientHeight;
                let activeIndex = 0;
                let i: number;

                for (i = 0; i < elRefs.current.length; i++) {
                    const ref = elRefs.current[i];
                    if (!ref || !ref.current) {
                        continue;
                    }

                    const el = ref.current as HTMLElement;

                    const top = el.getBoundingClientRect().top;
                    const height = el.clientHeight;

                    const topPosition = windowSize - top;
                    const isActive = topPosition - offset >= 0 && top + offset <= height;

                    if (isActive) {
                        activeIndex = i;
                    }
                }

                setIndex(activeIndex);
                animationFrameHandler && cancelAnimationFrame(animationFrameHandler);
            });
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const iphoneList: Array<IPhoneScreenUnit> = React.useMemo(() => {
        return features.map((f: FeatureUnit) => f.screen);
    }, []);

    const currentScreen: IPhoneScreenUnit = iphoneList[index];

    return (
        <div id={id} className={style.root}>
            <div className={style.stickyIphone}>
                <div className={style.stickyIphoneImageRoot}>
                    <IPhoneScreen
                        className={style.stickyIphoneImage}
                        src={currentScreen?.src}
                        srcset={currentScreen?.srcset}
                        type="photo"
                    />
                </div>
            </div>

            {features.map((elem: FeatureUnit, index: number) => {
                const { wiki, screen } = elem;

                return <Section
                    key={index}
                    withLeftPadding
                    className={style.section}
                    contentClassName={style.sectionContent}
                    proxyRef={elRefs.current[index]}
                >
                    <IPhoneScreen
                        className={style.screen}
                        src={screen.src}
                        srcset={screen.srcset}
                        title={screen.title}
                        alt={screen.alt}
                        type="photo"
                    />

                    <Col lg={3} md={6}>
                        <h3 className={cn(style.title)}>{elem.title}</h3>
                    </Col>

                    <div style={{ width: '100%' }} />

                    <Col lg={3} md={6} className={style.leftSide}>
                        <hr className={style.contentBoxSeparator} />
                        <TextBlock className={style.content} tag={elem.textTag}>
                            {elem.content}
                        </TextBlock>

                        <AppStoreLink
                            className={style.appstoreLink}
                            text={i18n.gettext('Download Plark for iOS')}
                        />
                    </Col>

                    {wiki ? (
                        <Col className={style.rightSide} lg={{ size: 3, offset: 1 }} md={6}>
                            <p className={style.secondaryContent}>{wiki.text}</p>
                            {wiki.link ? (
                                <a href={wiki.link.url}
                                   title={wiki.link.title}
                                   className={cn('citation', style.rightSideLink, 'arrow-link')}
                                   target="_blank"
                                   rel={wiki.link.rel}
                                >{wiki.link.title}</a>
                            ) : undefined}
                        </Col>
                    ) : undefined}
                </Section>;
            })}
        </div>
    );
});
