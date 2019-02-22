import React from 'react';
import cn from 'classnames';
import { withTranslations, WithTranslationsProps } from 'slim-i18n';
import { compose } from 'recompose';
import Section from 'common/components/section';
import Topic from 'common/components/topic';

import styles from './about-plark.scss';

type AboutPlarkProps = {
    scrollOffset: number;
};

class AboutPlark extends React.PureComponent<WithTranslationsProps & AboutPlarkProps> {
    public render(): React.ReactNode {
        return (
            <Section>
                <div className={styles.iphone}>
                    <img src="/img/iphone.png" alt="iPhone" title="iPhone" className={styles.iphoneMockup} />
                    <img src="/img/screen-send.png"
                         alt="Plark Screen - Send BTC"
                         title="Plark screen - Send BTC"
                         className={styles.iphoneScreen}
                    />
                </div>


                <div className={styles.features}>
                    <div className={cn(styles.featuresSide, styles.iLeft)}>
                        <Topic titleText="Super secure"
                               className={cn(styles.featuresSideItem)}
                               descText={
                                   'Poorly designed presentations are a thing of the past. Create beautiful and high-quality content that is aligned with your brand, in just a few clicks.'
                               }
                               isSmall
                               titleTag="h3"
                        />
                        <Topic titleText="Exchange and go"
                               className={cn(styles.featuresSideItem)}
                               descText={
                                   'Manually updating your business reports and sales pitches is tedious and painful. With Pitch, connect to external data sources to turn your presentations into.'
                               }
                               isSmall
                               titleTag="h3"
                        />
                    </div>

                    <div className={styles.featuresIphoneSpace} />

                    <div className={cn(styles.featuresSide, styles.iRight)}>
                        <Topic titleText="Multi-currency"
                               className={styles.featuresSideItem}
                               descText={
                                   'For amazing augmented reality experiences. Incredible portraits with Depth Control. And speed and fluidity in everything you do.'
                               }
                               isSmall
                               titleTag="h3"
                        />

                        <Topic titleText="Exceptional materials"
                               className={cn(styles.featuresSideItem)}
                               descText={
                                   'The most durable glass ever in a smartphone. A beautiful new gold finish, achieved with an atomic-level process.'
                               }
                               isSmall
                               titleTag="h3"
                        />
                    </div>
                </div>

            </Section>
        );
    }
}

export default compose<WithTranslationsProps & AboutPlarkProps, AboutPlarkProps>(
    withTranslations,
)(AboutPlark);
