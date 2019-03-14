import React from 'react';
import Helmet from 'react-helmet';
import Footer from 'common/components/footer';
import Header from 'common/components/header';
import Intro from './intro';
import Partners from './partners';
import CEOCitation from './ceo-citation';
import AboutPlark from './about-plark';
import LastCitation from './last-citation';
import styles from './home.scss';
import { Tween } from 'react-gsap';


const IphoneImage = () => (
    <div className={styles.phoneIntroImageBox}>
        <img className={styles.phoneIntroImage} src="/img/iphones.png" />
    </div>
);

export default class Home extends React.Component {
    public state: any = {
        activeHeader: false,
        scrollTop: 0,
    };

    protected height = 900;
    protected _idleCallback: any;

    public componentDidMount(): void {
        document.addEventListener('scroll', this.__handlerScroll);
        this.height = window.innerHeight;
    }

    public componentWillUnmount(): void {
        document.removeEventListener('scroll', this.__handlerScroll);
    }

    public render(): JSX.Element {
        let progress = this.state.scrollTop / this.height;
        if (progress <= 0) progress = 0;

        return (
            <>
                <Helmet>
                    <body className={styles.homeBody} />
                </Helmet>

                <Header isWhite={this.state.activeHeader} />
                <Intro />

                <div className={styles.homeLandingContent}>
                    <div style={{ height: this.height }}>
                        <Tween totalProgress={progress}
                               paused
                               from={{ y: -this.height / 2 }}
                               to={{ y: 100, ease: 'Sine.easeIn' }}
                        >
                            <div className={styles.phoneIntroContainer}>
                                <IphoneImage />
                            </div>
                        </Tween>
                    </div>

                    <CEOCitation />
                    <AboutPlark scrollOffset={this.state.scrollTop} />
                    <LastCitation />
                    <Partners />
                </div>

                <Footer />
            </>
        );
    }


    private __handlerScroll = () => {
        this.__actualizeScrollStatus();
        // cancelIdleCallback(this._idleCallback);
        // this._idleCallback = requestIdleCallback(this.__actualizeScrollStatus);
    };

    private __actualizeScrollStatus = () => {
        const el = document.scrollingElement || document.documentElement;

        const activeHeader = el.scrollTop / window.innerHeight > 1;
        this.setState({
            activeHeader: activeHeader,
            scrollTop: el.scrollTop,
        });
    };
}

