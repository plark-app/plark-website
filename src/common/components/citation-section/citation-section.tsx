import React from 'react';
import { Section } from '../section';
import style from './citation.scss';

type CitationProps = {
    title: string;
    author: string;
    titleTag?: 'h1' | 'h2' | 'h3' | 'h4';
};

export default function CitationSection(props: CitationProps): JSX.Element {

    const { titleTag = 'h2' } = props;

    return (
        <Section className={style.section} contentClassName={style.sectionContent} withLeftPadding>
            <div className={style.citation}>
                {React.createElement(titleTag, {
                    className: style.citationText,
                }, props.title)}
                <p className={style.citationAuthor}>— {props.author}</p>
            </div>
        </Section>
    );
}
