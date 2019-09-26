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

import styles from './litecoin-wallet.scss';

function featuresList(i18n: ITranslationsAdapter): IWalletFeaturesItem[] {
    return [
        {
            title: i18n.gettext('Use a bank card to purchase Litecoin'),
        },
        {
            title: i18n.gettext('Sell Litecoin to get fiat directly on a bank card'),
        },
        {
            title: i18n.gettext('Store Litecoin in a safe place'),
        },
        {
            title: i18n.gettext('Send and receive Monero assets'),
        },
        {
            title: i18n.gettext('Trade Monero for other cryptocurrencies'),
        },
        {
            title: i18n.gettext('Manage your wallet for Litecoin '),
        },
        {
            title: i18n.gettext('Keep an eye on the Litecoin actual price'),
        },
        {
            title: i18n.gettext('Keep an eye on the portfolio cost'),
        },
    ];
}

export default function LitecoinWallet(): JSX.Element {
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
                    subtitle={i18n.gettext('The friendliest one for your Litecoin assets')}
                    subtitleTag="h3"
                />
            </StickIphone>
            <Section className={styles.litecoinWalletBestWallet}>
                <Topic
                    className={styles.litecoinWalletBestWalletTopic}
                    titleText={i18n.gettext('The Best Litecoin Wallet? Well, Plark.')}
                    titleTag="h1"
                    titleClassName={styles.litecoinWalletBestWalletTitle}
                    descText={i18n.gettext(
                        'Plark team has created a cross-functional application to fulfill all the needs for all cryptocurrency users. Get through the friendliest flow you have ever seen before. Try it, and you will probably call Plark the best wallet for Litecoin.',
                    )}
                    descClassName={styles.litecoinWalletBestWalletDescr}
                />
            </Section>
            <WalletFeaturesSection featuresList={featuresList(i18n)} />
            <Section className={styles.litecoinWalletDownloadSection}>
                <Topic
                    titleClassName={styles.litecoinWalletDownloadSectionTitle}
                    className={styles.litecoinWalletDownloadSectionTopic}
                    titleText={i18n.gettext(
                        'Are you still using a Litecoin wallet online? Treat yourself — download Plark',
                    )}
                    titleTag="h2"
                />
            </Section>

            <FeatureSection
                titleText={i18n.gettext('Download Plark Wallet for Litecoin')}
                text={i18n.gettext(
                    "Plark offers one of the quickest and least demanding approaches to buy and oversee Litecoin. Alongside top of the line security level, Plark fills in as a wallet and trade across the board tool. Since now, you don't have to make accounts on various trades or search for an endowed one to get it or continue with alternate sorts of tasks. So prepare for an ultra utility every minute of every day (Android Litecoin wallet may see the world soon too)",
                )}
                textClassName={styles.litecoinWalletDownloadSectionText}
                image={{ src: '/img/trade-screen.png' }}
                withoutLink
            />

            <Section>
                <Topic
                    titleClassName={styles.litecoinWalletGoodChoice}
                    titleText={i18n.gettext(
                        'Litecoin desktop wallet is a good choice. By the way, you forgot to bring along the PC.',
                    )}
                    titleTag="h3"
                />
            </Section>

            <CardSection
                title={i18n.gettext('Trade Litecoin via Bank Card')}
                topicClassName={styles.litecoinWalletCardSectionTopic}
                description={i18n.gettext(
                    `Plark is all-around app for a crypto buddy. You would ask, "For what reason is that?" Well, the appropriate response is on-the-spot. We at Plark have sketched out the probability of including a bank card as an essential element since acquiring and selling crypto is a staying point for the most significant part of crypto clients. With Plark you can purchase and sell Monero utilizing your bank card. Crypto resources and fiat moves forward and backward in a squint of an eye. Indeed, it's the most effective route for you.`,
                )}
                caption={i18n.gettext(
                    'For the time being, this element is accessible for Ukraine (UAH) as it were. We will include the Russian Federation (RUB), USA (US Dollar) and EEA (Euro) soon.',
                )}
                steps={[
                    i18n.gettext('Add your bank card to your Plark wallet'),
                    i18n.gettext('Set the desired amount of coins to purchase or sell'),
                    i18n.gettext('Activate Litecoin wallet'),
                    i18n.gettext('Add your bank card to your Plark wallet'),
                ]}
            />

            <WalletColumnsSection
                titleText={i18n.gettext('What is Litecoin?')}
                descrText={i18n.gettext(
                    'Litecoin was positioned as a “digital silver” compared to the Bitcoin’s “gold”. It’s a peer-to-peer cryptocurrency, fully decentralized global payment network and open source. Litecoin was developed to revamp Bitcoin’s downsides.',
                )}
                columns={[
                    i18n.gettext(
                        'Wallet for Litecoin is one of the most mainstream right now. Be that as it may, we are reliably including new cryptographic forms of money that appreciate prevalence inside crypto-pals, specifically:',
                    ),
                    i18n.gettext(
                        'Neo, Zcash, Cardano, Dogecoin, Tron, Bitcoin Cash, Stellar, EOS, Waves, Wechain, Ethereum Classic, Omisego, Qtum, Tether, Tezos, Ontology, Basic Attention Token, Chainlink, Bitcoin SV and others.',
                    ),
                ]}
            />

            <SubscribeSection />
            <Footer />
        </>
    );
}
