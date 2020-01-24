import React from 'react';
import cn from 'classnames';
import { Col } from 'reactstrap';
import { useI18n } from 'slim-i18n';
import PlarkLogo from 'resources/svgs/plark-logo.component.svg';
import styles from './dark-footer.scss';
import { NavigationColumn } from './navigation-column';

export function ProductSide(): JSX.Element {
    const i18n = useI18n();

    return (
        <Col className={styles.productSide} lg={{ size: 3, offset: 1 }}>
            <PlarkLogo height={38} className={styles.productSideLogo} />

            <p className={styles.productSideDescription}>
                {i18n.gettext('Founded in 2015, Plark is an independent studio specializing in graphic and digital production. Its creative team includes both designers and developers who are based in Ukraine.')}
            </p>

            <NavigationColumn title="download app" className={styles.productSideDownload}>
                <a href="https://dl.plark.io/app/website-appstore"
                   className={cn(styles.mainLink, 'arrow-link')}
                   target="_blank"
                >{i18n.gettext('plark for iphone')}</a>
            </NavigationColumn>
        </Col>
    );
}
