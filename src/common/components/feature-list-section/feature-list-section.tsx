import React from 'react';
import cn from 'classnames';
import { Col } from 'reactstrap';
import { IPhoneScreen, Section, TextBlock } from 'common/components';
import style from './feature-list-section.scss';

export type IPhoneScreen = {
    src: string;
    srcset?: string;
};

export type FeatureUnit = {
    title: string;
    content: string;
    textTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';

    wiki?: {
        text: string;
        link?: CommonLink;
    };

    screen: IPhoneScreen;
};

type FeatureListSectionProps = CommonSection & {
    features: Array<FeatureUnit>;
};

export const FeatureListSection = React.memo(function FeatureListSection(props: FeatureListSectionProps): JSX.Element {
    const { id, features } = props;

    const [index] = React.useState(0);

    const iphoneList: Array<IPhoneScreen> = React.useMemo(() => {
        return features.map((f: FeatureUnit) => f.screen);
    }, []);

    const currentScreen: IPhoneScreen = iphoneList[index];

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
                const { wiki } = elem;

                return <Section
                    key={index}
                    withLeftPadding
                    className={style.section}
                    contentClassName={style.sectionContent}
                >
                    <Col lg={3} md={6}>
                        <h3 className={cn(style.title)}>{elem.title}</h3>
                    </Col>

                    <div style={{ width: '100%' }} />

                    <Col lg={3} md={6} className={style.leftSide}>
                        <hr className={style.contentBoxSeparator} />
                        <TextBlock className={cn(style.content)} tag={elem.textTag}>
                            {elem.content}
                        </TextBlock>
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
