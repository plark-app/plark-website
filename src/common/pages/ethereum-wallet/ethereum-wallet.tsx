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

import styles from './ethereum-wallet.scss';

function featuresList(i18n: ITranslationsAdapter): IWalletFeaturesItem[] {
    return [
        {
            title: i18n.gettext('Purchase Ethereum with a credit or debit card'),
        },
        {
            title: i18n.gettext('Sell Ethereum, cashing out directly on a bank card'),
        },
        {
            title: i18n.gettext(
                '100% safe storage for Ethereum (as secure as Ethereum hardware wallet or Mist Ethereum wallet)',
            ),
        },
        {
            title: i18n.gettext('Send & Receive Ethereum coins if necessary'),
        },
        {
            title: i18n.gettext('Trade Ethereum to other cryptocurrencies with the lowest possible fee'),
        },
        {
            title: i18n.gettext('You have total control over your assets'),
        },
        {
            title: i18n.gettext('Track the change in price in real-time'),
        },
        {
            title: i18n.gettext('Watch your portfolio price in real-time'),
        },
    ];
}

export default function EthereumWallet(): JSX.Element {
    const i18n = useI18n();

    return (
        <>
            <Header isWhite />

            <StickIphone
                picture={{
                    src: '/img/main-screen.png',
                    alt: 'multi cryptocurrency mobile wallet',
                    title: 'cryptocurrency mobile wallet',
                }}
            >
                <IntroSection
                    title={i18n.gettext('Crypto wallet made easy')}
                    subtitle={i18n.gettext('The friendliest one for your Ethereum assets')}
                    subtitleTag="h3"
                />
            </StickIphone>

            <Section className={styles.ethereumWalletBestWallet}>
                <Topic
                    className={styles.ethereumWalletBestWalletTopic}
                    titleText={i18n.gettext('What’s The Best Ethereum Wallet? Well, Plark.')}
                    titleClassName={styles.ethereumWalletBestWalletTitle}
                    titleTag="h1"
                    descText={i18n.gettext(
                        'With Plark you can perform any operation when it comes to cryptocurrency, namely Ethereum. Easygoing user interface will help you to find out the available features:',
                    )}
                    descClassName={styles.ethereumWalletBestWalletDescr}
                />
            </Section>

            <WalletFeaturesSection
                listClassName={styles.ethereumWalletFeaturesList}
                imgClassName={styles.ethereumWalletFeaturesListImage}
                featuresList={featuresList(i18n)}
            />

            <Section className={styles.ethereumWalletManageEthereum}>
                <Topic
                    className={styles.ethereumWalletManageEthereumTopic}
                    titleText={i18n.gettext(
                        'Manage your Ethereum whenever you need it. Sounds much easier than any Ethereum paper wallet, huh?',
                    )}
                    titleClassName={styles.ethereumWalletManageEthereumTitle}
                    titleTag="h2"
                />
            </Section>

            <FeatureSection
                withoutLink
                titleText={i18n.gettext('Download Plark Wallet for Ethereum')}
                text={i18n.gettext(
                    'Plark grants you a possibility to manage your Ethereum coins the way you want. The only thing you need to keep close at hand your mobile phone. The most straightforward registration procedure, where no personal data is required.',
                )}
                textClassName={styles.ethereumWalletDownloadSectionText}
                image={{
                    src: '/img/trade-screen.png',
                    alt: 'best mobile wallet for cryptocurrency',
                    title: 'mobile wallet for cryptocurrency',
                }}
            />

            <Section>
                <Topic
                    titleTag="h3"
                    titleClassName={styles.ethereumWalletGoodChoice}
                    titleText={i18n.gettext(
                        'Plark offers high-end security level, which might be compared to any Ledger wallet for Ethereum.',
                    )}
                />
            </Section>

            <CardSection
                title={i18n.gettext('Buy & Sell Ethereum via Bank Card')}
                topicClassName={styles.ethereumWalletCardSectionTopic}
                description={i18n.gettext(
                    'For now, you can both buy and sell Ethereum using your bank card. No more wasted efforts and time in search of acceptable exchange or service — everything as simple as that:',
                )}
                caption={i18n.gettext(
                    'For now, this feature is available for Ukraine (UAH) only. We will add the Russian Federation (RUB), USA (US Dollar) and EEA (Euro) soon.',
                )}
                steps={[
                    i18n.gettext('Link up a bank card to your Plark wallet'),
                    i18n.gettext('Create an Ethereum wallet'),
                    i18n.gettext('Set the amount of Ethereum you want to buy or sell'),
                    i18n.gettext('Enjoy the result'),
                ]}
            />

            <WalletColumnsSection
                titleText={i18n.gettext('What is Ethereum?')}
                descrText={i18n.gettext(
                    'Ethereum is a software platform that allows Smart Contracts and DApps to be created and operate with no dependency from any third parties. It is also an ecosystem for the same-name cryptocurrency — Ether.',
                )}
                columns={[
                    i18n.gettext(
                        'Plark is an out-of-the-box solution for the most comfortable possible entry into cryptocurrency. With Plark, you have the full range of operations over your Ethereum assets.',
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
