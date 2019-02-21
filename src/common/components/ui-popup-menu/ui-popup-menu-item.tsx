import React from 'react';
import cn from 'classnames';

import styles from './ui-popup-menu.scss';

// tslint:disable-next-line:no-any
export type UIPopupMenuItemProps = React.HTMLProps<any> & {
    active?: boolean;
    // tslint:disable-next-line:no-any
    component?: React.ComponentClass<any> | string;
};

export const UIPopupMenuItem = (props: UIPopupMenuItemProps): JSX.Element => {
    const {
        children,
        className,
        active,
        component = 'button',
        ...otherProps
    } = props;

    const itemClassName = cn(styles.item, className, {
        [styles.iActive]: active,
    });

    return React.createElement(component, { className: itemClassName, ...otherProps }, children);
};
