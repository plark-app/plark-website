import React from 'react';
import cn from 'classnames';
import { Section, JoinLink } from '../';
import styles from './feature-section.scss';

type FeatureSectionProps = {
    text: string;
    linkText?: string;
    linkUrl?: string;
    isLtr?: boolean;

    image: {
        src: string;
        alt?: string;
        title?: string;
    }
};

export default React.memo(function FeatureSection(props: FeatureSectionProps): JSX.Element {

    const {
        linkText = 'Get Plark app',
        linkUrl = 'https://itunes.apple.com/app/apple-store/id1455862890?pt=118337376&ct=site&mt=8',
    } = props;

    const contentClass = cn(styles.sectionContent, {
        [styles.isLtr]: props.isLtr,
    });

    return (
        <Section className={styles.section} contentClassName={contentClass}>
            <div className={styles.content}>
                <p className={styles.contentText}>{props.text}</p>
                <JoinLink href={linkUrl} target="_blank">{linkText}</JoinLink>
            </div>

            <div className={styles.picture}>
                <img {...props.image} className={styles.pictureImage} />
            </div>
        </Section>
    );
});