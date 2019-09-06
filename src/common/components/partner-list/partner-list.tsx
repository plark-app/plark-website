import React from 'react';
import cn from 'classnames';
import KunaLogoSvg from 'resources/svgs/partners/kuna.component.svg';
import ChangellyLogoSvg from 'resources/svgs/partners/changelly.component.svg';
import ZeroHubLogoSvg from 'resources/svgs/partners/zerohub.component.svg';
import CoinswitchLogoSvg from 'resources/svgs/partners/coinswitch.component.svg';
import WalletTopupLogoSvg from 'resources/svgs/partners/wallettopup.component.svg';

import styles from './partner-list.scss';

type PartnerListProps = {
    isSmall?: boolean;
    className?: string;
    itemClassName?: string;
};

export default React.memo(function PartnerList(props: PartnerListProps): JSX.Element {
    const containerClass = cn(styles.list, { [styles.isSmall]: props.isSmall }, props.className);
    const itemClassName = cn(styles.partner, props.itemClassName);

    return (
        <div className={containerClass}>
            {partnerList.map((par: PartnerItem) => {
                return (
                    <a href={par.website} rel="nofollow" target="_blank" className={styles.partnerLink}>
                        {React.createElement<any>(par.logo, { className: itemClassName })}
                    </a>
                );
            })}
        </div>
    );
});


type PartnerItem = {
    title: string;
    logo: React.ComponentType;
    website: string;
};

const partnerList: PartnerItem[] = [{
    title: 'Kuna.io',
    logo: KunaLogoSvg,
    website: 'https://kuna.io',
}, {
    title: 'Changelly',
    logo: ChangellyLogoSvg,
    website: 'https://kuna.io',
}, {
    title: 'ZeroHub',
    logo: ZeroHubLogoSvg,
    website: 'https://kuna.io',
}, {
    title: 'Coinswitch',
    logo: CoinswitchLogoSvg,
    website: 'https://kuna.io',
}, {
    title: 'WalletTopUp',
    logo: WalletTopupLogoSvg,
    website: 'https://kuna.io',
}];
