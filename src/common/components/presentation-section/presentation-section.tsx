import React from 'react';
import cn from 'classnames';
import { Col } from 'reactstrap';
import { Section } from 'common/components';
import QuoteSvg from 'resources/svgs/quote.component.svg';
import styles from './presentation-section.scss';

type PresentationSectionProps = CommonSection & {
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
    const { id, mainText, secondText, citation, link, image } = props;

    return (<>
        <Section
            id={id}
            withLeftPadding
            className={styles.section}
            contentClassName={styles.sectionContent}
        >
            <Col className={styles.main} xs={12} md={6} lg={3}>
                <hr className={styles.mainBorder} />

                {secondText ? <p className={styles.mainCaption}>{secondText}</p> : undefined}
                <p className={styles.mainText}>{mainText}</p>
                {link ? (
                    <a href={link.url} target="_blank" title={link.text} className={cn(styles.mainLink, 'arrow-link')}>
                        {link.text}
                    </a>
                ) : undefined}
            </Col>

            {citation ? (
                <Col className={styles.citation} xs={12} md={6} lg={{ size: 5, offset: 1 }}>
                    <QuoteSvg className={styles.citationQuote} />
                    <p className={styles.citationText}>”{citation.text}”</p>
                    {citation.author ? (
                        <div className={cn('citation', styles.citationAuthor)}>
                            {citation.author}
                        </div>
                    ) : undefined}
                </Col>
            ) : undefined}
        </Section>

        {image ? <div className={styles.picture}>
            <img src={image.src} alt={image.alt} title={image.title} className={styles.pictureImage} />
            <p className={styles.pictureCaption}>{image.caption}</p>
            <p className={styles.pictureSubcaption}>{image.subCaption}</p>
        </div> : undefined}
    </>);
}
