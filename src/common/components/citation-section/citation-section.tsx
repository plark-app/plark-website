import React from 'react';
import cn from 'classnames';
import { Section } from 'common/components';
import style from './citation.scss';

type CitationProps = CommonSection & {
    title: string;
    author: string;
    titleTag?: 'h1' | 'h2' | 'h3' | 'h4';
    lowercase?: boolean;
};

export default function CitationSection(props: CitationProps): JSX.Element {

    const { titleTag = 'h2' } = props;

    return (
        <Section className={style.section} contentClassName={style.sectionContent} withLeftPadding id={props.id}>
            <div className={style.citation}>
                {React.createElement(titleTag, {
                    className: cn(style.citationText, props.lowercase && style.isLowercase),
                }, props.title)}
                <p className={style.citationAuthor}>{props.author}</p>
            </div>
        </Section>
    );
}
