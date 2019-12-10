import React from 'react';
import { useI18n } from 'slim-i18n';

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
    WalletColumnsSection,
} from 'common/components';

import styles from './eos-wallet.scss';

export default function EosWallet(): JSX.Element {
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
                    title={i18n.gettext('No sh*t wallet')}
                    subtitle={i18n.gettext('The friendliest one for you')}
                    subtitleTag="h3"
                />
            </StickIphone>
            <Section className={styles.eosWalletBestWallet}>
                <Topic
                    className={styles.eosWalletBestWalletTopic}
                    titleText={i18n.gettext('The Best EOS Wallet? Plark.')}
                    titleTag="h1"
                    titleClassName={styles.eosWalletBestWalletTitle}
                    descText={i18n.gettext(
                        `Do you like to spend time cycling, playing the guitar, or walking with your pet? Do you want to enjoy the morning moment with a cup of coffee, not being in a hurry? Time is a resource that cannot be replenished. So why should you spend time on something that doesn’t bring joy? Why should you spend time on what can be done in a few taps via phone? Up to this point — it was not possible. Plark changes everything.`,
                    )}
                    descClassName={styles.eosWalletBestWalletDescr}
                />
            </Section>
            <Section className={styles.eosWalletDownloadSection}>
                <Topic
                    titleTag="h2"
                    titleClassName={styles.eosWalletDownloadSectionTitle}
                    className={styles.eosWalletDownloadSectionTopic}
                    titleText={i18n.gettext('Create your EOS coin wallet and feel no FOMO.')}
                />
            </Section>

            <FeatureSection
                withoutLink
                titleText={i18n.gettext('Download Plark Wallet for EOS')}
                text={i18n.gettext(
                    'Cryptocurrency becomes convenient and understandable. But not by itself. Our goal was to create such an application in which everything will be in place. In which any of your actions is a minimum of time and effort. Buying, selling, storing, receiving, and sending - all this requires only one mobile application - Plark. Once you’ve created EOS token wallet, all thoughts about the EOS management routine will be reduced by ten times. We measured.',
                )}
                textClassName={styles.eosWalletDownloadSectionText}
                image={{
                    src: '/img/trade-screen.png',
                    alt: 'best mobile wallet for cryptocurrency',
                    title: 'mobile wallet for cryptocurrency',
                }}
            />

            <CardSection
                title={i18n.gettext('Purchase and Sell Stellar via Bank Card')}
                topicClassName={styles.eosWalletCardSectionTopic}
                description={i18n.gettext(
                    'There are many cryptocurrency wallets around (including any EOS hardware wallet) that offer you a standard set of features. Why almost no one provides the most important one? The ability to purchase and sell EOS with a bank card is what saves most of the time you spend on cryptocurrency daily routine. That’s what Plark offers.',
                )}
                caption={i18n.gettext(
                    'For the time being, this component is open for Ukraine (UAH). We will join the Russian Federation (RUB), USA (US Dollar) and EEA (Euro) soon.',
                )}
            />

            <Section className={styles.eosWalletDownloadSection}>
                <Topic
                    titleClassName={styles.eosWalletDownloadSectionTitle}
                    className={styles.eosWalletDownloadSectionTopic}
                    titleText={i18n.gettext('Exodus Wallet EOS? Good choice. Still, you may try Plark.')}
                    titleTag="h3"
                />
            </Section>

            <WalletColumnsSection
                titleText={i18n.gettext('What is EOS?')}
                descrText={i18n.gettext(
                    'EOS is a blockchain ecosystem that allows the development, hosting, and execution of decentralized applications both for individuals and businesses who work with a wide range of areas.',
                )}
                columns={[
                    i18n.gettext(
                        'The wallet for EOS is one of the most popular at the moment. It will soon be available for Plark. But EOS is far from everything. We plan to add other popular cryptocurrencies, such as:',
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
