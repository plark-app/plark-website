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

import styles from './ripple-wallet.scss';

function featuresList(i18n: ITranslationsAdapter): IWalletFeaturesItem[] {
    return [
        {
            title: i18n.gettext('Purchase Ripple (XRP) via bank card'),
        },
        {
            title: i18n.gettext('Sell your Ripple (XRP) with a cashout on a bank card'),
        },
        {
            title: i18n.gettext(
                'Store Ripple (XRP) with a 100% safety (the same security level as any Ledger wallet for Ripple has)',
            ),
        },
        {
            title: i18n.gettext('Send & Receive Ripple (XRP) on different addresses'),
        },
        {
            title: i18n.gettext('Cross-trade to a different available cryptocurrencies'),
        },
        {
            title: i18n.gettext('Fully manage your assets'),
        },
        {
            title: i18n.gettext('Check the current price right from inside the app'),
        },
        {
            title: i18n.gettext('Keep track of your portfolio cost and daily change in price'),
        },
    ];
}

export default function RippleWallet(): JSX.Element {
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
                    title={i18n.gettext('Crypto wallet made easy')}
                    subtitle={i18n.gettext('The friendliest one for your Ripple assets')}
                    subtitleTag="h3"
                />
            </StickIphone>


            <Section className={styles.rippleWalletFeaturesTitle}>
                <Topic
                    className={styles.rippleWalletFeaturesTitleTopic}
                    titleText={i18n.gettext('The Best Ripple Wallet? Well, Plark.')}
                    titleTag="h1"
                    titleClassName={styles.rippleWalletFeaturesTitleTitle}
                    descText={i18n.gettext(
                        'Plark is the all-in-one app you need on your mobile phone since it opens the most crucial functionality both for beginners and experienced crypto-fellows.',
                    )}
                    descClassName={styles.rippleWalletFeaturesTitleDescr}
                />
            </Section>

            <WalletFeaturesSection featuresList={featuresList(i18n)} />

            <Section className={styles.rippleWalletBestWallet}>
                <Topic
                    className={styles.rippleWalletBestWalletTopic}
                    titleText={i18n.gettext('Access your Ripple through mobile phone wherever you are')}
                    titleClassName={styles.rippleWalletBestWalletTitle}
                    descText={i18n.gettext(
                        'which is more convenient than any Ripple desktop wallet in terms of accessibility',
                    )}
                    descClassName={styles.rippleWalletBestWalletDescr}
                    descriptionTag="h3"
                />
            </Section>

            <FeatureSection
                titleText={i18n.gettext('Download Plark wallet for Ripple')}
                text={i18n.gettext(
                    'Plark will soon add Ripple (XRP) wallet to the list of available cryptocurrencies. You will be able to Install the Ripple wallet app to manage your coins as you go on with your mobile phone. We have simplified the registration process so you can create your Ripple wallet in a few taps. No worries about security, since Plark works 100% anonymously. We don’t ask for personal data or email.',
                )}
                textClassName={styles.rippleWalletDownloadSectionText}
                image={{ src: '/img/trade-screen.png' }}
                withoutLink
            />

            <Section>
                <Topic
                    titleClassName={styles.rippleWalletGoodChoice}
                    titleText={i18n.gettext('Download the friendliest Ripple coin wallet now.')}
                    titleTag="h2"
                />
            </Section>

            <CardSection
                title={i18n.gettext('Purchase and Sell Ripple via Bank Card')}
                topicClassName={styles.rippleWalletCardSectionTopic}
                description={i18n.gettext(
                    'Plark offers unprecedented opportunity to purchase and sell Ripple directly via bank card, bypassing exchanges. The flow is convenient and simple:',
                )}
                caption={i18n.gettext(
                    'For the time being, this element is accessible for Ukraine (UAH) as it were. We will include the Russian Federation (RUB), USA (US Dollar) and EEA (Euro) soon.',
                )}
                steps={[
                    i18n.gettext('Add your bank card to your Plark wallet'),
                    i18n.gettext('Set the desired amount of coins to purchase or sell'),
                    i18n.gettext('Activate Ripple wallet'),
                    i18n.gettext('Confirm the transaction...and relax ;)'),
                ]}
            />

            <WalletColumnsSection
                titleText={i18n.gettext('What is Ripple (XRP)?')}
                descrText={i18n.gettext(
                    'Ripple (XRP) is a network/technology that operates both as a cryptocurrency and a payment system for financial institutions.',
                )}
                columns={[
                    i18n.gettext(
                        'Plark is a wallet that offers an all-in-one solution for a seamless entry in cryptocurrency. At the moment you can manage Bitcoin, Litecoin, Ethereum, and Dash with much more top cryptocurrencies to be added soon. Download the Plark app for iOS and start your crypto-journey right away.',
                    ),
                    i18n.gettext(
                        'We plan to add the most high-demand coins, such as: IOTA, Monero, Neo, Zcash, Cardano, Dogecoin, Tron, Bitcoin Cash, Stellar, EOS, Waves, Wechain, Ethereum Classic, Omisego, Qtum, Tether, Tezos, Ontology, Basic Attention Token, Chainlink, Bitcoin SV and others.',
                    ),
                ]}
            />

            <SubscribeSection />
            <Footer />
        </>
    );
}
