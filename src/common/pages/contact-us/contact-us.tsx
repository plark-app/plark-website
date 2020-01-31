import React from 'react';
import { Col } from 'reactstrap';
import { useI18n } from 'slim-i18n';
import { Header, Section, Topic, TwoIPhones, UIButton, Socials, DarkFooter } from 'common/components';

import styles from './contact-us.scss';

export default function ContactUs(): JSX.Element {
    const i18n = useI18n();

    return (
        <>
            <Header isWhite />

            <Section contentClassName={styles.contactUs} withLeftPadding>
                <Col lg={11} className={styles.contactUsBox}>
                    <div className={styles.contactUsTopic}>
                        <Topic
                            titleClassName={styles.contactUsTitle}
                            titleTag="h1"
                            titleText={i18n.gettext('Stay in touch')}
                            descText={i18n.gettext(
                                'Plark Staff will never ask for personal information, including 12-word phrase.',
                            )}
                            descClassName={styles.contactUsTopicDescription}
                        />

                        <div className={styles.contactUsActions}>
                            <UIButton
                                color="primary"
                                className={styles.contactUsActionsButton}
                                component={'a'}
                                href={'mailto:info@plark.io'}
                                target={'_blank'}
                            >
                                {i18n.gettext('Write us')}
                            </UIButton>

                            <Socials className={styles.contactUsSocials} />
                        </div>
                    </div>

                    <TwoIPhones className={styles.contactUsPhones} />
                </Col>
            </Section>

            <DarkFooter />
        </>
    );
}
