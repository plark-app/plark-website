import React from 'react';
import { useI18n } from 'slim-i18n';
import { __ } from 'common/i18n';
import { Section } from '../section';
import styles from './subscribe-section.scss';
import SubscribeForm from './subscribe-form';

type SubscribeSectionProps = {};

const title = __('Stay in touch and maybe you’d like it.');
const content = __('Nobody loves newsletter spamming. Remember your last time you’ve opened these “best online crypto wallet” or “crypto currency wallet for you”. Catchy pictures and funny words — that’s what we like.');

export function SubscribeSection(_props: SubscribeSectionProps): JSX.Element {
    const i18n = useI18n();

    return (
        <Section className={styles.section} contentClassName={styles.sectionContent} withLeftPadding>
            <h3 className={styles.subscribeTitle}>{title(i18n)}</h3>

            <div className={styles.subscribeFormContainer}>
                <p className={styles.subscribeContent}>{content(i18n)}</p>
                <SubscribeForm />
            </div>
        </Section>
    );
}



