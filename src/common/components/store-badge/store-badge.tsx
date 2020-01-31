import React from 'react';
import cn from 'classnames';
import { Platform } from 'common/utils/install-platforms';

import styles from './store-badge.scss';

type StoreBadgeProps = {
    platform: Platform;
    height?: number;
    isWhite?: boolean;
    className?: string;

    alt?: string;
    title?: string;
};

export function StoreBadge(props: StoreBadgeProps): JSX.Element {
    const { platform, isWhite = false } = props;

    if (!platform) {
        return <div />;
    }

    return (
        <a href={platform.url}
           title={platform.key}
           className={cn(styles.badge, isWhite && styles.isWhite, props.className)}
           target="_blank"
           rel="nofollow"
        >
            {React.createElement(platform.icon, { className: styles.badgeIcon })}
            <span className={styles.badgeText}>Get in {platform.name}</span>
        </a>
    );
}
