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
    CardSection,
    FeatureSection,
    WalletFeaturesSection,
    WalletColumnsSection,
} from 'common/components';
import { IWalletFeaturesItem } from 'common/components/wallet-features-section';

import styles from './iota-wallet.scss';

function featuresList(i18n: ITranslationsAdapter): IWalletFeaturesItem[] {
    return [
        {
            title: i18n.gettext('Buy IOTA through Plark with your bank card'),
        },
        {
            title: i18n.gettext('Sell IOTA and cash out on your bank card'),
        },
        {
            title: i18n.gettext(
                'Safe storage for your IOTA assets (safety level is comparable to IOTA Trinity wallet or IOTA Light wallet)',
            ),
        },
        {
            title: i18n.gettext('Send and receive IOTA coins'),
        },
        {
            title: i18n.gettext('Exchange IOTA coins to other cryptocurrencies'),
        },
        {
            title: i18n.gettext('Super control your coins'),
        },
        {
            title: i18n.gettext('Watch the price change in real-time'),
        },
        {
            title: i18n.gettext('Track the portfolio cost in real-time'),
        },
    ];
}

export default function IotaWallet(): JSX.Element {
    const i18n = useI18n();

    return (
        <>
            <Header isWhite />

            <StickIphone
                picture={{
                    src: '/img/main-screen.png',
                    alt: 'Plark Main screen',
                    title: 'Plark Main screen',
                }}
            >
                <IntroSection
                    title={i18n.gettext('No sh*t wallet')}
                    subtitle={i18n.gettext('The friendliest one for your IOTA assets')}
                    subtitleTag="h3"
                />
            </StickIphone>

            <Section className={styles.iotaWalletBestWallet}>
                <Topic
                    className={styles.iotaWalletBestWalletTopic}
                    titleText={i18n.gettext('What’s The Best IOTA Wallet? Well, Plark.')}
                    titleTag="h1"
                    titleClassName={styles.iotaWalletBestWalletTitle}
                    descText={i18n.gettext(
                        'We offer exceptional functionality that allows you to control your coins fully. Download the Plark app and experience all its benefits right now:',
                    )}
                    descClassName={styles.iotaWalletBestWalletDescr}
                />
            </Section>

            <WalletFeaturesSection
                listClassName={styles.iotaWalletFeaturesList}
                imgClassName={styles.iotaWalletFeaturesListImage}
                featuresList={featuresList(i18n)}
            />

            <Section className={styles.iotaWalletSecure}>
                <Topic
                    className={styles.iotaWalletSecureTopic}
                    titleClassName={styles.iotaWalletSecureTitle}
                    titleText={i18n.gettext(
                        'IOTA hardware wallet is secure, but Plark is more convenient. Control your IOTA assets. Anytime. Anywhere.',
                    )}
                    titleTag="h2"
                />
            </Section>

            <FeatureSection
                titleText={i18n.gettext('Download Plark Wallet for IOTA')}
                text={i18n.gettext(
                    'Create your personal IOTA wallet and enjoy the convenience and advantages of the Plark app. We guarantee 100% security of your funds from the technical side. There is no way to hack your wallet since it is connected directly to the blockchain. We do not store your keys on our server, so you are the single person who has full access and control over your coins.',
                )}
                textClassName={styles.iotaWalletDownloadSectionText}
                image={{ src: '/img/trade-screen.png' }}
                withoutLink
            />

            <CardSection
                title={i18n.gettext('Buy & Sell IOTA via Bank Card')}
                topicClassName={styles.iotaWalletCardSectionTopic}
                description={i18n.gettext(
                    'With Plark it is now possible to buy and sell IOTA directly through your bank card. Plark simplifies your experience and make it much easier to start your journey into the world of cryptocurrency. Once you have added a bank card to your Plark account, it takes you a few taps to set the amount of IOTA coins you would like to buy or sell. With Plark’s decentralized solutions, it becomes possible to avoid centralized exchanges and never worry about your funds being insecure.',
                )}
                caption={i18n.gettext(
                    'For now, this feature is available for Ukraine (UAH) only. We will add the Russian Federation (RUB), USA (US Dollar) and EEA (Euro) soon',
                )}
            />

            <WalletColumnsSection
                titleText={i18n.gettext('What is IOTA?')}
                descrText={i18n.gettext(
                    'IOTA is a revolutionary new transactional settlement and data transfer layer for the Internet of Things. It’s based on a new distributed ledger, the Tangle, which overcomes the inefficiencies of current Blockchain designs and introduces a new way of reaching consensus in a decentralized peer-to-peer system.',
                )}
                columns={[
                    i18n.gettext(
                        'IOTA coin wallet is not the single one to be added soon. To fulfill everyone’s needs, our team is consistently adding the most popular currencies. The next to be added are:',
                    ),
                    i18n.gettext(
                        'Monero, Neo, Zcash, Cardano, Dogecoin, Tron, Bitcoin Cash, Stellar, EOS, Waves, Wechain, Ethereum Classic, Omisego, Qtum, Tether, Tezos, Ontology, Basic Attention Token, Chainlink, Bitcoin SV and others.',
                    ),
                ]}
            />

            <SubscribeSection />
            <Footer />
        </>
    );
}
