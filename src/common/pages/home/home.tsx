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


const IphoneImage = () => (
    <div className={styles.phoneIntroImageBox}>
        <img className={styles.phoneIntroImage} src="/img/iphones.png" />
    </div>
);

export default class Home extends React.Component {
    public state: any = {
        activeHeader: false,
    };

    protected height = 900;
    protected __sheduleAnimationFrame: boolean = false;
    protected iphoneObject: React.RefObject<HTMLDivElement> = React.createRef();

    public componentDidMount(): void {
        document.addEventListener('scroll', this.__handlerScroll);
        this.height = window.innerHeight;

        window.requestAnimationFrame(this.__updateProgress);
    }

    public componentWillUnmount(): void {
        document.removeEventListener('scroll', this.__handlerScroll);
    }

    public render(): JSX.Element {
        return (
            <>
                <Helmet>
                    <body className={styles.homeBody} />
                </Helmet>

                <Header isWhite={this.state.activeHeader} />
                <Intro />

                <div className={styles.homeLandingContent}>
                    <div style={{ height: this.height }}>
                        <div className={styles.phoneIntroContainer} ref={this.iphoneObject}>
                            <IphoneImage />
                        </div>
                    </div>

                    <CEOCitation />
                    <AboutPlark />
                    <LastCitation />
                    <Partners />
                </div>

                <Footer />
            </>
        );
    }


    private __updateProgress = () => {
        const el = document.scrollingElement || document.documentElement;

        let progress = el.scrollTop / this.height;
        if (progress <= 0) progress = 0;
        else if (progress >= 1) progress = 1;

        const newValue = ((0.1 + 0.5) * progress - 0.5) * this.height;

        if (this.iphoneObject.current) {
            this.iphoneObject.current.style.transform = `translateY(${newValue}px)`;
        }

        this.__sheduleAnimationFrame = false;
        this.__actualizeScrollStatus();
    };


    private __handlerScroll = () => {
        if (this.__sheduleAnimationFrame) {
            return;
        }

        this.__sheduleAnimationFrame = true;
        window.requestAnimationFrame(this.__updateProgress);
    };

    private __actualizeScrollStatus = () => {
        const el = document.scrollingElement || document.documentElement;
        const activeHeader = el.scrollTop / window.innerHeight > 1;

        if (this.state.activeHeader !== activeHeader) {
            this.setState({
                activeHeader: activeHeader,
            });
        }
    };
}

