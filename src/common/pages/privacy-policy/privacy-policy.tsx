import React from 'react';
import { useI18n } from 'slim-i18n';
import Footer from 'common/components/footer';
import Header from 'common/components/header';
import Section from 'common/components/section';
import Topic from 'common/components/topic';
import commonStyles from 'common/styles/common.scss';
import MarkdownContent from 'common/components/markdown-content';
import textPrivacyPolicy from 'resources/terms/privacy-policy.md';

export default () => {
    const i18n = useI18n();

    return (
        <>
            <Header isWhite={true} />

            <Section className={commonStyles.legalSection}>
                <Topic titleText={i18n.gettext("Privacy Policy")}
                       className={commonStyles.markdownMainTitle}
                       isIntro={true}
                       titleTag="h1"
                />

                <MarkdownContent content={textPrivacyPolicy} />
            </Section>

            <Footer />
        </>
    );
}
