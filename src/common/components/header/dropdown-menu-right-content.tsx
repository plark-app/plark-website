import React from 'react';
import cn from 'classnames';
import { Col } from 'reactstrap';
import { useI18n } from 'slim-i18n';
import { NavigationColumn } from 'common/components';
import cnmStyles from 'common/styles/common.scss';
import PlarkLogo from 'resources/svgs/plark-logo.component.svg';
import styles from './header.scss';

export const DropdownMenuRightContent = React.memo(function DropdownMenuRightContent(_props: any): JSX.Element {
    const i18n = useI18n();

    return (
        <Col className={styles.dmRight} lg={{ offset: 1, size: 5 }}>
            <div className={styles.dmRightNav}>
                <NavigationColumn title={i18n.gettext('enquiries')}>
                    <a href="mailto:hello@plark.io" className={cn(cnmStyles.mainLink, styles.text)} target="_blank">
                        hello@plark.io
                    </a>
                </NavigationColumn>

                <NavigationColumn title={i18n.gettext('support')}>
                    <a href="mailto:support@plark.io" className={cn(cnmStyles.mainLink, styles.text)} target="_blank">
                        support@plark.io
                    </a>
                </NavigationColumn>

                <NavigationColumn title={i18n.gettext('cyprus')}>
                    <span className={cn(cnmStyles.mainText, styles.text)}>Tseriou, 136, 2nd floor</span>
                    <span className={cn(cnmStyles.mainText, styles.text)}>Strovolos, 2045</span>
                    <span className={cn(cnmStyles.mainText, styles.text)}>Nicosia</span>
                </NavigationColumn>
            </div>

            <div className={styles.dmRightProduct}>
                <PlarkLogo height={38} className={styles.dmRightLogo} />

                <p className={styles.dmRightDescription}>
                    {i18n.gettext('Founded in 2015, Plark is an independent studio specializing in graphic and digital production. Its creative team includes both designers and developers who are based in Ukraine.')}
                </p>

                <NavigationColumn title="download app">
                    <a href="https://dl.plark.io/app/website-appstore"
                       className={cn(styles.dmRightDownload, 'arrow-link')}
                       target="_blank"
                    >{i18n.gettext(' Available on App Store')}</a>
                </NavigationColumn>
            </div>
        </Col>
    );
});
