import React from 'react';
import cn from 'classnames';
import { Section, JoinLink } from 'common/components';
import styles from './feature-section.scss';

type FeatureSectionProps = {
    text: string;
    textClassName?: string;
    titleText?: string;
    titleClassName?: string;
    withoutLink?: boolean;
    linkText?: string;
    linkUrl?: string;
    isLtr?: boolean;

    textTag?: 'h1' | 'h2' | 'h3' | 'p';

    image: {
        src: string;
        alt?: string;
        title?: string;
    };
};

export default React.memo(function FeatureSection(props: FeatureSectionProps): JSX.Element {
    const {
        text,
        withoutLink = false,
        linkText = 'Get Plark app',
        linkUrl = 'https://itunes.apple.com/app/apple-store/id1455862890?pt=118337376&ct=site&mt=8',
        textTag = 'p',
        titleText,
        textClassName,
        titleClassName,
    } = props;

    const contentClass = cn(styles.sectionContent, {
        [styles.isLtr]: props.isLtr,
    });

    return (
        <Section className={styles.section} contentClassName={contentClass}>
            <div className={styles.content}>
                {titleText &&
                    React.createElement('p', { className: cn(styles.contentTitle, titleClassName) }, titleText)}
                {React.createElement(textTag, { className: cn(styles.contentText, textClassName) }, text)}
                {withoutLink ? (
                    undefined
                ) : (
                    <JoinLink href={linkUrl} target="_blank">
                        {linkText}
                    </JoinLink>
                )}
            </div>

            <div className={styles.picture}>
                <img {...props.image} className={styles.pictureImage} />
            </div>
        </Section>
    );
});
