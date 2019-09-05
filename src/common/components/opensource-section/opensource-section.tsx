import React from 'react';
import { Section, Topic } from 'common/components';
import GithubSvg from 'resources/svgs/github.component.svg';
import styles from './opensource.scss';

type OpenSourceSectionProps = {
    title: string;
    description?: string;
};

export default function OpenSourceSection(props: OpenSourceSectionProps) {
    return (
        <Section>

            <Topic
                isSmall
                isCenter
                titleText={props.title}
                descText={props.description}
                maxWidth={610}
            />

            <div className={styles.github}>
                <a href="https://github.com/plark-app" target="_blank" className={styles.githubLink}>
                    <GithubSvg className={styles.githubIcon} />
                </a>
            </div>

        </Section>
    );
}