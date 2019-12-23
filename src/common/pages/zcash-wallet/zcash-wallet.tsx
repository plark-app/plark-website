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

import styles from './zcash-wallet.scss';

function featuresList(i18n: ITranslationsAdapter): IWalletFeaturesItem[] {
    return [
        {
            title: i18n.gettext('Buy Zcash with a credit card'),
        },
        {
            title: i18n.gettext('Sell Zcash, getting the money for out legitimately on a bank card '),
        },
        {
            title: i18n.gettext('100% safe stockpiling for Zcash'),
        },
        {
            title: i18n.gettext('Send and Receive Zcash coins'),
        },
        {
            title: i18n.gettext('Exchange Zcash to different digital currencies with the least conceivable fees '),
        },
        {
            title: i18n.gettext('Track the change in cost of Zcash'),
        },
        {
            title: i18n.gettext('Watch your portfolio cost'),
        },
    ];
}

export default function ZCashWallet(): JSX.Element {
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
                    subtitle={i18n.gettext('The friendliest one for your Zcash assets')}
                    subtitleTag="h3"
                />
            </StickIphone>
            <Section className={styles.zcashWalletBestWallet}>
                <Topic
                    className={styles.zcashWalletBestWalletTopic}
                    titleText={i18n.gettext('The Best Zcash Wallet? Plark.')}
                    titleTag="h1"
                    titleClassName={styles.zcashWalletBestWalletTitle}
                    descText={i18n.gettext(
                        'With Plark, you can play out any activity with regards to digital money, to be specific Zcash. Friendly UI will assist you with finding out the accessible features, such as:',
                    )}
                    descClassName={styles.zcashWalletBestWalletDescr}
                />
            </Section>
            <WalletFeaturesSection featuresList={featuresList(i18n)} />
            <Section className={styles.zcashWalletDownloadSection}>
                <Topic
                    titleTag="h2"
                    titleClassName={styles.zcashWalletDownloadSectionTitle}
                    className={styles.zcashWalletDownloadSectionTopic}
                    titleText={i18n.gettext('Zcash wallet online, huh? Not a good choice when it comes to security.')}
                />
            </Section>

            <FeatureSection
                withoutLink
                titleText={i18n.gettext('Download Plark Wallet for Zcash')}
                text={i18n.gettext(
                    'Plark allows you to manage your Zcash coins how you need. The main thing you have to keep close within reach your cell phone. The clearest entry, where no personal information is required. At the moment, Plark is available exclusively for iOS, but who knows — maybe the Zcash wallet for Windows will see the world sometime.',
                )}
                textClassName={styles.zcashWalletDownloadSectionText}
                image={{
                    src: '/img/trade-screen.png',
                    alt: 'best mobile wallet for cryptocurrency',
                    title: 'mobile wallet for cryptocurrency',
                }}
            />

            <Section>
                <Topic
                    titleClassName={styles.zcashWalletGoodChoice}
                    titleText={i18n.gettext('Create Zcash wallet — get closer to crypto.')}
                    titleTag="h3"
                />
            </Section>

            <CardSection
                title={i18n.gettext('Purchase and Sell Zcash through Bank Card')}
                topicClassName={styles.zcashWalletCardSectionTopic}
                description={i18n.gettext(
                    'For the present, you can both purchase and sell Zcash utilizing your bank card. Not any more burnt through endeavors and time looking for a decent exchange — everything as straightforward as that:',
                )}
                caption={i18n.gettext('Create Zcash wallet — get closer to crypto.')}
                steps={[
                    i18n.gettext('Connect up a bank card to your Plark wallet'),
                    i18n.gettext('Make a Zcash wallet'),
                    i18n.gettext('Set the measure of Zcash you need to purchase or sell'),
                    i18n.gettext('Appreciate the outcome'),
                ]}
            />

            <WalletColumnsSection
                titleText={i18n.gettext('What is Zcash?')}
                descrText={i18n.gettext(
                    "Zcash is a security centered blockchain and digital money that was created to overcome Bitcoin's downsides. It utilizes a similar calculation as Bitcoin, but enhances it by empowering semi-straightforward handling.",
                )}
                columns={[
                    i18n.gettext('Plark reliably adds more coins to the rundown. Here are the up and coming of them:'),
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
