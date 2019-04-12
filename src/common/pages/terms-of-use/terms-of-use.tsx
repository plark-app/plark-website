import React from 'react';
import { useI18n } from 'slim-i18n';
import Footer from 'common/components/footer';
import Header from 'common/components/header';
import Section from 'common/components/section';
import Topic from 'common/components/topic';
import commonStyles from 'common/styles/common.scss';
import MarkdownContent from 'common/components/markdown-content';
import textTermsOfUse from 'resources/terms/terms-of-use.md';

export default () => {
    const i18n = useI18n();

    return (
        <>
            <Header isWhite={true} />

            <Section className={commonStyles.legalSection}>
                <Topic titleText={i18n.gettext("Terms & Conditions")}
                       className={commonStyles.markdownMainTitle}
                       isIntro={true}
                       titleTag="h1"
                />

                <MarkdownContent content={textTermsOfUse} />
            </Section>

            <Footer />
        </>
    );
}
