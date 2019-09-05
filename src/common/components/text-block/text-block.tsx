import React from 'react';
import cn from 'classnames';
import style from './text-block.scss';

type TextBlockProps = {
    children?: React.ReactNode;
    className?: string;
};

export default function TextBlock(props: TextBlockProps): JSX.Element {
    return (
        <p className={cn(style.text, props.className)}>
            {props.children}
        </p>
    )
}
