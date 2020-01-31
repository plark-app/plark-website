import React from 'react';
import cn from 'classnames';
import styles from './caption.scss';

type CaptionProps = {
    title: string;
    description?: string;
    className?: string;
    isWhite?: boolean;
};

export function Caption(props: CaptionProps): JSX.Element {
    return (
        <div className={cn(styles.caption, props.className, props.isWhite && styles.isWhite)}>
            <p className={styles.captionTitle}>{props.title}</p>
            {props.description ? (
                <p className={styles.captionDescription}>{props.description}</p>
            ) : undefined}
        </div>
    );
}
