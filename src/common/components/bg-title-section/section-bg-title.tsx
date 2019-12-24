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

    secondaryContent?: string;
};

export default function BgTitleSection(props: BgTitleProps): JSX.Element {
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

                    <div className={style.rightSide}>
                        {props.secondaryContent ? (
                            <p className={style.secondaryContent}>{props.secondaryContent}</p>
                        ) : undefined}
                    </div>
                </div>
            </div>
        </Section>
    );
}
