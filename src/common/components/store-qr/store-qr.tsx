import React from 'react';
import cn from 'classnames';
import styles from './store-qr.scss';

type StoreQRProps = {
    className?: string;
};

export function StoreQR(props: StoreQRProps) {
    return (
        <div className={cn(styles.box, props.className)}>
            <img src="/img/qr-code.png" className={styles.boxSmall} alt="Plark AppStore QR" />
            <span className={styles.boxText}>Scan to Download</span>

            <img src="/img/appstore-qr.png" className={styles.boxBig} alt="Plark AppStore QR" />
        </div>
    );
}
