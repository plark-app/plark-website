import React from 'react';
import cn from 'classnames';
import { Platform } from 'common/utils/install-platforms';

import styles from './store-badge.scss';

export { styles };

type StoreBadgeProps = {
    platform: Platform;
    darkBg?: boolean;
};

export const BadgeContainer = ({ children, className, inactive = false }: any) => (
    <div className={cn('badge-container', inactive && '-inactive', className)}>
        {children}
    </div>
);

export default class StoreBadge extends React.PureComponent<StoreBadgeProps> {
    public render(): JSX.Element {
        const { platform, darkBg = false } = this.props;
        const badgeClass = cn('badge', darkBg && '-dark-bg');

        return (
            <a href={platform.url} title={platform.key} className={badgeClass} target="_blank">
                <img src={platform.badge} height={40} className="badge__image" />
            </a>
        );
    }
}
