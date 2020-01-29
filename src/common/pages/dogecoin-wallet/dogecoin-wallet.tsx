import React from 'react';
import { useI18n, ITranslationsAdapter } from 'slim-i18n';

import {
    Footer,
    Header,
    Section,
    Topic,
    StickIphone,
    IntroSection,
    SubscribeSection,
    FeatureSection,
    WalletFeaturesSection,
    WalletColumnsSection,
    DarkCardSection,
} from 'common/components';
import { IWalletFeaturesItem } from 'common/components/wallet-features-section';

import styles from './dogecoin-wallet.scss';

function featuresList(i18n: ITranslationsAdapter): IWalletFeaturesItem[] {
    return [
        {
            title: i18n.gettext('Buy Dogecoin with your bank card'),
        },
        {
            title: i18n.gettext('Sell Dogecoin, moving fiat directly on your bank card'),
        },
        {
            title: i18n.gettext('Store Dogecoin safely'),
        },
        {
            title: i18n.gettext('Send and get Dogecoin coins'),
        },
        {
            title: i18n.gettext('Exchange Dogecoin for different crypto assets'),
        },
        {
            title: i18n.gettext('Track the Dogecoin cost'),
        },
        {
            title: i18n.gettext('Track the portfolio cost'),
        },
    ];
}

export default function DogecoinWallet(): JSX.Element {
    const i18n = useI18n();
    return (
        <>
            <Header isWhite />

            <StickIphone
                picture={{
                    src: '/img/interfaces/PlarkScreen-dashboard.png',
                    alt: 'multi cryptocurrency mobile wallet',
                    title: 'cryptocurrency mobile wallet',
                }}
            >
                <IntroSection
                    title={i18n.gettext('Crypto wallet made easy')}
                    subtitle={i18n.gettext('The friendliest one for you')}
                    subtitleTag="h3"
                />
            </StickIphone>
            <Section className={styles.dogecoinWalletBestWallet}>
                <Topic
                    className={styles.dogecoinWalletBestWalletTopic}
                    titleText={i18n.gettext('The Best Dogecoin Wallet? Indeed, Plark.')}
                    titleTag="h1"
                    titleClassName={styles.dogecoinWalletBestWalletTitle}
                    descText={i18n.gettext(
                        'Plark is a non-bargained application that has all that you need. We seek to get called "The best wallet for Monero." Download the Plark for your iOS gadget to encounter all the bleeding edge highlights it offers:',
                    )}
                    descClassName={styles.dogecoinWalletBestWalletDescr}
                />
            </Section>
            <WalletFeaturesSection featuresList={featuresList(i18n)} />
            <Section className={styles.dogecoinWalletDownloadSection}>
                <Topic
                    titleClassName={styles.dogecoinWalletDownloadSectionTitle}
                    className={styles.dogecoinWalletDownloadSectionTopic}
                    titleText={i18n.gettext('Online Dogecoin wallet? Not a good choice in terms of security.')}
                    titleTag="h2"
                />
            </Section>

            <FeatureSection
                withoutLink
                titleText={i18n.gettext('Download Plark Wallet for Dogecoin')}
                text={i18n.gettext(
                    "Plark offers one of the quickest and most straightforward approaches to buy and oversee Dogecoin. Alongside top of the line security level, Plark fills in as a free Dogecoin wallet and exchange across the board (being much more secure than Dogecoin wallet online). Since now, you don't have to make accounts on various services or search for a trusty one to get it or continue with various kinds of activities. Since Plark is a mobile app, prepare for an ultra utility day in and day out.",
                )}
                textClassName={styles.dogecoinWalletDownloadSectionText}
                image={{
                    src: '/img/trade-screen.png',
                    alt: 'best mobile wallet for cryptocurrency',
                    title: 'mobile wallet for cryptocurrency',
                }}
            />

            <DarkCardSection
                title={i18n.gettext('Buy and Sell Dogecoin via Bank Card')}
                topicClassName={styles.dogecoinWalletCardSectionTopic}
                description={i18n.gettext(
                    `We want to bring on your experience to a brand new level. You would ask, "Why would that be?" Well, the appropriate response is on-the-spot. We at Plark have included a bank card as a key element since buying and selling crypto is a staying point for most crypto people. With Plark you can purchase and sell Dogecoin utilizing your bank card. Truly, it's the most helpful and efficient route for you.`,
                )}
                caption={i18n.gettext(
                    'For the present, this feature is accessible for Ukraine (UAH). We will include the Russian Federation (RUB), USA (US Dollar) and EEA (Euro) soon.',
                )}
            />

            <Section>
                <Topic
                    titleClassName={styles.dogecoinWalletStillLookingTitle}
                    className={styles.dogecoinWalletStillLookingTopic}
                    titleText={i18n.gettext(
                        'Are you still looking for a Dogecoin wallet app? Well, you’ve already found it.',
                    )}
                    titleTag="h3"
                />
            </Section>

            <WalletColumnsSection
                titleText={i18n.gettext('What is Dogecoin?')}
                descrText={i18n.gettext(
                    'Dogecoin has started its way as a “meme joke.” Nevertheless, it has gained popularity as an Internet tipping system, in which social media platforms users gift Dogecoin tips to other users for providing interesting or useful content.',
                )}
                columns={[
                    i18n.gettext(
                        'Dogecoin coin wallet is one of the most requested right now. In any case, we are reliably including new altcoins that appreciate prevalence inside crypto-mates, to be specific:',
                    ),
                    i18n.gettext(
                        'Ripple, Neo, Zcash, Cardano, Tron, Bitcoin Cash, Stellar, EOS, Waves, Wechain, Ethereum Classic, Omisego, Qtum, Tether, Tezos, Ontology, Basic Attention Token, Chainlink, Bitcoin SV and others.',
                    ),
                ]}
            />

            <SubscribeSection />
            <Footer />
        </>
    );
}
