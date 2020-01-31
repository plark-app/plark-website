import React from 'react';
import _ from 'lodash';
import cn from 'classnames';
import StarSvg from 'resources/svgs/star.component.svg';
import styles from './star-rate.scss';

export default React.memo(function StarRate({ rate = 1 }: any): JSX.Element {
    return (
        <div className={styles.box}>
            {_.times(5, (i: number) => (
                <StarSvg key={i} className={cn(styles.star, { [styles.isActive]: i <= rate })} />
            ))}
        </div>
    );
});
