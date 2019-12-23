import React from 'react';
import cn from 'classnames';
import { useDimensions } from 'common/components';

import styles from './wallet-features-section.scss';

export interface IWalletFeaturesItem {
    title: string;
    descr?: string;
}

export type WalletFeaturesSectionOuterProps = {
    featuresList: IWalletFeaturesItem[];
    sectionClassName?: string;
    listClassName?: string;
    imgClassName?: string;
};

export type WalletFeaturesSectionInnerProps = WalletFeaturesSectionOuterProps;

export default function WalletFeaturesSection(props: WalletFeaturesSectionInnerProps): JSX.Element {
    const { featuresList, sectionClassName, listClassName, imgClassName } = props;

    const dimensions = useDimensions();

    const phoneOrder: number = (dimensions.width && dimensions.width < 768)
        ? -1
        : Math.floor((featuresList.length - 1) / 2);

    return (
        <div className={cn(styles.walletFeatureSection, sectionClassName)}>
            <ul className={cn(styles.walletFeatureSectionList, listClassName)}>
                {featuresList.map((item: IWalletFeaturesItem, i: number) => (
                    <li style={{ order: i, textAlign: dimensions.width >= 768 ? (i > 3 ? 'left' : 'right') : 'center' }}
                        key={i}
                        className={styles.walletFeatureSectionItem}
                    >
                        <p className={styles.walletFeatureSectionItemTitle}>{item.title}</p>

                        {item.descr && <p className={styles.walletFeatureSectionItemDescr}>{item.descr}</p>}
                    </li>
                ))}
                <li style={{ order: phoneOrder }}
                    className={cn(styles.walletFeatureSectionItemImage, imgClassName)}
                >
                    <img className={styles.walletFeatureSectionImage} src={'/img/trade-screen.png'} />
                </li>
            </ul>
        </div>
    );
}
