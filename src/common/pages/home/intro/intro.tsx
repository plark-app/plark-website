import React from 'react';
import cn from 'classnames';
import { Section, DownloadCell } from 'common/components';

import KunaLogoSvg from 'resources/svgs/partners/kuna.component.svg';
import ChangellyLogoSvg from 'resources/svgs/partners/changelly.component.svg';
import ZeroHubLogoSvg from 'resources/svgs/partners/zerohub.component.svg';
import CoinswitchLogoSvg from 'resources/svgs/partners/coinswitch.component.svg';
import WalletTopupLogoSvg from 'resources/svgs/partners/wallettopup.component.svg';

import styles from './intro.scss';

export { styles };

// import * as text from '../home.text';

type IntroBlockProps = {
    title: string;
    subtitle: string;
};

export default function IntroBlock(props: IntroBlockProps): JSX.Element {
    return (
        <>
            <Section className={styles.introSection} contentClassName={styles.introSectionContent}>
                <div className={styles.introTopic}>
                    <h3 className={styles.introTopicShit}>{props.title}</h3>
                    <h2 className={styles.introTopicTitle}>{props.subtitle}</h2>

                    <DownloadCell />
                </div>
            </Section>

            <Section className={styles.partnersSection} contentClassName={styles.partnersContent}>
                <div className={styles.partnersList}>
                    <KunaLogoSvg className={cn(styles.partnersItem, styles.isKuna)} />
                    <ChangellyLogoSvg className={cn(styles.partnersItem, styles.isChangelly)} />
                    <ZeroHubLogoSvg className={cn(styles.partnersItem, styles.isZerohub)} />
                    <CoinswitchLogoSvg className={cn(styles.partnersItem, styles.isCoinswitch)} />
                    <WalletTopupLogoSvg className={cn(styles.partnersItem, styles.isWallettopup)} />
                </div>
            </Section>
        </>
    );
}
