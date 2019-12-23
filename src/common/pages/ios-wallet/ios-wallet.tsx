import React from 'react';
import {
    Footer,
    Header,
    Section,
    Topic,
    StickIphone,
    IntroSection,
    BgTitleSection,
    CitationSection,
    SubscribeSection,
    ColumnsSection,
    CardSection,
    OpenSourceSection,
    FeatureSection,
    FeedbackSection,
} from 'common/components';
import { useI18n } from 'slim-i18n';

export default function IosWallet(): JSX.Element {
    const i18n = useI18n();

    return (
        <>
            <Header isWhite />

            <StickIphone picture={{
                src: '/img/main-screen.png',
                alt: 'multi cryptocurrency mobile wallet',
                title: 'cryptocurrency mobile wallet',
            }}>
                <IntroSection
                    title={i18n.gettext('Crypto wallet made easy')}
                    subtitle={i18n.gettext('One of the best iPhone crypto wallets.')}
                    subtitleTag="h3"
                />

                <BgTitleSection
                    title={i18n.gettext('smooth start')}
                    content={i18n.gettext('There is nothing you need to provide — no name, no phone number, no email (moreover, we won’t spam your mail with “hot deals”). A few taps and you are ready. No complexity at all, we make the flow benign and slight for you.')}
                />

                <BgTitleSection
                    title={i18n.gettext('Account? What account?')}
                    content={i18n.gettext('You don’t need to create an account as usual. In one word, you will get your wallet in a few clicks. Since Plark is connected to the different blockchain nodes, being fully decentralized, you get the goodies — the 12-word backup phrase is all you need to access your funds.')}
                />
            </StickIphone>


            <Section>
                <Topic
                    isSmall
                    isCenter
                    titleText={i18n.gettext('Love is...Design')}
                    descText={i18n.gettext('Flawless design is a passion. At least for us at Plark. We bring to perfection every little thing that can catch your attention. For this very reason, you’ll get back to enjoy Plark again and again. Only because of little things.')}
                />
            </Section>


            <ColumnsSection
                topic={{
                    titleTag: 'h1',
                    title: i18n.gettext('"The best crypto wallet for iPhone? Well, Plark."'),
                    description: i18n.gettext('— Plark Team'),
                }}
                texts={[{
                    title: i18n.gettext('Privacy matters.'),
                    content: i18n.gettext('Nobody has access to your personal data, but you. Plark encrypts both every transaction and private keys right on your device. The privacy should be private.'),
                }, {
                    title: i18n.gettext('Exchange in your pocket.'),
                    content: i18n.gettext('You no longer need to use external exchanges, as Plark allows you to trade between Bitcoin, Ethereum, Litecoin, and Dash right in the app. At the same time, Plark team is adding new cryptos.'),
                }, {
                    title: i18n.gettext('Get familiar with crypto.'),
                    content: i18n.gettext('We won’t load you up with technical details that don’t matter to you. Our focus is to make your “crypto entry” as smooth as possible.'),
                }]}
            />


            <CardSection
                title={i18n.gettext('Credit card — check!')}
                description={i18n.gettext('What feature the best crypto wallet for iPhone should have? Possibility to buy crypto via credit or debit card? That’s right. And Plark has it.')}
            />

            <FeatureSection
                text={i18n.gettext('Complicated can be simple. Cryptocurrency is not an exception. And we prove it. Help Center, FAQ, and 24/7 Support are at your service. We bet you will have nothing to ask left and the world of crypto will become clear as a bell for you.')}
                image={{
                    src: '/img/trade-screen.png',
                    alt: 'best mobile wallet for cryptocurrency',
                    title: 'mobile wallet for cryptocurrency',
                }}
            />

            <FeatureSection
                isLtr
                text={i18n.gettext('We give you total control over transactions fees. You are free to set the mining fee to speed up a transaction or lower the fee, if not in a hurry.')}
                image={{
                    src: '/img/trade-confirmation-screen.png',
                    alt: 'best mobile cryptocurrency wallet',
                    title: 'best mobile wallet for cryptocurrency',
                }}
            />

            <OpenSourceSection
                title={i18n.gettext('Fully open-source')}
                description={i18n.gettext('Transparency is trust. Plark is open-source and free of charge. We welcome clear-minded people to use our code or contribute to the project.')}
            />

            <FeedbackSection />

            <CitationSection
                titleTag="h2"
                title={i18n.gettext('Do we think Plark is the best IPhone crypto wallet? Better you say.')}
                author={i18n.gettext('Plark Team')}
            />

            <SubscribeSection />
            <Footer />
        </>
    );
}

