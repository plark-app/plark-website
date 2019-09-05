import React from 'react';
import Section from '../section';
import Topic from '../topic';
import style from './citation.scss';

type CitationProps = {
    title: string;
    author: string;
    titleTag?: 'h1' | 'h2' | 'h3' | 'h4';
};

export default function CitationSection(props: CitationProps): JSX.Element {
    return (
        <Section className={style.section} contentClassName={style.sectionContent}>
            <Topic
                isCenter
                titleTag={props.titleTag}
                titleText={'"' + props.title + '"'}
                descText={'— ' + props.author}
                titleClassName={style.title}
                descClassName={style.author}
            />
        </Section>
    );
}
