import React from 'react';
import classnames from 'classnames';

import styles from './wallet-features-section.scss';

export interface IWalletFeaturesItem {
    title: string;
    descr?: string;
}
export interface IWalletFeaturesSectionProps {
    featuresList: IWalletFeaturesItem[];
    sectionClassName?: string;
    listClassName?: string;
    imgClassName?: string;
}

export default function WalletFeaturesSection({
    featuresList,
    sectionClassName,
    listClassName,
    imgClassName,
}: IWalletFeaturesSectionProps): JSX.Element {
    const phoneOrder: number = Math.floor(featuresList.length / 2);
    return (
        <div className={classnames(styles.walletFeatureSection, sectionClassName)}>
            <ul className={classnames(styles.walletFeatureSectionList, listClassName)}>
                {featuresList.map((item: IWalletFeaturesItem, i: number) => (
                    <li
                        style={{ order: i, textAlign: i > 3 ? 'left' : 'right' }}
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
