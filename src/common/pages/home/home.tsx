import React from 'react';
import { useI18n } from 'slim-i18n';
import {
    Footer,
    Header,
    StickIphone,
    IntroSection,
    BgTitleSection,
    CitationSection,
    SubscribeSection,
    CardSection,
    FeatureSection,
    CommunitySection,
    FeedbackSection,
} from 'common/components';

export default function Home(): JSX.Element {
    const i18n = useI18n();

    return (
        <>
            <Header isWhite />

            <StickIphone
                picture={{
                    src: '/img/main-screen.png',
                    alt: 'Plark Main screen',
                    title: 'PLark Main screen',
                }}
            >
                <IntroSection
                    title={i18n.gettext('No sh*t wallet')}
                    subtitle={i18n.gettext('Just a friendliest crypto currency wallet app you will use')}
                />

                <BgTitleSection
                    title="exchange your cryptocurrencies anonymously"
                    content={
                        'Exchange your cryptocurrencies anonymously with the Plark’s fine-tailored ' +
                        'feature in a few taps. Bitcoin, Ethereum, Litecoin, and Dash cryptos are ' +
                        'available with more to come.'
                    }
                />

                <BgTitleSection
                    title="send and receive crypto"
                    content={
                        'Send and receive Bitcoin, Ethereum, Litecoin, and Dash (with more cryptos to come) ' +
                        'in a few clicks. Fast and convenient way to control your assets. Anytime. Anywhere.'
                    }
                />

                <BgTitleSection
                    withMobile
                    title="one wallet for everything"
                    content={
                        'No more bunch of wallets and apps, no more messing with passwords and backup phrases. ' +
                        'Manage and keep your Bitcoin, Ethereum, Litecoin, and Dash cryptocurrencies through ' +
                        'the single app.'
                    }
                />

                <BgTitleSection
                    title="Safe Place for Your Crypto? It’s Here!"
                    content={
                        'Plark is probably the most secure crypto wallet. Only you have access to your funds and ' +
                        'transaction data. Neither Plark nor any 3rd party can access your money and data that ' +
                        'are stored on your device only.'
                    }
                />
            </StickIphone>

            <CitationSection
                titleTag="h1"
                title="We don’t say Plark is the best crypto wallet. Better you say."
                author="Plark Team"
            />

            <CardSection
                title="Credit Card is The Key"
                description={
                    'Add your credit or debit card and purchase Bitcoin, Litecoin, Ethereum, and Dash ' +
                    'right away. The feature, which best crypto wallet should have.'
                }
            />

            <FeatureSection
                text={
                    'No matter if you are on a friendly footing with crypto or getting started — purchasing it ' +
                    'for real money can be a real pain in the neck. Plark pulls you round from this hell, ' +
                    'allowing to buy your favorite coin for real money.'
                }
                image={{
                    src: '/img/trade-screen.png',
                }}
            />

            <FeatureSection
                isLtr
                text={
                    'No more struggling through thug life of crypto enthusiast, when you look for a decent ' +
                    'exchange or on the watch of transaction processing.'
                }
                image={{
                    src: '/img/trade-confirmation-screen.png',
                }}
            />

            <CommunitySection />

            <FeedbackSection
                topic={{
                    title: '“' + i18n.gettext('It’s my crypto wallet') + '”',
                    description: i18n.gettext('— words, we would like to hear from you.'),
                    titleTag: 'h3',
                }}
            />

            <SubscribeSection />

            <Footer />
        </>
    );
}

