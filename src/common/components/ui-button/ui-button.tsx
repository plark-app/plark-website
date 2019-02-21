import React from 'react';
import cn from 'classnames';

import styles from './ui-button.scss';

export type UIButtonProps = {
    children: React.ReactNode;
    type?: 'button' | 'submit';
    mode?: 'contained' | 'outlined';
    color?: 'default' | 'primary';
    className?: string;
    disabled?: boolean;
    title?: string;
    onClick?: () => void;
    id?: string;
    // tslint:disable-next-line:no-any
    component?: React.ComponentType<any> | string;
    tabIndex?: number;
    autoFocus?: boolean;
};

export default (props: UIButtonProps) => {
    const {
        component = 'button',
        className,
        disabled,
        onClick,
        title,
        children,
        color,
        mode,
        id,
        ...otherOptions
    } = props;

    return React.createElement(
        component,
        {
            className: cn(styles.uiButton, getClassNames({ mode, color }), className),
            disabled: disabled,
            title: title,
            onClick: onClick,
            id: id,
            ...otherOptions,
        },
        children,
    );
};

const getClassNames = ({ mode = 'contained', color = 'default' }: Partial<UIButtonProps>) => {
    const typeClassName = {
        contained: styles.iContained,
        outlined: styles.iOutlined,
    }[mode];

    const colorClassName = {
        default: styles.iDefault,
        primary: styles.iPrimary,
    }[color];

    return cn(typeClassName, colorClassName);
};
