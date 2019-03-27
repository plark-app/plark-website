import React from 'react';
import cn from 'classnames';
import { Platform } from 'common/utils/install-platforms';

import styles from './store-badge.scss';

type StoreBadgeProps = {
    platform: Platform;
    height?: number;
    darkBg?: boolean;
};

export const BadgeContainer = ({ children, className, inactive = false, hideOnMobile = true }: any) => {
    const elementClass = cn(
        styles.badgeContainer,
        inactive && styles.isInactive,
        hideOnMobile && styles.isHideMobile,
        className,
    );

    return <div className={elementClass}>{children}</div>;
};

export default class StoreBadge extends React.PureComponent<StoreBadgeProps> {
    public render(): JSX.Element {
        const { platform, darkBg = false, height = 40 } = this.props;

        if (!platform) {
            return <div />;
        }

        const badgeClass = cn(styles.badge, darkBg && styles.isDarkBg);

        return (
            <a href={platform.url} title={platform.key} className={badgeClass} target="_blank">
                <img src={platform.badge}
                     height={height}
                     className={styles.badgeImage}
                     alt={platform.key}
                     title={platform.key}
                />
            </a>
        );
    }
}
