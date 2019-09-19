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

import styles from './tron-wallet.scss';

function featuresList(i18n: ITranslationsAdapter): IWalletFeaturesItem[] {
    return [
        {
            title: i18n.gettext('Utilize a bank card to buy Tron'),
        },
        {
            title: i18n.gettext('Sell Tron to get fiat legitimately on a bank card'),
        },
        {
            title: i18n.gettext('Store Tron in a sheltered spot'),
        },
        {
            title: i18n.gettext('Send and get Tron coins'),
        },
        {
            title: i18n.gettext('Exchange Tron for different cryptocurrencies'),
        },
        {
            title: i18n.gettext('Keep track of the Tron price'),
        },
        {
            title: i18n.gettext('Keep track of the portfolio price'),
        },
    ];
}

export default function TronWallet(): JSX.Element {
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
                    subtitle={i18n.gettext('The friendliest one for you')}
                    subtitleTag="h3"
                />
            </StickIphone>
            <Section className={styles.tronWalletBestWallet}>
                <Topic
                    className={styles.tronWalletBestWalletTopic}
                    titleText={i18n.gettext('The Best Tron Wallet? Indeed, Plark.')}
                    titleClassName={styles.tronWalletBestWalletTitle}
                    descText={i18n.gettext(
                        'Plark team has made cross-practical application to satisfy every requirement for all cryptocurrency clients. Experience the friendliest flow for Tron crypto wallet you have ever observed previously:',
                    )}
                    descClassName={styles.tronWalletBestWalletDescr}
                />
            </Section>
            <WalletFeaturesSection featuresList={featuresList(i18n)} />
            <Section className={styles.tronWalletDownloadSection}>
                <Topic
                    titleClassName={styles.tronWalletDownloadSectionTitle}
                    className={styles.tronWalletDownloadSectionTopic}
                    titleText={i18n.gettext('Are you looking for a Tron coin wallet? What for? Plark is here.')}
                />
            </Section>

            <FeatureSection
                titleText={i18n.gettext('Download Plark Wallet for Tron')}
                text={i18n.gettext(
                    "Plark offers one of the fastest and least requesting ways to deal with purchase and administer Tron. Nearby best in class security level, Plark fills in as a wallet and exchange. Since now, you don't need to make accounts on different exchanges or quest for a blessed one. So get ready for an ultra utility each moment of your life (even better than any Tron desktop wallet offers).",
                )}
                textClassName={styles.tronWalletDownloadSectionText}
                image={{ src: '/img/trade-screen.png' }}
                withoutLink
            />

            <Section>
                <Topic
                    titleClassName={styles.tronWalletGoodChoice}
                    titleText={i18n.gettext('Tron online wallet? Think twice about security.')}
                />
            </Section>

            <CardSection
                title={i18n.gettext('Buy and Sell Tron through Bank Card')}
                topicClassName={styles.tronWalletCardSectionTopic}
                description={i18n.gettext(
                    `Plark is all-around application for a crypto mate. You would ask, "For what reason is that?" Well, a suitable answer is on-the-spot. We at Plark have portrayed out the likelihood of including a bank card as a basic component since buying and selling crypto is a staying point for most crypto customers. With Plark you can buy and sell Tron using your bank card. It's the most accommodating and productive way for you.`,
                )}
                caption={i18n.gettext(
                    'For now, this feature is open for Ukraine (UAH). We will incorporate the Russian Federation (RUB), USA (US Dollar) and EEA (Euro) soon.',
                )}
            />

            <WalletColumnsSection
                titleText={i18n.gettext('What is Tron?')}
                descrText={i18n.gettext(
                    'Tron is a decentralized platform that intends to build a global digital content ecosystem, using distributed storage technology. Tron will allow worthwhile and easy sharing of digital content.',
                )}
                columns={[
                    i18n.gettext(
                        'Wallet for Tron is one of the most requested at this moment. In any case, we are dependably including new altcoins that acknowledge predominance inside crypto-buddies:',
                    ),
                    i18n.gettext(
                        'Neo, Zcash, Cardano, Dogecoin, Bitcoin Cash, Stellar, Eos, Waves, Wechain, Ethereum Classic, Omisego, Qtum, Tether, Tezos, Ontology, Basic Attention Token, Chainlink, Bitcoin SV and others.',
                    ),
                ]}
            />

            <SubscribeSection />
            <Footer />
        </>
    );
}
