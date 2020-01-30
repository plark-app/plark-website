import React from 'react';
import cn from 'classnames';
import { useI18n } from 'slim-i18n';
import PlatformList from 'common/utils/install-platforms';
import styles from './appstore-link.scss';

export type AppStoreLinkProps = {
    text?: string;
    className?: string;
};

export const AppStoreLink = React.memo(function AppStoreLink(props: AppStoreLinkProps): JSX.Element {
    const { text, className } = props;

    const i18n = useI18n();
    const appstore = PlatformList.apple;

    return <a href={appstore.url}
              className={cn(styles.appstore, className, 'arrow-link')}
              rel="nofollow"
              target="_blank"
    >{text ? text : `` + i18n.gettext('Available on the App Store')}</a>;
});
