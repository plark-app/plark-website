import React from 'react';
import { IPhoneScreen } from 'common/components';
import styles from './stick-iphone.scss';

type StickIphoneProps = {
    children: React.ReactNode;
    picture: {
        src?: string;
        alt?: string;
        title?: string;
    };
};

export default React.memo(function StickIphone(props: StickIphoneProps): JSX.Element {

    const { picture, children } = props;

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.iphoneBox}>
                    <IPhoneScreen
                        src={picture.src || '/img/interfaces/PlarkScreen-dashboard.png'}
                        type="photo"
                        className={styles.iphoneImage}
                        alt={picture.alt || 'Plark Wallet'}
                        title={picture.alt || 'Plark Wallet'}
                    />
                </div>
            </div>

            <div>{children}</div>
        </div>
    );
});
