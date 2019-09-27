import React from 'react';
import { Section, Topic, TwoIPhones, Subcopy } from 'common/components';
import styles from './columns-section.scss';

type FeedbackSectionProps = {
    topic?: {
        title: string;
        description?: string;
        titleTag?: 'h1' | 'h2' | 'h3' | 'h4';
    };

    texts: Array<{
        title?: string;
        titleTag?: 'h1' | 'h2' | 'h3' | 'h4';
        content: string;
    }>;
};

export default React.memo(function ColumnsSection(props: FeedbackSectionProps): JSX.Element {
    const { topic, texts } = props;

    return (
        <>
            <Section className={styles.section}>
                {topic ? (
                    <Topic
                        isCenter
                        className={styles.topic}
                        titleText={topic.title}
                        titleTag={topic.titleTag}
                        descText={topic.description}
                        maxWidth={900}
                    />
                ) : (
                    undefined
                )}

                <TwoIPhones className={styles.phones} />

                <Subcopy texts={texts} />
            </Section>
        </>
    );
});
