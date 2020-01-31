import React from 'react';
import { Col } from 'reactstrap';
import { useI18n } from 'slim-i18n';
import { Section, Topic, Header, DarkFooter } from 'common/components';
import commonStyles from 'common/styles/common.scss';
import MarkdownContent from 'common/components/markdown-content';
import textTermsOfUse from 'resources/terms/terms-of-use.md';

export default () => {
    const i18n = useI18n();

    return (
        <>
            <Header isWhite={true} />

            <Section className={commonStyles.legalSection} withLeftPadding>
                <Col xl={11}>
                    <Topic titleText={i18n.gettext("Terms & Conditions")}
                           className={commonStyles.markdownMainTitle}
                           titleTag="h1"
                    />

                    <MarkdownContent content={textTermsOfUse} />
                </Col>
            </Section>

            <DarkFooter />
        </>
    );
}
