import React from 'react';
import cn from 'classnames';
import { Section } from 'common/components';
import styles from './dark-features-section.scss';

export type FeatureUnitProps = {
    text: string;
    link?: {
        url: string;
        text: string;
        title?: string;
    }

    image: {
        url: string;
        alt: string;
        title?: string;
    }
};

type BlackFeaturesProps = {
    title: string;
    link: {
        url: string;
        text: string;
        title?: string;
    }

    features?: Array<FeatureUnitProps>;
};

export function DarkFeaturesSection(props: BlackFeaturesProps): JSX.Element {
    const { link, features = [] } = props;

    return (
        <Section
            isDark
            withLeftPadding
            className={styles.section}
            contentClassName={styles.sectionContent}
        >
            <div className={cn(styles.left)}>
                <h3 className={styles.leftTitle}>{props.title}</h3>
                <a href={link.url} title={link.title} className={cn(styles.leftLink, 'arrow-link')}>
                    {link.text}
                </a>
            </div>

            <div className={cn(styles.featureList)}>
                {features.map((unit: FeatureUnitProps, index: number) => <FeatureUnit key={index} {...unit} />)}
            </div>
        </Section>
    );
}


function FeatureUnit(props: FeatureUnitProps) {
    const { text, link, image } = props;
    return (
        <article className={styles.feature}>
            <div className={styles.featureText}>
                <p className={styles.featureTextContent}>{text}</p>
                {link ? (
                    <a href={link.url} className={cn('citation', 'arrow-link')}>{link.text}</a>
                ) : undefined}
            </div>

            <div className={cn(styles.featureImage)}>
                <img src={image.url}
                     alt={image.alt}
                     title={image.title}
                     className={styles.featureImageImg}
                />
            </div>
        </article>
    );
}
