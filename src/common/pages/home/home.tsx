import React from 'react';
import Helmet from 'react-helmet';
import Footer from 'common/components/footer';
import Header from 'common/components/header';
import Intro from './intro';
import Partners from './partners';
import CEOCitation from './ceo-citation';
import styles from './home.scss';


export default class Home extends React.Component {
    public state: any = {
        activeHeader: false,
    };

    public componentDidMount(): void {
        document.addEventListener('scroll', this.__handlerScroll);
    }

    public componentWillUnmount(): void {
        document.removeEventListener('scroll', this.__handlerScroll);
    }

    public render(): JSX.Element {
        const cssStylesOfIPhones: any = {
            position: 'absolute',
            bottom: '-260px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '500px',
        };

        return (
            <>
                <Helmet>
                    <body className={styles.homeBody} />
                </Helmet>

                <Header isWhite={this.state.activeHeader} />
                <Intro />

                <img src="/img/iphones.png" style={cssStylesOfIPhones} alt="Plark interface" />

                <div className={styles.homeLandingContent}>
                    <CEOCitation />


                    <Partners />
                </div>

                <Footer />
            </>
        );
    }


    private __handlerScroll = () => {
        const body = document.querySelector('html');
        if (!body) {
            return;
        }

        console.log(body.scrollTop);

        const activeHeader = body.scrollTop / window.innerHeight > 1;

        if (activeHeader !== this.state.activeHeader) {
            this.setState({ activeHeader: activeHeader });
        }
    };
}
