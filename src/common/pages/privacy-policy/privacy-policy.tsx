import React from 'react';
import Footer from 'common/components/footer';
import Header from 'common/components/header';
import Section from 'common/components/section';
import Topic from 'common/components/topic';

import MarkdownContent from 'common/components/markdown-content';
import textPrivacyPolicy from 'resources/terms/privacy-policy.md';

export default class PrivacyPolicy extends React.Component {
    public state: any = {
        activeHeader: false,
        scrollTop: 0,
    };

    public render(): JSX.Element {
        return (
            <>
                <Header isWhite={true} />

                <Section className="legal-section">
                    <Topic titleText="Privacy Policy" className="markdown-main-title" isIntro={true} />

                    <MarkdownContent content={textPrivacyPolicy} />
                </Section>

                <Footer />
            </>
        );
    }
}
