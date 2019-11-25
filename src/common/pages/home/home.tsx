import React from 'react';
import {
    Footer,
    Row,
    Col,
} from 'common/components';

import styles from './home.scss';

export default function Home(): JSX.Element {
    return (
        <>
            <Row className={styles.header}>
                <Col sm={1} />
                <Col md={6} className={styles.col}>SM 6</Col>
                <Col md={5} className={styles.col}>SM 5</Col>
            </Row>

            <Footer />
        </>
    );
}
