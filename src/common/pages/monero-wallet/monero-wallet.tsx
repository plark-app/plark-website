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

import styles from './monero-wallet.scss';

function featuresList(i18n: ITranslationsAdapter): IWalletFeaturesItem[] {
    return [
        {
            title: i18n.gettext('Purchase Monero with your bank card'),
        },
        {
            title: i18n.gettext('Sell Monero, moving fiat right on your bank card'),
        },
        {
            title: i18n.gettext('Store Monero securely'),
        },
        {
            title: i18n.gettext('Send and receive Monero assets'),
        },
        {
            title: i18n.gettext('Trade Monero for other cryptocurrencies'),
        },
        {
            title: i18n.gettext('Fully manage your Monero assets '),
        },
        {
            title: i18n.gettext('Track the Monero price in real-time'),
        },
        {
            title: i18n.gettext('Track the portfolio price in real-tim'),
        },
    ];
}

export default function MoneroWallet(): JSX.Element {
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
                    subtitle={i18n.gettext('The friendliest one for your Monero assets')}
                    subtitleTag="h3"
                />
            </StickIphone>

            <Section className={styles.moneroWalletBestWallet}>
                <Topic
                    className={styles.moneroWalletBestWalletTopic}
                    titleText={i18n.gettext('The Best Monero Wallet? Well, Plark.')}
                    titleClassName={styles.moneroWalletBestWalletTitle}
                    descText={i18n.gettext(
                        'Plark is a non-compromised app that has everything you need. We aspire to get called “The best wallet for Monero.” Download the Plark for your device to experience all the cutting-edge features it offers:',
                    )}
                    descClassName={styles.moneroWalletBestWalletDescr}
                />
            </Section>

            <WalletFeaturesSection
                listClassName={styles.moneroWalletFeaturesList}
                imgClassName={styles.moneroWalletFeaturesListImage}
                featuresList={featuresList(i18n)}
            />

            <Section className={styles.moneroWalletSecure}>
                <Topic
                    className={styles.moneroWalletSecureTopic}
                    titleClassName={styles.moneroWalletSecureTitle}
                    titleText={i18n.gettext(
                        'Are you looking for a Monero hardware wallet? Well, Plark does it better.',
                    )}
                />
            </Section>

            <FeatureSection
                titleText={i18n.gettext('Download Plark Wallet for Monero')}
                text={i18n.gettext(
                    'Plark offers one of the fastest and simplest ways to purchase and manage Monero. Along with high-end security level, Plark serves as a wallet and exchange all in one. Since now, you don’t need to create accounts on different exchanges or look for an entrusted one to get it or proceed with different types of operations. As was said, it’s not a Monero web wallet, but mobile application. So get ready for an ultra utility 24/7.',
                )}
                textClassName={styles.moneroWalletDownloadSectionText}
                image={{ src: '/img/trade-screen.png' }}
                withoutLink
            />

            <CardSection
                title={i18n.gettext('Trade Monero via Bank Card')}
                topicClassName={styles.moneroWalletCardSectionTopic}
                description={i18n.gettext(
                    'From now onwards you can be “exchange” on your own. You would ask, “Why is that?” Well, the answer is on-the-spot. We at Plark have outlined the possibility of adding a bank card as a fundamental feature since purchasing and selling crypto is a sticking point for most crypto users. With Plark you can buy and sell Monero using your bank card. Crypto assets and fiat moves back and forth in a blink of an eye. Yes, it’s the most convenient and time-saving way for you.',
                )}
                caption={i18n.gettext(
                    'For now, this feature is available for Ukraine (UAH) only. We will add the Russian Federation (RUB), USA (US Dollar) and EEA (Euro) soon',
                )}
            />

            <WalletColumnsSection
                titleText={i18n.gettext('What is Monero?')}
                descrText={i18n.gettext(
                    'Monero is a cryptocurrency that focuses on third-party-resistant and private operations. Its transactions can’t be traced and entirely confidential. Monero can be positioned as an e-cash, that offers fast and inexpensive payments all around the world.',
                )}
                columns={[
                    i18n.gettext(
                        'Wallet for Monero is one of the most popular at the moment. But we are consistently adding new cryptocurrencies that enjoy popularity within crypto-buddies, namely:',
                    ),
                    i18n.gettext(
                        'IOTA, Neo, Zcash, Cardano, Dogecoin, Tron, Bitcoin Cash, Stellar, EOS, Waves, Wechain, Ethereum Classic, Omisego, Qtum, Tether, Tezos, Ontology, Basic Attention Token, Chainlink, Bitcoin SV and others.',
                    ),
                ]}
            />

            <SubscribeSection />
            <Footer />
        </>
    );
}
