import React from 'react';
import classnames from 'classnames';

import { Section, Topic } from 'common/components';

import styles from './wallet-columns-section.scss';

export interface IWalletColumnsSectionProps {
    titleText: string;
    titleClassName?: string;
    descrText?: string;
    descrClassName?: string;
    columns: string[];
}

export default function WalletColumnsSection(props: IWalletColumnsSectionProps): JSX.Element {
    const { titleText, titleClassName, descrText, descrClassName, columns } = props;
    return (
        <Section contentClassName={styles.walletColumns}>
            <Topic
                titleText={titleText}
                titleClassName={classnames(styles.walletColumnsTitle, titleClassName)}
                descText={descrText}
                descClassName={classnames(styles.walletColumnsDescr, descrClassName)}
            />
            <div className={styles.walletColumnsContent}>
                {columns.map((text: string, i: number) => (
                    <p className={styles.walletColumnsContentText} key={i}>
                        {text}
                    </p>
                ))}
            </div>
        </Section>
    );
}
