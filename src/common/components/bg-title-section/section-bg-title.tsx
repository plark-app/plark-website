import React from 'react';
import cn from 'classnames';
import { useI18n } from 'slim-i18n';
import { Col } from 'reactstrap';
import { Section, TextBlock } from 'common/components';
import style from './section-bg-title.scss';

type BgTitleProps = CommonSection & {
    title: string;
    content: string;
    textTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
    withMobile?: boolean;

    wiki?: {
        text: string;
        link?: CommonLink;
    };
};

export const BgTitleSection = React.memo(function BgTitleSection(props: BgTitleProps): JSX.Element {
    const { wiki } = props;
    const i18n = useI18n();

    return (
        <Section
            withLeftPadding
            className={style.section}
            contentClassName={style.sectionContent}
            id={props.id}
        >
            {props.withMobile && (
                <div className={style.sectionWithMobile}>
                    <img src="/img/main-screen.png"
                         alt={i18n.gettext('Main Screen')}
                         className={style.sectionWithMobileImage}
                    />
                </div>
            )}

            <Col lg={3} md={6}>
                <h3 className={cn(style.title)}>{props.title}</h3>
            </Col>

            <div style={{ width: '100%' }} />

            <Col lg={3} md={6} className={style.leftSide}>
                <hr className={style.contentBoxSeparator} />
                <TextBlock className={cn(style.content)} tag={props.textTag}>
                    {props.content}
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
        </Section>
    );
});
