import React from 'react';
import cn from 'classnames';
import styles from './expand-block.scss';

type ExpandBlockProps = {
    title: string;
    content: string | React.ComponentClass | React.FunctionComponent | any;
};

export default function ExpandBlock(props: ExpandBlockProps): JSX.Element {
    const [opened, setOpened] = React.useState<boolean>(false);

    return (
        <article className={cn(styles.faq, opened && styles.isActive)}>
            <div className={styles.faqHead} onClick={() => setOpened(opened => !opened)}>
                <span className={styles.faqHeadTitle}>{props.title}</span>
            </div>

            <div className={styles.faqContent}>{props.content}</div>
        </article>
    );
}
