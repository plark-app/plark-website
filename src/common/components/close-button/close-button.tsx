import React from 'react';
import cn from 'classnames';

import CloseSVG from 'resources/svgs/close.component.svg';

import styles from './close-button.scss';

type CloseButtonProps = {
    className?: string;
    onClick: () => void;
};

export default function CloseButton({ className, onClick }: CloseButtonProps): JSX.Element {
    return (
        <button className={cn(styles.closeButton, className)} onClick={onClick}>
            <CloseSVG />
        </button>
    );
}
