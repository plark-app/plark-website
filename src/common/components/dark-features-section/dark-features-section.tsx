import React from 'react';
import cn from 'classnames';
import { Section } from 'common/components';
import styles from './dark-features-section.scss';

export type FeatureUnit = {
    text: string;
    link?: {
        url: string;
        text: string;
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

    features?: Array<FeatureUnit>;
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

            <div className={cn(styles.center)}>
                {features.map((unit: FeatureUnit, index: number) => (
                    <article key={index}>
                        <p>{unit.text}</p>
                    </article>
                ))}
            </div>

            <div className={cn(styles.right)}>
                <img src="/img/iphone-frame-left.png"
                     alt="iphone cryptocurrency wallet"
                     className={styles.rightImage}
                />
            </div>
        </Section>
    );
}
