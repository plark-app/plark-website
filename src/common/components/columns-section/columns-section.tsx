import React from 'react';
import { Section, Topic, TwoIPhones } from 'common/components';
import styles from './columns-section.scss';

type FeedbackSectionProps = {
    topic?: {
        title: string;
        description?: string;
        titleTag?: 'h1' | 'h2' | 'h3' | 'h4';
    }

    texts: Array<{
        title: string;
        content: string;
    }>;
};

export default React.memo(function ColumnsSection(props: FeedbackSectionProps): JSX.Element {
    const { topic, texts } = props;

    return (
        <Section className={styles.section}>
            {topic ? <Topic
                isCenter
                className={styles.topic}
                titleText={topic.title}
                titleTag={topic.titleTag}
                descText={topic.description}
                maxWidth={900}
            /> : undefined}

            <TwoIPhones className={styles.phones} />


            <div className={styles.subcopyWrapper}>
                {texts.map((item: any, i: number) => {
                    return (
                        <article key={i} className={styles.subcopy}>
                            <h4 className={styles.subcopyTitle}>{item.title}</h4>
                            {' '}
                            <p className={styles.subcopyContent}>{item.content}</p>
                        </article>
                    )
                })}
            </div>
        </Section>
    );
});
