import React from 'react';
import ArrowDownSvg from 'resources/svgs/arrow-down.component.svg';
import { Section, Caption } from 'common/components';
import styles from './photo-citation-section.scss';

type PhotoCitationProps = {
    image: {
        src: string;
        alt: string;
        title?: string;
    }

    citation: {
        text: string;
        author?: string;
    }

    caption?: {
        title: string;
        description?: string;
    }
};

export function PhotoCitationSection(props: PhotoCitationProps): JSX.Element {
    const { image, citation, caption } = props;

    return (
        <Section
            isDark
            withLeftPadding
            className={styles.section}
            contentClassName={styles.sectionContent}
        >
            <div className={styles.image}>
                <img src={image.src} alt={image.alt} title={image.title} className={styles.imageImage} />
                <ArrowDownSvg className={styles.imageArrow} />
            </div>

            <div className={styles.content}>
                <div className={styles.citation}>
                    <p className={styles.citationText}>“{citation.text}”</p>
                    {citation.author ? (
                        <p className={styles.citationAuthor}>{citation.author}</p>
                    ) : undefined}
                </div>

                {caption ? <Caption
                    isWhite
                    className={styles.caption}
                    title={caption.title}
                    description={caption.description}
                /> : undefined}
            </div>
        </Section>
    );
}
