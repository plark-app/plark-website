import React from 'react';
import { compose } from 'recompose';
import { withTranslations, WithTranslationsProps } from 'slim-i18n';
import { RouteComponentProps, withRouter } from 'react-router';
import Section from 'common/components/section';
import * as text from './no-match-text';
import styles from './no-match.scss';
import { NavLink } from 'react-router-dom';

type NoMatchProps = WithTranslationsProps & RouteComponentProps<object, any>;

class NoMatch extends React.Component<NoMatchProps> {
    public componentWillMount(): void {
        const { staticContext } = this.props;
        if (staticContext) {
            staticContext.statusCode = 404;
        }
    }

    public render(): JSX.Element {
        const { i18n } = this.props;
        return (
            <>
                <Section>
                    <h1 className={styles.title}>{text.wentWrong(i18n)}</h1>
                    <NavLink to="/">{text.backToHome(i18n)}</NavLink>
                </Section>
            </>
        );
    }
}

export default compose<NoMatchProps, object>(
    withTranslations,
    withRouter,
)(NoMatch);
