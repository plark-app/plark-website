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

import styles from './stellar-wallet.scss';

function featuresList(i18n: ITranslationsAdapter): IWalletFeaturesItem[] {
    return [
        {
            title: i18n.gettext('Buy and sell Stellar utilizing a bank card'),
        },
        {
            title: i18n.gettext('Better security than store your assets'),
        },
        {
            title: i18n.gettext('Send and get Stellar coins'),
        },
        {
            title: i18n.gettext('Track Stellar cost and portfolio cost in real-time'),
        },
    ];
}

export default function StellarWallet(): JSX.Element {
    const i18n = useI18n();
    return (
        <>
            <Header isWhite />

            <StickIphone
                picture={{
                    src: '/img/interfaces/PlarkScreen-dashboard.png',
                    alt: 'Plark Main screen',
                    title: 'Plark Main screen',
                }}
            >
                <IntroSection
                    title={i18n.gettext('Crypto wallet made easy')}
                    subtitle={i18n.gettext('The friendliest one for you')}
                    subtitleTag="h3"
                />
            </StickIphone>
            <Section className={styles.stellarWalletBestWallet}>
                <Topic
                    className={styles.stellarWalletBestWalletTopic}
                    titleText={i18n.gettext('The Best Stellar Wallet? Plark.')}
                    titleTag="h1"
                    titleClassName={styles.stellarWalletBestWalletTitle}
                    descText={i18n.gettext(
                        `Every now and then you get to the meaningful part where you think, "Damn, for what reason does it require so much time to manage crypto?" We are indistinguishable individuals from you, and we did. That is how Plark shows up. What's more, today it serves you with a full scope of highlights:`,
                    )}
                    descClassName={styles.stellarWalletBestWalletDescr}
                />
            </Section>
            <WalletFeaturesSection featuresList={featuresList(i18n)} />
            <Section className={styles.stellarWalletDownloadSection}>
                <Topic
                    titleClassName={styles.stellarWalletDownloadSectionTitle}
                    className={styles.stellarWalletDownloadSectionTopic}
                    titleText={i18n.gettext('Stellar Desktop Wallet? Not really convenient.')}
                    titleTag="h3"
                />
            </Section>

            <FeatureSection
                titleText={i18n.gettext('Download Plark Wallet for Stellar')}
                text={i18n.gettext(
                    "Quit exhausting yourself with a quest for an advantageous and solid service for purchasing, selling, and trading Stellar. We have made the most agreeable conditions for the two tenderfoots and propelled clients. Takes no time to make an account and no personal information required. Only a couple of taps and you get your own wallet key — maybe it’ll become your best wallet for Stellar Lumens. That's it in a nutshell.",
                )}
                textClassName={styles.stellarWalletDownloadSectionText}
                image={{ src: '/img/trade-screen.png' }}
                withoutLink
            />

            <Section className={styles.stellarWalletDownloadSection}>
                <Topic
                    titleClassName={styles.stellarWalletDownloadSectionTitle}
                    className={styles.stellarWalletDownloadSectionTopic}
                    titleText={i18n.gettext('Make your Stellar Lumens wallet and feel no FOMO.')}
                    titleTag="h2"
                />
            </Section>

            <CardSection
                title={i18n.gettext('Purchase and Sell Stellar via Bank Card')}
                topicClassName={styles.stellarWalletCardSectionTopic}
                description={i18n.gettext(
                    'Most cryptocurrency wallets enable you to send, receive, and store digital currency. However, there is one most significant feature, the absence of which takes away your energy and nerves — operations with a bank card. Plark consolidates every one of the services a crypto people need. Download Plark, create Stellar crypto wallet and get ready for a full scope of its management.',
                )}
                caption={i18n.gettext(
                    'For the time being, this component is open for Ukraine (UAH). We will join the Russian Federation (RUB), USA (US Dollar) and EEA (Euro) soon.',
                )}
            />

            <WalletColumnsSection
                titleText={i18n.gettext('What is Stellar?')}
                descrText={i18n.gettext(
                    'Stellar is a payment technology that intends to connect financial institutions and reduce the expenses and time spent on cross-border payments.',
                )}
                columns={[
                    i18n.gettext(
                        'Stellar coin wallet has been one of the most requested for quite a while now. In this manner, soon you will see Stellar in the rundown of accessible ones. Likewise, other mainstream cryptos are next in line for including:',
                    ),
                    i18n.gettext(
                        'Neo, Zcash, Cardano, Dogecoin, Bitcoin Cash, Stellar, EOS, Waves, Wechain, Ethereum Classic, Omisego, Qtum, Tether, Tezos, Ontology, Basic Attention Token, Chainlink, Bitcoin SV and others.',
                    ),
                ]}
            />

            <SubscribeSection />
            <Footer />
        </>
    );
}
