import React from 'react';
import { Col } from 'reactstrap';
import ArrowDownSvg from 'resources/svgs/arrow-down.component.svg';
import { Section, Caption } from 'common/components';
import styles from './team-section.scss';

type PhotoCitationProps = CommonSection & {
    images: Array<{
        src: string;
        alt: string;
        title?: string;
    }>;

    citation: {
        text: string;
        author?: string;
    }

    caption?: {
        title: string;
        description?: string;
    }
};

export function TeamSection(props: PhotoCitationProps): JSX.Element {
    const { images, citation, caption } = props;

    const image = images[0];

    return (
        <Section
            isDark
            withLeftPadding
            id={props.id}
            className={styles.section}
            contentClassName={styles.sectionContent}
        >
            <Col className={styles.image} xs={12} sm={10} lg={6}>
                <img src={image.src}
                     alt={image.alt}
                     title={image.title}
                     className={styles.imageImage}
                />

                {caption ? <Caption
                    isWhite
                    className={styles.caption}
                    title={caption.title}
                    description={caption.description}
                /> : undefined}

                <ArrowDownSvg className={styles.imageArrow} />
            </Col>

            <Col className={styles.content} sm={{ size: 6, offset: 6 }} lg={{ size: 4, offset: 1 }}>
                <div className={styles.citation}>
                    <p className={styles.citationText}>“{citation.text}”</p>
                    {citation.author ? (
                        <p className={styles.citationAuthor}>{citation.author}</p>
                    ) : undefined}
                </div>
            </Col>
        </Section>
    );
}
