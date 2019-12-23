import React from 'react';
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
                    <img
                        className={styles.iphoneImage}
                        src={picture.src || '/img/main-screen.png'}
                        alt={picture.alt || 'Plark Wallet'}
                    />
                </div>
            </div>

            <div>{children}</div>
        </div>
    );
});
