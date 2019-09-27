import React from 'react';
import classnames from 'classnames';

import styles from './burger-button.scss';

export type BurgerButtonProps = {
    className?: string;
    onClick: () => void;
    opened: boolean;
};

export default function BurgerButton({ className, onClick, opened }: BurgerButtonProps): JSX.Element {
    return (
        <button onClick={onClick} className={classnames(styles.burgerButton, className, { [styles.isOpen]: opened })} />
    );
}
