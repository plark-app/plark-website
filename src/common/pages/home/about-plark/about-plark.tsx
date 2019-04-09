import React from 'react';
import cn from 'classnames';
import { withTranslations, WithTranslationsProps } from 'slim-i18n';
import { Timeline, Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import { compose } from 'recompose';
import Section from 'common/components/section';
import Feature from './feature';

import styles from './about-plark.scss';

type AboutPlarkProps = {
    scrollOffset?: number;
};

class AboutPlark extends React.PureComponent<WithTranslationsProps & AboutPlarkProps> {
    public state: any = {
        phoneOffset: 300,
        useParallax: false,
    };

    public componentDidMount(): void {
        const useParallax = window.innerWidth > 1080;
        const phoneHeight = useParallax ? 1009 : 450;
        const phoneOffset = phoneHeight / 2;

        this.setState({ phoneOffset, useParallax });
    }


    public render(): React.ReactNode {
        return (
            <Section className={styles.aboutContainer} contentClassName={styles.aboutContainerContent}>
                {this.state.useParallax
                    ? this.__renderParallaxPhone()
                    : (
                        <>
                            <Controller>
                                <Scene duration={500} offset={this.state.phoneOffset} pin>
                                    <Timeline>
                                        <Tween
                                            from={{ scale: 1.5 }}
                                            to={{ scale: 1 }}
                                        >
                                            {this.__renderPhone()}
                                        </Tween>
                                    </Timeline>
                                </Scene>
                            </Controller>

                            <div className={styles.featuresPlainList}>
                                <Feature index={0} />
                                <Feature index={1} />
                                <Feature index={2} />
                                <Feature index={3} />
                            </div>
                        </>
                    )
                }
            </Section>
        );
    }

    protected __renderParallaxPhone = () => {
        return (
            <Controller>
                <Scene duration={1300} offset={this.state.phoneOffset} pin>
                    <Timeline>
                        <Tween
                            from={{ scale: 1 }}
                            to={{ scale: 0.623 }}
                        >
                            {this.__renderPhone()}
                        </Tween>

                        <Tween staggerFrom={{ opacity: 0 }}
                               staggerTo={{ opacity: 1 }}
                               stagger={0.4}
                               wrapper={<div className={styles.features} />}
                        >
                            <div className={styles.iLeft}>
                                <Feature index={0} />
                            </div>

                            <div className={styles.iRight}>
                                <Feature index={1} />
                            </div>

                            <div className={cn(styles.iLeft, styles.iBottom)}>
                                <Feature index={2} />
                            </div>

                            <div className={cn(styles.iRight, styles.iBottom)}>
                                <Feature index={3} />
                            </div>
                        </Tween>
                    </Timeline>
                </Scene>
            </Controller>
        );
    };


    protected __renderPhone = () => {
        return (
            <div className={styles.iphone}>
                <img src="/img/iphone.png" alt="iPhone" title="iPhone" className={styles.iphoneMockup} />
                <img src="/img/screen-send.png"
                     alt="Plark Screen - Send BTC"
                     title="Plark screen - Send BTC"
                     className={styles.iphoneScreen}
                />
            </div>
        );
    };
}

export default compose<WithTranslationsProps & AboutPlarkProps, AboutPlarkProps>(
    withTranslations,
)(AboutPlark);
