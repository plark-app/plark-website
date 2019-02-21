import React, { CSSProperties, Ref, RefObject } from 'react';
import cn from 'classnames';

export { UIPopupMenuItem } from './ui-popup-menu-item';
export { WithUIPopupMenu, WithUIPopupMenuProps, WithUIPopupMenuRenderProps } from './with-ui-popup-menu';
import styles from './ui-popup-menu.scss';

export type UIPopupMenuProps = {
    className?: string;
    style?: CSSProperties;
    children?: React.ReactNode;
    placement?: 'top' | 'bottom' | 'right' | 'left';
    ref?: RefObject<HTMLDivElement>;
};

export const UIPopupMenu: React.ComponentType<UIPopupMenuProps> = React.forwardRef(
    ({ className, style, children, ...placementOption }: UIPopupMenuProps,
     ref?: Ref<HTMLDivElement>,
    ) => (
        <div className={cn(styles.uiPopupMenu, getClassName(placementOption), className)}
             style={style}
             ref={ref}
        >
            <div className={styles.uiPopupMenuBody}>{children}</div>
        </div>
    ),
);

const getClassName = ({ placement = 'top' }: UIPopupMenuProps) => {
    const trianglePos = {
        top: styles.iFromTop,
        bottom: styles.iFromBottom,
        left: styles.iFromLeft,
        right: styles.iFromRigt,
    }[placement];

    return cn(trianglePos);
};
