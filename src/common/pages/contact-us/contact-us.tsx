import React from 'react';
import { useI18n } from 'slim-i18n';
import { Footer, Header, Section, Topic, TwoIPhones, UIButton } from 'common/components';
import { Socials } from 'common/components';

import styles from './contact-us.scss';

export default function ContactUs(): JSX.Element {
    const i18n = useI18n();

    return (
        <>
            <Header isWhite />

            <Section contentClassName={styles.contactUs}>
                <div className={styles.contactUsTopic}>
                    <Topic
                        titleClassName={styles.contactUsTitle}
                        titleTag="h1"
                        titleText={i18n.gettext('Stay in touch')}
                        descText={i18n.gettext(
                            'Plark Staff will never ask for personal information, including 12-word phrase.',
                        )}
                        descClassName={styles.contactUsTopicDescr}
                    />
                    <div className={styles.contactUsActions}>
                        <UIButton color="primary" className={styles.contactUsActionsButton}>
                            {i18n.gettext('Write us')}
                        </UIButton>

                        <Socials className={styles.contactUsSocials} />
                    </div>
                </div>

                <TwoIPhones />
            </Section>

            <Footer />
        </>
    );
}
