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
} from 'common/components';

import styles from './bitcoincash-wallet.scss';

export default function BitcoincashWallet(): JSX.Element {
    const i18n = useI18n();

    return (
        <>
            <Header isWhite />

            <StickIphone
                picture={{
                    src: '/img/interfaces/PlarkScreen-dashboard.png',
                    alt: 'multi cryptocurrency mobile wallet',
                    title: 'cryptocurrency mobile wallet',
                }}
            >
                <IntroSection
                    title={i18n.gettext('Crypto wallet made easy')}
                    subtitle={i18n.gettext('The friendliest one for your Bitcoin Cash')}
                    subtitleTag="h3"
                />
            </StickIphone>
            <Section className={styles.bitcoincashWalletBestWallet}>
                <Topic
                    className={styles.bitcoincashWalletBestWalletTopic}
                    titleText={i18n.gettext('The Best Bitcoin Cash Wallet? Plark.')}
                    titleTag="h1"
                    titleClassName={styles.bitcoincashWalletBestWalletTitle}
                    descText={i18n.gettext(
                        "With regard to application use, we want our clients to feel good. That is the reason we've wiped out everything that may trouble you in any way. We won’t bother you with asking name, telephone number, or email to get into Plark.",
                    )}
                    descClassName={styles.bitcoincashWalletBestWalletDescr}
                />
            </Section>
            <Section className={styles.bitcoincashWalletDownloadSection}>
                <Topic
                    titleClassName={styles.bitcoincashWalletDownloadSectionTitle}
                    className={styles.bitcoincashWalletDownloadSectionTopic}
                    titleText={i18n.gettext(
                        'Bitcoin Cash online wallet? On the off chance that you want to be robbed — use it.',
                    )}
                    titleTag="h3"
                />
            </Section>

            <FeatureSection
                withoutLink
                titleText={i18n.gettext('Security matters')}
                text={i18n.gettext(
                    'All that ought to be secured is secured. You can ensure it since Plark encodes everything that matters both transactions’ information and private keys. Your gadget holds this data, so you are the sole individual to get to those. There is no Bitcoin Cash web wallet that gives a similar degree of security.',
                )}
                textClassName={styles.bitcoincashWalletDownloadSectionText}
                image={{
                    src: '/img/main-screen.png',
                    alt: 'multi cryptocurrency mobile wallet',
                    title: 'cryptocurrency mobile wallet',
                }}
            />
            <FeatureSection
                isLtr
                withoutLink
                titleText={i18n.gettext('Trade your Bitcoin Cash. ')}
                text={i18n.gettext(
                    'Plark enables you to exchange Bitcoin Cash to other currencies immediately. Presumably the kickiest cross-rates both for Bitcoin Cash and other accessible cryptos. Each exchange will complete inside our Bitcoin Cash wallet iOS application.',
                )}
                textClassName={styles.bitcoincashWalletDownloadSectionText}
                image={{
                    src: '/img/trade-confirmation-screen.png',
                    alt: 'best mobile cryptocurrency wallet',
                    title: 'best mobile wallet for cryptocurrency',
                }}
            />
            <FeatureSection
                withoutLink
                titleText={i18n.gettext('Enjoy the design.')}
                text={i18n.gettext(
                    'Design is the thing that causes individuals to get back again and again. Regardless of whether we talk about Bitcoin Cash desktop wallet or mobile application, for what reason would it be advisable for us to disregard this? Nonsense! We at Plark excited to make our clients joy even with the littlest subtleties.',
                )}
                textClassName={styles.bitcoincashWalletDownloadSectionText}
                image={{
                    src: '/img/trade-screen.png',
                    alt: 'best mobile wallet for cryptocurrency',
                    title: 'mobile wallet for cryptocurrency',
                }}
            />

            <Section>
                <Topic
                    titleClassName={styles.bitcoincashWalletGoodChoice}
                    titleText={i18n.gettext('“Cash App Bitcoin Wallet”? What a strange Google request you got there.')}
                    titleTag="h2"
                />
            </Section>

            <FeatureSection
                withoutLink
                titleText={i18n.gettext('Qualify yourself.')}
                text={i18n.gettext(
                    'At Plark, we are glad to help individuals get over "Bitcoin Cash science." This marvel is still at its beginning of appropriation and advancement. Consequently, getting the message out about crypto and giving individuals a reasonable comprehension of how it functions and why it makes a difference is significant. Thus, you can discover Help Center and FAQ, which help you make things justifiable. Every minute of every day Support available to you also, if there is something unanswered left',
                )}
                textClassName={styles.bitcoincashWalletDownloadSectionText}
                image={{
                    src: '/img/main-screen.png',
                    alt: 'multi cryptocurrency mobile wallet',
                    title: 'cryptocurrency mobile wallet'
                }}
            />

            <Section>
                <Topic
                    titleClassName={styles.bitcoincashWalletGoodChoice}
                    titleText={i18n.gettext('Use a bank card to purchase and sell Bitcoin Cash.')}
                />
            </Section>

            <CardSection
                title={''}
                topicClassName={styles.bitcoincashWalletCardSectionTopic}
                description={i18n.gettext(
                    "Quit burning through your valuable time looking for a decent exchange. By building up the out-of-the-crate arrangement, we've disposed of these issues. Add your bank card to buy or pull back fiat money with it — simpler than at any other time.",
                )}
                caption={i18n.gettext(
                    'For now, this feature is open for Ukraine (UAH). We will incorporate the Russian Federation (RUB), USA (US Dollar) and EEA (Euro) soon.',
                )}
            />

            <SubscribeSection />
            <Footer />
        </>
    );
}
