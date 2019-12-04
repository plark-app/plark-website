import React from 'react';
import { useI18n } from 'slim-i18n';
import MarkdownContent from 'common/components/markdown-content';
import ExpandBlock from 'common/components/expand-block';
import { Footer, Header, Topic, Section } from 'common/components';

import commonStyles from 'common/styles/common.scss';
import styles from './faq.scss';

const faqContent = require('./faq-content').default;

export default function FaqPage(): JSX.Element {

    const i18n = useI18n();

    return (
        <>
            <Header isWhite={true} />
            <Section className={commonStyles.legalSection} withLeftPadding>
                <Topic
                    titleText={i18n.gettext('Frequently Asked Questions')}
                    className={commonStyles.markdownMainTitle}
                    titleTag="h1"
                />

                <div>
                    {
                        faqContent.map((item: any, index: number) => (
                            <ExpandBlock
                                key={index}
                                title={item.title}
                                content={<MarkdownContent
                                    content={item.content}
                                    needTranspile={true}
                                    className={styles.faqItemContent}
                                />}
                            />
                        ))
                    }
                </div>
            </Section>
            <Footer />
        </>
    );
}
