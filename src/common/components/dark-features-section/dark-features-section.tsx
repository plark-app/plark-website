import React from 'react';
import cn from 'classnames';
import { Section } from 'common/components';
import styles from './dark-features-section.scss';

type BlackFeaturesProps = {
    title: string;
    link: {
        url: string;
        text: string;
        title?: string;
    }
};

export function DarkFeaturesSection(props: BlackFeaturesProps): JSX.Element {
    const { link } = props;

    return (
        <Section
            isDark
            withLeftPadding
            className={styles.section}
            contentClassName={styles.sectionContent}
        >
            <div className={cn(styles.left, 'l3')}>
                <h3 className={styles.leftTitle}>{props.title}</h3>
                <a href={link.url} title={link.title} className={styles.leftLink}>
                    {link.text}
                </a>
            </div>

            <div className={cn(styles.center, 'l3')}>
                Some content
            </div>

            <div className={cn(styles.right, 'l4')}>
                <img src="/img/iphone-frame-left.png" alt="iphone cryptocurrency wallet" className={styles.rightImage} />
            </div>
        </Section>
    );
}
