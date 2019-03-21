import React from 'react';
import Section from 'common/components/section';
import ChangelyLogo from './changelly-logo.component.svg';
import BitfinexLogo from './bitfinex-logo.component.svg';
import styles from '../home.scss';

export default () => (
    <Section className={styles.partners} contentClassName={styles.partnersContent}>
        <ChangelyLogo height={50} className={styles.partnersLogo} />
        <BitfinexLogo height={35} className={styles.partnersLogo} />
    </Section>
);
