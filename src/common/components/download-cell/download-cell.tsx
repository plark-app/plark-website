import React from 'react';
import cn from 'classnames';
import PlatformList from 'common/utils/install-platforms';
import { StoreBadge, StoreQR } from 'common/components';

import styles from './download-cell.scss';

type DownloadCellProps = {
    className?: string;
};

export default React.memo(function DownloadCell(props: DownloadCellProps) {
    return (
        <div className={cn(styles.buttons, props.className)}>
            <StoreBadge platform={PlatformList.apple} height={40} />
            <StoreQR className={styles.buttonsQr} />
        </div>
    );
});
