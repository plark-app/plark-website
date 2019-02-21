import React from 'react';
import Helmet from 'react-helmet';
import Footer from 'common/components/footer';
import Intro from './intro';
import styles from './home.scss';


export default class Home extends React.Component {
    public componentDidMount(): void {
        document.addEventListener('scroll', this.__handlerScroll);
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
                <Intro />

                <img src="/img/iphones.png"
                     style={{ position: 'absolute', bottom: '-260px', left: '50%', transform: 'translateX(-50%)', width: '500px' }}
                />

                <div className={styles.homeLandingContent}>
                    <div style={{ height: '2000px' }} />
                </div>

                <Footer />
            </>
        );
    }


    private __handlerScroll = () => {
        const body = document.querySelector('html');
        if (body) {
            console.log(body.scrollTop);
        }
    };
}
