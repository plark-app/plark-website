import React from 'react';
import cn from 'classnames';
import styles from './burger-button.scss';

export type BurgerButtonProps = {
    className?: string;
    onClick: () => void;
    opened: boolean;
};

export function BurgerButton(props: BurgerButtonProps): JSX.Element {
    const { className, onClick, opened } = props;

    const buttonClassName = cn(
        styles.burgerButton,
        className,
        {
            [styles.isOpen]: opened,
        },
    );

    return <button
        onClick={onClick}
        className={buttonClassName}
    />;
}
