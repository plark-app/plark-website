import React from 'react';
import cn from 'classnames';
import { Col } from 'reactstrap';
import { useI18n } from 'slim-i18n';
import { NavLink, DownloadCell, NavigationColumn } from 'common/components';
import cnmStyles from 'common/styles/common.scss';
import PlarkLogo from 'resources/svgs/plark-logo.component.svg';

import styles from './dark-footer.scss';

export function ProductSide(): JSX.Element {
    const i18n = useI18n();

    return (
        <Col className={styles.productSide} lg={{ size: 3, offset: 1 }} sm={4}>
            <div className={styles.footerStart}>
                <PlarkLogo height={38} className={styles.productSideLogo} />

                <p className={styles.productSideDescription}>
                    {i18n.gettext('Wow, you’ve scrolled right to the bottom. Here, get some 🍪. Hope you like our app and see you soon on blockchain!')}
                </p>

                <NavigationColumn title="download app" className={styles.download}>
                    <a href="https://dl.plark.io/app/website-appstore"
                       className={cn(cnmStyles.mainLink, 'arrow-link')}
                       target="_blank"
                    >{i18n.gettext('plark for iphone')}</a>
                </NavigationColumn>

            </div>

            <div className={cn(styles.footerEnd, styles.bottomRight)}>
                <NavLink to="/privacy" className={cnmStyles.secondaryLink}>
                    {i18n.gettext('Privacy')}
                </NavLink>

                <NavLink to="/terms" className={cnmStyles.secondaryLink}>
                    {i18n.gettext('Terms')}
                </NavLink>

                <NavLink to="/sitemap" className={cnmStyles.secondaryLink}>
                    {i18n.gettext('Sitemap')}
                </NavLink>
            </div>

            <DownloadCell className={styles.downloadButton} isWhite />
        </Col>
    );
}
