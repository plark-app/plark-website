import React from 'react';
import { useI18n } from 'slim-i18n';
import {
    Footer,
    Header,
    Section, Topic,
    TwoIPhones,
} from 'common/components';

export default function ContactUs(): JSX.Element {
    const i18n = useI18n();

    return (
        <>
            <Header isWhite />

            <Section>
                <Topic
                    titleTag="h1"
                    titleText={i18n.gettext('Stay in touch')}
                    descText={i18n.gettext('Plark Staff will never ask for personal information, including 12-word phrase.')}
                />

                <TwoIPhones />
            </Section>

            <Footer />
        </>
    );
}


