import React from 'react';
import cn from 'classnames';
import { Col } from 'reactstrap';
import { useI18n } from 'slim-i18n';
import { NavLink, DownloadCell } from 'common/components';
import PlarkLogo from 'resources/svgs/plark-logo.component.svg';
import { NavigationColumn } from './navigation-column';
import styles from './dark-footer.scss';

export function ProductSide(): JSX.Element {
    const i18n = useI18n();

    return (
        <Col className={styles.productSide} lg={{ size: 3, offset: 1 }} sm={4}>
            <div className={styles.footerStart}>
                <PlarkLogo height={38} className={styles.productSideLogo} />

                <p className={styles.productSideDescription}>
                    {i18n.gettext('Founded in 2015, Plark is an independent studio specializing in graphic and digital production. Its creative team includes both designers and developers who are based in Ukraine.')}
                </p>

                <NavigationColumn title="download app" className={styles.download}>
                    <a href="https://dl.plark.io/app/website-appstore"
                       className={cn(styles.mainLink, 'arrow-link')}
                       target="_blank"
                    >{i18n.gettext('plark for iphone')}</a>
                </NavigationColumn>

            </div>

            <div className={cn(styles.footerEnd, styles.bottomRight)}>
                <NavLink to="/privacy" className={styles.secondaryLink}>
                    {i18n.gettext('Privacy')}
                </NavLink>

                <NavLink to="/terms" className={styles.secondaryLink}>
                    {i18n.gettext('Terms')}
                </NavLink>

                <NavLink to="/sitemap" className={styles.secondaryLink}>
                    {i18n.gettext('Sitemap')}
                </NavLink>
            </div>

            <DownloadCell className={styles.downloadButton} isWhite />
        </Col>
    );
}
