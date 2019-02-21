import React from 'react';
import { useI18n } from 'slim-i18n';
import Section from 'common/components/section';

import styles from './footer.scss';

export default () => {
    const i18n = useI18n();

    return (
        <Section contentClassName={styles.footer}>
            <div>{i18n.gettext('Choose your app.')}</div>
        </Section>
    );
};
