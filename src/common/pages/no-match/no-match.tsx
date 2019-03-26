import React from 'react';
import { compose } from 'recompose';
import { withTranslations, WithTranslationsProps } from 'slim-i18n';
import { RouteComponentProps, withRouter } from 'react-router';
import Section from 'common/components/section';
import UIButton from 'common/components/ui-button';
import NavLink from 'common/components/nav-link';
import Header from 'common/components/header';
import * as text from './no-match-text';
import styles from './no-match.scss';

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
                <Header />
                <Section>
                    <h1 className={styles.title}>{text.wentWrong(i18n)}</h1>
                    <NavLink to="/">
                        <UIButton>{text.backToHome(i18n)}</UIButton>
                    </NavLink>
                </Section>
            </>
        );
    }
}

export default compose<NoMatchProps, object>(
    withTranslations,
    withRouter,
)(NoMatch);
