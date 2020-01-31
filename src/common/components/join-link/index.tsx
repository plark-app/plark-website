import React from 'react';
import cn from 'classnames';
import styles from './join-link.scss';

type JoinLinkProps = {
    children?: React.ReactNode;
    className?: string;
    [key: string]: any;
};

export default React.memo(function JoinLink(props: JoinLinkProps) {
    const { children, className, ...elseProps } = props;

    return (
        <a {...elseProps} className={cn(styles.link, 'arrow-link')}>
            <span>{children}</span>
        </a>
    );
});
