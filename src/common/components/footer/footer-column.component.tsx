import React from 'react';
import styles from './footer.scss';

type FooterColumnProps = {
    title: string;
    children?: React.ReactNode;
    style?: any;
};

export default React.memo(function FooterColumn(props: FooterColumnProps): JSX.Element {
    return (
        <nav className={styles.navColumn} style={props.style}>
            <h4 className={styles.navColumnTitle}>{props.title}</h4>

            {props.children}
        </nav>
    );
});
