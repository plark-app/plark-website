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

import styles from './neo-wallet.scss';

function featuresList(i18n: ITranslationsAdapter): IWalletFeaturesItem[] {
    return [
        {
            title: i18n.gettext('Buy Neo utilizing a bank card'),
        },
        {
            title: i18n.gettext('Sell your Neo with a cashout on a bank card'),
        },
        {
            title: i18n.gettext(
                'Store Neo with a 100% wellbeing (a similar security level as any Neo hardware wallet has)',
            ),
        },
        {
            title: i18n.gettext('Send and Receive Ne'),
        },
        {
            title: i18n.gettext('Cross-exchange to an alternate accessible digital currencies'),
        },
        {
            title: i18n.gettext('Check the present Neo price directly from inside the app'),
        },
        {
            title: i18n.gettext('Monitor your portfolio cost and everyday change in cost'),
        },
    ]
}

export default function NeoWallet(): JSX.Element {
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
                    subtitle={i18n.gettext('The friendliest one for you')}
                    subtitleTag="h3"
                />
            </StickIphone>
            <Section className={styles.neoWalletBestWallet}>
                <Topic
                    className={styles.neoWalletBestWalletTopic}
                    titleText={i18n.gettext('The Best Neo Wallet? Plark.')}
                    titleTag="h1"
                    titleClassName={styles.neoWalletBestWalletTitle}
                    descText={i18n.gettext(
                        'Plark is across the board application you need on your cell phone since it opens the most vital usefulness both for tenderfoots and experienced crypto-buddies:',
                    )}
                    descClassName={styles.neoWalletBestWalletDescr}
                />
            </Section>
            <WalletFeaturesSection featuresList={featuresList(i18n)} />
            <Section className={styles.neoWalletDownloadSection}>
                <Topic
                    titleClassName={styles.neoWalletDownloadSectionTitle}
                    className={styles.neoWalletDownloadSectionTopic}
                    titleText={i18n.gettext('Neo web wallet is not the most convenient way to manage crypto.')}
                    titleTag="h3"
                />
            </Section>

            <FeatureSection
                titleText={i18n.gettext('Download Neo wallet for iOS')}
                text={i18n.gettext(
                    "Enjoy the most uncomplicated registration procedure that could ever be, even compared to a Neo desktop wallet. We have disentangled the enrollment procedure so you can make your Neo wallet in a couple of taps. No stresses over security since Plark works 100% namelessly. We don't request individual information or email.",
                )}
                textClassName={styles.neoWalletDownloadSectionText}
                image={{ src: '/img/trade-screen.png' }}
                withoutLink
            />

            <Section>
                <Topic
                    titleClassName={styles.neoWalletGoodChoice}
                    titleText={i18n.gettext('Plark is a solid Neo coin wallet. British scientists proved.')}
                    titleTag="h2"
                />
            </Section>

            <CardSection
                title={i18n.gettext('Buy and Sell Neo through Bank Card ')}
                topicClassName={styles.neoWalletCardSectionTopic}
                description={i18n.gettext(
                    'Plark offers an extraordinary way to buy and sell Neo legitimately through bank card, bypassing exchanges',
                )}
                caption={i18n.gettext(
                    'Right now, this element is accessible only for Ukraine (UAH). We will include the Russian Federation (RUB), USA (US Dollar) and EEA (Euro) soon.',
                )}
                steps={[
                    i18n.gettext('Add your bank card to your Plark wallet'),
                    i18n.gettext('Set the desired amount of coins to purchase or sell'),
                    i18n.gettext('Activate Neo wallet'),
                    i18n.gettext('Add your bank card to your Plark wallet'),
                ]}
            />

            <WalletColumnsSection
                titleText={i18n.gettext('What is NEO?')}
                descrText={i18n.gettext(
                    'Neo is a non-benefit network based company that uses blockchain to digitize personality, robotize the administration of advanced resources via utilizing smart contracts, to create a full-fledged "smart economy" ecosystem.',
                )}
                columns={[
                    i18n.gettext(
                        'Plark is a wallet for Neo that offers a full spectrum of features you need. We intend to include the most interesting and popular coins, for example:',
                    ),
                    i18n.gettext(
                        'IOTA, Monero, Zcash, Cardano, Dogecoin, Tron, Bitcoin Cash, Stellar, EOS, Waves, Wechain, Ethereum Classic, Omisego, Qtum, Tether, Tezos, Ontology, Basic Attention Token, Chainlink, Bitcoin SV and others.',
                    ),
                ]}
            />

            <SubscribeSection />
            <Footer />
        </>
    );
}
