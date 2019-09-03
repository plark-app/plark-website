import React from 'react';
import cn from 'classnames';
import styles from './store-qr.scss';

type StoreQRProps = {
    className?: string;
};

export default function StoreQR(props: StoreQRProps) {
    return (
        <div className={cn(styles.box, props.className)}>
            <img src="/img/appstore-qr.png" className={styles.boxSmall} alt="Plark AppStore QR" />
            <img src="/img/appstore-qr.png" className={styles.boxBig} alt="Plark AppStore QR" />
        </div>
    );
}
