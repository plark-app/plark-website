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

    protected start = 300;
    protected end = 100;

    protected innerWidth = 1080;
    protected innerHeight = 900;
    protected __sheduleAnimationFrame: boolean = false;
    protected iphoneObject: React.RefObject<HTMLDivElement> = React.createRef();

    public componentDidMount(): void {
        window.addEventListener('scroll', this.__handlerScroll);
        window.addEventListener('resize', this.__handleScreenResize);

        this.__handleScreenResize();

        setTimeout(() => {
            this.setState({ pageLoaded: true });
        }, 200);
    }

    public componentWillUnmount(): void {
        window.removeEventListener('scroll', this.__handlerScroll);
        window.removeEventListener('resize', this.__handleScreenResize);
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
                    <div className={styles.phoneIntroBox} style={{ height: this.innerHeight }}>
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

        let progress = el.scrollTop / this.innerHeight;
        if (progress <= 0) progress = 0;
        else if (progress >= 1) progress = 1;

        this.__sheduleAnimationFrame = false;
        this.__actualizeScrollStatus();

        if (!this.iphoneObject.current) {
            return;
        }

        const phone = this.iphoneObject.current;

        const start = this.start;
        const end = this.end;

        if (progress === 1) {
            phone.classList.add(styles.iFixed);
            phone.style.transform = `translateY(100px)`;
        } else {
            phone.classList.contains(styles.iFixed) && phone.classList.remove(styles.iFixed);
            const newValue = ((end - start) * Easeing.easeInQuad(progress) + start);
            phone.style.transform = `translateY(${newValue}px)`;
        }
    };


    private __handleScreenResize = () => {
        const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
        this.innerWidth = iOS ? screen.width : window.innerWidth;
        this.innerHeight = iOS ? screen.height : window.innerHeight;

        const isSmall = this.innerWidth < 768;
        const startOffset = isSmall ? 340 : 370;
        this.start = -this.innerHeight + startOffset;
        this.end = -this.innerHeight + 100;

        window.requestAnimationFrame(this.__updateProgress);
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

