import React from 'react';
import cn from 'classnames';
import { useI18n } from 'slim-i18n';
import { Section, ChartBackground } from 'common/components';
import styles from './dark-card-section.scss';
import { CardsList } from './cards-list';

type DarkCardSectionProps = CommonSection & {
    title: string;
    description?: string;
    subtitle?: string;
    caption?: string;
    titleClassName?: string;
    topicClassName?: string;
};

export function DarkCardSection(props: DarkCardSectionProps): JSX.Element {
    const i18n = useI18n();

    return (
        <Section
            isDark
            withLeftPadding
            id={props.id}
            outerContent={<ChartBackground className={styles.chart} />}
            className={styles.section}
            contentClassName={styles.sectionContent}
        >
            <div className={styles.left}>
                <h2 className={styles.leftTitle}>{props.title}</h2>
                <p className={styles.leftSubtitle}>{props.subtitle}</p>

                <div className={styles.features}>
                    <p className={styles.featuresValue}>
                        over 4000 excited users have
                        joined our  Plark family
                    </p>
                </div>

                <a className={cn(styles.downloadLink, 'arrow-link')} href="https://dl.plark.io/app/website-appstore">
                    Download Plark for iOS
                </a>
            </div>

            <div className={styles.right}>
                <div className={styles.creditCard}>
                    <img src="/img/white-credit-card.svg"
                         className={styles.creditCardImage}
                         alt="Credit card"
                         title="buy and sell cryptocurrency"
                    />
                </div>

                <h3 className={styles.description}>{props.description}</h3>
                <CardsList className={styles.cardImages} />

                {props.caption ? (
                    <p className={styles.caption}>{props.caption}</p>
                ) : (
                    <p className={styles.caption}>
                        {i18n.gettext(
                            'For now, the feature is on for Ukraine (UAH) only. The USA (US Dollar), EEA (Euro), and the Russian Federation (Rub) are coming soon.',
                        )}
                    </p>
                )}
            </div>
        </Section>
    );
}


