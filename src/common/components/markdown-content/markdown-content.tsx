import React from 'react';
import './markdown-content.scss';

type MDContentProps = {
    content: string;
};

export default class MarkdownContent extends React.PureComponent<MDContentProps> {
    public render(): JSX.Element {
        return (
            <div className="markdown" dangerouslySetInnerHTML={{ __html: this.props.content }} />
        );
    }
}