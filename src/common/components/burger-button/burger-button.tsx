import React from 'react';
import classnames from 'classnames';

import styles from './burger-button.scss';

export type BurgerButtonProps = {
    className?: string;
    onClick: () => void;
};

export default function BurgerButton({ className, onClick }: BurgerButtonProps): JSX.Element {
    return (
        <button onClick={onClick} className={classnames(styles.burgerButton, className)}>
            <span />
            <span style={{ width: '50%' }} />
        </button>
    );
}
