import React from 'react';
import classnames from 'classnames';
import { compose } from 'recompose';

import withWindow, { WithWindowProps } from 'common/components/with-window';

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

export type WalletFeaturesSectionInnerProps = WalletFeaturesSectionOuterProps & WithWindowProps;

function WalletFeaturesSection({
    featuresList,
    sectionClassName,
    listClassName,
    imgClassName,
    dimensions,
}: WalletFeaturesSectionInnerProps): JSX.Element {
    const { width } = dimensions;
    const phoneOrder: number = width < 768 ? -1 : Math.floor((featuresList.length - 1) / 2);
    return (
        <div className={classnames(styles.walletFeatureSection, sectionClassName)}>
            <ul className={classnames(styles.walletFeatureSectionList, listClassName)}>
                {featuresList.map((item: IWalletFeaturesItem, i: number) => (
                    <li
                        style={{ order: i, textAlign: width >= 768 ? (i > 3 ? 'left' : 'right') : 'center' }}
                        key={i}
                        className={styles.walletFeatureSectionItem}
                    >
                        <p className={styles.walletFeatureSectionItemTitle}>{item.title}</p>
                        {item.descr && <p className={styles.walletFeatureSectionItemDescr}>{item.descr}</p>}
                    </li>
                ))}
                <li
                    style={{ order: phoneOrder }}
                    className={classnames(styles.walletFeatureSectionItemImage, imgClassName)}
                >
                    <img className={styles.walletFeatureSectionImage} src={'/img/trade-screen.png'} />
                </li>
            </ul>
        </div>
    );
}

export default compose<WalletFeaturesSectionInnerProps, WalletFeaturesSectionOuterProps>(withWindow)(
    WalletFeaturesSection,
);
