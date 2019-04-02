import React from 'react';
import Helmet from 'react-helmet';
import cn from 'classnames';
import Easeing from 'common/utils/easeing';
import Footer from 'common/components/footer';
import Header from 'common/components/header';
import Intro from './intro';
import Partners from './partners';
import CEOCitation from './ceo-citation';
import AboutPlark from './about-plark';
import LastCitation from './last-citation';

import styles from './home.scss';

const IphoneImage = ({ loaded = false }: any) => (
    <div className={styles.phoneIntroImageBox}>
        <img className={cn(styles.phoneIntroImage, loaded ? styles.iPageLoaded : undefined)} src="/img/iphones.png" />
    </div>
);

export default class Home extends React.Component {
    public state: any = {
        activeHeader: false,
        pageLoaded: false,
    };

    protected height = 900;
    protected __sheduleAnimationFrame: boolean = false;
    protected iphoneObject: React.RefObject<HTMLDivElement> = React.createRef();

    public componentDidMount(): void {
        window.addEventListener('scroll', this.__handlerScroll);
        this.height = window.innerHeight;

        window.requestAnimationFrame(this.__updateProgress);


        setTimeout(() => {
            this.setState({ pageLoaded: true });
        }, 200);
    }

    public componentWillUnmount(): void {
        window.removeEventListener('scroll', this.__handlerScroll);
    }

    public render(): JSX.Element {
        return (
            <>
                <Helmet>
                    <body className={styles.homeBody} />
                </Helmet>

                <Header isWhite={this.state.activeHeader} />
                <Intro hideContent={this.state.activeHeader} />

                <div className={styles.homeLandingContent}>
                    <div style={{ height: this.height }}>
                        <div className={styles.phoneIntroContainer} ref={this.iphoneObject}>
                            <IphoneImage loaded={this.state.pageLoaded} />
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

        this.__sheduleAnimationFrame = false;
        this.__actualizeScrollStatus();

        if (!this.iphoneObject.current) {
            return;
        }

        const phone = this.iphoneObject.current;

        const start = -0.5;
        const end = -0.8;

        if (progress === 1) {
            phone.classList.add(styles.iFixed);
            const newValue = (1 - (-end)) * this.height;
            phone.style.transform = `translateY(${newValue}px)`;
        } else {
            phone.classList.contains(styles.iFixed) && phone.classList.remove(styles.iFixed);
            console.log();
            const newValue = ((end - start) * Easeing.easeInQuad(progress) + start) * this.height;
            phone.style.transform = `translateY(${newValue}px)`;
        }
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

