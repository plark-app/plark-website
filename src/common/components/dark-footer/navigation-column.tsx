import React from 'react';
import cn from 'classnames';
import styles from './dark-footer.scss';

type NavigationColumnProps = {
    title: string;
    children?: any;
    className?: string;
};

export function NavigationColumn(props: NavigationColumnProps): JSX.Element {
    return (
        <div className={cn(styles.navigationColumn, props.className)}>
            <p className={cn(styles.title, styles.isColumnTitle)}>{props.title}</p>
            <div>{props.children}</div>
        </div>
    );
}
