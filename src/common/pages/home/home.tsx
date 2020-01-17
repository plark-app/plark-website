import React from 'react';
import { useI18n } from 'slim-i18n';

import {
    Footer,
    Header,
    StickIphone,
    IntroSection,
    PresentationSection,
    PhotoCitationSection,
    BgTitleSection,
    BigPhotoSection,
    SubscribeSection,
    DarkFeaturesSection,
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

            <IntroSection
                withPhone
                title={i18n.gettext('Crypto wallet made easy')}
                subtitle={i18n.gettext('All-in-one app that opens up the door to the dizzying world of crypto')}
            />

            <PresentationSection
                mainText={i18n.gettext('A blockchain, originally block chain, is a growing list of records, called blocks, that are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data.')}
                secondText={i18n.gettext('Plark is a team of enthusiasts. We say: “Cryptocurrencies are simple.” Not only in words, but in deeds also.')}
                link={{
                    text: i18n.gettext('Join discussion on Flarum'),
                    url: 'https://community.plark.io',
                }}
                citation={{
                    text: i18n.gettext(`The root problem with conventional currency is all the trust that's required to make it work. The central bank must be trusted not to debase the currency, but the history of fiat currencies is full of breaches of that trust. Banks must be trusted to hold our money and transfer it electronically, but they lend it out in waves of credit bubbles with barely a fraction in reserve. We have to trust them with our privacy, trust them not to let identity thieves drain our accounts.`),
                    author: i18n.gettext('— Satoshi Nakamoto'),
                }}
                image={{
                    src: '/img/team/image_1.png',
                    caption: i18n.gettext('Visual artist & director Ersinhan Ersin was at The Next Web Conference 2018'),
                    subCaption: i18n.gettext('Westergasfabriek B.V., Amsterdam, Netherlands'),
                }}
            />

            <StickIphone
                picture={{
                    src: '/img/main-screen.png',
                    alt: 'multi cryptocurrency mobile wallet',
                    title: 'cryptocurrency mobile wallet',
                }}
            >
                <BgTitleSection
                    title="Exchange used to be a multistep nightmare. Then came Plark"
                    content={
                        'Exchange your cryptocurrencies in a few taps thanks to Plark’s fine-tailored features. ' +
                        'No more messing with exchanges, no more awful lot of passwords and backup phrases. ' +
                        'Stay anonymous and do everything right in your crypto currency wallet.'
                    }
                    wiki={{
                        text: i18n.gettext('A cryptocurrency (or crypto currency) is a digital asset designed to work as a medium of exchange that uses strong cryptography to secure financial transactions, control the creation of additional units, and verify the transfer of assets. Cryptocurrencies use decentralized control as opposed to centralized digital currency and central banking systems.'),
                        linkTitle: 'en.wikipedia.org',
                        url: 'https://en.wikipedia.org/wiki/Cryptocurrency',
                    }}
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

            <PhotoCitationSection
                image={{
                    src: '/img/team/image_2.png',
                    alt: 'Plark team',
                }}
                citation={{
                    text: i18n.gettext(`We don’t say Plark is the best crypto wallet. Better you say.`),
                    author: i18n.gettext('— Plark team'),
                }}

                caption={{
                    title: i18n.gettext('Visual artist Ersinhan Ersin was at The Next Web Conference 2018'),
                    description: i18n.gettext('Westergasfabriek B.V., Amsterdam, Netherlands'),
                }}
            />

            <DarkFeaturesSection
                title={i18n.gettext('probably the most secure crypto wallet')}
                link={{
                    url: 'https://dl.plark.io/app/website-appstore',
                    text: i18n.gettext(' Available on the App Store'),
                    title: i18n.gettext('Get Plark app'),
                }}
                features={[{
                    text: i18n.gettext('Only you have access to your funds and transaction data. Neither Plark nor any 3rd party can access your money and data that are stored on your device only.'),
                    link: {
                        url: 'https://community.plark.io',
                        text: 'join discussion on Flarum',
                        title: 'Plark community'
                    },
                    image: {
                        url: '/img/trade-confirmation-screen.png',
                        alt: 'plark cryptocurrency wallet',
                        title: 'Plark cryptocurrency wallet'
                    }
                }, {
                    text: i18n.gettext('No more struggling through thug life of crypto enthusiast, when you look for a decent exchange or on the watch of transaction processing.'),
                    image: {
                        url: '/img/trade-screen.png',
                        alt: 'plark cryptocurrency wallet',
                        title: 'Plark cryptocurrency wallet'
                    }
                }]}
            />

            <BigPhotoSection
                src="/img/team/image_3.png"
                alt="Plark team"
                title="Plark team"
                caption={i18n.gettext('Visual artist & director Ersinhan Ersin was at The Next Web Conference 2018')}
                captionDescription={i18n.gettext('Westergasfabriek B.V., Amsterdam, Netherlands')}
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
                    'From now on, everyday struggle of crypto enthusiasts is officially over.' +
                    'Stop sneaking around, looking for a decent exchange. Pull a smartphone out of ' +
                    'your pocket and let a transaction happen.'
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
