import React from 'react';
import { ITranslationsAdapter, useI18n } from 'slim-i18n';

import {
    DarkFooter,
    Header,
    IntroSection,
    PresentationSection,
    TeamSection,
    BigPhotoSection,
    SubscribeSection,
    DarkFeaturesSection,
    DarkCardSection,
    CitationSection,
    CommunitySection,
    FeedbackSection,
    FeatureListSection,
    FeatureUnit,
} from 'common/components';


function buildFeatureList(i18n: ITranslationsAdapter): FeatureUnit[] {
    return [{
        title: i18n.gettext('Paramount security'),
        content: i18n.gettext('Store your private key right in Plark Wallet on your device, and be the only person who keeps full control over your funds. 6-digit passcode, 12-words seed and top-notch encryption algorithms make Plark exceptionally safe.'),
        wiki: {
            text: i18n.gettext('A blockchain is a decentralized record-keeping technology, shared across a network of computers. All records bundle together into blocks and enter the chain one by one. Each block keeps a cryptographic hash of the previous block. Such a twisted game plan makes it impossible to alter or remove the data out of the chain. And it’s just the beginning of everything.'),
            link: {
                text: 'en.wikipedia.org',
                title: 'en.wikipedia.org',
                url: 'https://en.wikipedia.org/wiki/Blockchain',
                rel: 'nofollow',
            },
        },
        screen: {
            src: '/img/interfaces/01.png',
            srcset: '/img/interfaces/01@2x.png 2x',
            title: i18n.gettext('Paramount security'),
            alt: i18n.gettext('Paramount security'),
        },
    }, {
        title: i18n.gettext('Tool set perfectly balanced'),
        content: i18n.gettext(`Get all needed features to manage your crypto gathered in one place. Five most popular coins, low fees, and good exchange rates. Yep, it's Plark.`),
        wiki: {
            text: i18n.gettext('Along with blockchain came Bitcoin — the first cryptocurrency designed by mysterious Satoshi Nakamoto. It revived an idea of instant payments that don’t need any third party involvement. Since that turnaround, many other digital currencies came along. It’s good to know that crypto is immune to central authority, like government or bank. It’s secure, anonymous, and damn good.'),
            link: {
                text: 'en.wikipedia.org',
                title: 'en.wikipedia.org',
                url: 'https://en.wikipedia.org/wiki/Bitcoin',
                rel: 'nofollow',
            },
        },
        screen: {
            src: '/img/interfaces/02.png',
            srcset: '/img/interfaces/02@2x.png 2x',
            title: i18n.gettext('Tool set perfectly balanced'),
            alt: i18n.gettext('Tool set perfectly balanced'),
        },
    }, {
        title: i18n.gettext('Anonymity taken further'),
        content: i18n.gettext('Don’t worry, you’re sneaking around an entirely anonymous space. Neither Plark, nor third-party providers collect any personal information about our users. You play invisible, leaving no trace behind. Like a true crypto ninja.'),
        wiki: {
            text: i18n.gettext('After many ups and downs, cryptocurrency finally finds its way towards people. As more and more uses emerged, huge investment started flowing into e-currency ecosystem. And even after the recent drop in price, the hype seems to start hitting with renewed vigour. No doubts, crypto will disrupt the traditional banking system. We only need some more time to watch it happen. And the best crypto wallet to get ready for that day.'),
            link: {
                text: 'en.wikipedia.org',
                title: 'en.wikipedia.org',
                url: 'https://en.wikipedia.org/wiki/Cryptocurrency',
                rel: 'nofollow',
            },
        },
        screen: {
            src: '/img/interfaces/03.png',
            srcset: '/img/interfaces/03@2x.png 2x',
            title: i18n.gettext('Anonymity taken further'),
            alt: i18n.gettext('Anonymity taken further'),
        },
    }];
}

