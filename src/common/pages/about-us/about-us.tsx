import React from 'react';
import { useI18n } from 'slim-i18n';
import {
    Footer,
    Header,
    SubscribeSection,
    CardSection,
    OpenSourceSection,
    FeatureSection,
    TwoIPhones,
    Topic,
    Section,
} from 'common/components';

import style from './about-us.scss';

export default function AboutUs(): JSX.Element {
    const i18n = useI18n();

    return (
        <>
            <Header isWhite />

            <Section className={style.introSection} contentClassName={style.introContent}>
                <Topic
                    titleTag="h1"
                    titleText={i18n.gettext('We make crypto simpler for you.')}
                    descText={i18n.gettext('Cryptocurrency is not always easy to understand for many people. Internet was the same at one time. It stops people from being involved and slows down overall adoption.')}
                    maxWidth={585}
                    descClassName={style.introTopicDescription}
                />

                <img src="/img/main-screen.png" className={style.introIphone} />
            </Section>

            <OpenSourceSection
                title={i18n.gettext('Fully open-source')}
                description={i18n.gettext('Plark is a team of enthusiasts. We say: “Cryptocurrencies are simple.” Not only in words, but in deeds also.')}
            />

            <TwoIPhones className={style.twoIphones} />

            <CardSection
                title={i18n.gettext('Buy and sell crypto with a credit card.')}
                description={i18n.gettext('Add your credit or debit card and purchase Bitcoin, Litecoin, Ethereum, and Dash right away. The feature, which best crypto wallet should have.')}
                subtitle={i18n.gettext('We don’t burden you with unnecessary information about how it works deeply. After all, it is not necessary to know the car’s structure to drive it successfully.')}
            />

            <FeatureSection
                withoutLink
                text={i18n.gettext('Freedom is a fundamental principle of Bitcoin. We adhere to it, providing equal conditions for each person to become a part of the future. Download Plark and create this future with us.')}
                image={{
                    src: '/img/trade-screen.png',
                }}
            />

            <SubscribeSection />

            <Footer />
        </>
    );
}


