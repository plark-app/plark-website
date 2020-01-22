import React from 'react';
import cn from 'classnames';

import styles from './section.scss';

export type TSectionProps = {
    children: React.ReactNode;
    className?: string | string[];
    contentClassName?: string;
    outerContent?: React.ReactNode;
    flexContent?: boolean;
    withLeftPadding?: boolean;
    isDark?: boolean;
    component?: string | any;
};

export const Section = React.memo(function Section(props: TSectionProps) {
    const { isDark = false, flexContent = false, withLeftPadding = false } = props;

    const contentClass = cn(
        styles.sectionContent,
        props.contentClassName,
        withLeftPadding && styles.iLeftPadding,
        flexContent && styles.isFlex,
    );

    const sectionClass = React.useMemo(() => cn(
        styles.section,
        props.className,
        {
            'dark-section': isDark,
            [styles.isDark]: isDark,
        },
    ), [isDark, props.className]);

    return React.createElement(
        props.component || 'section',
        { className: sectionClass },
        <>
            {props.outerContent}
            <div className={contentClass}>{props.children}</div>
        </>,
    );
});
