import React from 'react';
import { useI18n } from 'slim-i18n';
import classnames from 'classnames';

import { Section, Topic, DownloadCell } from 'common/components';

import ChartSvg from 'resources/svgs/chart.component.svg';

import styles from './card-section.scss';

type CardSectionProps = {
    title: string;
    description?: string;
    subtitle?: string;
    caption?: string;
    titleClassName?: string;
    topicClassName?: string;
    steps?: string[];
};

export default function CardSection(props: CardSectionProps): JSX.Element {
    const i18n = useI18n();

    return (
        <Section
            outerContent={<CardSectionBackground />}
            className={styles.section}
            contentClassName={styles.sectionContent}
        >
            <div className={styles.creditCard}>
                <img src="/img/credit-card.svg" className={styles.creditCardImage} alt="Credit card" />
            </div>

            <Topic
                isCenter
                isSmall
                descClassName={classnames(styles.topicDescription, props.topicClassName)}
                titleText={props.title}
                titleClassName={props.titleClassName}
                descText={props.description}
            />

            {props.subtitle && <p className={styles.subtitle}>{props.subtitle}</p>}

            {props.steps && (
                <div className={styles.cardSectionSteps}>
                    {props.steps.map((step: string, i: number) => (
                        <div key={i} className={styles.cardSectionStep}>
                            <span className={styles.cardSectionStepNumber}>0{i + 1}</span>
                            <p className={styles.cardSectionStepDescr}>{step}</p>
                        </div>
                    ))}
                </div>
            )}

            <div className={styles.cardImages}>
                <img
                    src="/img/exotic-cards.png"
                    alt="UnionPay / American express cards"
                    className={styles.cardImagesItem}
                />
                <img src="/img/common-cards.png" alt="Visa/Mastercard cards" className={styles.cardImagesItem} />
            </div>
            {props.caption ? (
                <p className={styles.caption}>{props.caption}</p>
            ) : (
                <p className={styles.caption}>
                    {i18n.gettext(
                        'For now, this feature is available for Ukraine (UAH) only. The Russian Federation (RUB), USA (US Dollar) and EEA (Euro) will be added soon.',
                    )}
                </p>
            )}

            <DownloadCell className={styles.download} />
        </Section>
    );
}

function CardSectionBackground(): JSX.Element {
    return <ChartSvg className={styles.chart} />;
}
