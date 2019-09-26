import React from 'react';
import Section from '../section';
import TextBlock from '../text-block';
import style from './section-bg-title.scss';

type BgTitleProps = {
    title: string;
    content: string;
    textTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
    withMobile?: boolean;
};

export default function BgTitleSection(props: BgTitleProps): JSX.Element {
    return (
        <Section className={style.section} contentClassName={style.sectionContent}>
            {props.withMobile && (
                <div className={style.sectionWithMobile}>
                    <img src="/img/main-screen.png" />
                </div>
            )}
            <span className={style.title}>{props.title}</span>
            <TextBlock className={style.content} tag={props.textTag}>
                {props.content}
            </TextBlock>
        </Section>
    );
}
