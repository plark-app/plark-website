import React from 'react';
import { Col } from 'reactstrap';
import { useI18n } from 'slim-i18n';
import { __ } from 'common/i18n';
import { Section } from 'common/components';
import SubscribeForm from './subscribe-form';
import styles from './subscribe-section.scss';

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
            <Col className={styles.subscribeRight} md={4} lg={3}>
                <h3 className={styles.subscribeTitle}>{title(i18n)}</h3>
            </Col>

            <Col className={styles.subscribeFormContainer} md={8} lg={{ size: 7, offset: 1 }}>
                <p className={styles.subscribeContent}>{content(i18n)}</p>
                <SubscribeForm />
            </Col>
        </Section>
    );
}



