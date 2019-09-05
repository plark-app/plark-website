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
    return (
        <div className={cn(styles.list, { [styles.isSmall]: props.isSmall }, props.className)}>
            <KunaLogoSvg className={cn(styles.partner, styles.isKuna, props.itemClassName)} />
            <ChangellyLogoSvg className={cn(styles.partner, styles.isChangelly, props.itemClassName)} />
            <ZeroHubLogoSvg className={cn(styles.partner, styles.isZerohub, props.itemClassName)} />
            <CoinswitchLogoSvg className={cn(styles.partner, styles.isCoinswitch, props.itemClassName)} />
            <WalletTopupLogoSvg className={cn(styles.partner, styles.isWallettopup, props.itemClassName)} />
        </div>
    );
});
