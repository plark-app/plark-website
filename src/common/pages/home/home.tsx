import React from 'react';
import Helmet from 'react-helmet';
import { Footer, Header, BgTitleSection, CitationSection, SubscribeSection } from 'common/components';

import IntroBlock from './intro';
import styles from './home.scss';

export default class Home extends React.Component {
    public render(): JSX.Element {
        return (
            <>
                <Helmet>
                    <body className={styles.homeBody} />
                </Helmet>

                <Header isWhite />
                <IntroBlock />

                <BgTitleSection
                    title="exchange your cryptocurrencies anonymously"
                    content={
                        'Exchange your cryptocurrencies anonymously with the Plark’s fine-tailored ' +
                        'feature in a few taps. Bitcoin, Ethereum, Litecoin, and Dash cryptos are ' +
                        'available with more to come.'
                    }
                />

                <BgTitleSection
                    title="send and receive crypto"
                    content={
                        'Send and receive Bitcoin, Ethereum, Litecoin, and Dash (with more cryptos to come) ' +
                        'in a few clicks. Fast and convenient way to control your assets. Anytime. Anywhere.'
                    }
                />

                <BgTitleSection
                    title="one wallet for everything"
                    content={
                        'No more bunch of wallets and apps, no more messing with passwords and backup phrases. ' +
                        'Manage and keep your Bitcoin, Ethereum, Litecoin, and Dash cryptocurrencies through ' +
                        'the single app.'
                    }
                />

                <BgTitleSection
                    title="Safe Place for Your Crypto? It’s Here!"
                    content={
                        'Plark is probably the most secure crypto wallet. Only you have access to your funds and ' +
                        'transaction data. Neither Plark nor any 3rd party can access your money and data that ' +
                        'are stored on your device only.'
                    }
                />

                <CitationSection
                    title="We don’t say Plark is the best crypto wallet. Better you say."
                    author="Plark Team"
                />

                <SubscribeSection />
                <Footer />
            </>
        );
    }
}

