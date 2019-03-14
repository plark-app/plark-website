import React from 'react';
import Footer from 'common/components/footer';
import Header from 'common/components/header';
import Section from 'common/components/section';
import Topic from 'common/components/topic';

import MarkdownContent from 'common/components/markdown-content';
import textTermsOfUse from 'resources/terms/terms-of-use.md';

export default class Terms extends React.Component {
    public state: any = {
        activeHeader: false,
        scrollTop: 0,
    };

    public render(): JSX.Element {
        return (
            <>
                <Header isWhite={true} />

                <Section className="legal-section">
                    <Topic titleText="Terms & Conditions" className="markdown-main-title" isIntro={true} />

                    <MarkdownContent content={textTermsOfUse} />
                </Section>

                <Footer />
            </>
        );
    }
}
