import React from 'react';
import Section from '../section';
import TextBlock from '../text-block';
import style from './section-bg-title.scss';

type BgTitleProps = {
    title: string;
    content: string;
};

export default function BgTitleSection(props: BgTitleProps): JSX.Element {
    return (
        <Section className={style.section} contentClassName={style.sectionContent}>
            <h2 className={style.title}>{props.title}</h2>
            <TextBlock className={style.content}>{props.content}</TextBlock>
        </Section>
    );
}
