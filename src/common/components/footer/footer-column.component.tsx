import React, { useState } from 'react';
import classNames from 'classnames';
import { compose } from 'recompose';
import * as CSSTransition from 'react-transition-group/CSSTransition';
import { withWindow, WithWindowProps } from 'common/components';
import styles from './footer-column.scss';

type FooterColumnOuterProps = {
    title: string;
    children?: React.ReactNode;
    style?: any;
    opened?: boolean;
};

type FooterColumnInnerProps = FooterColumnOuterProps & WithWindowProps;

export function FooterColumn(props: FooterColumnInnerProps): JSX.Element {
    const [open, setOpen] = useState(false);
    const { dimensions } = props;
    const { width } = dimensions;
    if (width < 768) {
        return (
            <div
                className={classNames(styles.footerColumn, { [styles.isOpen]: open || props.opened })}
                style={props.style}
                onClick={() => setOpen(!open)}
            >
                <div className={styles.footerColumnTitle}>
                    <h4 className={styles.footerColumnTitleText}>{props.title}</h4>
                    {!props.opened && <div className={styles.footerColumnTriangle} />}
                </div>
                <CSSTransition in={open || props.opened} classNames={'faded'} timeout={300} unmountOnExit>
                    <div className={styles.footerColumnList}>{props.children}</div>
                </CSSTransition>
            </div>
        );
    }

    return (
        <div className={classNames(styles.footerColumn, styles.isOpen)} style={props.style}>
            <div className={styles.footerColumnTitle}>
                <h4 className={styles.footerColumnTitleText}>{props.title}</h4>
            </div>
            <div className={styles.footerColumnList}>{props.children}</div>
        </div>
    );
}

export default compose<FooterColumnInnerProps, FooterColumnOuterProps>(withWindow)(FooterColumn);
