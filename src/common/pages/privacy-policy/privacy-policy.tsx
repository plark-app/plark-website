import React from 'react';
import { useI18n } from 'slim-i18n';
import { Footer, Header, Section, Topic } from 'common/components';
import MarkdownContent from 'common/components/markdown-content';
import textPrivacyPolicy from 'resources/terms/privacy-policy.md';
import commonStyles from 'common/styles/common.scss';

export default () => {
    const i18n = useI18n();

    return (
        <>
            <Header isWhite={true} />

            <Section className={commonStyles.legalSection} withLeftPadding>
                <Topic titleText={i18n.gettext("Privacy Policy")}
                       className={commonStyles.markdownMainTitle}
                       titleTag="h1"
                />

                <MarkdownContent content={textPrivacyPolicy} />
            </Section>

            <Footer />
        </>
    );
}
