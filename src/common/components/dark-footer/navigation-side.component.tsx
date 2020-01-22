import React from 'react';
import { useI18n } from 'slim-i18n';
import styles from './dark-footer.scss';

export function NavigationSide(): JSX.Element {
    const i18n = useI18n();

    return (
        <div className={styles.navSide}>
            <p className={styles.title}>{i18n.gettext('sitemap')}</p>

            <p className={styles.title}>{i18n.gettext('enquiries')}</p>

            <p className={styles.title}>{i18n.gettext('support')}</p>
        </div>
    );
}
