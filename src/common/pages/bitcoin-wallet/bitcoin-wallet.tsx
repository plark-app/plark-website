import React from 'react';
import {
    Footer,
    Header,
    Section,
    Subcopy,
    Topic,
    StickIphone,
    IntroSection,
    BgTitleSection,
    SubscribeSection,
    ColumnsSection,
    CardSection,
    OpenSourceSection,
    FeatureSection,
    FeedbackSection,
} from 'common/components';
import { useI18n } from 'slim-i18n';

import styles from './bitcoin-wallet.scss';

export default function BitcoinWallet(): JSX.Element {
    const i18n = useI18n();

    return (
        <>
            <Header isWhite />

            <StickIphone picture={{
                src: '/img/interfaces/PlarkScreen-dashboard.png',
                alt: 'multi cryptocurrency mobile wallet',
                title: 'cryptocurrency mobile wallet',
            }}>
                <IntroSection
                    title={i18n.gettext('Crypto wallet made easy')}
                    subtitle={i18n.gettext('Just the friendliest crypto currency wallet you will use.')}
                />

                <BgTitleSection
                    title={i18n.gettext('Simple registration')}
                    content={i18n.gettext('When it comes to application usage, we want our users to feel comfortable. That’s why we’ve eliminated all the points that may bother you in any way. We don’t need your name, phone number, or email to access Plark.')}
                />

                <BgTitleSection
                    title={i18n.gettext('Bitcoin wallet')}
                    content={i18n.gettext('Create your wallet in a few clicks. Plark works thanks to several different and independent blockchain nodes. Thus, we avoid standard procedure where the name, phone number, or email is required. All you need is a 12-word backup phrase, which is your key to access and restore the wallet.')}
                />
            </StickIphone>

            <ColumnsSection
                topic={{
                    titleTag: 'h3',
                    title: i18n.gettext('"Do we think Plark is the best free Bitcoin wallet? Better you say."'),
                    description: i18n.gettext('— Plark Team'),
                }}
                texts={[{
                    title: i18n.gettext('Privacy always matters.'),
                    content: i18n.gettext('All that should be secured is secured. You can make sure of it since Plark encrypts everything that concerns to transaction data and private keys. Your device holds this information, so you are the only person to access those. There is no Bitcoin wallet online that gives the same level of security.'),
                }, {
                    title: i18n.gettext('Bitcoin exchange.'),
                    content: i18n.gettext('Plark allows you to trade Bitcoin to Ethereum, Litecoin, and Dash right away. Probably the most competitive cross-rates both for Bitcoin and other available cryptos. Fast, convenient, secured — no more lost nerve cells. Every transaction will get done within our Bitcoin wallet app.'),
                }, {
                    title: i18n.gettext('The best-looking Bitcoin wallet app.'),
                    titleTag: 'h1',
                    content: i18n.gettext('Design is what makes people get back over and over again. Even if we talk about Bitcoin wallet app (purely technical things, for the first view), why should we neglect a design? What an inequity! We at Plark thrilled to make our users delight even with the smallest details.'),
                }]}
            />


            <CardSection
                title={i18n.gettext('Credit card to buy and sell Bitcoin!')}
                description={i18n.gettext('Stop wasting your precious time in search of a convenient exchange: inept rates, low credibility, bad security, or even inability to create an account in your region.')}
                subtitle={i18n.gettext('By developing the out-of-the-box solution, we’ve eliminated these issues. Add your credit or debit card to purchase or withdraw fiat currency with it — easier than ever.')}
            />

            <FeatureSection
                text={i18n.gettext('Educate yourself. At Plark we are happy to help people get over “Bitcoin science.” This phenomenon is still at its early days of adoption and development. Thus, spreading the word about Bitcoin and giving people a clear understanding of how it works and why it matters is crucial. For this reason, you can find Help Center and FAQ, which help you make things understandable. 24/7 Support at your disposal as well, if there is something unanswered left.')}
                image={{
                    src: '/img/trade-screen.png',
                    alt: 'best mobile wallet for cryptocurrency',
                    title: 'mobile wallet for cryptocurrency',
                }}
            />

            <FeatureSection
                isLtr
                text={i18n.gettext('Adjust transaction speed. Bitcoin network, thanks to its features, allows you to adjust transaction speed through setting up the mining fee in Settings. It’s up to you: if a transaction should be finished in no time — feel free to prioritize it higher over the rest users. The opposite is also true.')}
                image={{
                    src: '/img/trade-confirmation-screen.png',
                    alt: 'best mobile cryptocurrency wallet',
                    title: 'best mobile wallet for cryptocurrency',
                }}
            />

            <OpenSourceSection
                title={i18n.gettext('Fully open-source')}
                description={i18n.gettext('Plark’s code is open-source, so feel free to visit our page at GitHub and take the possible advantage of it.')}
            />

            <FeedbackSection />

            <Section>

                <Topic
                    isSmall
                    isCenter
                    className={styles.bitcoinTopic}
                    titleClassName={styles.bitcoinTopicTitle}
                    titleText={i18n.gettext('What is Bitcoin?')}
                    descText={i18n.gettext('Bitcoin is a digital currency (with no central bank or corporate office) that can be sent between users on the peer-to-peer network without intermediaries.')}
                />

                <Subcopy
                    texts={[{
                        content: i18n.gettext('Transactions get verified within the network through cryptography and documented in a “public notebook” called a blockchain. An unknown person under the name of Satoshi Nakamoto, who has released the open-source software in 2009, is considered as a Bitcoin’s inventor. '),
                    }, {
                        content: i18n.gettext('Bitcoin is limited, while new of those creates as a reward for a process named mining (for processing transactions).'),
                    }, {
                        content: i18n.gettext('Bitcoin is much simpler than you think. We’ve taken away useless information from your sight. Nothing should distract or get you info confusion. Well, need not understand how a car works to drive it — same thing with Bitcoin. And we’ve created this free Bitcoin wallet to make your life easier.'),
                    }]}
                />
            </Section>

            <SubscribeSection />
            <Footer />
        </>
    );
}

