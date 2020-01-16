import React from 'react';
import { Caption, Section } from 'common/components';
import styles from './big-photo-section.scss';

type BigPhotoSection = {
    src: string;
    alt: string;
    title?: string;

    caption: string;
    captionDescription?: string;
};

export function BigPhotoSection(props: BigPhotoSection): JSX.Element {
    return (
        <Section
            withLeftPadding
            className={styles.section}
            outerContent={<div className={styles.blackBlock} />}
        >
            <img src={props.src}
                 alt={props.alt}
                 title={props.title}
                 className={styles.image}
            />

            <Caption
                title={props.caption}
                description={props.captionDescription}
                className={styles.caption}
            />
        </Section>
    );
}
