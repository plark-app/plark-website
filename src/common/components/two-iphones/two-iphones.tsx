import React from 'react';
import cn from 'classnames';
import styles from './two-iphones.scss';

type TwoIPhonesProps = {
    className?: string;
};

export const TwoIPhones = React.memo(function TwoIPhones(props: TwoIPhonesProps) {
    return (
        <div className={cn(styles.phones, props.className)}>
            <img src="/img/ps/06.png"
                 alt="Trade Screen"
                 title="Trade Screen"
                 className={styles.phonesScene}
                 srcSet="/img/ps/06@2x.png 2x"
            />

            <img src="/img/ps/07.png"
                 alt="Trade Confirmation Screen"
                 title="Trade Confirmation Screen"
                 className={styles.phonesScene}
                 srcSet="/img/ps/07@2x.png 2x"
            />
        </div>
    );
});
