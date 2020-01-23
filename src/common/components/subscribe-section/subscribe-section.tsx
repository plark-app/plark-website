import React from 'react';
import { useI18n } from 'slim-i18n';
import { __ } from 'common/i18n';
import { Section } from '../section';
import styles from './subscribe-section.scss';
import SubscribeForm from './subscribe-form';

type SubscribeSectionProps = CommonSection & {};

const title = __('Hey, wanna get the hottest tips delivered right to your email?');
const content = __('Oookaaay! Then enter your email. \nNo worries, it doesn’t hurt.');

export function SubscribeSection(props: SubscribeSectionProps): JSX.Element {
    const i18n = useI18n();

    return (
        <Section
            withLeftPadding
            id={props.id}
            className={styles.section}
            contentClassName={styles.sectionContent}
        >
            <h3 className={styles.subscribeTitle}>{title(i18n)}</h3>
            <div className={styles.subscribeFormContainer}>
                <p className={styles.subscribeContent}>{content(i18n)}</p>
                <SubscribeForm />
            </div>
        </Section>
    );
}



