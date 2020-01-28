import React from 'react';
import cn from 'classnames';
import cnmStyles from 'common/styles/common.scss';
import styles from './navigation-column.scss';

type NavigationColumnProps = {
    title: string;
    children?: any;
    className?: string;
};

export function NavigationColumn(props: NavigationColumnProps): JSX.Element {
    return (
        <div className={cn(styles.navigationColumn, props.className)}>
            <p className={cn(cnmStyles.title, styles.isColumnTitle)}>{props.title}</p>
            <div>{props.children}</div>
        </div>
    );
}
