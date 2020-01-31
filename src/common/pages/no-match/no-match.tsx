import React from 'react';
import { Col } from 'reactstrap';
import { compose } from 'recompose';
import { withTranslations, WithTranslationsProps } from 'slim-i18n';
import { RouteComponentProps, withRouter } from 'react-router';
import { UIButton, Section, NavLink, Header, DarkFooter } from 'common/components';
import * as text from './no-match-text';
import styles from './no-match.scss';

type NoMatchProps
    = WithTranslationsProps
    & RouteComponentProps<object, any>;


class NoMatch extends React.Component<NoMatchProps> {
    public UNSAFE_componentWillMount(): void {
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
                <Section className={styles.section} withLeftPadding>
                    <Col>
                        <h1 className={styles.title}>{text.wentWrong(i18n)}</h1>
                        <NavLink to="/">
                            <UIButton color="primary" className={styles.button} isSmall>
                                {text.backToHome(i18n)}
                            </UIButton>
                        </NavLink>
                    </Col>
                </Section>

                <DarkFooter />
            </>
        );
    }
}

export default compose<NoMatchProps, object>(
    withTranslations,
    withRouter,
)(NoMatch);
