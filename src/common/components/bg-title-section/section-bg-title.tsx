import React from 'react';
import cn from 'classnames';
import { Section } from '../section';
import TextBlock from '../text-block';
import style from './section-bg-title.scss';

type BgTitleProps = {
    title: string;
    content: string;
    textTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
    withMobile?: boolean;

    wiki?: {
        text: string;
        linkTitle?: string;
        url?: string;
    };
};

export default function BgTitleSection(props: BgTitleProps): JSX.Element {
    const { wiki } = props;

    return (
        <Section className={style.section} contentClassName={style.sectionContent} withLeftPadding>
            {props.withMobile && (
                <div className={style.sectionWithMobile}>
                    <img src="/img/main-screen.png" alt="Main Screen" className={style.sectionWithMobileImage} />
                </div>
            )}

            <div className={style.contentBox}>
                <span className={cn(style.title, style.leftSide)}>{props.title}</span>

                <hr className={style.contentBoxSeparator} />

                <div className={style.underlineContent}>
                    <TextBlock className={cn(style.content, style.leftSide)} tag={props.textTag}>
                        {props.content}
                    </TextBlock>

                    {wiki ? (
                        <div className={style.rightSide}>
                            <p className={style.secondaryContent}>{wiki.text}</p>
                            {wiki.url ? (
                                <a href={wiki.url}
                                   title={wiki.linkTitle}
                                   className={cn('citation', style.rightSideLink, 'arrow-link')}
                                   target="_blank"
                                >
                                    {wiki.linkTitle}
                                </a>
                            ) : undefined}
                        </div>
                    ) : undefined}

                </div>
            </div>
        </Section>
    );
}
