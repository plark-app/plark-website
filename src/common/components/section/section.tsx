import React from 'react';
import cn from 'classnames';

import styles from './section.scss';

export type TSectionProps = {
    children: React.ReactNode;
    className?: string | string[];
    contentClassName?: string;
    outerContent?: React.ReactNode;
};

export default (props: TSectionProps) => (
    <section className={cn(styles.section, props.className)}>
        {props.outerContent}
        <div className={cn(styles.sectionContent, props.contentClassName)}>
            {props.children}
        </div>
    </section>
);