export default function Home(): JSX.Element {
    const i18n = useI18n();

    const featureList = React.useMemo(() => buildFeatureList(i18n), [i18n.language]);

    return (
        <>
            <Header isWhite />

            <IntroSection
                withPhone
                id="home"
                title={i18n.gettext('A piece of magic \nin your pocket')}
                subtitle={i18n.gettext('A lightning fast app to buy, sell, exchange, \nand store your digital assets')}
            />

            <PresentationSection
                id="history"
                mainText={i18n.gettext('We created Plark — a decentralized crypto wallet with handy stuff to get things done. Whatever feature you need to manage your digital assets is now at your fingertips. We already added the most popular cryptos with more to come. We hope, you will love our app.')}
                secondText={i18n.gettext('We are the team of no strangers to blockchain, and we know how to make crypto your daily habit.')}
                link={{
                    text: i18n.gettext('Get Plark on App Store'),
                    url: 'https://dl.plark.io/app/website-appstore',
                    rel: 'nofollow',
                }}
                citation={{
                    text: i18n.gettext(`A lot of people automatically dismiss e-currency as a lost cause because of all the companies that failed since the 1990's. I hope it's obvious it was only the centrally controlled nature of those systems that doomed them. I think this is the first time we're trying a decentralized, non-trust-based system.`),
                    author: i18n.gettext('— Satoshi Nakamoto'),
                }}
                image={{
                    src: '/img/team/image_1.png',
                    caption: i18n.gettext('Our software developer Max is trying to code the app the way our mad designer wants it.'),
                    subCaption: i18n.gettext('And pretends he knows how to do it ;)'),
                }}
            />

            <FeatureListSection
                id="features"
                features={featureList}
            />

            <TeamSection
                id="team"
                image={{
                    src: '/img/team/image_2.png',
                    alt: 'Plark team',
                }}
                citation={{
                    text: i18n.gettext(`Oh yes, we can`),
                    author: i18n.gettext('— Plark team'),
                }}

                caption={{
                    title: i18n.gettext('Dima and Stanislav showing that the entrance is over there 🤓'),
                    description: i18n.gettext('Kudos to our talented photographer'),
                }}
            />

            <DarkCardSection
                id="credit-card"
                title="the card is the key"
                subtitle="Whether you are a crypto lord or just a newcomer — trading it for fiat money right in the Plark wallet sounds like a good fit.  A bit of magic, and you are a trader. Whoosh!"
                description="Here comes Plark’s icing on the cake — a feature allowing to buy and sell crypto for UAH right in the wallet. Add your credit or debit card and join the feast of crypto life."
            />

            <DarkFeaturesSection
                id="security"
                title={i18n.gettext('a crypto wallet designed for your needs')}
                link={{
                    url: 'https://dl.plark.io/app/website-appstore',
                    text: i18n.gettext(' Available on the App Store'),
                    title: i18n.gettext('Get Plark app'),
                    rel: 'nofollow',
                }}
                features={[{
                    text: i18n.gettext('Plark is not about features. It’s about the experiences you have whenever you tap the Trade button, see Bitcoin price going up, or import you old wallet into a sleek black-and-white interface. It’s about you buying your first but not last cryptocurrency and feeling proud. We sculpt each of these ways. And hope you will love it.'),
                    link: {
                        url: 'https://community.plark.io/d/14-how-to-create-plark-wallet',
                        text: 'join discussion on Flarum',
                        title: 'Plark community',
                        rel: 'nofollow',
                    },
                    image: {
                        url: '/img/ps/04',
                        alt: 'plark cryptocurrency wallet',
                        title: 'Plark cryptocurrency wallet',
                    },
                }, {
                    text: i18n.gettext('Whatever input you share with us is like a gem.  And we’ll use it to craft a flawless experience for you. \n\nPlark is always ready for conversation. If you have any question, issue, or suggestion — just drop us a line.'),
                    link: {
                        url: 'https://t.me/PlarkWalletSupport',
                        text: 'drop us a line',
                        title: 'Plark email',
                        rel: 'nofollow',
                    },
                    image: {
                        url: '/img/ps/05',
                        alt: 'plark cryptocurrency wallet',
                        title: 'Plark cryptocurrency wallet',
                    },
                }]}
            />

            <BigPhotoSection
                src="/img/team/image_3.png"
                alt="Plark team"
                title="Plark team"
                caption={i18n.gettext('Working routine at Plark be like… laughing at the $2K drop in bitcoin price.')}
                captionDescription={i18n.gettext('Kyiv, Ukraine')}
            />

            <CitationSection
                title={`“It’s even better than a piece \nof infinite bubble wrap”`}
                author="— words, we would like to hear from you."
                lowercase
            />

            <FeedbackSection id="testimonials" />
            <CommunitySection id="community" />
            <SubscribeSection id="contacts" />

            <DarkFooter />
        </>
    );
}
