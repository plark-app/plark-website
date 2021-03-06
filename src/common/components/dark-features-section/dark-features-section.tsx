import React from 'react';
import cn from 'classnames';
import { Section } from 'common/components';
import { Col, Row } from 'reactstrap';
import styles from './dark-features-section.scss';

export type FeatureUnitProps = {
    text: string;
    link?: CommonLink;
    image: {
        url: string;
        alt: string;
        title?: string;
    }
};

type BlackFeaturesProps = CommonSection & {
    title: string;
    link: CommonLink;
    features?: Array<FeatureUnitProps>;
};

export function DarkFeaturesSection(props: BlackFeaturesProps): JSX.Element {
    const { link, features = [] } = props;

    return (
        <Section
            isDark
            id={props.id}
            className={styles.section}
            contentClassName={styles.sectionContent}
            noGutters
        >
            <Col className={styles.left} lg={{ size: 3, offset: 1 }}>
                <div className={styles.leftContent}>
                    <h3 className={styles.leftTitle}>{props.title}</h3>
                    <a href={link.url} title={link.title} className={cn(styles.leftLink, 'arrow-link')} rel={link.rel}>
                        {link.text}
                    </a>
                </div>
            </Col>

            <Col className={cn(styles.featureList)} lg={{ size: 7, offset: 1 }} sm={12}>
                {features.map((unit: FeatureUnitProps, index: number) => <FeatureUnit key={index} {...unit} />)}
            </Col>
        </Section>
    );
}


function FeatureUnit(props: FeatureUnitProps) {
    const { text, link, image } = props;

    return (
        <Row className={styles.feature} noGutters>
            <Col className={styles.featureText} lg={5} sm={6} xs={12}>
                <p className={styles.featureTextContent}>{text}</p>
                {link ? (
                    <a href={link.url} className={cn('citation', 'arrow-link')} rel={link.rel}>{link.text}</a>
                ) : undefined}
            </Col>

            <Col className={cn(styles.featureImage)} lg={7} sm={6} xs={12}>
                <img src={image.url + '.png'}
                     alt={image.alt}
                     title={image.title}
                     className={styles.featureImageImg}
                     srcSet={image.url + '@2x.png 2x'}
                />
            </Col>
        </Row>
    );
}
