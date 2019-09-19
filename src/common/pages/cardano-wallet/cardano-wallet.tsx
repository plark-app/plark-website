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

import styles from './cardano-wallet.scss';

function featuresList(i18n: ITranslationsAdapter): IWalletFeaturesItem[] {
    return [
        {
            title: i18n.gettext('Purchase Cardano through Plark with your bank card'),
        },
        {
            title: i18n.gettext('Sell Cardano and money out on your bank card'),
        },
        {
            title: i18n.gettext('Safe stockpiling for your Cardano resources'),
        },
        {
            title: i18n.gettext('Send and receive Cardano coins'),
        },
        {
            title: i18n.gettext('Trade Cardano coins to different digital currencies '),
        },
        {
            title: i18n.gettext('Watch the Cardano value change'),
        },
        {
            title: i18n.gettext('Track the portfolio cost'),
        },
    ];
}

export default function CardanoWallet(): JSX.Element {
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
                    subtitle={i18n.gettext('The friendliest one for your Cardano assets')}
                    subtitleTag="h3"
                />
            </StickIphone>
            <Section className={styles.cardanoWalletBestWallet}>
                <Topic
                    className={styles.cardanoWalletBestWalletTopic}
                    titleText={i18n.gettext('The Best Cardano Wallet? Plark.')}
                    titleClassName={styles.cardanoWalletBestWalletTitle}
                    descText={i18n.gettext(
                        'We offer outstanding usefulness that enables you to control your Cardano coins completely. Download the Plark application and experience every one of its advantages at this moment:',
                    )}
                    descClassName={styles.cardanoWalletBestWalletDescr}
                />
            </Section>
            <WalletFeaturesSection featuresList={featuresList(i18n)} />
            <Section className={styles.cardanoWalletDownloadSection}>
                <Topic
                    titleClassName={styles.cardanoWalletDownloadSectionTitle}
                    className={styles.cardanoWalletDownloadSectionTopic}
                    titleText={i18n.gettext('Cardano desktop wallet? Huh? It’s 2019 outside — get a mobile app.')}
                />
            </Section>

            <FeatureSection
                titleText={i18n.gettext('Download Plark Wallet for Cardano')}
                text={i18n.gettext(
                    "Make your own Cardano iOS wallet and appreciate the accommodation and focal points of the Plark application. We ensure 100% security of your assets. There is no real way to hack your wallet since it is associated legitimately to the blockchain. We don't store your keys on our server, so you are the single individual who has full access and authority over your coins.",
                )}
                textClassName={styles.cardanoWalletDownloadSectionText}
                image={{ src: '/img/trade-screen.png' }}
                withoutLink
            />

            <CardSection
                title={i18n.gettext('Purchase and Sell Cardano using Bank Card')}
                topicClassName={styles.cardanoWalletCardSectionTopic}
                description={i18n.gettext(
                    'With Plark it is currently conceivable to purchase and sell Cardano straightforwardly through your bank card. Plark rearranges your experience and make it a lot simpler to begin your adventure into the universe of digital currency. When you have added a bank card to your Plark account, it takes you a couple of taps to set the amount of Cardano coins you might want to purchase or sell.',
                )}
                caption={i18n.gettext(
                    'Until further notice, this feature is accessible for Ukraine (UAH) as it were. We will include the Russian Federation (RUB), USA (US Dollar) and EEA (Euro) soon.',
                )}
            />

            <WalletColumnsSection
                titleText={i18n.gettext('What is Cardano?')}
                descrText={i18n.gettext(
                    'Cardano is a decentralized ecosystem that operates as a smart contract platform, surpassing the downsides of its predecessors.',
                )}
                columns={[
                    i18n.gettext(
                        "Wallet for Cardano isn't the single one to be included soon. To satisfy everybody's needs, our company is adding the most popular positions:",
                    ),
                    i18n.gettext(
                        'Ripple, Monero, Neo, Dogecoin, Cardano, Tron, Bitcoin Cash, Stellar, EOS, Waves, Wechain, Ethereum Classic, Omisego, Qtum, Tether, Tezos, Ontology, Basic Attention Token, Chainlink, Bitcoin SV and others.',
                    ),
                ]}
            />

            <SubscribeSection />
            <Footer />
        </>
    );
}
