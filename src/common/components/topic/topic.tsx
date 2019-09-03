import React from 'react';
import cn from 'classnames';

import styles from './topic.scss';

export type TTopicProps = {
    className?: string;
    titleClassName?: string;
    titleText: React.ReactNode;
    titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
    descClassName?: string;
    descText?: React.ReactNode;
    isWhite?: boolean;
    isCenter?: boolean;
    isSmall?: boolean;
    maxWidth?: number;
};

export default function Topic(props: TTopicProps): JSX.Element {
    const {
        titleTag = 'h2',
        isWhite = false,
        isCenter = false,
        isSmall = false,
        maxWidth,
    } = props;

    const titleProps = {
        className: cn(styles.topicTitle, props.titleClassName),
    };

    const topicClassName = cn(styles.topic, props.className, {
        [styles.iWhite]: isWhite,
        [styles.iCenter]: isCenter,
        [styles.iSmall]: isSmall,
    });

    const topicStyle: React.CSSProperties = {};
    if (maxWidth) {
        topicStyle.maxWidth = maxWidth;
    }

    return (
        <div className={topicClassName} style={topicStyle}>
            {React.createElement(titleTag, titleProps, props.titleText)}
            {props.descText && <p className={cn(styles.topicDesc, props.descClassName)}>{props.descText}</p>}
        </div>
    );
}
