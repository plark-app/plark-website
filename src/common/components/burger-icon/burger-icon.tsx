import React from 'react';
import classnames from 'classnames';

import styles from './burger-icon.scss';

export type BurgerIconProps = {
    className?: string;
    onClick: () => void;
};

export default function BurgerIcon({ className, onClick }: BurgerIconProps): JSX.Element {
    return (
        <button onClick={onClick} className={classnames(styles.burgerIcon, className)}>
            <span />
            <span />
            <span />
        </button>
    );
}
