import React from 'react';
import {
    Header,
    Section,
    Topic,
    StickIphone,
    IntroSection,
    BgTitleSection,
    CitationSection,
    SubscribeSection,
    ColumnsSection,
    OpenSourceSection,
    FeatureSection,
    FeedbackSection,
    DarkFooter,
    DarkCardSection,
} from 'common/components';
import { Col } from 'reactstrap';
import { useI18n } from 'slim-i18n';

export default function MobileWallet(): JSX.Element {
    const i18n = useI18n();

    return (
        <>
            <Header isWhite />

            <StickIphone picture={{
                src: '/img/interfaces/PlarkScreen-dashboard.png',
                alt: i18n.gettext('multi cryptocurrency mobile wallet'),
                title: i18n.gettext('cryptocurrency mobile wallet'),
            }}>
                <IntroSection
                    title={i18n.gettext('Crypto wallet made easy')}
                    subtitle={i18n.gettext('Just a mobile crypto wallet you will use.')}
                />

                <BgTitleSection
                    title={i18n.gettext('start with no hassle')}
                    content={i18n.gettext('We won’t ask anything. No name, no email, no phone number  — you stay entirely anonymous. Thirty seconds and you are ready to go. We hide all the complexity out of your sight to make the flow breezy.')}
                />

                <BgTitleSection
                    textTag="h1"
                    title={i18n.gettext('no accounts. no headache.')}
                    content={i18n.gettext('Plark is fully decentralized crypto wallet app that connects directly to the several different blockchain nodes, using a uniquely generated 12-word backup phrase. There are no accounts to create, so nothing to hack. Even if alien intruders invade, your money will always be on a hunk.')}
                />
            </StickIphone>


            <Section withLeftPadding>
                <Col lg={11}>
                    <Topic
                        isSmall
                        isCenter
                        titleText={i18n.gettext('Simplicity = design')}
                        descText={i18n.gettext('Design is what should help. Design is what should satisfy. No matter how experienced you are — it should be simple, understandable, and attractive. Design\nis the reason why you will use Plark.')}
                    />
                </Col>
            </Section>


            <ColumnsSection
                texts={[{
                    title: i18n.gettext('Your privacy is yours.'),
                    content: i18n.gettext('Plark crypto mobile app encrypts private keys and transaction data on your device. Your data always remains private.'),
                }, {
                    title: i18n.gettext('Built-in Exchange.'),
                    content: i18n.gettext('Exchange your crypto anonymously with the Plark’s fine-tailored feature in a few taps. Bitcoin, Ethereum, Litecoin, Dash cryptos are available with more to come.'),
                }, {
                    title: i18n.gettext('Friendliest crypto wallet app.'),
                    content: i18n.gettext('No “tech talks” or mind-bending words. Plark makes it easy-peasy to get familiar with crypto.'),
                }]}
            />


            <DarkCardSection
                title={i18n.gettext('Credit Card is The Key')}
                description={i18n.gettext('Link up your credit or debit card to a wallet to buy and sell crypto in a tap — the feature, which best crypto mobile wallet should have.')}
            />

            <FeatureSection
                text={i18n.gettext('Cryptocurrencies are too complicated? Seventy years ago, the first credit cards also got people into confusion. We will answer every question that you may have. Help Center & FAQ sections are here to help. We bet crypto will become kid’s stuff for you.')}
                image={{
                    src: '/img/trade-screen.png',
                    alt: i18n.gettext('best mobile wallet for cryptocurrency'),
                    title: i18n.gettext('mobile wallet for cryptocurrency'),
                }}
            />

            <FeatureSection
                isLtr
                text={i18n.gettext('Plark gives you a free hand in choosing the transaction speed by setting up the mining fee. Sometimes, you need to send money in no time, and sometimes there is no hurry. We will never ask you why — we allow it.')}
                image={{
                    src: '/img/trade-confirmation-screen.png',
                    alt: i18n.gettext('best mobile cryptocurrency wallet'),
                    title: i18n.gettext('best mobile wallet for cryptocurrency'),
                }}
            />

            <OpenSourceSection
                title={i18n.gettext('Fully open-source')}
                description={i18n.gettext('Transparency is trust. Plark is open-source and free of charge. We welcome clear-minded people to use our code or contribute to the project.')}
            />

            <FeedbackSection />

            <CitationSection
                titleTag="h3"
                title={i18n.gettext('Do we think Plark is the best crypto wallet app? Better you say.')}
                author={i18n.gettext('Plark Team')}
            />

            <SubscribeSection />

            <DarkFooter />
        </>
    );
}

