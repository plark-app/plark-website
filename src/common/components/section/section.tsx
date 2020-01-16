import React from 'react';
import cn from 'classnames';

import styles from './section.scss';

export type TSectionProps = {
    children: React.ReactNode;
    className?: string | string[];
    contentClassName?: string;
    outerContent?: React.ReactNode;
    withLeftPadding?: boolean;

    isDark?: boolean;
};

export function Section(props: TSectionProps) {
    const { isDark = false } = props;

    const contentClass = cn(
        styles.sectionContent,
        props.contentClassName,
        props.withLeftPadding && styles.iLeftPadding,
    );

    const sectionClass = React.useMemo(() => cn(
        styles.section,
        props.className,
        {
            'dark-section': isDark,
            [styles.isDark]: isDark,
        },
    ), [isDark, props.className]);

    return (
        <section className={sectionClass}>
            {props.outerContent}
            <div className={contentClass}>{props.children}</div>
        </section>
    );
}
