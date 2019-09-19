import React from 'react';

import styles from './wallet-features-section.scss';

export interface IWalletFeaturesItem {
    title: string;
    descr?: string;
}
export interface IWalletFeaturesSectionProps {
    featuresList: IWalletFeaturesItem[];
}

export default function WalletFeaturesSection({ featuresList }: IWalletFeaturesSectionProps): JSX.Element {
    return (
        <div className={styles.walletFeatureSection}>
            <ul className={styles.walletFeatureSectionList}>
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
                <li className={styles.walletFeatureSectionItemImage} style={{ order: featuresList.length / 2 - 1 }}>
                    <img className={styles.walletFeatureSectionImage} src={'/img/trade-screen.png'} />
                </li>
            </ul>
        </div>
    );
}
