import React from 'react';
import cn from 'classnames';
import { Row } from 'reactstrap';
import styles from './section.scss';

export type TSectionProps = {
    id?: string;
    children: React.ReactNode;
    className?: string | string[];
    contentClassName?: string;
    outerContent?: React.ReactNode;
    flexContent?: boolean;
    noGutters?: boolean;
    withLeftPadding?: boolean;
    isDark?: boolean;
    component?: string | any;

    proxyRef?: React.Ref<any>;
};

export const Section = React.memo(function Section(props: TSectionProps) {
    const { isDark = false, flexContent = false, withLeftPadding = false, noGutters = false } = props;

    const contentClass = cn(
        styles.sectionContent,
    );

    const rowClass = cn(
        styles.sectionRow,
        props.contentClassName,
        withLeftPadding && 'free-left-space',
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

    const componentProps = {
        id: props.id,
        ref: props.proxyRef,
        className: sectionClass,
    };

    return React.createElement(
        props.component || 'section',
        componentProps,
        <>
            {props.outerContent}
            <div className={contentClass}>
                <Row className={rowClass} noGutters={noGutters}>{props.children}</Row>
            </div>
        </>,
    );
});
