import React from 'react';
import { Col } from 'reactstrap';
import { useI18n } from 'slim-i18n';
import MarkdownContent from 'common/components/markdown-content';
import ExpandBlock from 'common/components/expand-block';
import { Header, Topic, Section, DarkFooter } from 'common/components';

import commonStyles from 'common/styles/common.scss';
import styles from './faq.scss';

const faqContent = require('./faq-content').default;

export default function FaqPage(): JSX.Element {
    const i18n = useI18n();

    return (
        <>
            <Header isWhite={true} />
            <Section className={commonStyles.legalSection} withLeftPadding>
                <Col lg={11}>
                    <Topic
                        titleText={i18n.gettext('Frequently Asked Questions')}
                        className={commonStyles.markdownMainTitle}
                        titleTag="h1"
                    />

                    <div style={{ marginTop: '24px' }}>
                        {faqContent.map((item: any, index: number) => (
                            <ExpandBlock
                                key={index}
                                title={item.title}
                                content={<MarkdownContent
                                    content={item.content}
                                    needTranspile={true}
                                    className={styles.faqItemContent}
                                />}
                            />
                        ))}
                    </div>
                </Col>
            </Section>

            <DarkFooter />
        </>
    );
}
