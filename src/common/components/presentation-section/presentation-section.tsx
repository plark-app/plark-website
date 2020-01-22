import React from 'react';
import cn from 'classnames';
import { Section } from 'common/components';
import QuoteSvg from 'resources/svgs/quote.component.svg';
import styles from './presentation-section.scss';

type PresentationSectionProps = {
    mainText: string;
    secondText: string;

    citation?: {
        text: string;
        author?: string;
    }

    link?: {
        text: string;
        url: string;
    };

    image?: {
        src: string;
        alt?: string;
        title?: string;

        caption?: string;
        subCaption?: string;
    };
};

export function PresentationSection(props: PresentationSectionProps): JSX.Element {
    const { mainText, secondText, citation, link, image } = props;

    return (<>
        <Section
            withLeftPadding
            className={styles.section}
            contentClassName={styles.sectionContent}
        >
            <div className={styles.main}>
                {secondText ? <p className={styles.mainCaption}>{secondText}</p> : undefined}
                <p className={styles.mainText}>{mainText}</p>
                {link ? (
                    <a href={link.url} target="_blank" title={link.text} className={cn(styles.mainLink, 'arrow-link')}>
                        {link.text}
                    </a>
                ) : undefined}
            </div>

            {citation ? (
                <div className={styles.citation}>
                    <QuoteSvg className={styles.citationQuote} />
                    <p className={styles.citationText}>”{citation.text}”</p>
                    {citation.author ? (
                        <div className={cn('citation', styles.citationAuthor)}>
                            {citation.author}
                        </div>
                    ) : undefined}
                </div>
            ) : undefined}
        </Section>

        {image ? <div className={styles.picture}>
            <img src={image.src} alt={image.alt} title={image.title} className={styles.pictureImage} />
            <p className={styles.pictureCaption}>{image.caption}</p>
            <p className={styles.pictureSubcaption}>{image.subCaption}</p>
        </div> : undefined}
    </>);
}
