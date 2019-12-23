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
                    alt: 'multi cryptocurrency mobile wallet',
                    title: 'cryptocurrency mobile wallet',
                }}
            >
                <IntroSection
                    title={i18n.gettext('Crypto wallet made easy')}
                    subtitle={i18n.gettext('All-in-one app that opens up the door to the dizzying world of crypto')}
                />

                <BgTitleSection
                    title="Exchange used to be a multistep nightmare. Then came Plark"
                    content={
                        'Exchange your cryptocurrencies in a few taps thanks to Plark’s fine-tailored features. ' +
                        'No more messing with exchanges, no more awful lot of passwords and backup phrases. ' +
                        'Stay anonymous and do everything right in your crypto currency wallet.'
                    }
                />

                <BgTitleSection
                    title="Send and receive your crypto. Anytime. Anywhere."
                    content={
                        'Fast and convenient way to control your assets on the move. Send and receive ' +
                        'cryptocurrencies in a few clicks. A couple of taps and you\'re an honored crypto owner.'
                    }
                />

                <BgTitleSection
                    withMobile
                    title="One-size-fits-all wallet. Yes, it’s Plark."
                    content={
                        'Bitcoin? Litecoin? Ethereum? Or maybe Dash? Choose whatever floats your boat ' +
                        'and store it in one place. In one right place named Plark.'
                    }
                />

                <BgTitleSection
                    title="Plark never settles for anything less than security. And you shouldn't either."
                    content={
                        'Plark is probably the securest mobile crypto wallet. Only you have access to your ' +
                        'funds and transaction data. Neither Plark nor any 3rd party can access your money ' +
                        'and data that are stored on your device only.'
                    }
                />
            </StickIphone>

            <CitationSection
                titleTag="h1"
                title={`We don’t say Plark is the best crypto wallet. Better you say.`}
                author="Plark Team"
            />

            <CardSection
                title="Credit Card is The Key"
                description={
                    'Add your credit or debit card, make a couple of tweaks, and watch the magic happen. ' +
                    'Purchase Bitcoin, Litecoin, Ethereum, and Dash for fiat currency right in the wallet.'
                }
            />

            <FeatureSection
                text={
                    'Whether you are on a friendly footing with crypto or just planning ' +
                    'to hit the road — purchasing it for real money can be a pain in the neck. ' +
                    'Plark pulls you around, offering a bunch of tools – all crucial for smooth ' +
                    'and painless transactions of all kinds.'
                }
                image={{
                    src: '/img/trade-screen.png',
                    alt: 'best mobile wallet for cryptocurrency',
                    title: 'mobile wallet for cryptocurrency',
                }}
            />

            <FeatureSection
                isLtr
                text={
                    "From now on, everyday struggle of crypto enthusiasts is officially over." +
                    "Stop sneaking around, looking for a decent exchange. Pull a smartphone out of " +
                    "your pocket and let a transaction happen."
                }
                image={{
                    src: '/img/trade-confirmation-screen.png',
                    alt: 'best mobile cryptocurrency wallet',
                    title: 'best mobile wallet for cryptocurrency',
                }}
            />

            <CommunitySection />

            <FeedbackSection
                topic={{
                    title: '“' + i18n.gettext('It’s my crypto wallet') + '”',
                    description: i18n.gettext('— the highest praise we’ve ever dreamed to earn from you.'),
                    titleTag: 'h3',
                }}
            />

            <SubscribeSection />

            <Footer />
        </>
    );
}
