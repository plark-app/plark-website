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

import styles from './dash-wallet.scss';

function featuresList(i18n: ITranslationsAdapter): IWalletFeaturesItem[] {
    return [
        {
            title: i18n.gettext('Purchase and sell Dash using a bank card'),
        },
        {
            title: i18n.gettext('Superior security to store your assets (way better than via Dash wallet online)'),
        },
        {
            title: i18n.gettext('Send and receive Dash assets'),
        },
        {
            title: i18n.gettext('Follow Dash price and portfolio cost in real-time'),
        },
    ];
}

export default function DashWallet(): JSX.Element {
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
            <Section className={styles.dashWalletBestWallet}>
                <Topic
                    className={styles.dashWalletBestWalletTopic}
                    titleText={i18n.gettext('The Best Dash Wallet? Indeed, Plark.')}
                    titleClassName={styles.dashWalletBestWalletTitle}
                    descText={i18n.gettext(
                        'From time to time you come to the point where you think, “Damn, why does it take me so much time to deal with crypto routine?” We are the same people as you, and we did. That’s how Plark appears. And today it serves you with a full range of features:',
                    )}
                    descClassName={styles.dashWalletBestWalletDescr}
                />
            </Section>
            <WalletFeaturesSection featuresList={featuresList(i18n)} />
            <Section className={styles.dashWalletDownloadSection}>
                <Topic
                    titleClassName={styles.dashWalletDownloadSectionTitle}
                    className={styles.dashWalletDownloadSectionTopic}
                    titleText={i18n.gettext('Online Dash Wallet? Think twice about your security.')}
                />
            </Section>

            <FeatureSection
                titleText={i18n.gettext('Download Plark Wallet for Dash')}
                text={i18n.gettext(
                    'Stop fooling yourself with a search for a convenient and reliable service for buying, selling, and exchanging cryptocurrencies. We have created the most comfortable conditions for both beginners and advanced users. Minimum time to create an account and no personal data needed. Just a few touches and you get your personal wallet key. That’s all.',
                )}
                textClassName={styles.dashWalletDownloadSectionText}
                image={{ src: '/img/trade-screen.png' }}
                withoutLink
            />

            <Section className={styles.dashWalletDownloadSection}>
                <Topic
                    titleClassName={styles.dashWalletDownloadSectionTitle}
                    className={styles.dashWalletDownloadSectionTopic}
                    titleText={i18n.gettext(
                        'It’s never too late to get into crypto. Create your Dash coin wallet and feel no FOMO.',
                    )}
                />
            </Section>

            <CardSection
                title={i18n.gettext('Buy and Sell Dash via Bank Card ')}
                topicClassName={styles.dashWalletCardSectionTopic}
                description={i18n.gettext(
                    'Most cryptocurrency wallets only give you the ability to send, receive, and store cryptocurrency. But there is one most important function, the lack of which spends your time and nerves — the and selling of cryptocurrency with a bank card. Plark combines all the services a cryptocurrency user needs, from A to Z. Download Plark, create Dash wallet, and buy it in seconds.',
                )}
                caption={i18n.gettext(
                    'For now, this feature is open for Ukraine (UAH). We will incorporate the Russian Federation (RUB), USA (US Dollar) and EEA (Euro) soon.',
                )}
            />

            <WalletColumnsSection
                titleText={i18n.gettext('What is Dash?')}
                descrText={i18n.gettext(
                    'Dash is an open-source project, cryptocurrency which runs by different groups of users, so-called “masternodes”. It was forked from the Bitcoin and allowed very fast and untraceable transactions.',
                )}
                columns={[
                    i18n.gettext(
                        'Dash has been one of the most popular cryptocurrencies for several years now. Therefore, soon you will see Dash crypto wallet it in the list of available ones. Besides, other popular currencies are next in line for adding:',
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
