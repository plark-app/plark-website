import React from 'react';
import { useI18n } from 'slim-i18n';
import Footer from 'common/components/footer';
import Header from 'common/components/header';
import MarkdownContent from 'common/components/markdown-content';
import ExpandBlock from 'common/components/expand-block';
import Topic from 'common/components/topic';
import Section from 'common/components/section';
import commonStyles from 'common/styles/common.scss';
import styles from './faq.scss';

import * as text from './faq.text';

export default () => {

    const i18n = useI18n();

    return (
        <>
            <Header isWhite={true} />
            <Section className={commonStyles.legalSection}>
                <Topic titleText={i18n.gettext("Frequently Asked Questions")}
                       className={commonStyles.markdownMainTitle}
                       isIntro={true}
                       titleTag="h1"
                />

                <div>
                    {
                        text.faqList.map((item: any, index: number) => (
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
