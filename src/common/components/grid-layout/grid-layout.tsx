import React from 'react';
import cn from 'classnames';

import styles from './grid-layout.scss';

type GridLayoutProps = {
    children: React.ReactNode;
    className?: string | string[];
    contentClassName?: string;
    outerContent?: React.ReactNode;
};


export function GridLayout(props: GridLayoutProps): JSX.Element {
    return (
        <section className={cn(styles.section, props.className)}>
            {props.outerContent}
            <div className={cn(styles.sectionContent, props.contentClassName)}>
                {props.children}
            </div>
        </section>
    );
}
