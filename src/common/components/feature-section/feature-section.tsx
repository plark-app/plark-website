import React from 'react';
import cn from 'classnames';
import { useI18n } from 'slim-i18n';
import { Section, JoinLink } from 'common/components';
import { Col } from 'reactstrap';
import styles from './feature-section.scss';

export type FeatureSectionProps = {
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

export const FeatureSection = React.memo(function FeatureSection(props: FeatureSectionProps): JSX.Element {
    const i18n = useI18n();

    const {
        text,
        withoutLink = false,
        linkText = i18n.gettext('Get Plark app'),
        linkUrl = 'https://dl.plark.io/app/website-appstore',
        textTag = 'p',
        titleText,
        textClassName,
        titleClassName,
    } = props;

    const contentClass = cn(styles.featureSectionContent, {
        [styles.isLtr]: props.isLtr,
    });

    return (
        <Section
            withLeftPadding
            className={styles.featureSection}
            contentClassName={contentClass}
        >
            <Col className={styles.featureSectionText} lg={6}>
                {titleText && React.createElement(
                    'p',
                    { className: cn(styles.featureSectionTextTitle, titleClassName) },
                    titleText,
                )}
                {React.createElement(textTag, { className: cn(styles.featureSectionTextDescr, textClassName) }, text)}
                {withoutLink ? undefined : (
                    <JoinLink href={linkUrl} target="_blank" rel="nofollow">
                        {linkText}
                    </JoinLink>
                )}
            </Col>

            <Col className={styles.picture} lg={4}>
                <img {...props.image} className={styles.pictureImage} />
            </Col>
        </Section>
    );
});
