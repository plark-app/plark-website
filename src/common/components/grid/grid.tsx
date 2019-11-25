import React from 'react';
import cn from 'classnames';

import styles from './grid.scss';

type CommonElementProps = {
    children?: React.ReactNode;
    className?: string;
};

export type RowProps = CommonElementProps & {
    withGutter?: boolean;
};

export function Row(props: RowProps): JSX.Element {
    const { withGutter = false, className } = props;

    const totalClassName = React.useMemo(() => cn(
        styles.row,
        withGutter && styles.iGutter,
        className,
    ), [withGutter, className]);

    return (
        <div className={totalClassName}>{props.children}</div>
    );
}

export type ColProps = CommonElementProps & {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;

    noGutter?: boolean;
};

export function Col(props: ColProps): JSX.Element {
    const { sm, md, lg, xl, xs, className, noGutter = false } = props;

    const totalClassName = React.useMemo(() => cn(
        styles.col,
        noGutter && styles.iNoGutter,
        xs && styles[`colXs${xs}`],
        sm && styles[`colSm${sm}`],
        md && styles[`colMd${md}`],
        lg && styles[`colLg${lg}`],
        xl && styles[`colXl${xl}`],
        className,
    ), [sm, md, lg, xl, xs, className, noGutter]);

    return (
        <div className={totalClassName}>{props.children}</div>
    );
}
