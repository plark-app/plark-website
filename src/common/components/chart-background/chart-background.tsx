import React from 'react';
import cn from 'classnames';
import ChartSvg from 'resources/svgs/chart.component.svg';
import styles from './chart-background.scss';

export function ChartBackground({ className } : any): JSX.Element {
    return <ChartSvg className={cn(styles.chart, className)} />;
}
